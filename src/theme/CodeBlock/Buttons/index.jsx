/**
 * Portions adapted from Docusaurus CodeBlock components.
 * Copyright (c) Facebook, Inc. and its affiliates.
 * Licensed under MIT; see THIRD_PARTY_NOTICES.md.
 */

import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import CopyButton from '@theme/CodeBlock/Buttons/CopyButton';
import WordWrapButton from '@theme/CodeBlock/Buttons/WordWrapButton';

export default function CodeBlockButtons({ className = '' }) {
  return (
    <BrowserOnly>
      {() => (
        <div className={`course-code-actions ${className}`}>
          <WordWrapButton />
          <CopyButton />
        </div>
      )}
    </BrowserOnly>
  );
}
