import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const SearchBar = ({ animal, setAnimal, setCustomParam }) => {
  const [input, setInput] = useState("");

  return (
    <div style={styles.container}>
      <h1>LETS HAVE SOME FUN WITH GIFS!!</h1>
      <div>
        <FormControl>
          <Select
            style={styles.select}
            value={animal}
            onChange={({ target }) => {
              setAnimal(target.value);
            }}
          >
            <MenuItem value={"cats"}>Cats!</MenuItem>
            <MenuItem value={"Dogs"}>Dogs!</MenuItem>
            <MenuItem value={"elephants"}>Elephants!</MenuItem>
            <MenuItem value={"lions"}>Lions!</MenuItem>
            <MenuItem value={"monkeys"}>Monkeys!</MenuItem>
          </Select>
        </FormControl>
        <TextField
          style={styles.input}
          value={input}
          onChange={({ target }) => setInput(target.value)}
          placeholder="OR search for anything!"
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setCustomParam(input || animal);
          }}
        >
          GIPHY ME!
        </Button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem"
  },
  select: {
    width: "10rem",
    marginRight: "2rem"
  },
  input: {
    width: "12rem",
    marginRight: "2rem"
  }
};
