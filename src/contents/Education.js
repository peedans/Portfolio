import React from 'react'
import Widecard from '../components/Widecard'


const Education = () => {
  return (
    <div className="condiv education">
            <h1 className="head">My Education</h1>
            <Widecard title="Boot camp Generation Thailand" subtitle=" Junior Software Developer" from="24 January 2022" to="22 April 2022 " className="textEducation"/>
            <Widecard title="Bangkok University " subtitle="Bachelor of Accounting " from="Since 2016" to="2019 " className="textEducation"/>
            <Widecard title="Kanarasdornbumroong Yala School " subtitle="Diploma in Mathematics-Science Programme." from="Since 2011" to="2016" className="textEducation"/>

    </div>
  )
}

export default Education