import classes from './todo.module.css'

export default function Todo({ todo }) {
  return (
    <div>
      <ul>
        <li className={classes.todo}>{todo}</li>
      </ul>
    </div>
  );
}
