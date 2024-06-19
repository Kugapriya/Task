import  { useState, useEffect } from 'react';
import TaskService from './TaskService';
import styles from './TaskList.css'; 


const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    TaskService.getAll()
      .then(response => {
        setTasks(response.data);
      })
      .catch(err => {
        console.error('Error fetching tasks:', err);
      });
  };

  return (
    <div className={styles.taskList}>
      <h2>Task List</h2>
      {tasks.map(task => (
        <div key={task.id} className={styles.taskItem}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
          {/* Add edit and delete functionality */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
