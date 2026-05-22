import styles from '/src/scss/itemAdder.module.scss'
import { useState } from 'react'

function itemAdder(props) {
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')

    const addCost1 = (e) => {
        e.preventDefault()

        const costData = {
            date: new Date(),
            desc: desc,
            price: price
        }

        props.cb(costData)
    }

    return (
        <form className={styles.adderBlock} onSubmit={addCost1}>
            <input type="text" className={styles.adderText} id= "adderText" placeholder='Description' onChange={(e) => setDesc(e.target.value)} required/>
            <input type="number" className={styles.adderNum} id="adderNum" placeholder='Price' onChange={(e) => setPrice(e.target.value)} required/>
            <button id='adderBtn' className={styles.adderBtn}>Добавить</button>
        </form>
    )
}

export default itemAdder