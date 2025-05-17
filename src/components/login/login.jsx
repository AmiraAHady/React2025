/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passError: "",
  });

  const handelChange = (event) => {
    if (event.target.name == "email") {
      if (!event.target.value.includes("@")) {
        setErrors({ ...errors, emailError: "InValid Email" });
      }
      setUser({ ...user, email: event.target.value });
    } else if (event.target.name == "password") {
      event.target.value.length <= 0
        ? setErrors({ ...errors, passError: "Required" })
        : event.target.value.length < 8
        ? setErrors({ ...errors, passError: "at least 8 charters" })
        : setErrors({ ...errors, passError: "" });

      setUser({ ...user, password: event.target.value });
    }
    // setUser({...user,[event.target.name]: event.target.value})
    // console.log(user);
  };

  const handelSubmit=(ev)=>{
    if(errors.emailError&&errors.passError){
        ev.preventDefault()
    }
    
  }

  return (
    <>
      <form onSubmit={(ev)=>handelSubmit(ev)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(ev) => handelChange(ev)}
            // onChange={(ev) =>
            // {
            //     setUser({...user,email:ev.target.value})
            //     console.log(user);
            // }

            // }
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div className="form-text text-danger">
            {errors.emailError}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={user.password}
            onChange={(ev) => handelChange(ev)}
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-text text-danger">
            {errors.passError}
          </div>

        <button type="submit" className="btn btn-primary" disabled={errors.emailError&&errors.passError}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
