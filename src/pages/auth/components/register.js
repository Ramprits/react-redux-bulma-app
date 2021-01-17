import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../../actions/user";

function Register() {
  const { loading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "Ramprit Sahani",
      email: "rampritsahani@gmail.com",
      password: "Ramprit@1234"
    }
  });
  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="is-max-w-md mx-auto">
          <div className="mb-6 has-text-centered">
            <Link to="/auth/login">
              <img
                src="../../../metis-assets/logos/metis/metis.svg"
                alt=""
                width="106"
              />
            </Link>
          </div>
          <div className="has-text-centered">
            <span className="subtitle is-spaced">Sign In</span>
            <h4 className="title is-size-3">Join our community</h4>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <div className="field">
                  <div className="control has-icons-right">
                    <input
                      className={`input ${!!errors.name ? "is-danger" : ""}`}
                      type="text"
                      name="name"
                      ref={register({ required: true })}
                      placeholder="John smith"
                    />
                    <span className="icon is-small is-right">
                      <svg
                        className="image is-24x24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <div className="control has-icons-right">
                    <input
                      className={`input ${!!errors.email ? "is-danger" : ""}`}
                      type="email"
                      name="email"
                      ref={register({ required: true })}
                      placeholder="name@email.com"
                    />
                    <span className="icon is-small is-right">
                      <svg
                        className="image is-24x24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-icons-right">
                    <input
                      className={`input ${
                        !!errors.password ? "is-danger" : ""
                      }`}
                      type="password"
                      name="password"
                      ref={register({ required: true })}
                      placeholder="Enter your password"
                    />
                    <span className="icon is-small is-right">
                      <svg
                        className="image is-24x24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="field mb-5">
                  <div className="control">
                    <button
                      type="submit"
                      className={`button is-primary is-fullwidth ${
                        loading ? "is-loading" : ""
                      }`}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <p className="mb-5">or continue with</p>
                <button
                  className="mb-3 button is-dark is-outlined is-fullwidth"
                  type="button"
                >
                  <img
                    className="mr-2"
                    src="../metis-assets/logos/facebook-sign.svg"
                    alt=""
                  />
                  <span>Sign In with Facebook</span>
                </button>
                <button
                  className="button is-dark is-outlined is-fullwidth"
                  type="button"
                >
                  <img
                    className="mr-2"
                    src="../metis-assets/logos/google-sign.svg"
                    alt=""
                  />
                  <span>Sign In with Google</span>
                </button>
              </div>
            </form>
            <div>
              <p>
                <Link to="/privacy">Police privacy</Link> and{" "}
                <Link to="/terms">Terms of Use</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
