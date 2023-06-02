import { useEffect, useState } from 'react';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [newId, setNewId] = useState(1);

  useEffect(() => {
    alert('changes');
  }, [todos]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === '') {
      return;
    }

    const newTodo = {
      id: newId,
      text: input,
    };

    setTodos((todos) => [...todos, newTodo]);

    setInput('');
    setNewId(newId + 1);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} &nbsp;&nbsp;&nbsp;
            <button onClick={() => handleDelete(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
