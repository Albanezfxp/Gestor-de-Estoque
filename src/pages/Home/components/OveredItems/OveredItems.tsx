import BtnSee from "../../../../components/BtnSee/BtnSee";
import useItemCollection from "../../../../hooks/useItemCollection";
import Conteudo from "./components/Conteudo";

export default function OveredItems() {
  const { item } = useItemCollection();
  return (
    <div className="sectionUnitContiner">
      <div className="sectionHeaderContainer">
        <div className="sectionTitleContainer">
          <h3>Itens acabando</h3>
        </div>
        <div id="sectionQuantityOver">
          <p>Qtd.</p>
        </div>
        <div className="sectionActionContainer">
          <p>Ações</p>
        </div>
      </div>
      <div className="itemContainer">
        {item.map((especific: any) =>
          especific.quantity < 10 ? (
            <>
              <div className="itemClassContainer">
                <Conteudo
                  key={especific.id}
                  quantity={especific.quantity}
                  name={especific.name}
                />
                <BtnSee itemId={especific.id} />
              </div>
            </>
          ) : null
        )}
      </div>
    </div>
  );
}
