import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div id="logoContainer">
        <h1 id="logoItem">GA Stock</h1>
      </div>
      <nav>
        <div id="navContainer">
          <ul>
            <li>
              <Link className="linkNav" to={"/"}>
                Inicio
              </Link>
            </li>
            <li>
              <Link className="linkNav" to={"/items"}>
                Items
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
