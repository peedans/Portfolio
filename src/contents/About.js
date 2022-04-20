import React from 'react'
import pee from '../pictureprofile/pee.jpg'

const About=()=> {
  return (
    <div className="condivabout about">
        <h1 className="head">About Me</h1>
        <img src={pee} alt="profilepic" className="profilepicabout"/>
        <h3 className="aboutMetop">Hi, I'm Pee dantasatiensakul</h3>
        <p className="aboutMe">A simple person who want to push through to the limit, "I will never do that" with fixed mindset that I was not engineering student. After finished my first degree, Accounting .I would like  to learning something which I was interested since I was Year 3 in university to complete my life .So I decided to learn coding . I found that it was really enjoyed with it .I think now it is time for Digitalization and  coding is an answer and it will be good if I can be a small part of this industry. Now I work hard for it and  dedicate to it.</p>
    </div>
  )
}

export default About