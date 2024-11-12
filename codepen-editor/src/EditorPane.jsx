import React, { useState } from 'react';
import CodeEditor from './CodeEditor';

const EditorPane = ({ htmlCode, setHtmlCode, cssCode, setCssCode, jsCode, setJsCode }) => {
  const [activeTab, setActiveTab] = useState('html');

  const renderEditor = () => {
    if (activeTab === 'html') return <CodeEditor language="html" code={htmlCode} onCodeChange={setHtmlCode} />;
    if (activeTab === 'css') return <CodeEditor language="css" code={cssCode} onCodeChange={setCssCode} />;
    if (activeTab === 'javascript') return <CodeEditor language="javascript" code={jsCode} onCodeChange={setJsCode} />;
  };

  return (
    <div className="editor-pane">
      <div className="tabs">
        <button onClick={() => setActiveTab('html')}>HTML</button>
        <button onClick={() => setActiveTab('css')}>CSS</button>
        <button onClick={() => setActiveTab('javascript')}>JavaScript</button>
      </div>
      <div className="editor">{renderEditor()}</div>
    </div>
  );
};

export default EditorPane;
