import "./App.css";
import Form from "./Form";
import Table from "./table";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col-lg-6 col-4">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
        </div>
        <div className="row row-cols-2 gy-2">
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus
          augue, lacinia sed vehicula vitae, tincidunt id lacus. Sed mollis nibh
          ante, sed rutrum magna blandit at. Curabitur at urna leo. Etiam non
          est vitae arcu maximus gravida at at quam. Nam dictum rutrum tortor
          vitae scelerisque. Aenean tempor faucibus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Integer purus augue, lacinia sed vehicula
          vitae, tincidunt id lacus. Sed mollis nibh ante, sed rutrum magna
          blandit at. Curabitur at urna leo. Etiam non est vitae arcu maximus
          gravida at at quam. Nam dictum rutrum tortor vitae scelerisque. Aenean
          tempor faucibus.
        </p>
        <Form />
        <Table />
      </div>
    </div>
  );
}

export default App;
