import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text: value}];
    console.log(newTodos, ">>")
    setTodos(newTodos);
    setValue("");
  };

return(
  <div>
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      className="input"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    {/* <button onClick={handleSubmit}>submit</button> */}
  </form>
    {
      todos.map((v,i) => <div key={i}>{v.text}</div>)
    }
<p>this is salman</p>
  </div>
)
}
export default App;
