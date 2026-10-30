/**
 * Adapted from Docusaurus CodeBlock/Content/String.
 * Copyright (c) Facebook, Inc. and its affiliates.
 * Licensed under MIT; see THIRD_PARTY_NOTICES.md.
 */

import React, { useEffect, useRef, useState } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import {
  CodeBlockContextProvider,
  createCodeBlockMetadata,
} from '@docusaurus/theme-common/internal';
import CodeBlockLayout from '@theme/CodeBlock/Layout';

function useMountedCodeWordWrap(code) {
  const codeBlockRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isCodeScrollable, setIsCodeScrollable] = useState(false);

  useEffect(() => {
    const pre = codeBlockRef.current;
    const element = pre?.querySelector('code');
    if (!element) return undefined;

    element.style.whiteSpace = isEnabled ? 'pre-wrap' : '';
    element.style.overflowWrap = isEnabled ? 'anywhere' : '';
    let active = true;
    const update = () => {
      // A resize can arrive after React clears the ref and before passive
      // effect cleanup removes the old listener. Do not inspect that block.
      if (!active || codeBlockRef.current !== pre) return;
      setIsCodeScrollable(pre.scrollWidth > pre.clientWidth || isEnabled);
    };
    update();
    window.addEventListener('resize', update, { passive: true });

    const tab = pre.closest('[role="tabpanel"]');
    const observer = new MutationObserver(update);
    if (tab)
      observer.observe(tab, { attributes: true, attributeFilter: ['hidden'] });

    return () => {
      active = false;
      window.removeEventListener('resize', update);
      observer.disconnect();
    };
  }, [code, isEnabled]);

  return {
    codeBlockRef,
    isEnabled,
    isCodeScrollable,
    toggle: () => setIsEnabled((value) => !value),
  };
}

export default function CodeBlockString(props) {
  const { prism } = useThemeConfig();
  const metadata = createCodeBlockMetadata({
    code: props.children,
    className: props.className,
    metastring: props.metastring,
    magicComments: prism.magicComments,
    defaultLanguage: prism.defaultLanguage,
    language: props.language,
    title: props.title,
    showLineNumbers: props.showLineNumbers,
  });
  const wordWrap = useMountedCodeWordWrap(metadata.code);
  return (
    <CodeBlockContextProvider metadata={metadata} wordWrap={wordWrap}>
      <CodeBlockLayout />
    </CodeBlockContextProvider>
  );
}
