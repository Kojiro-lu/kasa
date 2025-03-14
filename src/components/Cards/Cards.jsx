import { Link } from "react-router-dom";
import "./Cards.scss";

function Card({ id, title, cover }) {
  return (
    <Link to={`FicheLogement/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <h3 className="card__title">{title}</h3>
    </Link>
  );
}

export default Card;
