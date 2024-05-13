import { useContext } from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {signUpInUser,updateUser} = useContext(AuthContext);
    const handleSignUp = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const name = form.get('name');
        const password = form.get('password');
        const photo = form.get('photo')
        console.log(email,name,password);
        if (password.length < 6) {
            Swal.fire({
              icon: "error",
              title: "oops....",
              text: "Password must be at least six character",
            });
          }
          if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            Swal.fire({
              icon: "error",
              title: "oops....",
              text: "Password must have at least one uppercase and one lowercase letter",
            });
            return;
          }
        signUpInUser(email,password,name,photo)
        .then(()=>{
            updateUser(name,photo)
            .then(()=>{
                navigate(location?.state ? location.state : "/login");
                Swal.fire({
                    icon: "success",
                    title: "Yeah....",
                    text: "Registration in successfull!",
                  });
    
            })
        }).catch(error=>console.log(error));
    }
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-purple-300 via-[#ff7e5f] to-[#feb47b]">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="lg:w-[600px]" src="https://i.ibb.co/thh5h9y/333073-P9-ZZLU-520.jpg" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl text-blue-400 font-bold text-center">WelCome to Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
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
              <button className="btn btn-primary bg-[#FF3811]">Sign Up</button>
            </div>
            <p className="text-center">or Sign up with</p>
            <div className="text-2xl flex mt-5 justify-center gap-5">
              <FaGoogle></FaGoogle>
              <FaInstagram></FaInstagram>
              <FaFacebook></FaFacebook>
            </div>
          </form>
          <h1 className="text-center mb-4 font-bold">Already Have an Accout? <Link
           className="text-orange-600" to='/login'>Login</Link></h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
