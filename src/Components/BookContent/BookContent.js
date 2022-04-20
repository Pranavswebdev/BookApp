import React from 'react';
import '../../App.css';

import { FaEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function BookContent() {
  const { content } = useSelector((state) => state.content);
  return (
    <div className="BookContent">
      <div className="PageHeading">

        <h3>
          {' '}
          {content.title}
          {' '}
        </h3>

        <FaEdit onClick={() => { window.location.pathname = '/edit'; }} style={{ padding: '0.5rem', marginLeft: '1rem' }} size="1rem" />

      </div>

      <p>{content.content}</p>

    </div>
  );
}

export default BookContent;
