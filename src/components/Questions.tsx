import React, { useState, ChangeEvent, MouseEvent } from 'react';
import './Questions.css';

    const Questions = () => {

    
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showFinish, setFinish] = useState(true);
    const [showScore, setShowScore] = useState(false);

        const [que, setQue] = useState([

        



              { q: "What is the git command that downloads your repository from GitHub to your computer?", id: 0, ans1: "git clone", ans2: "git fork", ans3: "git commit", ans4: "git push" },
              { q: "What is the git command that is used to change directories?", id: 1, ans1: "cd", ans2: "a", ans3: "create", ans4: "ls"},
              { q: "npm start command is used to?", id: 2, ans1: "run the app while developing", ans2: "create a directory", ans3: "create a new project", ans4: "create a folder"},
              { q: "Which of the following commands used to show all parameters in git?", id: 3, ans1: "git config --list", ans2: "git config -a", ans3: "git config --all", ans4: " git config --parameters --list" },
              { q: "Which of the following commands used to return to the master branch", id: 4, ans1: "git checkout master", ans2: "git checkout branche", ans3: "git checkout -b master", ans4: " git checkout origin" },
              { q: "Which of the following commands used to undo a commit?", id: 5, ans1: "git revert <commit>", ans2: "git reset --hard origin/master", ans3: "git init", ans4: "git reset <commit>" },
              { q: " Which of the following commands used to permanently cancel a commit?", id: 6, ans1: "git reset <commit>", ans2: "git revert <commit>", ans3: "git reset --hard origin/master", ans4: "git init" },
              { q: "How to create a new branch and switch to it directly?", id: 7, ans1: "git checkout -b <branch-name>", ans2: "git checkout <branch-name>", ans3: "git branch <branch-name>", ans4: "git branch -new <branch-name>" },
              { q: "Which comes first _____?", id: 8, ans1: "git add", ans2: "commit git ", ans3: "git commit", ans4: "add git" },
              { q: "What is the git command that downloads your repository from GitHub to your computer?", id: 9, ans1: "git clone", ans2: "git fork", ans3: "git commit", ans4: "git push" },
              

              { q: "How can you check the status of your files in a directory controlled by git?", id: 10, ans1: "git status", ans2: "git check", ans3: "git control", ans4: "git push" },
              { q: "What command is used to upload your code and changes to GitHub?", id: 11, ans1: "git push", ans2: "git status", ans3: "git upload", ans4: "git add" },
              { q: "How to initialize the local repository with git?", id: 12, ans1: "git init", ans2: "git start", ans3: "git pull", ans4: "git clean" },
              { q: "How do I get code from another repository on GitHub?", id: 13, ans1: "Forking through the GitHub interface", ans2: "git pull-request", ans3: "git fork", ans4: "git clone" },
              { q: "How to check the status of your local repository since your last commit?", id: 14, ans1: "git status", ans2: "git diff", ans3: "git commit", ans4: "git check" },
              { q: "How do I add files to a commit?", id: 15, ans1: "git add", ans2: "git commit", ans3: "git stage", ans4: "git reset" },
              { q: "How to save the current state of your code in git?", id: 16, ans1: "git commit", ans2: "git stage", ans3: "git add", ans4: "git init" },
              { q: "What shortcut to stage all the changes you have?", id: 17, ans1: " git commit ", ans2: "git commit add", ans3: "git push -am “Message”", ans4: "git add" },
              { q: "Which command you use to check the history of your repository?", id: 18, ans1: "git log", ans2: "git diff", ans3: "git fetch", ans4: "git checkouth" },
              { q: "Which command will let you know who modified a file?", id: 19, ans1: " git blame", ans2: "git diff", ans3: " git log", ans4: "git log –source" },


              { q: " Which Command is used to show limited number of commits?", id: 20, ans1: "git log -n", ans2: "git fetch", ans3: "git config", ans4: "git status" },
              { q: "Which command defines the author email to be used for all commits by the current user?", id: 21, ans1: "git config --global user.email", ans2: "git clean -f", ans3: "git merge --no-ff", ans4: "git email--amend" },
              { q: " ____________ command is useful for getting a high-level overview of the project history.", id: 22, ans1: "git log --oneline", ans2: "git reset --hard", ans3: "git log --author=''", ans4: "git rebase" },
              { q: "___________________ removes untracked files from your working directory.", id: 23, ans1: "git clean", ans2: "git reset", ans3: "git clean -f", ans4: "git commit" },
              { q: "Which command creates an empty Git repository in the specified directory?", id: 24, ans1: "git init", ans2: "git log", ans3: "git reset", ans4: "git init --bare" },
              { q: "Git command to compare two specified branches", id: 25, ans1: "git diff", ans2: "git merge", ans3: "git blame -L", ans4: "git push --tags" },
              { q: "_____________ command renames the current branch to <branch>", id: 26, ans1: "git branch -m", ans2: "git remote rm", ans3: "git rebase", ans4: "git branch -D (CAPS)" },
              { q: "Which Git command displays the patch representing each commit.", id: 27, ans1: "git log -p", ans2: "git log", ans3: "git branch", ans4: "git remote -v" },
              { q: " Which of the following command line environment is used for interacting with Git ?", id: 28, ans1: "Git Bash", ans2: "Git Hub", ans3: "Git Boot", ans4: "Git Lab" },
              { q: "If you want to make radical changes to your team’s project and don’t want to impact the rest of the team, you should implement your changes in -", id: 29, ans1: "None of the above", ans2: "the trunk", ans3: "a tag", ans4: "the root" },


              { q: "The Git clone command does which of the following?", id: 30, ans1: "Both answers below", ans2: "Creates a working directory", ans3: "Makes a local copy of the repository", ans4: "Commits a new branch" },
              { q: "Which one of the following is not part of the data structure of a Git repository?", id: 31, ans1: "Body element", ans2: "Commit objecta", ans3: "Head pointer", ans4: "Branch pointer" },
              { q: " Which of these Git client commands creates a copy of the repository and a working directory in the client’s workspace.", id: 32, ans1: "clone", ans2: "update", ans3: "checkout", ans4: "important" },
              { q: "GIT belongs to the............. generation of Version Control tools", id: 33, ans1: "3rd", ans2: "2nd", ans3: "1st", ans4: "4th" },
              { q: "The main objectives of Git are -", id: 34, ans1: "All below", ans2: "speed", ans3: "support for distributed non-linear workflows", ans4: "data integrity" },
              { q: "What language is used in Git?", id: 35, ans1: "C", ans2: "JAVA", ans3: "C++", ans4: "HTML" },
              { q: "Git command .................... used to give tags to the specified commit.", id: 36, ans1: "git tag [commitID]", ans2: "git show [commitID]", ans3: "git checkout [branch name]", ans4: "git rm [file]" },
              { q: "How do I add files to a commit?", id: 15, ans1: "git add", ans2: "git commit", ans3: "git stage", ans4: "git reset" },
              { q: "How to save the current state of your code in git?", id: 16, ans1: "git commit", ans2: "git stage", ans3: "git add", ans4: "git init" },
              { q: "What shortcut to stage all the changes you have?", id: 17, ans1: " git commit ", ans2: "git commit add", ans3: "git push -am “Message”", ans4: "git add" },

              { q: " ____________ command is useful for getting a high-level overview of the project history.", id: 22, ans1: "git log --oneline", ans2: "git reset --hard", ans3: "git log --author=''", ans4: "git rebase" },
              { q: " Which of the following command line environment is used for interacting with Git ?", id: 28, ans1: "Git Bash", ans2: "Git Hub", ans3: "Git Boot", ans4: "Git Lab" },
              { q: "If you want to make radical changes to your team’s project and don’t want to impact the rest of the team, you should implement your changes in -", id: 29, ans1: "None of the above", ans2: "the trunk", ans3: "a tag", ans4: "the root" },
              { q: "What command is used to upload your code and changes to GitHub?", id: 11, ans1: "git push", ans2: "git status", ans3: "git upload", ans4: "git add" },
              { q: "How to initialize the local repository with git?", id: 12, ans1: "git init", ans2: "git start", ans3: "git pull", ans4: "git clean" },
              { q: "How do I get code from another repository on GitHub?", id: 13, ans1: "Forking through the GitHub interface", ans2: "git pull-request", ans3: "git fork", ans4: "git clone" },
              { q: "npm start command is used to?", id: 2, ans1: "run the app while developing", ans2: "create a directory", ans3: "create a new project", ans4: "create a folder"},
              { q: "Which of the following commands used to show all parameters in git?", id: 3, ans1: "git config --list", ans2: "git config -a", ans3: "git config --all", ans4: " git config --parameters --list" },
              { q: "How to check the status of your local repository since your last commit?", id: 14, ans1: "git status", ans2: "git diff", ans3: "git commit", ans4: "git check" },
              { q: "How do I add files to a commit?", id: 15, ans1: "git add", ans2: "git commit", ans3: "git stage", ans4: "git reset" }
        ]);

        const onWrong = () => {
            setScore (score + 0);

        }

        const onNextQuestion = () => {
             {setCurrentQuestion(currentQuestion + 1)} 

        }
              
        const onScore = () => {
            setScore (score + 2);

            if(currentQuestion + 1 < que.length)
            {
                    setFinish(true);
            }
        }

  return <>
    <div className="wrapper">
    <h2><i>QUIZ IN PROGRESS</i></h2> 
    <h3>{que.length} Questions </h3>  
    
{que.map((choice) => (
    <div key={choice.id}> 

<form className='form'>
      
<h4> Question {currentQuestion + 1} </h4> 
      <fieldset>
        <legend><i>{choice.q}</i></legend>
        <p>
          <input type="radio" name="value" value="value1" onChange={onScore}/>
          <label htmlFor="value1">{choice.ans1}</label>
        </p>

        <p>
          <input type="radio" name="value" value="value2" onChange={onWrong}/>
          <label htmlFor="value2">{choice.ans2}</label>
        </p>

        <p>
          <input type="radio" name="value" value="value3" onChange={onWrong}/>
          <label htmlFor="value3">{choice.ans3}</label>
        </p>

        <p>
          <input type="radio" name="value" value="value4" onChange={onWrong}/>
          <label htmlFor="value4">{choice.ans4}</label>
        </p>
        
      </fieldset>
        
    </form><br></br>
    </div>

))}

<button type="button" className="btnSave" onClick={ () => setShowScore(true)}> Submit </button>
{showScore  && 
<div> <h4>YOUR SCORE IS <button className="btnScore"> <b>{score}</b></button></h4> </div>
}

</div>
    
   

  </>

}

export default Questions;
