import React, { useState, ChangeEvent, MouseEvent } from 'react';
import './Questions.css';

    const Questions = () => {
    
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

        const [question, setQuestion] = useState([

              { question: "What is the git command that downloads your repository from GitHub to your computer?", id: 1, answer1: "git clone", answer2: "git fork", answer3: "git commit", answer4: "git push" },
              { question: "npm start command is used to?", id: 2, answer1: "run the app while developing", answer2: "create a directory", answer3: "create a new project", answer4: "create a folder"},
              { question: "Which of the following commands used to show all parameters in git?", id: 3, answer1: "git config --list", answer2: "git config -a", answer3: "git config --all", answer4: " git config --parameters --list" },
              { question: "Which of the following commands used to return to the master branch", id: 4, answer1: "git checkout master", answer2: "git checkout branche", answer3: "git checkout -b master", answer4: " git checkout origin" },
              { question: "Which of the following commands used to undo a commit?", id: 5, answer1: "git revert <commit>", answer2: "git reset --hard origin/master", answer3: "git init", answer4: "git reset <commit>" },
              { question: " Which of the following commands used to permanently cancel a commit?", id: 6, answer1: "git reset <commit>", answer2: "git revert <commit>", answer3: "git reset --hard origin/master", answer4: "git init" },
              { question: "How to create a new branch and switch to it directly?", id: 7, answer1: "git checkout -b <branch-name>", answer2: "git checkout <branch-name>", answer3: "git branch <branch-name>", answer4: "git branch -new <branch-name>" },
              { question: "Which comes first _____?", id: 8, answer1: "git add", answer2: "commit git ", ans3: "git commit", answer4: "add git" },
              { question: "What is the git command that downloads your repository from GitHub to your computer?", id: 9, answer1: "git clone", answer2: "git fork", answer3: "git commit", answer4: "git push" },
              

              { question: "How can you check the status of your files in a directory controlled by git?", id: 10, answer1: "git status", answer2: "git check", answer3: "git control", answer4: "git push" },
              { question: "What command is used to upload your code and changes to GitHub?", id: 11, answer1: "git push", answer2: "git status", answer3: "git upload", answer4: "git add" },
              { question: "How to initialize the local repository with git?", id: 12, answer1: "git init", answer2: "git start", answer3: "git pull", ans4: "git clean" },
              { question: "How do I get code from another repository on GitHub?", id: 13, answer1: "Forking through the GitHub interface", answer2: "git pull-request", answer3: "git fork", answer4: "git clone" },
              { question: "How to check the status of your local repository since your last commit?", id: 14, answer1: "git status", answer2: "git diff", answer3: "git commit", answer4: "git check" },
              { question: "How do I add files to a commit?", id: 15, answer1: "git add", answer2: "git commit", answer3: "git stage", answer4: "git reset" },
              { question: "How to save the current state of your code in git?", id: 16, answer1: "git commit", answer2: "git stage", answer3: "git add", answer4: "git init" },
              { question: "What shortcut to stage all the changes you have?", id: 17, answer1: " git commit ", answer2: "git commit add", answer3: "git push -am “Message”", answer4: "git add" },
              { question: "Which command you use to check the history of your repository?", id: 18, answer1: "git log", answer2: "git diff", answer3: "git fetch", answer4: "git checkouth" },
              { question: "Which command will let you know who modified a file?", id: 19, answer1: " git blame", answer2: "git diff", answer3: " git log", answer4: "git log –source" },


              { question: " Which Command is used to show limited number of commits?", id: 20, answer1: "git log -n", answer2: "git fetch", answer3: "git config", answer4: "git status" },
              { question: "Which command defines the author email to be used for all commits by the current user?", id: 21, answer1: "git config --global user.email", answer2: "git clean -f", answer3: "git merge --no-ff", answer4: "git email--amend" },
              { question: " ____________ command is useful for getting a high-level overview of the project history.", id: 22, answer1: "git log --oneline", answer2: "git reset --hard", answer3: "git log --author=''", answer4: "git rebase" },
              { question: "___________________ removes untracked files from your working directory.", id: 23, answer1: "git clean", answer2: "git reset", answer3: "git clean -f", answer4: "git commit" },
              { question: "Which command creates an empty Git repository in the specified directory?", id: 24, answer1: "git init", answer2: "git log", answer3: "git reset", answer4: "git init --bare" },
              { question: "Git command to compare two specified branches", id: 25, answer1: "git diff", answer2: "git merge", answer3: "git blame -L", answer4: "git push --tags" },
              { question: "_____________ command renames the current branch to <branch>", id: 26, answer1: "git branch -m", answer2: "git remote rm", answer3: "git rebase", answer4: "git branch -D (CAPS)" },
              { question: "Which Git command displays the patch representing each commit.", id: 27, answer1: "git log -p", answer2: "git log", answer3: "git branch", answer4: "git remote -v" },
              { question: " Which of the following command line environment is used for interacting with Git ?", id: 28, answer1: "Git Bash", answer2: "Git Hub", answer3: "Git Boot", answer4: "Git Lab" },
              { question: "If you want to make radical changes to your team’s project and don’t want to impact the rest of the team, you should implement your changes in -", id: 29, answer1: "None of the above", answer2: "the trunk", answer3: "a tag", answer4: "the root" },


              { question: "The Git clone command does which of the following?", id: 30, answer1: "Both answers below", answer2: "Creates a working directory", answer3: "Makes a local copy of the repository", answer4: "Commits a new branch" },
              { question: "Which one of the following is not part of the data structure of a Git repository?", id: 31, answer1: "Body element", answer2: "Commit objecta", answer3: "Head pointer", answer4: "Branch pointer" },
              { question: " Which of these Git client commands creates a copy of the repository and a working directory in the client’s workspace.", id: 32, answer1: "clone", ans2: "update", answer3: "checkout", answer4: "important" },
              { question: "GIT belongs to the............. generation of Version Control tools", id: 33, answer1: "3rd", answer2: "2nd", answer3: "1st", ans4: "4th" },
              { question: "The main objectives of Git are -", id: 34, answer1: "All below", answer2: "speed", answer3: "support for distributed non-linear workflows", answer4: "data integrity" },
              { question: "What language is used in Git?", id: 35, answer1: "C", answer2: "JAVA", answer3: "C++", answer4: "HTML" },
              { question: "Git command .................... used to give tags to the specified commit.", id: 36, answer1: "git tag [commitID]", answer2: "git show [commitID]", answer3: "git checkout [branch name]", answer4: "git rm [file]" },
              { question: "How do I add files to a commit?", id: 37, answer1: "git add", answer2: "git commit", answer3: "git stage", answer4: "git reset" },
              { question: "How to save the current state of your code in git?", id: 38, answer1: "git commit", answer2: "git stage", answer3: "git add", answer4: "git init" },
              { question: "What shortcut to stage all the changes you have?", id: 39, answer1: " git commit ", answer2: "git commit add", answer3: "git push -am “Message”", answer4: "git add" },

              { question: " ____________ command is useful for getting a high-level overview of the project history.", id: 40, answer1: "git log --oneline", answer2: "git reset --hard", answer3: "git log --author=''", answer4: "git rebase" },
              { question: " Which of the following command line environment is used for interacting with Git ?", id: 41, answer1: "Git Bash", answer2: "Git Hub", answer3: "Git Boot", answer4: "Git Lab" },
              { question: "If you want to make radical changes to your team’s project and don’t want to impact the rest of the team, you should implement your changes in -", id: 42, answer1: "None of the above", answer2: "the trunk", answer3: "a tag", answer4: "the root" },
              { question: "What command is used to upload your code and changes to GitHub?", id: 43, answer1: "git push", answer2: "git status", answer3: "git upload", answer4: "git add" },
              { question: "How to initialize the local repository with git?", id: 44, answer1: "git init", answer2: "git start", answer3: "git pull", answer4: "git clean" },
              { question: "How do I get code from another repository on GitHub?", id: 45, answer1: "Forking through the GitHub interface", answer2: "git pull-request", answer3: "git fork", answer4: "git clone" },
              { question: "npm start command is used to?", id: 46, answer1: "run the app while developing", answer2: "create a directory", answer3: "create a new project", answer4: "create a folder"},
              { question: "Which of the following commands used to show all parameters in git?", id: 47, answer1: "git config --list", answer2: "git config -a", answer3: "git config --all", answer4: " git config --parameters --list" },
              { question: "How to check the status of your local repository since your last commit?", id: 48, answer1: "git status", answer2: "git diff", answer3: "git commit", answer4: "git check" },
              { question: "How do I add files to a commit?", id: 49, answer1: "git add", answer2: "git commit", answer3: "git stage", answer4: "git reset" },
              { question: "What is the git command that is used to change directories?", id: 50, answer1: "cd", answer2: "a", answer3: "create", answer4: "ls"}
        ]);

        const onWrong = () => {
            setScore (score + 0);

        }
              
        const onScore = () => {
            setScore (score + 2);
        }

  return <>
    <div className="wrapper">
    <h2><i>QUIZ IN PROGRESS</i></h2> 
    <h3>{question.length} Questions </h3>  
    
{question.map((choice) => (
    <div key={choice.id}> 

<form className='form'>
      
<h4> Question {choice.id} </h4> 
      <fieldset>
        <legend><i>{choice.question}</i></legend>
        <p>
          <input type="radio" name="value" value="value1" onChange={onScore}/>
          <label htmlFor="value1">{choice.answer1}</label>
        </p>

        <p>
          <input type="radio" name="value" value="value2" onChange={onWrong}/>
          <label htmlFor="value2">{choice.answer2}</label>
        </p>

        <p>
          <input type="radio" name="value" value="value3" onChange={onWrong}/>
          <label htmlFor="value3">{choice.answer3}</label>
        </p>

        <p>
          <input type="radio" name="value" value="value4" onChange={onWrong}/>
          <label htmlFor="value4">{choice.answer4}</label>
        </p>
        
      </fieldset>
        
    </form><br></br>
    </div>

))}

<button type="button" className="btnSave" onClick={ () => setShowScore(true)}> Submit </button>
{showScore  && 
<div> 
<h4>YOUR SCORE IS <button className="btnScore"> <b>{score}</b></button></h4> 
<h3>{question.length} Questions Summmary </h3> 
{question.map((solution) => (
    <div key={solution.id}> 
    <p><h4>Question {solution.id}</h4>
    <h5> {solution.question}</h5></p>
    <p><u>Answer:</u><i> {solution.answer1}</i></p>
    </div>
))
}
</div>

    }

</div>
</>

}

export default Questions;
