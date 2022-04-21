import { React, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

function TextEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  return (
    <div>
      <h1>Text editor </h1>

      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={-1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => { console.log(newContent); }}
      />
    </div>
  );
}

export default TextEditor;
