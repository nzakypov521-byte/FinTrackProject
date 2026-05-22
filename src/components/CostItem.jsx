import styles from "/src/scss/CostItem.module.scss";
import GetMonthTD from "/src/methods/GetMonthThroughDate";
import React from "react";

function CostItem(props) {
  const year = props.costDate.getFullYear()
  const month = GetMonthTD(props.costDate.getMonth())
  const day = props.costDate.getDate()

  const costDesc = props.costDesc
  const costPrice = props.costPrice

  const type = props.type

  return (
    <div className={styles.cardBlock}>
      <div className={styles.cardDate}>
        <div className={styles.cardDateYear}>{year}</div>
        <div className={styles.cardDateMonth}>
          {month}
        </div>
        <div className={styles.cardDateDay}>{day}</div>
      </div>
      <div className={styles.cardDesc}>
        <h2 className={styles.cardDescTitle}>{costDesc}</h2>
        {type === 'rashod' ? (<div className={styles.cardDescPriceR}>
          -{costPrice}$</div>) : <div className={styles.cardDescPriceD}>
            +{costPrice}$</div>}
      </div>
    </div>
  );
}

export default CostItem;