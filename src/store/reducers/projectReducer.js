
const initialState = [
    {id: 1, title: 'project1', desc: 'project1 description', bgcolor: 'black', color: 'white'},
    {id: 2, title: 'project2', desc: 'project2 description', bgcolor: 'green', color: 'white'},
    {id: 3, title: 'project3', desc: 'project3 description', bgcolor: 'blue', color: 'white'}
]

const projectReducer = (state = initialState, action) => {
    return state
}

export default projectReducer