import "./ExpecificContainer.css";

export default function EspecificContainer() {
  return (
    <>
      <div id="especificContainer">
        <ul>
          <li>ID</li>
          <div>
            <li>Nome</li>
            <li>Em estoque</li>
            <li>Categoria</li>
            <div className="action">
              <li>Ações</li>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
