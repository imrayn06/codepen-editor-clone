import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

const CodeEditor = ({ language, code, onCodeChange }) => {
  const extensions = {
    html: html(),
    css: css(),
    javascript: javascript(),
  };

  return (
    <CodeMirror
      value={code}
      extensions={[extensions[language]]}
      onChange={(value) => onCodeChange(value)}
      height="100%"
      theme="light"
      options={{
        lineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default CodeEditor;
