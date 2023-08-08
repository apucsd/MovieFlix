import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
const BookTicket = () => {
  const navigate = useNavigate();
  const [disableBtn, setDisableBtn] = useState(false);
  const location = useLocation();
  const name = location?.state?.name;

  useEffect(() => {
    const existingShowData = JSON.parse(localStorage.getItem("shows"));

    const findData = existingShowData?.find(
      (singleShow) => singleShow.showName == name
    );
    if (findData) {
      setDisableBtn(true);
      document.querySelector("input[name='fullName']").defaultValue =
        findData?.fullName || "";
      document.querySelector("input[name='date']").defaultValue =
        findData?.date || "";
      document.querySelector("input[name='seat']").defaultValue =
        findData?.seat || "";
      document.querySelector("input[name='email']").defaultValue =
        findData?.email || "";
      document.querySelector("input[name='phoneNumber']").defaultValue =
        findData?.phoneNumber || "";
      document.querySelector("input[name='phoneNumber']").setAttribute =
        "disabled" || "";
    }
  }, [name]);

  const handleBookShow = (event) => {
    event.preventDefault();
    const form = event.target;
    const showName = form.showName.value;
    const fullName = form.fullName.value;
    const date = form.date.value;
    const seat = form.seat.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;

    console.log({ showName, fullName, date, seat, email, phoneNumber });
    const show = { showName, fullName, date, seat, email, phoneNumber };
    addToDb(show);
    toast.success("Your ticket is booked");
    navigate("/");
  };

  const addToDb = (show) => {
    const existingShows = JSON.parse(localStorage.getItem("shows")) || [];
    existingShows.push(show);
    localStorage.setItem("shows", JSON.stringify(existingShows));
    setDisableBtn(true);
  };

  return (
    <section className="bg-blur my-5 py-5 py-xl-8">
      <div className="container mb-5 mb-md-6">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
            <h2 className="mb-2 display-5 glow-text">Book Your Show</h2>
            <p className="text-secondary mb-4 mb-md-5"></p>
            <hr className="w-50 mx-auto mb-0 text-secondary" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-lg-center">
          <div className="col-12 col-lg-9">
            <div className="bg-blur border rounded overflow-hidden">
              <form onSubmit={handleBookShow}>
                <div className="row gy-4 gy-xl-2 p-4 p-xl-5">
                  <div className="col-12">
                    <label htmlFor="title" className="form-label">
                      Show Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      readOnly
                      name="showName"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Date <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </span>
                      <input
                        name="date"
                        type="date"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Total Seats <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <text
                            x="12"
                            y="16"
                            textAnchor="middle"
                            fontSize="10"
                            fill="currentColor"
                          >
                            {"1+"}
                          </text>
                        </svg>
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        id="seat"
                        required
                        name="seat"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-telephone"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                      </span>
                      <input
                        name="phoneNumber"
                        type="tel"
                        className="form-control"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="col-12 py-">
                    <div className="d-grid py-">
                      <input
                        className="btn btn-dark my-3"
                        type="submit"
                        value={` ${disableBtn ? "Already Booked" : "Book Now"}`}
                        disabled={disableBtn}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTicket;
