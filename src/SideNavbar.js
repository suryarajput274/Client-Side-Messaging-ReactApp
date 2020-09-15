import React from 'react';
import './SideNavbar.css';

//export default class SideNavbar extends Component 
function sideNavbar(){  
       return (
            <div className="Navbar">
                <div className="side__Navbar">
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About </li>
                    </ul>    
                </div>    
            </div>
        );
    }

export default sideNavbar;