import { useState } from "react";
import "./NewItem.css";
import useItemCollection from "../../hooks/useItemCollection";

export default function NewItem() {
  const { addItems } = useItemCollection();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    addItems({
      name,
      quantity: Number(quantity),
      price: Number(price),
      description,
      category,
    });
    setName("");
    setQuantity("");
    setPrice("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="newItemContainer">
      <form className="newItemForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Nome do Item:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="quantity">Quantidade:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(ev) => setQuantity(ev.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="category">Categoria:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(ev) => setCategory(ev.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            required
          />
        </div>

        <button type="submit" className="submitButton">
          Adicionar Item
        </button>
      </form>
    </div>
  );
}
