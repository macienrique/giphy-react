import React, { useState } from "react";
import { GetGIFS } from "./services/GetGIFS";
import { GIFContainer } from "./components/GifContainer";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [customParam, setCustomParam] = useState("");
  const [data, loading] = GetGIFS(customParam);
  const [animal, setAnimal] = useState("");

  return (
    <div style={styles.container}>
      {loading ? (
        <h1>It's GIF time!</h1>
      ) : (
        <div style={styles.content}>
          <SearchBar
            animal={animal}
            setAnimal={setAnimal}
            setCustomParam={setCustomParam}
          />
          <GIFContainer data={data} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center"
  },
  content: {
    margin: "5rem"
  }
};

export default App;
