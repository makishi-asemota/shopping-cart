export default function Home() {
  return (
    <div className="home-container">
      <h1>Makishimota</h1>
      <img
        src={require("./img/makishimota.JPG")}
        alt="makishimota"
        className="home-image"
      />

      <p className="home-caption">
        Makishimota is a brand developed in January 2022 by Makishi Asemota.
        With the intention to develop his own clothing brand, Makishi began
        expirimenting with different fabrics, textures, and yarn. Today,
        Makishimota has grown into a custom wear brand with one-of-one handmade
        pieces created for each customer with the upmost highest quality.
      </p>
    </div>
  );
}
