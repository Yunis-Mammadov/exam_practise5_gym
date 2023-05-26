import React from 'react'
import styles from "../Hero/index.module.css"

const Hero = () => {
    return (
        <>
            <div className={styles.heroParent}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroH1}>REAL FITNESS <br />
                        DEPENDS ON EXERCISE</h1>
                    <p className={styles.heroP}>SHAPE YOUR BODY WELL.</p>
                </div>
            </div>
        </>
    )
}

export default Hero
