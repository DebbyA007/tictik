import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaExclamationTriangle, FaPlus } from 'react-icons/fa';

function Tasks() {
const [tasks, setTasks] = useState([]);
const [title, setTitle] = useState('');
const [priority, setPriority] = useState('Low');
const [date, setDate] = useState('');

// Load tasks from localStorage on mount
useEffect(() => {
const stored = JSON.parse(localStorage.getItem('tasks') || '[]');
setTasks(stored);
}, []);

// Save tasks to localStorage whenever tasks change
useEffect(() => {
localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

// Add a new task
const addTask = (e) => {
e.preventDefault();
if (!title || !date) return;
const newTask = { title, priority, date };
setTasks([...tasks, newTask]);
setTitle('');
setPriority('Low');
setDate('');
};

// Remove a task by index
const removeTask = (index) => {
const filtered = tasks.filter((_, i) => i !== index);
setTasks(filtered);
};

return (
<div className="container">
<h2>My Tasks</h2>
<form onSubmit={addTask}>
<div>
<input
type="text"
placeholder="Task Title"
value={title}
onChange={e => setTitle(e.target.value)}
required
/>
</div>
<div>
<FaExclamationTriangle />
<select
value={priority}
onChange={e => setPriority(e.target.value)}
>
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>
</div>
<div>
<FaCalendarAlt />
<input
type="date"
value={date}
onChange={e => setDate(e.target.value)}
required
/>
</div>
<button type="submit"><FaPlus /> Add Task</button>
</form>

<ul>
{tasks.map((task, idx) => (
<li key={idx}>
<strong>{task.title}</strong><br/>
Priority: {task.priority}, Due: {task.date}
<button onClick={() => removeTask(idx)}>Remove</button>
</li>
))}
</ul>
</div>
);
}

export default Tasks;