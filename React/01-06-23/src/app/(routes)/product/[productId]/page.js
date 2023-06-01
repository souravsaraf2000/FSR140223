"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import styles from './ProdDetail.module.css'

const ProductDetail = (props) => {
    const {productId} = props.params
    const [prodDetail, setProdDetail] = useState({})

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${productId}`)
        .then(res => setProdDetail(res.data))
        .catch(err => console.log(err))
    },[])
    return <div className={styles.container}>
        <div className={styles.landingThumbNail}>
            <img src={prodDetail.thumbnail}/>
        </div>
        <div className={styles.content}>
            <h2>{prodDetail.title}</h2>
            <p>
                {prodDetail.description}
            </p>
            <p>
                Price: <span className={styles.oldPrice}>{Math.floor((prodDetail.price * 100)/(100 - prodDetail.discountPercentage))}</span>  {prodDetail.price}
            </p>
            <p>
                Discount: {prodDetail.discountPercentage}
            </p>
            <p>
                Rating: {prodDetail.rating}
            </p>
        </div>

    </div>
}

export default ProductDetail