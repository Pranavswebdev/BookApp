import React, { useState, useEffect } from 'react';
import '../../App.css';

import { FaEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function BookContent() {
  const [reactHtml, setReactHtml] = useState('');
  useEffect(() => {
    const htmlInput = localStorage.getItem('htmlcontent');

    setReactHtml(htmlInput);
  }, []);

  const { content } = useSelector((state) => state.content);
  return (
    <div className="BookContent">
      <div className="PageHeading">

        <h3>
          {' '}
          {content.title}
          {' '}
        </h3>

        <FaEdit onClick={() => { window.location.pathname = '/edit'; }} style={{ padding: '0.5rem', marginLeft: '1rem', cursor: 'pointer' }} size="1rem" />

      </div>

      <div dangerouslySetInnerHTML={{ __html: reactHtml }} />

    </div>
  );
}

export default BookContent;
