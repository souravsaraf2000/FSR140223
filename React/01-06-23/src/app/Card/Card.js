"use client"
import { useRouter } from 'next/navigation'
import styles from './Card.module.css'

const Card = (props) => {

    let {product} = props
    let { push } = useRouter()
    
    const redirectToProductDetails = id => push(`/product/${id}`)

    return <div className={styles.container} onClick={()=>redirectToProductDetails(product.id)}>
        <div className={styles.image}>
            <img src={product.thumbnail} alt={product.brand}/>
        </div>
        <div className={styles.content}>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.desc}>{product.description}</p>
            <p className={styles.price}>Price: <b>{product.price}$</b></p>
            <p className={styles.rating}>Rating: {product.rating} / 5</p>
        </div>
    </div>
}

export default Card;