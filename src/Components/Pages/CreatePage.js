import React, { useRef, useState, useEffect } from 'react';
import { html2json, json2html } from 'html2json';
import '../../App.css';
import JoditEditor from 'jodit-react';
import Button from '@mui/material/Button';
import uuid from 'react-uuid';

function CreatePage() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [savedcontent, newsetContent] = useState('');

  useEffect(() => {
    const json = html2json(content);
    console.log(json);

    const html = json2html(json);
    console.log(html);

    localStorage.setItem('htmlcontent', html);
    const newhtml = localStorage.getItem('htmlcontent');
    newsetContent(newhtml);
  }, []);

  const saveHandler = () => {
    console.log(title);

    var pageContent = {

      id: uuid(),
      title,
      content,

    };

    var contentArr = JSON.parse(localStorage.getItem('pageContent' || '[]'));
    if (contentArr) {
      contentArr.push(pageContent);

      localStorage.setItem('pageContent', JSON.stringify(contentArr));
    } else {
      contentArr = [];
      contentArr.push(pageContent);
      pageContent = {

        id: uuid(),
        title,
        content,

      };

      localStorage.setItem('pageContent', JSON.stringify(contentArr));
    }
  };
  const backHome = () => {
    window.location.pathname = '/';
  };

  return (
    <div className="createpage">

      <div className="editor">
        <h3>Page Title</h3>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Page Title"
          style={{
            border: '0.5px solid grey',
            marginBottom: '1rem',
            width: '80.5rem',
            height: '2rem',
            borderRadius: '5px',

          }}
        />

        <JoditEditor
          ref={editor}
          value={savedcontent}
          tabIndex={-1} // tabIndex of textarea
          onChange={(newContent) => setContent(newContent)}
          onBlur={(newContent) => { console.log(newContent); }}
        />
        <Button
          onClick={backHome}
          variant="contained"
          style={{
            padding: '0.5rem', margin: '0.5rem', float: 'right', textTransform: 'none',
          }}
          color="primary"
        >
          Back to Book
        </Button>

        <Button
          onClick={saveHandler}
          variant="contained"
          style={{
            padding: '0.5rem', margin: '0.5rem', float: 'right', textTransform: 'none',
          }}
          color="secondary"
        >
          Save Page
        </Button>

      </div>

    </div>
  );
}

export default CreatePage;
