import React, { memo } from "react";

export const GIFContainer = memo(({ data }) => (
  <div style={styles.container}>
    {data.map(gif => (
      <GIF gif={gif} key={gif.id} />
    ))}
  </div>
));

export const GIF = ({ gif }) => (
  <div style={styles.img}>
    <img src={gif.images.downsized.url} alt="" />
  </div>
);

const styles = {
  container: {
    width: "50vw",
    border: "2px solid black",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "2rem"
  },
  img: {
    backgroundSize: "contain",
    margin: "1rem"
  }
};
