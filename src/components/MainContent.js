import React from "react";
import Rating from 'react-rating'

export const MainContent = ({
  alt,
  day,
  img,
  link,
  month,
  news,
  num,
  safe_title,
  transcription,
  year,
}) => {
  return (
    <div className="maincontent_main">
      <div className="card animate__animated animate__fadeIn">
        <img src={img} className="card-img-top" alt={safe_title} />
        <div className="card-body">
          <h5 className="card-title">{safe_title}</h5>
          {alt && <h6 className="card-subtitle mb-2 text-muted">{alt}</h6>}
          <ul className="list-group list-group-flush">
          <li className="list-group-item" id="stars">
            <Rating initialRating={0} onChange={(rate) => alert(rate)}/>
          </li>
            {day && (
              <li className="list-group-item">
                <strong>Day:</strong> {day}
              </li>
            )}
            {month && (
              <li className="list-group-item">
                <strong>Month:</strong> {month}
              </li>
            )}
            {year && (
              <li className="list-group-item">
                <strong>Year:</strong> {year}
              </li>
            )}
            {num && (
              <li className="list-group-item">
                <strong>Number:</strong> {num}
              </li>
            )}
            {transcription && (
              <li className="list-group-item">
                <strong>Transcription:</strong> {transcription}
              </li>
            )}
            {link && (
              <li className="list-group-item">
                <strong>Link:</strong> {link}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
