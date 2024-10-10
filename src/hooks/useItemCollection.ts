import { useState } from "react";

type Item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
  day: number;
};

const sevenDays = (data: number | Date): boolean => {
  const agora = new Date();
  const dataReferencia = typeof data === "number" ? new Date(data) : data;

  const diferencaEmMilissegundos = agora.getTime() - dataReferencia.getTime();
  const seteDiasEmMilissegundos = 7 * 24 * 60 * 60 * 1000;

  return diferencaEmMilissegundos < seteDiasEmMilissegundos;
};

export default function useItemCollection() {
  const [item, setItem] = useState<Item[]>(() => {
    const storedItems = localStorage.getItem("obc-item-lib");
    if (!storedItems) return [];
    return JSON.parse(storedItems);
  });

  const addItems = ({
    name,
    quantity,
    price,
    description,
    category,
  }: {
    name: string;
    quantity: number;
    price: number;
    description: string;
    category: string;
  }) => {
    const id = Math.floor(Math.random() * 1000);
    const day = new Date().getTime();
    const item = {
      id,
      name,
      quantity,
      price,
      description,
      category,
      day,
    };

    setItem((state) => {
      const newState = [...state, item];
      localStorage.setItem("obc-item-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const removeItem = (id: number) => {
    setItem((state) => {
      const newState = state.filter((item) => item.id !== id);
      localStorage.setItem("obc-item-lib", JSON.stringify(newState));
      return newState;
    });
  };

  return { setItem, item, addItems, removeItem, sevenDays };
}
