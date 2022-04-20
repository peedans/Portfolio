import React from 'react'
import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect';
import pee from '../pictureprofile/pee.jpg'
const Home = () => {
  return (
    <div className="condiv home">
      <img src={pee} alt="profilepic" className="profilepic" />
      <ReactTypingEffect text={['I am Pee dansatiensakul', 'I am a Junior Software Developer']} speed={80} eraseDelay={200}  className="typingeffect" /> 
      <Social />
    </div>
  )
}

export default Home;