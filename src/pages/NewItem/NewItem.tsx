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
    <>
      <main>
        <div id="mainContainer">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantidade:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price">Preço:</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="category">Categoria:</label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Selecione a categoria</option>
                <option value="Jogos">Jogos</option>
                <option value="Livros">Livros</option>
                <option value="Figure">Art-Figure</option>
                <option value="Acessorios">Acessorios</option>
                <option value="Eleronicos">Eleronicos</option>
                <option value="Domesticos">Domesticos</option>
                <option value="Esportes">Esportes</option>
                <option value="Visual">Visual</option>
              </select>
            </div>
            <div>
              <label htmlFor="description">Descrição:</label>
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
    </>
  );
}
