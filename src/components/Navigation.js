import React from 'react';

const NavBar = () => {
    return (
    <div className="nav">
        <div className="Link-Area">
            <a href='/'> Home </a>
            <a href='/'> Blog</a>
            {/* need to get blog link  */}
            {/* <a href='/about'> About The Author </a> */}
            {/* or Lori's Swimming History  */}
            {/* <a href='/contact'> Contact </a> */}
            <a href='/'> Purchase </a>
            {/* link to amazon */}
        </div>
    </div>
    );
};

export default NavBar; 