import React from "react";

export const Loading = () => {
  return (
    <div className="loading__main">
      <h1 className="title">Loading </h1>
      <div className="spinner-border text-light" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};