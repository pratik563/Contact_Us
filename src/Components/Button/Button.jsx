
import styles from './Button.module.css';

function Button(props) {
  return (
    <>
     <button type='submit' className ={props.isOutline ? styles.outline_btn :  styles.primary_btn}>
      {props.icon}
      {props.text}
    </button>
    </>
   
  )
}

export default Button