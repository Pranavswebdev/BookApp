import React from 'react';
import '../../App.css';
import { SidebarData } from './SideBarData';
import { bookContent } from '../../actions/index';

function SideBar() {
  return (
    <div className="Sidebar">

      <ul className="SidebarList">

        {

    SidebarData.map((data) => (

      <li
        onClick={() => { window.location.pathname = data.title; }}
        onKeyDown={() => { window.location.pathname = data.title; }}
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
