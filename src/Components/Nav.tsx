import React from 'react'
import { Link } from 'react-router'

function Nav() {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid d-flex justify-content-between">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse " id="navbarNav">
      <ul className="mx-auto navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <Link to="post" className="nav-link" >Post</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
    <div className=" dis">
      <Link className='btn ' to="/">Profile</Link>
    </div>
  </div>
</nav>

  )
}

export default Nav