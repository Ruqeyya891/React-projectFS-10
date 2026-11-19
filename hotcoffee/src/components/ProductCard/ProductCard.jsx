import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img className="product-card-img" src={product.image} alt={product.title} />

      <div className="product-card-body">
        <h3>{product.title}</h3>
        <p>{product.excerpt}</p>

        <div className="product-card-footer">
          <span className="product-card-date">{product.date}</span>
          <Link to={`/product/${product.id}`} className="product-card-link">
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}