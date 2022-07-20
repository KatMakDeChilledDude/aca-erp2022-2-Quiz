import React, { useState, ChangeEvent, MouseEvent } from 'react';

import './Menu.css';
import Questions from './Questions';

function Menu() {

  const [showQuestions, setShowQuestions] = useState(false);

  return (
    <form className='container'>

      
      <h1>Welcome To ACA Quiz App Menu</h1>
      <p>To Start The Quiz, Click <b>Start Quiz</b> Button The <i>Scroll Down</i> For Questions.
      You Will Earn <b>2 Points </b> For Each Correct Answer.</p>
    
      <div className="clearfix">
        <button type="button" className="cancelbtn" onClick={ () => setShowQuestions(false)} >Refresh</button>
        <button type="button" className="startbtn" onClick={ () => setShowQuestions(true)} >Start Quiz</button>

      </div>
      <br></br>
      {showQuestions  && 
      <div> <Questions/> </div>
      }
    
    </form>

  );
}

export default Menu;
