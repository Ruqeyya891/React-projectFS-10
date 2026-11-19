import "./Home.css";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="products">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </>
  );
}