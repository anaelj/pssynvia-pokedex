import "./App.css";
import { Header } from "./component/Header";
import GoogleFontLoader from "react-google-font-loader";
import { Pokedex } from './pages/Pokedex/index';

function App() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Titillium Web",
            weights: [400, 600, 700],
          },
        ]}
      />
      <Header />
      <Pokedex />
    </>
  );
}

export default App;
