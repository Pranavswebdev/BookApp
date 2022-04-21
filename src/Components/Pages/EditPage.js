import React, { useRef, useState, useEffect } from 'react';

import '../../App.css';
import JoditEditor from 'jodit-react';
import Button from '@mui/material/Button';

import { useParams } from 'react-router';

function EditPage() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  //   const [currentData,setCurrentData] = useState('');
  const pageId = useParams();
  console.log(pageId.id);
  useEffect(() => {
    const pageData = JSON.parse(localStorage.getItem('pageContent'));
    console.log(pageData);
    const currentData = pageData.find((data) => (data?.id === pageId.id));
    console.log(currentData);
    setContent(currentData?.content);
    setTitle(currentData?.title);
  }, []);

  const saveHandler = () => {
    console.log(title);

    var pageContent = {

      id: pageId.id,
      title,
      content,

    };

    var contentArr = JSON.parse(localStorage.getItem('pageContent' || '[]'));
    console.log(contentArr);
    var index = contentArr.findIndex((data) => data.id === pageId.id);
    console.log(index);
    contentArr[index] = pageContent;
    localStorage.setItem('pageContent', JSON.stringify(contentArr));
  };
  const backHome = () => {
    window.location.pathname = '/';
  };

  return (
    <div className="createpage">

      <div className="editor">
        <h3>Page Title</h3>
        <input
          value={title}
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
          value={content}
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

export default EditPage;
