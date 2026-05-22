import styles from '/src/scss/ChangeType.module.scss'

function ChangeType({getChangeType}) {
    function onAll() {
        getChangeType('все')
    }

    function onRashod() {
        getChangeType('rashod')
    }

    function onDohod() {
        getChangeType('dohod')
    }

    return (
        <div className={styles.nav}>
            <button onClick={onAll}>Все</button>
            <button onClick={onRashod}>Расходы</button>
            <button onClick={onDohod}>Доходы</button>
        </div>
    )
}

export default ChangeType;