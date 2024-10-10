import BtnSee from "../../../../components/BtnSee/BtnSee";
import ItemEspecific from "./components/Itemespecific";
import "./ItemDiv.css";

interface propsItems {
  id: any;
  name: string;
  quantity: number;
  category: string;
  onRemove: any;
}

export default function ItemDiv({
  id,
  name,
  quantity,
  category,
  onRemove,
}: propsItems) {
  return (
    <div id="section">
      <div className="item">
        <div id="idContainer">
          <ItemEspecific id="idItem" p={id} />
        </div>
        <div id="containerEspecific">
          <div className="itemTitle">
            <p>{name}</p>
          </div>
          <div className="quantityContainer">
            <p>{quantity}</p>
          </div>
          <div className="categoryContainer">
            <p>{category}</p>
          </div>
          <div className="buttonsAcctions">
            <ul>
              <li>
                <BtnSee itemId={id} />
              </li>
              <li>
                <button id="excluirButton" onClick={onRemove}>
                  Excluir
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
