import styles from './Card.module.css'

const Card = (props) => {

    const productDetails = props.product

    return <div className={styles.container}>
            <div className={styles.image}>
                <img src={productDetails.thumbnail} alt={productDetails.brand}/>
            </div>
            <div className={styles.info}>
                <p className={styles.title}>{productDetails.title}</p>
                <p className={styles.description}><i>{productDetails.description}</i></p>
                <p className={styles.rating}><b>Rating :</b> {productDetails.rating} / 5</p>
                <p className={styles.price}><b>Price:</b> <span className={styles.amount}>{productDetails.price} $ </span></p>
            </div>
        </div>

}

export default Card;