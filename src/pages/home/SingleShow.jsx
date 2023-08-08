/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-unknown-property */
import { Link, useParams } from "react-router-dom";
import useData from "../../utils/useData";

const SingleShow = () => {
  const { id } = useParams();
  const { shows } = useData();

  const show = shows.find((singleShow) => singleShow.show.id == id);
  if (!show) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  const { name, image, language, summary, genres } = show?.show;

  return (
    <div>
      {show && (
        <div className="p-5 mb-4 mt-5 mx-0 row bg-blur">
          <div className="col-6 text-center">
            <img
              style={{ width: "300px", margin: "0 auto" }}
              src={image?.original}
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <div>
              <div>
                <h2 className="fw-bolder display-3 text-light">{name}</h2>
              </div>
            </div>
            <div className="">
              <div>
                <p dangerouslySetInnerHTML={{ __html: summary }} />
              </div>
              <div style={{ color: "white" }} className="d-flex gap-2">
                <span className="fw-bold"> Genres:</span>{" "}
                {genres.map((gen, index) => (
                  <p key={index}>{gen},</p>
                ))}
                <p className="ms-4">
                  <span className="fw-bold">Language:</span> {language}
                </p>
              </div>
            </div>
            <div>
              <Link
                className="btn btn-dark"
                to="/shows/book-ticket"
                state={{ name }}
              >
                Book A Ticket
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleShow;
