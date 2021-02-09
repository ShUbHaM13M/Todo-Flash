import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <main>
            <h2>TodoFlash helps you to manage and keep track of ongoing projects</h2>
            <Link className="btn primary" to="/auth">Get Started</Link>
        </main>
    )
}

export default Home
