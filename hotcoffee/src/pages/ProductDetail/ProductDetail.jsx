
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { products } from "../../data/products";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="detail">
        <h2>Product tapılmadı</h2>
        <Link to="/" className="detail-back">
          <FiArrowLeft /> Geri
        </Link>
      </div>
    );
  }

  return (
    <div className="detail">
      <Link to="/" className="detail-back">
        <FiArrowLeft /> Geri
      </Link>

      <div className="detail-content">
        <div className="detail-left">
          <img
            src={product.image}
            alt={product.title}
            className="detail-img"
          />
        </div>

        <div className="detail-right">
          <span className="detail-date">{product.date}</span>
          <h1>{product.title}</h1>
          <p>{product.content}</p>
        </div>
      </div>
    </div>
  );
}
