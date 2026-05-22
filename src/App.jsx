import CostItem from "./components/costItem";
import ItemAdder from "./components/itemAdder";
import styles from "/src/scss/App.module.scss";
import ChangeType from "/src/components/ChangeType";
import { useState } from "react";

const App = () => {
  function addCost(data) {
    const newCost = {
      id: new Date().getTime(),
      costDate: new Date(data.date),
      costDesc: data.desc,
      costPrice: data.price,
      type: data.type,
    };

    const updatedCosts = [newCost, ...costs];
    setCosts(updatedCosts);

    localStorage.setItem("CostDataList", JSON.stringify(updatedCosts));
  }

  const [costs, setCosts] = useState(() => {
    try {
      const saved = localStorage.getItem("CostDataList");
      if (!saved) return [];

      const parsed = JSON.parse(saved);

      return parsed.map((item) => ({
        ...item,
        costDate: new Date(item.costDate),
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  const [currentType, setCurrentType] = useState('все')
  
  function setType(type) {
    setCurrentType(type)
  }

  return (
    <div className={styles.block1}>
      <ItemAdder cb={addCost}></ItemAdder>
      <ChangeType getChangeType={setType}></ChangeType>
      <div className={styles.costList} id="costList">
      {
        costs.filter((item) => currentType=='все' || item.type == currentType || !currentType).map((item) => (
          <CostItem
              costDate={item.costDate}
              costDesc={item.costDesc}
              costPrice={item.costPrice}
              key={item.id}
              type={item.type}
            ></CostItem>
        ))
      }
      </div>
    </div>
  );
};

export default App;
