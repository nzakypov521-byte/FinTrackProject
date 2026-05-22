import styles from '/src/scss/Stats.module.scss'

function Stats({costs}) {
    const totalRashod = costs.filter((item) => item.type == 'rashod').reduce((acc,item) => acc += Number(item.costPrice), 0)

    const totalDohod = costs.filter((item) => item.type == 'dohod').reduce((acc,item) => acc += item.costPrice, 0)

    return (
        <div className={styles.statBlock}>
            <div className={styles.statR}>РАСХОДЫ:{totalRashod}</div>
            <div className={styles.statD}>ДОХОДЫ:{totalDohod}</div>
            <div className={styles.statO}>ИТОГ:{totalDohod-totalRashod}</div>
        </div>
    )
}

export default Stats