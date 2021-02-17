import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import { useAuth } from '../context/AuthContext'

function Home() {

    const { currentUser } = useAuth();

    return (
        <main>
            <h2>TodoFlash helps you to manage and keep track of ongoing projects</h2>
            {currentUser ? 
                <Link className="btn primary" to="/projects">Browse Projects</Link>:
                <Link className="btn primary" to="/auth">Get Started</Link>
            }
        </main>
    )
}

export default Home
