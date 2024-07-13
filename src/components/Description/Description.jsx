import classes from './desc.module.css'

export default function Description({ title, description }) {
  return (
    <div>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.description}>{description}</p>
    </div>
  );
}
