import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import backgroundImage from '/Users/mangeshyadav/Desktop/React/new-app/src/assets/beams-basic.png'



function Navbar(props) {
  const[defaultCountry,selectedCountry]=useState('India')
  const toggleCountry=(countryCode,countryName)=>{
    props.setCountry(countryCode)
    selectedCountry(countryName)

  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border sticky-top "
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat-x',
      backgroundPosition: 'center',
    }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><h5>NewziFy</h5></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
          <ul className="navbar-nav  ">
            <li className="nav-item mt-1">
                <h5>

              <Link className="nav-link active mx-3" aria-current="page"to='/'>Home</Link>
                </h5>
            </li>
            <li className="nav-item mt-1">
                <h5>

              <a className="nav-link active mx-3" aria-current="page" href="#">About</a>
                </h5>
            </li>
            <li className="nav-item mt-1">
                <h5>

              <Link className="nav-link" to="/subscribe">Subscribe</Link>
                </h5>
            </li>
            <li>
           
<div className="btn-group p-1">
  <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
 {defaultCountry}
  </button>
  <ul className="dropdown-menu ">
    <li><a className="dropdown-item"  onClick={()=>toggleCountry('in','India')}>India</a></li>
    <li><a className="dropdown-item" onClick={()=>toggleCountry('us','USA')}>USA</a></li>
    <li><a className="dropdown-item" onClick={()=>toggleCountry('ch','China')}>China</a></li>
    <li><a className="dropdown-item" onClick={()=>toggleCountry('ru','Russia')}>Russia</a></li>
    <li><a className="dropdown-item" onClick={()=>toggleCountry('jp','Japan')}>Japan</a></li>
    <li><a className="dropdown-item" onClick={()=>toggleCountry('fr','France')}>France</a></li>
    <li><a className="dropdown-item" onClick={()=>toggleCountry('ca','Canada')}>Canada</a></li>
    <li><a className="dropdown-item" onClick={()=>toggleCountry('br','Brazil')}>Brazil</a></li>
    <li><a className="dropdown-item" onClick={()=>toggleCountry('hk','Hong Kong')}>Hong Kong</a></li>
    <li><a className="dropdown-item" onClick={()=>toggleCountry('ae','UAE')}>UAE</a></li>
  </ul>
</div>
            </li>
          </ul>
        </div>
          <form className="d-flex" role="search">
            <Link to="/sign-in">

            <button className="btn btn-outline-dark m-1" type="submit" >Sign In</button>
            </Link>
            <Link to="/sign-up">

            <button className="btn btn-outline-dark m-1" type="submit" >Sign Up</button>
            </Link>
          </form>
      </div>
    </nav>
  );
}

export default Navbar;
