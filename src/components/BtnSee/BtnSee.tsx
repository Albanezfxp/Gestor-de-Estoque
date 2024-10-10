import { Link } from "react-router-dom";
import "./BtnSee.css";

export default function BtnSee({ itemId }: { itemId: any }) {
  return (
    <div className="buttonAcion">
      <Link className="btnSee" to={`/items/itemDetails/${itemId}`}>
        Ver
      </Link>
    </div>
  );
}
