/**
 * Portions adapted from Docusaurus CodeBlock components.
 * Copyright (c) Facebook, Inc. and its affiliates.
 * Licensed under MIT; see THIRD_PARTY_NOTICES.md.
 */

import React, { useEffect, useRef, useState } from 'react';
import { useCodeBlockContext } from '@docusaurus/theme-common/internal';
import Button from '@theme/CodeBlock/Buttons/Button';

export default function CopyButton({ className }) {
  const {
    metadata: { code },
  } = useCodeBlockContext();
  const [status, setStatus] = useState('');
  const active = useRef(false);
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  async function copy() {
    if (active.current) return;
    active.current = true;
    setStatus('Copying…');
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(code);
      if (mounted.current) setStatus('Copied.');
    } catch {
      if (mounted.current)
        setStatus('Copy failed. Select the text and copy it, or try again.');
    } finally {
      active.current = false;
    }
  }

  return (
    <>
      <Button
        className={className}
        aria-label="Copy text to clipboard"
        title="Copy text"
        onClick={copy}
      >
        Copy
      </Button>
      <span
        className="copy-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {status}
      </span>
    </>
  );
}
