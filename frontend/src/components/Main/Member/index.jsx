import React from 'react'
import styles from "../Member/index.module.css"

const Member = () => {
  return (
    <>
       <div className={styles.memberParent}>
                <div className={styles.memberText}>
                    <h1 className={styles.memberH1}>Huge Transaction in last Week</h1>
                    <p className={styles.memberP}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <br />
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation..</p>
                </div>
            </div>
    </>
  )
}

export default Member
