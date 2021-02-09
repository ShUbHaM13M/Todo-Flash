import React from 'react'
import HomeContent from '../Components/HomeContent'
import Projects from '../Components/Projects'

function Home() {
    //useSelector()
    const isLoggedIn = true 

    return (
        //dynamically change content based on login
        <div>
            {isLoggedIn === false ?
            <HomeContent /> :
            <Projects />}
        </div>
    )
}

export default Home
