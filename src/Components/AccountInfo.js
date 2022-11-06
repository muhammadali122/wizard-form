import React, { useState } from "react";
import "./AccountInfo.css";
import Footer from "./Footer";

function AccountInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  //check if valid
  const valid = (item, vIcon, invIcon) => {
    let text = document.querySelector(`.${item}`);
    text.style.opacity = "1";
    text.style.color = "green";

    let validIcon = document.querySelector(`.${item} .${vIcon}`);
    validIcon.style.opacity = "1";
    validIcon.style.color = "green";

    let invalidIcon = document.querySelector(`.${item} .${invIcon}`);
    invalidIcon.style.opacity = "0";
  };

  //check if invalid
  const inValid = (item, vIcon, invIcon) => {
    let text = document.querySelector(`.${item}`);
    text.style.opacity = "1";
    text.style.color = "red";

    let validIcon = document.querySelector(`.${item} .${vIcon}`);
    validIcon.style.opacity = "0";

    let invalidIcon = document.querySelector(`.${item} .${invIcon}`);
    invalidIcon.style.opacity = "1";
    invalidIcon.style.color = "red";
  };

  //handel password input
  const handleInputChange = (e) => {
    setPassword(e.target.value)

    //for checking capital lettter in password
    if (password.match(/[A-Z]/) != null) {
      valid("upercase-char", "icon-check", "icon-x");
    } else {
      inValid("upercase-char", "icon-check", "icon-x");
    }

    //for checking special characters in password
    if (password.match(/[!@#$%^&*]/) != null) {
      valid("special-char", "icon-check", "icon-x");
    } else {
      inValid("special-char", "icon-check", "icon-x");
    }

    //for checking password consist of 6 char
    if (password.length >= 6) valid("six-char", "icon-check", "icon-x");
    else {
      inValid("six-char", "icon-check", "icon-x");
    }
  };
  

  return (
    <>
      <div className="container account-container py-3">
        <section>
          <p className="fw-light text-secondary">Step 1</p>
          <h2 className="fw-bold accountHead">Account Info</h2>
        </section>
        <main>
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="profile-avatar"
            className="profile-img d-block d-md-inline my-4"
          />
          <div className="d-block d-md-inline mt-3">
            <label htmlFor="input-img" className="ms-3 btn main-btn px-3">
              Upload new picture
            </label>
            <input className="form-control" id="input-img" type="file" hidden />
            <button className="ms-2 btn main-btn px-3">Delete</button>
          </div>

          <form className="d-flex ">
            <div className="row">
              <div className="col-lg-6 mt-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-6 mt-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col-sm-12 mt-3">
                <p>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    className="form-control d-inline-block"
                    id="password"
                    type="password"
                    required
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </div>
          </form>
          <div className="password-validation">
            <p className="six-char">
              <i className="bi bi-dash icon-x"></i>
              <i className="bi bi-check icon-check"></i>
              <span>At least six characters</span>
            </p>
            <p className="special-char">
              <i className="bi bi-dash icon-x"></i>
              <i className="bi bi-check icon-check"></i>
              <span>At least one special character</span>
            </p>
            <p className="upercase-char">
              <i className="bi bi-dash icon-x"></i>
              <i className="bi bi-check icon-check"></i>
              <span>At least one uppercase character</span>
            </p>
          </div>
        </main>
      </div>
      {name !== "" &&
      email !== "" &&
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
      password !== null &&
      password.match(/[A-Z]/) &&
      password.match(/[!@#$%^&*]/) &&
      password.length > 4 ? (
        <Footer
          type="submit"
          showBack={false}
          pageNumber={"1"}
          next={"Next"}
          icon={"→"}
          prevPage={"/"}
          nextPage={"/product"}
          progress={"33.333%"}
        />
      ) : (
        <div className="container-fluid text-center">
          <p className="text-warning">Please enter all info correct</p>
        </div>
      )}
    </>
  );
}

export default AccountInfo;
