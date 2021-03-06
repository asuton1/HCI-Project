import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/review.module.css"

const Review = ({name, grade, text, date}) => {
    let stars = grade
    let icon = <FontAwesomeIcon icon = "star" className = {`${styles.stars}`}/>
    let a = [];
    for(let i = 0 ; i <stars ; i++)
      a.push(icon);

    return(
        <div class="row pb-2">
            <div class="col-sm-12">
                <div class={`card ${styles.review}`}>
                    <div className={`${styles.header} card-header`}>
                        <h4>{name}</h4>
                        <p className = "card-text">Ocjena: {a}</p>
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p className = {styles.font}>{text}</p>
                            <footer class="blockquote-footer">{date}</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review