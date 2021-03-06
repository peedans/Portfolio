import React from 'react'
import colmar from '../pictureprofile/colmar.png'
import jamming from '../pictureprofile/jamming.png'
import Activity from '../pictureprofile/Activity.png'

const Project = () => {
    return (
        <div className="condiv project">
            <h1 className='sectionProject'>My Project</h1>
            <div className='colmar'>
                <h2 className='colmarHead'>Colmar Project</h2>
                <img src={colmar} width="500" height="auto" className="picColmar"  />
                <p className='colmarText'>Colmar Academy is the first project I have ever made. This project was part of the CodeAcademy's course 'Build Websites from Scratch', and its main goal was to practice my newly acquired HTML & CSS skills. I was provided with the website layouts for both desktop and mobile versions, while the styling was designed by me.</p>
                <a href="https://github.com/peedans/peedans.github.io/tree/main/colmar-academy" target="_blank" rel="noopender noreferrer" className="github"><i className="fab fa-github"></i></a>
            </div>
            <div className='jamming'>
                <h2 className='jammingHead'>jamming Project</h2>
                <img src={jamming} width="500" height="auto"  className="picJamming" href=""/>
                
                <p className='jammingText'>In this project, I will build a React web application called Jammming. I will use my knowledge of React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.</p>
                <a href="https://github.com/peedans/jsd-jamming-assessment" target="_blank" rel="noopender noreferrer" className="github"><i className="fab fa-github"></i></a>
            </div>
            <div className='Santa'>
                <h2 className='santaHead'>Santa Project</h2>
                <img src={Activity} width="500" height="auto" />
                <p className='santaText'>Santa Project - Exercise record website :
  The application website is divided into front-end using React with React-router and Axios as the main dependency. In the back-end, it uses Express to manage RESTful API. Finally, using Mongoose to connect MongoDB.</p>
                <a href="https://github.com/peedans/Santa-Frontend" target="_blank" rel="noopender noreferrer" className="github"><i className="fab fa-github"></i></a>
            </div>
        </div>
    )
}

export default Project