import React, { useState, useEffect } from 'react';
import EditorPane from './EditorPane';
import PreviewPane from './PreviewPane';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Apply the theme class to the root element
  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  const [htmlCode, setHtmlCode] = useState('<h1>Hello, World!</h1>');
  const [cssCode, setCssCode] = useState('body { font-family: Arial; color: #333; }');
  const [jsCode, setJsCode] = useState("console.log('Hello from JavaScript');");

  return (
    <div className="app">
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
      <div className="editor-section">
        <EditorPane
          htmlCode={htmlCode}
          setHtmlCode={setHtmlCode}
          cssCode={cssCode}
          setCssCode={setCssCode}
          jsCode={jsCode}
          setJsCode={setJsCode}
        />
      </div>
      <div className="preview-section">
        <PreviewPane htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
      </div>
    </div>
  );
};

export default App;
