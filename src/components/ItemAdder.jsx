import styles from '/src/scss/itemAdder.module.scss'
import { useState } from 'react'

function itemAdder(props) {
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('rashod')

    const addCost1 = (e) => {
        e.preventDefault()

        const costData = {
            date: new Date(),
            desc: desc,
            price: price,
            type: type
        }

        props.cb(costData)
        setDesc('')
        setPrice('')
        setType('rashod')
    }

    return (
        <form className={styles.adderBlock} onSubmit={addCost1}>
            <input type="text" className={styles.adderText} value={desc} id= "adderText" placeholder='Description' onChange={(e) => setDesc(e.target.value)} required/>
            <input type="number" className={styles.adderNum} value={price} id="adderNum" placeholder='Price' onChange={(e) => setPrice(e.target.value)} required/>
            
            <div className={styles.radioTypeGroup}>
                <label className={styles.radioTypeLabel}>
                    <input type="radio" name="type" value="dohod" checked={type==='dohod'}
                    onChange={(e) => setType(e.target.value)} />
                    <span>Доход</span>
                </label>
                <label className={styles.radioTypeLabel}>
                    <input type="radio" name="type" value="rashod" checked={type==='rashod'}
                    onChange={(e) => setType(e.target.value)} />
                    <span>Расход</span>
                </label>

            </div>
            <button id='adderBtn' className={styles.adderBtn}>Добавить</button>
        </form>
    )
}

export default itemAdder