import React, { useState, useEffect } from 'react';
import '../../App.css';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import uuid from 'react-uuid';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { bookContent } from '../../redux/contentSlicer';

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  console.log(value);
  return () => setValue((newvalue) => newvalue + 1); // update the state to force render
}
function SideBar() {
  const dispatch = useDispatch();
  const [sideBarData, setSideBarData] = useState([]);
  const [active, setActive] = useState();
  const [menu, setMenu] = useState(true);
  const forceUpdate = useForceUpdate();

  const toggleMenu = () => {
    console.log('clicked');
    setMenu(!menu);
  };

  useEffect(() => {
    var SidebarData = JSON.parse(localStorage.getItem('pageContent'));
    setSideBarData(SidebarData);
    setActive(SidebarData[0].id);
    if (!SidebarData) {
      SidebarData = [{
        id: uuid(),
        title: "ALICE'S EVIDENCE tryyyy",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      },
      {
        id: uuid(),
        title: 'DOWN THE RABBIT-HOLE',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      },
      {
        id: uuid(),
        title: 'THE POOL OF TEARS',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      },
      {
        id: uuid(),
        title: 'A CAUCUS-RACE AND A LONG TALE',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      },
      {
        id: uuid(),
        title: 'THE RABBIT SENDS IN A LITTILE BILL',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      },
      {
        id: uuid(),
        title: 'ADVICE FROM A CATERPILLAR',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      },
      {
        id: uuid(),
        title: 'PIG AND PEPPER',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      },
      {
        id: uuid(),
        title: 'A MAD TEA PARTY',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      },
      {
        id: uuid(),
        title: "THE QUEENS'S CROQUET GROUND ",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      },
      {
        id: uuid(),
        title: "THE MOCK TURTLES'S STORY",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      }];

      localStorage.setItem('pageContent', JSON.stringify(SidebarData));
      setSideBarData(SidebarData);

      const activeData = () => { dispatch(bookContent(SidebarData[0])); };
      activeData();
    }
    const activeData = () => { dispatch(bookContent(SidebarData[0])); };
    activeData();
  }, []);

  return (
    <div id={menu ? 'Sidebar' : 'Sidebar--active'}>

      <ul className="SidebarList">

        {
          sideBarData?.map((data) => (

            <li
              onClick={() => {
                dispatch(bookContent(data));

                forceUpdate();
                setActive(data.id);
                console.log(data.id);
              }}
              onKeyDown={() => forceUpdate}
              className={data.id === active ? 'row active' : 'row'}
              key={data.id}
            >

              <div>{data.title}</div>

            </li>

          ))
        }
      </ul>

      <Button className="Addnew" onClick={() => { window.location.pathname = '/create'; }} style={{ color: 'black', textTransform: 'none' }} endIcon={<AddIcon />}>
        Add New Page
      </Button>

      <MenuOpenIcon onClick={toggleMenu} className="navMenu" />
    </div>
  );
}

export default SideBar;
