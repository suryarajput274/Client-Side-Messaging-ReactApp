import  React from 'react';
import './Header.css';
//import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {

    return(    
        <div className= "header__nav">  
             {/* <AccountCircleIcon className= "header__accountIcon"/> */}        
            <div className="dropdown"> 
                    <button className="button__user">User</button>
               <div class ="dropdown__content">
                    <a href="#">ContactName A </a>
                    <a href="#">ContactName B </a>
                    <a href="#">ContactName C </a>
               </div>
            </div>
        </div>   
    );
 }


export default Header;