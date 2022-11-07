import React from "react";
import Footer from "./Footer";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className='container contact-container'>
        <section>
          <div className="row justify-content-center ">
            <div className="col-12 col-md-8 ">
              <p className="fw-light text-secondary d-none d-md-block">Step 3</p>
              <p className="fw-light text-secondary d-block d-md-none">Step 3 of 3</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <h2 className="fw-bold accountHead">Contact</h2>
            </div>
          </div>
        </section>
        <main>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 ">
              <p className='fw-light text-secondary mt-4'>Select a Contact method:</p>
            </div>
          </div>
          <div className="row justify-content-center mb-2">
            <div className="col-12 col-md-8 px-0">
              <div className="form-check p-3   rounded">
                <input
                  className="form-check-input ms-2"
                  type="checkbox"
                  id="phonecall"
                />
                <label className="form-check-label fw-bold ms-4" htmlFor="phonecall">
                  Phone call
                </label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-2">
            <div className="col-12 col-md-8 px-0">
              <div className="form-check p-3  rounded">
                <input
                  className="form-check-input ms-2"
                  type="checkbox"
                  id="videoCall"
                />
                <label className="form-check-label fw-bold ms-4" htmlFor="videoCall">
                  Video call
                </label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-12 col-md-8 px-0">
              <div className="form-check p-3   rounded " >
                <input
                  className="form-check-input ms-2"
                  type="checkbox"
                  id="email"
                />
                <label className="form-check-label fw-bold ms-4" htmlFor="email">
                  Email
                </label>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer showBack={true} pageNumber={'3'} next={'Submit'} icon={'✓'} prevPage={"/product"} nextPage={"/contact"}  progress={'100%'}/>
    </>
  );
}

export default Contact;
