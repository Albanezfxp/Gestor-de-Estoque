import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";

export default function LayoutItem() {
  return (
    <>
      <Header></Header>
      <div>
        <h1 id="titleItem">GA Stock</h1>
      </div>
      <nav>
        <div id="navButtonContainer">
          <ul id="buttonItemsContainer">
            <li className="buttonAcctionItem" id="btn1">
              <Link id="allItemBtn" to="/items">
                Todos os items
              </Link>
            </li>
            <li className="buttonAcctionItem" id="btn2">
              <Link id="newItemBtn" to="/items/newItem">
                Novo Item
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
