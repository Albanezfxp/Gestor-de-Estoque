import { useParams } from "react-router-dom";
import "./ItemDetails.css";
import useItemCollection from "../../hooks/useItemCollection";
import BtnRemove from "../../components/BtnRemove/BtnRemove";

export default function ItemDetails() {
  const { itemDetailsId } = useParams();
  const { item, setItem } = useItemCollection();

  const currentItem = item.find((item) => item.id === Number(itemDetailsId));

  if (!currentItem) {
    return <div>Item não encontrado</div>;
  }

  const incrementarItem = () => {
    setItem((prevItems) =>
      prevItems.map((especific) =>
        especific.id === currentItem.id
          ? { ...especific, quantity: especific.quantity + 1 }
          : especific
      )
    );
  };

  const decrementarItem = () => {
    setItem((prevItems) =>
      prevItems.map((especific) =>
        especific.id === currentItem.id && especific.quantity > 0
          ? { ...especific, quantity: especific.quantity - 1 }
          : especific
      )
    );
  };

  return (
    <main>
      <div className="itemDetailsContainer">
        <div id="titleContainer">
          <p>Nome:</p>
          <h3>{currentItem.name}</h3>
        </div>

        <div className="info">
          <div className="infoItemContaier">
            <div>
              <p>Categoria</p>
            </div>
            <div>
              <p className="infoItem">{currentItem.category}</p>
            </div>
          </div>
          <div className="infoItemContaier">
            <div>
              <p>Quantidade em estoque</p>
            </div>
            <div>
              <p className="infoItem">{currentItem.quantity}</p>
            </div>
          </div>
          <div className="infoItemContaier">
            <div>
              <p>Preço</p>
            </div>
            <div>
              <p className="infoItem">{`R$ ${currentItem.price},00`}</p>
            </div>
          </div>
        </div>
        <div id="divDescription">
          <div>
            <p id="descriptionItem">Descrição: </p>
          </div>
          <div>
            <p>{currentItem.description}</p>
          </div>
        </div>
        <div className="buttons">
          <button className="btn-update" onClick={incrementarItem}>
            Adicionar item
          </button>
          <button className="btn-update" onClick={decrementarItem}>
            Remover item
          </button>
          <BtnRemove itemId={currentItem.id} />
        </div>
      </div>
    </main>
  );
}
