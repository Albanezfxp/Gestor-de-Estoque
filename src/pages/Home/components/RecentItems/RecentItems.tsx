import useItemCollection from "../../../../hooks/useItemCollection";
import BtnSee from "../../../../components/BtnSee/BtnSee";

export default function RecentItems() {
  const { item, sevenDays } = useItemCollection();

  return (
    <div className="sectionUnitContiner">
      <div className="sectionHeaderContainer">
        <div className="sectionTitleContainer">
          <h3>Itens recentes</h3>
        </div>
        <div className="sectionActionContainer">
          <p>Ações</p>
        </div>
      </div>
      <div className="itemContainer">
        {item.map((especific) =>
          sevenDays(especific.day) ? (
            <div key={especific.id} id="itenClassContainer">
              <div id="itemRecentTitle">
                <p>{especific.name}</p>
              </div>
              <BtnSee itemId={especific.id} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
