import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy Routing Website!</h1>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/friends">Friends</a>
                <a href="/about">About</a> */}

                {/* <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/about">About</Link> */}

                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;