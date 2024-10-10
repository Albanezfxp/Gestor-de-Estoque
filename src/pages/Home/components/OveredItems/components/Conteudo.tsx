import "./Conteudo.css";
export default function Conteudo(props: any) {
  return (
    <div className="itemOverContainer">
      <div className="itemTitle">
        <p className="nameOver">{props.name}</p>
      </div>
      <div className="quantityContainer">
        <p>{props.quantity}</p>
      </div>
    </div>
  );
}
