import React from 'react'
import './Sidebar.css';
import {Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import SidebarOptions from './SidebarOptions';
import MailIcon from '@mui/icons-material/Mail';
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';

const Sidebar =() => {
  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon />} className='compose__btn'>Compose</Button>
      <SidebarOptions  Icon={MailIcon} title="Inbox" number='224' isActive='true'/>
      <SidebarOptions  Icon={StarIcon} title="Starred" number='224'/>
      <SidebarOptions  Icon={LabelImportantIcon} title="Important" number='224'/>
      <SidebarOptions  Icon={SendIcon} title="Sent" number='224'/>
      <SidebarOptions  Icon={DraftsIcon} title="Drafts" number='224'/>
    </div>
  )
}

export default Sidebar
