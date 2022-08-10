import React from 'react';
import {NavLink} from 'react-router-dom'

function Header(props) {
    return (
        <header style={{background:"grey", height:'50px', width:"100%", textAlign:"center", position:"fixed", marginBottom:"40px" }}>
            <li>
                    <NavLink to="/contacts"> GO to Contacts</NavLink>
            </li>  
        </header>
    );
}

export default Header;