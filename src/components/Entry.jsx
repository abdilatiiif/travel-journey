/* eslint-disable react/prop-types */
export default function Entry(props) {
  console.log(props);
  return (
    <section className="entry--container">
      <img className="entry--img" src={props.img.src} alt={props.img.alt} />
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
          {props.country} <a href={props.url}>View on Google Maps</a>{" "}
        </p>
        <h2>{props.city}</h2>
        <strong>{props.date}</strong>
        <p>{props.description}</p>
      </div>
    </section>
  );
}
