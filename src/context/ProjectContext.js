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

    const projectRef = db.collection('projects')

    function addNewProject (project) {
        projectRef.add({...project})
            .then(doc => (doc))
            .catch(error => console.log(error))
    }

    useEffect( () => {
        const unsubscriber = projectRef.where("user_id", "==", currentUser.uid)
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

    }, [currentUser.uid, projectRef])

    const value = {
        data,
        addNewProject
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}
