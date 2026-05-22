import CostItem from "./components/costItem";
import ItemAdder from "./components/itemAdder";
import styles from "/src/scss/App.module.scss";
import { useState } from "react";

const App = () => {
  function addCost(data) {
    const newCost = {
      id: new Date().getTime(),
      costDate: new Date(data.date),
      costDesc: data.desc,
      costPrice: data.price
    }

    const updatedCosts = [newCost, ...costs];
    setCosts(updatedCosts)

    localStorage.setItem('CostDataList', JSON.stringify(updatedCosts))
  }
  
  const [costs, setCosts] = useState( () => {
    try {
      const saved = localStorage.getItem('CostDataList')
      if (!saved) return []

      const parsed = JSON.parse(saved)

      return parsed.map(item => ({
        ...item,
        costDate: new Date(item.costDate)
      }))
  
    } catch (error) {
      console.error(error)
      return []
    }
  });

  return (
    <div className={styles.block1}>
      <ItemAdder cb={addCost}></ItemAdder>
      <div className={styles.costList} id="costList">{
        costs.map((item) => {
          return (
            <CostItem costDate={item.costDate} costDesc={item.costDesc} costPrice={item.costPrice} key={item.id}></CostItem>
          )
        })
        }
        </div>
    </div>
  );
};

export default App;
