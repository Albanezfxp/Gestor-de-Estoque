import useItemCollection from "../../hooks/useItemCollection";

export default function BtnRemove({ itemId }: { itemId: number }) {
  const { removeItem } = useItemCollection();
  return (
    <>
      <button id="excluirButton" onClick={() => removeItem(itemId)}>
        Excluir
      </button>
    </>
  );
}
