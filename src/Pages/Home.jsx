import React from 'react'
import HomeContent from '../Components/HomeContent'
import ProjectContainer from '../Components/Project/ProjectContainer'

function Home() {
    //useSelector()
    const isLoggedIn = false 

    return (
        //dynamically change content based on login
        <div>
            {isLoggedIn === false ?
            <HomeContent /> :
            <ProjectContainer />}
        </div>
    )
}

export default Home
