import React from "react";

function Details({ genre, status }) {
  return (
    <div>
      <p>Genre: {genre}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default Details;
