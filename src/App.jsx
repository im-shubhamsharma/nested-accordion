import Accordion from "./components/Accordion/Accordion";
import data from "./data";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h2>Nested Accordion</h2>
      <div className="accordion-container">
        {data.map((item) => (
          <Accordion key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
