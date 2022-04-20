import React, { useState } from 'react'
import Navitems from './Navitems'

const Navbar = () => {
    const [NavItemActive, setNavItemActive] = useState('');
    

    // activeitem =(item) => {
    //     if (NavItemActive.length > 0) {
    //         document.getElementById(NavItemActive).classList.remove('active');
    //     }
    //     setNavItemActive({ 'NavItemActive': item },() => {
    //         document.getElementById(NavItemActive).classList.add('active');
    //     })
    // }
        return (
            <nav>
                <ul className="textNav">
                    <Navitems item='HOME' tolink='/'  ></Navitems>
                    <Navitems item='About' tolink='/About' ></Navitems>
                    <Navitems item='Education' tolink='/Education' ></Navitems>
                    <Navitems item='Skills' tolink='/Skills' ></Navitems>
                    <Navitems item='Project' tolink='/Project' ></Navitems>
                    <Navitems item='Contact' tolink='/Contact' ></Navitems>
                
                </ul>

            </nav>
        )
    }


export default Navbar