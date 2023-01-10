import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <>
      <div id="content-wrapper">
        <section class="homePage full-height px-lg-5 d-flex flex-column justify-content-center align-items-center">
          <a href="/shop" className="rounded-pill">
            <Button className=" shopNow" size="lg" variant="warning">
              Shop now
            </Button>
          </a>
        </section>
        <br></br>
        <br></br>
        <section class="full-height px-lg-5 d-flex flex-column text-center">
          <h1 className="text-warning fw-bold"> What is Makishimota?</h1>
          <p className="p-3 ">
            Makishimota is a brand developed in January 2022 by Makishi Asemota.
            With the intention to develop his own clothing brand, Makishi began
            expirimenting with different fabrics, textures, and yarn. Today,
            Makishimota has grown into a custom wear brand with one-of-one
            handmade pieces created for each customer with the upmost highest
            quality.
          </p>
        </section>

        <footer className="py-5 px-lg-5">
          <div className="container">
            <div className="row gy-4 justify-content-between">
              <div className="col-auto">
                <p className="mb-0 text-warning">Copyright @ 2023 Makishi</p>
              </div>
              <div className="col-auto">
                <div className="social-icons">
                  <a
                    className="link-light text-decoration-none"
                    href="https://github.com/makishi-asemota"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
