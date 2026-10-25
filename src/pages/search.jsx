import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Search() {
  const [query, setQuery] = useState('');
  const [pages, setPages] = useState(null);
  const [failed, setFailed] = useState(false);
  const indexUrl = useBaseUrl('/search-index.json');
  useEffect(() => {
    const controller = new AbortController();
    fetch(indexUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Search index unavailable');
        return response.json();
      })
      .then(setPages)
      .catch((error) => {
        if (error.name !== 'AbortError') setFailed(true);
      });
    return () => controller.abort();
  }, [indexUrl]);
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const matches = (pages || []).filter((page) =>
    words.every((word) =>
      `${page.title} ${page.description} ${page.text}`
        .toLowerCase()
        .includes(word),
    ),
  );

  return (
    <Layout title="Search" description="Search the pages of Learn to Code.">
      <main className="search-page">
        <h1>Find an idea.</h1>
        <p>Search the pages on this site. Everything stays in your browser.</p>
        <label htmlFor="site-search">Search words</label>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “Markdown”"
          aria-describedby="search-status"
        />
        <p id="search-status" role="status">
          {failed
            ? 'Search could not load. Try reloading the page.'
            : !pages
              ? 'Loading search…'
              : words.length
                ? `${matches.length} matching ${matches.length === 1 ? 'page' : 'pages'}.`
                : 'Enter a word or phrase to begin.'}
        </p>
        {words.length > 0 && (
          <ul className="search-results">
            {matches.map((page) => (
              <li key={page.route}>
                <h2>
                  <Link to={page.route}>{page.title}</Link>
                </h2>
                <p>{page.description}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </Layout>
  );
}
