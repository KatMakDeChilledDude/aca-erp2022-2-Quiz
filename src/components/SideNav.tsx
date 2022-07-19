import React from 'react';
import './SideNav.css';

function SideNav() {
  return (
    <form className='container'>

      
      <h1>Welcome To ACA Quiz App Menu</h1>
      <p>To Start The Quiz, Click <b>Start Quiz</b> Button</p>
    
      <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="button" className="startbtn" >Start Quiz</button>
      </div>
    
    </form>

  );
}

export default SideNav;