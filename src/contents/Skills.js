import React from 'react'
import { useState } from 'react'

const Skills = () => {

    const [skill, setSkill] = useState(['HTML','CSS','Javascript','ReactJS','MongoDB','SQL']);
    const [softSkill, setSoftskill] = useState(['Teamwork','Communication','Problem Solving','Time Management','Creativity']);
    const [interests, setInterests] = useState(['Coding','Game','Fitness','Reading','Music']);
  return (
    <div className ='condiv skills'>
        <h1 className="head">Programming language</h1>
        <h2></h2>
        <ul>
            {skill.map((value) => {
            return<li>{value}</li>})}
            
        </ul>
        <h2 className="head">Soft skills</h2>
        <ul className ="softSkill">
          {softSkill.map((value) => {
            return<li>{value}</li>})} 
        </ul>
        <h2 className="head">Interests</h2>
        <ul className ="softSkill">
          {interests.map((value) => {
            return<li>{value}</li>})} 
        </ul>
    </div>
  )
}

export default Skills