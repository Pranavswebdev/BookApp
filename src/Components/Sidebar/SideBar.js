import React from 'react';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { SidebarData } from './SideBarData';
import { bookContent } from '../../redux/contentSlicer';

function SideBar() {
  const dispatch = useDispatch();
  return (
    <div className="Sidebar">

      <ul className="SidebarList">

        {
    SidebarData.map((data) => (

      <li
        onClick={() => { dispatch(bookContent(data)); }}
        onKeyDown={() => { dispatch(bookContent(data)); }}
        className="row"
        key={data.title}
      >

        <div>{data.title}</div>

      </li>

    ))
        }
      </ul>

    </div>
  );
}

export default SideBar;
