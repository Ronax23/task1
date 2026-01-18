import React from 'react'
import BlogDetail from './BlogDetail'
import Blogleft from './Blogleft'
import { Outlet } from 'react-router'

function BlogMain() {
  return (
    <>
    <div className="main my-5">
      <div className="container-fluid">
        <div className="row">
             <div className="col-lg-4 col-md-5 mb-4 overflowcontrol">
                <Blogleft />
             </div>
             <div className="col-lg-8 col-md-7 p-3">
                <Outlet />
                </div> 
             </div>
             </div>
             </div>
    
    </>
  )
}

export default BlogMain