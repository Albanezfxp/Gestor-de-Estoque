import useItemCollection from "../../hooks/useItemCollection";
import EspecificContainer from "./components/EspecificContainer/EpecificContainer";
import ItemDiv from "./components/Item/ItemDiv";
import "./Items.css";

export default function Items() {
  const { item, removeItem } = useItemCollection();
  return (
    <>
      <main>
        <EspecificContainer />
        {item.length > 0 ? (
          item.map((especific) => (
            <>
              <ItemDiv
                key={especific.id}
                id={especific.id}
                name={especific.name}
                quantity={especific.quantity}
                category={especific.category}
                onRemove={() => removeItem(especific.id)}
              />
            </>
          ))
        ) : (
          <h2 style={{ padding: "50px 20px" }}>Vazio</h2>
        )}
      </main>
    </>
  );
}
