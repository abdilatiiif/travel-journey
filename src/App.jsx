import Header from "./components/Header";

import data from "./components/data";
import Entry from "./components/Entry";
console.log(data);

function App() {
  const countries = data.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return (
    <>
      <Header />
      {countries}
    </>
  );
}

export default App;
