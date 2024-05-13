import { FaGoogle} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");

    const password = form.get("password");
    console.log(email, password);
    loginUser(email, password)
      .then((data) => {
        const loggedUser = data.user;
        console
          .log(loggedUser)

          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-purple-300 via-[#ff7e5f] to-[#feb47b]">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="lg:w-[500px]" src="https://i.ibb.co/thh5h9y/333073-P9-ZZLU-520.jpg" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login in</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#FF3811]">Sign In </button>
            </div>
            <p className="text-center">or Sign up with</p>
            <div className="text-2xl flex mt-5 justify-center gap-5">
              <FaGoogle></FaGoogle>
            </div>
          </form>
          <h1 className="text-center mb-4 font-bold">
            Have an Accout?
            <Link className="text-orange-600" to="/register">
              sign In
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
