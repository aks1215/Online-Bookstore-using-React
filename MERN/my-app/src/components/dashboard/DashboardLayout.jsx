import React from 'react';
//import {Side} from "./components/dashboard/Side";
import Side from "./Side";
import { Outlet  } from "react-router-dom";
export default function DashboardLayout(){
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <Side/>
        </div>
        <div className='col-md-9'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
