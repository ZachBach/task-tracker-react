import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'October 8th at 4:00pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting for work',
            day: 'October 11th at 2:00pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Take Vitamin D3',
            day: 'October 15',
            reminder: true,
        },
    ])
    
    return (
        <>
        {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
        ))}
        </>
    )
}

export default Tasks
