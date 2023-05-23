import styles from './Message.module.css'
const Message = (props) => {
    return <div>
        <h1 
            className={props.isError == true ? styles.error : ''} 
            style = {props.color ? {color: props.color} : ''}
        >{props.msg}</h1>
    </div>
}

export default Message;