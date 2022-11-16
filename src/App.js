import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctor Appointment',
          day: 'Feb 5th at 2:30pm',
          remainder: true,
      },
      {
          id: 2,
          text: 'Meeting at school',
          day: 'Feb 6th at 2:30pm',
          remainder: true,
      },
      {
          id: 3,
          text: 'Food shopping',
          day: 'Feb 5th at 2:30pm',
          remainder: true,
      },
 ])

 // Delete task
 const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))

 }

 //Toggle Reminder
 const toggleRemainder 

  return (
      <div className="container">
        <Header />
        {tasks.length > 0 ? <Tasks tasks={tasks} 
        onDelete={deleteTask} /> : ('No Tasks To Show')}
      </div>
  )
}
export default App
 