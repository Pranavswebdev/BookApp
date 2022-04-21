import React from 'react';
import '../../App.css';

import { FaEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function BookContent() {
  const { content } = useSelector((state) => state.content);
  const navigate = useNavigate();
  return (
    <div className="BookContent">
      <div className="PageHeading">
        <h3>
          {' '}
          {content.title}
          {' '}
        </h3>
        <FaEdit onClick={() => { navigate(`/edit/${content?.id}`); }} style={{ padding: '0.5rem', marginLeft: '1rem', cursor: 'pointer' }} size="1rem" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: content.content }} />

    </div>
  );
}

export default BookContent;
