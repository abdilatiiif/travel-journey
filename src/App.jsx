import Header from "./components/Header";

import data from "./components/data";
import Entry from "./components/Entry";
console.log(data);

function App() {
  const countries = data.map((c) => {
    console.log(c.img.src);
    return (
      <Entry
        key={c.id}
        img={c.img.src}
        city={c.title}
        country={c.country}
        url={c.url}
        date={c.date}
        description={c.text}
      />
    );
  });

  return (
    <>
      <Header />
      {countries}
    </>
  );
}

export default App;
