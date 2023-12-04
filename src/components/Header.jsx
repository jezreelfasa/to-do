import styles from './Todo.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Todo List <br></br></h1>
      <span><em>With this app, you will never forget again!</em></span>
    </div>
  )
}

export default Header;