import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="innerContainer">
          <img
            src={require("./img/makishimota.JPG")}
            alt="makishimota"
            className="rounded home-image"
          />
          <h1 className="cover-heading text-warning"> What is Makishimota?</h1>
          <p className="lead">
            Makishimota is a brand developed in January 2022 by Makishi Asemota.
            With the intention to develop his own clothing brand, Makishi began
            expirimenting with different fabrics, textures, and yarn. Today,
            Makishimota has grown into a custom wear brand with one-of-one
            handmade pieces created for each customer with the upmost highest
            quality.
          </p>
          <a href="/shop">
            <Button variant="warning">Shop now</Button>{" "}
          </a>
        </div>
      </div>
    </>
  );
}
