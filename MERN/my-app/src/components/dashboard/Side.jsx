import React from 'react'
import { Link } from "react-router-dom";
import {HiUpload, HiViewBoards} from 'react-icons/hi';
export default function Side(){
  return (
    <div className='sidebar'>
      <h4>Dashboard</h4>
      <hr/>
      <div className='list-group'>
        <Link to="upload" className='list-group-item list-group-item-action'>
          <HiUpload/>Upload
        </Link>
        <div className='list-group'>
        <Link to="manage" className='list-group-item list-group-item-action'>
          <HiViewBoards/>Manage
        </Link>
      </div>
    </div>
    </div>
  )
}
