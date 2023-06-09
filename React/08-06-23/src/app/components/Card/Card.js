"use client"
import { useState } from 'react'
import styles from './Card.module.css'

const Card = (props) => {
    const {movieInfo} = props
    const [showTitle, setShowTitle] = useState(false)

    const displayTitle = (val) => {
        setShowTitle(val)
    }

    return <div 
        className={styles.container}
        onMouseEnter={()=>displayTitle(true)}
        onMouseLeave={()=>displayTitle(false)}
    >
        <img src={movieInfo.Poster}/>
        {
            showTitle ? <p>{movieInfo.Title}</p> : ''
        }
    </div>
}

export default Card;