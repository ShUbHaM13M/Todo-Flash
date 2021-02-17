import React, { useState, useEffect, useContext } from 'react'
import { db } from '../Config/firebase'
import { useAuth } from './AuthContext'

const ProjectContext = React.createContext()

export function useProject() {
    return useContext(ProjectContext) 
}

export default function ProjectProvider({ children }) {

    const [ data, setData ] = useState({
        error: false, 
        loading: true, 
        projects: []
    })

    const { currentUser } = useAuth()

    useEffect( () => {
        const unsubscriber = db.collection('projects').where('user_id', '==', currentUser.uid)
            .onSnapshot(snapshot => {
                setData({
                    error: false,
                    loading: false,
                    projects: snapshot.docs.map(project => ({
                        ...project.data(),
                        id: project.id
                    }))
                })
            }, 
            (error) => {
                setData({
                    error,
                    loading: false,
                    projects: []
                })
            })

        return unsubscriber

    }, [currentUser.uid])

    const value = {
        data,
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}
