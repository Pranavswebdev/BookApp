import React from 'react';
import '../../App.css';
import { BsPinterest } from 'react-icons/bs';
import { MdFacebook } from 'react-icons/md';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillGooglePlusCircle,
  AiOutlineDribbble,
  AiFillGithub,
  AiOutlineCodepen,
} from 'react-icons/ai';

function Footer() {
  return (
    <div className="Footer">
      <MdFacebook className="icon" />
      <AiFillTwitterCircle className="icon" />
      <AiFillYoutube className="icon" />
      <AiFillGooglePlusCircle className="icon" />
      <AiOutlineDribbble className="icon" />
      <BsPinterest className="icon" />
      <AiFillGithub className="icon" />
      <AiOutlineCodepen className="icon" />
      <Button className="Addnew" style={{ color: 'black', textTransform: 'none' }} endIcon={<AddIcon />}>
        Add New Page
      </Button>
    </div>
  );
}

export default Footer;
