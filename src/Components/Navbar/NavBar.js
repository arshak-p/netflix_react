import React from 'react'
import { FaBell } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import "./NavBar.css"
function NavBar() {
  return (
    <div className='navbar' id='navBar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix-logo" />
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
        <div className="options">
                <p>Home</p>
                <p>Tv Shows</p>
                <p>Movies</p>
                <p>News & Popular</p>
                <p>My List</p>
                <p>Browse by Language</p>
                
        </div>
            <h1><FaBell className='list-item-icons'/></h1> 
            <MdOutlineSearch className='search-icon'/> <h5 className='search'>Search</h5>     
    </div>
   
  )
}

export default NavBar