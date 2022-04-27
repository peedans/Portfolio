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
                <img src={colmar} width="500" height="auto" className="picColmar" />
                <p className='colmarText'>Colmar Academy is the first project I have ever made. This project was part of the CodeAcademy's course 'Build Websites from Scratch', and its main goal was to practice my newly acquired HTML & CSS skills. I was provided with the website layouts for both desktop and mobile versions, while the styling was designed by me.</p>
            </div>
            <div className='jamming'>
                <h2 className='jammingHead'>jamming Project</h2>
                <img src={jamming} width="500" height="auto"  className="picJamming"/>
                
                <p className='jammingText'>In this project, I will build a React web application called Jammming. I will use my knowledge of React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.</p>
            </div>
            <div className='Santa'>
                <h2 className='santaHead'>Santa Project</h2>
                <img src={Activity} width="500" height="auto" />
                <p className='santaText'>I make a website about collecting exercise data such as calculating bmi, activity, location, etc. The front end website uses React, the backend uses Express to manage the RESTful API and finally Mongoose. to connect to MongoDB</p>
            </div>
        </div>
    )
}

export default Project