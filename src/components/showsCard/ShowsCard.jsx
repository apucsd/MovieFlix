/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./showCard.css";
import { Link } from "react-router-dom";

const ShowsCard = ({ singleShow }) => {
  const [hover, setHover] = useState(false);
  const { id, name, image, language, rating } = singleShow?.show;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="col-lg-3 mb-3 shows-card"
    >
      <Link to={`/shows/${id}`}>
        <div className={`card ${hover ? "hovered" : ""}`}>
          <div className="image-container">
            <img
              src={
                image?.original ||
                "https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"
              }
              className="rounded w-100 border-0"
              style={{ height: "370px" }}
              alt="Show Image"
            />
          </div>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.5)",
            }}
            className={`overlay ${
              hover ? "d-block" : "d-none"
            }  position-absolute top-50 start-50 translate-middle w-100 h-100  p-3`}
          >
            <div className="text-light ">
              <p className="text-center fw-bold fs-3 mt-5 pt-4">
                ⭐ {rating?.average ? rating?.average : "N/A"}
              </p>
              <p className="text-center fs-1 mt-3">▶️</p>
              <p className=" pt-3 fs-1 fw-bolder">{name}</p>
              <p className="-mt-3">Language: {language}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShowsCard;
