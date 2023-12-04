
import styles from './Todo.module.css';
import {
    AiOutlineDelete,
    AiOutlineEdit,
    AiOutlineCheckCircle,

} from "react-icons/ai";



const Todos = ({ todos, setTodos, setEditTodo }) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {

                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })

        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo);
    }



    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todos) => todos.id !== id))
    }

    return (

        <ul className={styles.todolist}>
            {todos.map((todo) => (
                <li key={todo.id} className={styles.listItems}>
                    <input
                        type='text'
                        value={todo.title}
                        className={`${styles.list} ${todo.completed ? styles.complete : ""}  `}
                    />

                    <div className={styles.buttons}>
                        <button className={styles.done} onClick={(() => handleComplete(todo))}>
                            <AiOutlineCheckCircle size={20} styles={{ marginTop: '6px', border: "none" }} />
                        </button>
                        <button className={styles.edit} onClick={(() => handleEdit(todo))}>
                            <AiOutlineEdit size={20} styles={{ marginTop: '6px' }} />
                        </button>
                        <button className={styles.delete} onClick={(() => handleDelete(todo))}>
                            <AiOutlineDelete size={20} styles={{ marginTop: '6px' }} />
                        </button>

                    </div>


                </li>

            ))}
        </ul>

    );
};




export default Todos;
