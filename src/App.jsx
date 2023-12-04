import Header from "./components/Header";
import styles from './components/Todo.module.css';
import Form from "./components/Form";
import Todos from "./components/Todos";
import { useState, useEffect } from "react";
import Video from "./components/vid/galax.mp4"

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);



  return (
    <><>
      <video autoPlay loop muted className={`${styles.videoBackground} ${styles.video}`}>
        <source src={Video} type="video/mp4" />
      </video>
    </><div className={styles.container}>



        <div className={styles.app}>

          <div>
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <Todos todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
          </div>
        </div>
      </div></>
  )
}

export default App;