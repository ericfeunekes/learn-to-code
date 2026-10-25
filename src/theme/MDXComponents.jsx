import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

function Table(props) {
  return (
    <div
      className="table-scroll"
      role="region"
      aria-label="Scrollable table"
      tabIndex={0}
    >
      <table {...props} />
    </div>
  );
}

export default { ...MDXComponents, table: Table };
