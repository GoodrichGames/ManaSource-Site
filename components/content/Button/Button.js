import styles from './Button.module.scss'

const Button = (props) => {
  return (
    <button type={props.type || 'button'} className={styles.button + ' ' + props.classes} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default Button;
