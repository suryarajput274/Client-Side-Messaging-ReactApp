import React from 'react';
import './App.css';
import Header from './Header';
import Contacts from './Contacts';
import SideNavbar from './SideNavbar'; 
function App() {
  return (
    <div className="App">
       <Header/>
       <Contacts/>
       <SideNavbar/>
      {/* chatBox */}
      {/* username */}
    </div>
  );
}

export default App;
