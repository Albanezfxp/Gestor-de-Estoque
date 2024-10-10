import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import useItemCollection from "../../hooks/useItemCollection";
import Dashboard from "./components/Dashbord/Dashboard";
import OveredItems from "./components/OveredItems/OveredItems";
import RecentItems from "./components/RecentItems/RecentItems";
import "./Home.css";

export default function Home() {
  const { item, sevenDays } = useItemCollection();
  const [itensRecentAdd, setItensRecentAdd] = useState(0);
  const [itemsOver, setItemsOver] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [allItems, setAllItems] = useState(0);

  useEffect(() => {
    const total = item.reduce(
      (acc, quantityAll) => acc + quantityAll.quantity,
      0
    );
    let totalIds = 0;

    item.map((id) => {
      if (id.id) {
        return (totalIds = totalIds + 1);
      }
    });

    let itemOvered = 0;

    item.map((quantity) => {
      if (quantity.quantity <= 10) {
        itemOvered = itemOvered + 1;
      }
    });

    let itemRecent = 0;

    item.map((especif) => {
      if (sevenDays(especif.day)) {
        itemRecent = itemRecent + 1;
      }
    });
    setItemsOver(itemOvered);
    setItemQuantity(totalIds);
    setItensRecentAdd(itemRecent);
    setAllItems(total);
  }, [item]);

  return (
    <>
      <Header />
      <main>
        <div id="titleMainContainer">
          <h1>Dashboard</h1>
        </div>
        <div id="dashboardContainer">
          <Dashboard title="Diversidade de items" number={itemQuantity} />
          <Dashboard title="Inventario total" number={allItems} />
          <Dashboard title="Items recentes" number={itensRecentAdd} />
          <Dashboard title="Items acabando" number={itemsOver} />
        </div>
        <div id="sectionContainer">
          <RecentItems />
          <OveredItems />
        </div>
      </main>
    </>
  );
}
