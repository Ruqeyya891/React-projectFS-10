import heroImg from "../../assets/images/hero.png";
import coffeeCup from "../../assets/images/coffee-cup.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Make better coffee
          <img className="hero-cup" src={coffeeCup} alt="coffee cup" />
        </h1>
        <p>why learn how to blog?</p>
      </div>

      <img className="hero-img" src={heroImg} alt="illustration" />
    </section>
  );
}