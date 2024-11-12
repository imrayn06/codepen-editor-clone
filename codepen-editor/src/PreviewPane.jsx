import React, { useEffect, useRef } from 'react';

const PreviewPane = ({ htmlCode, cssCode, jsCode }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const document = iframeRef.current.contentDocument;
    const documentContent = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    document.open();
    document.write(documentContent);
    document.close();
  }, [htmlCode, cssCode, jsCode]);

  return <iframe ref={iframeRef} title="Live Preview" />;
};

export default PreviewPane;
