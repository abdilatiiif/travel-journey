export default function Entry() {
  return (
    <section className="entry--container">
      <img className="entry--img" src="src/assets/fuji.png" alt="mount" />
      <div className="entry--info">
        <p>
          {" "}
          <span>
            {" "}
            <img
              className="entry--marker"
              src="src/assets/marker.png"
              alt="marker"
            />{" "}
          </span>{" "}
          Japan <a href="">View on Google Maps</a>{" "}
        </p>
        <h2>Mount Fuji</h2>
        <strong>12 Jan, 2021 - 24 Jan, 2021</strong>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </section>
  );
}
