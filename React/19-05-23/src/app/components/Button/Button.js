import styles from './Button.module.css'

const Button = () => {
    return <div>
        <h1 className={styles.heading}>
            I am the button component!
        </h1>
        <button>Click Me</button>
    </div>
}

export default Button