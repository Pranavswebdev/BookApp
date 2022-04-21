import React, { useRef, useState, useEffect } from 'react';
import { html2json, json2html } from 'html2json';

import JoditEditor from 'jodit-react';

function CreatePage() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [savedcontent, newsetContent] = useState('');

  useEffect(() => {
    const json = html2json(content);
    console.log(json);

    const html = json2html(json);
    console.log(html);

    localStorage.setItem('htmlcontent', html);
    const newhtml = localStorage.getItem('htmlcontent');
    newsetContent(newhtml);
  }, [content]);

  return (
    <div>

      <div className="editor" />

      <JoditEditor
        ref={editor}
        value={savedcontent}
        tabIndex={-1} // tabIndex of textarea
        onChange={(newContent) => setContent(newContent)}
        onBlur={(newContent) => { console.log(newContent); }}
      />
    </div>
  );
}

export default CreatePage;
