import React, { useState, ChangeEvent, MouseEvent } from 'react';

import './Main.css';
import Questions from './Questions';

function Main() {

  const [showQuestions, setShowQuestions] = useState(false);

  return <>
<div className='top'>
  <h1>Welcome To Africa Code Academy</h1>
  <h3>This Is A React Quiz App</h3>
</div>

<div className='side'>
  <div className='menu'>
    <div className='menuitem'><button type="button" className="startbtn" onClick={ () => setShowQuestions(true)} >Start Quiz</button></div>
    <div className='menuitem'><button type="button" className="cancelbtn" onClick={ () => setShowQuestions(false)} >Restart</button></div>
                    
  </div>

  <div className='main'>
    
      {showQuestions  && 
      <div> <Questions/> </div>
      }
    
  </div>
  </div>
  
  </>
}

export default Main;
