import { useContext, useRef } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddFood = () => {
  const formRef = useRef(null);
  const {user} = useContext(AuthContext);
  console.log(user);
  const handleAddedFood = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const food_photo = form.get("photo");
    const food_name = form.get("food_name");
    const pickup_location = form.get("location");
    const quantity = form.get("quantity");
    const notes = form.get("additional_notes");
    const expired_date = form.get("expired_date");
    const status = form.get('status');  
    const user_email = form.get("email");
    const user_name = form.get("user_name");
    const user_image = form.get("user_image");
    const foodInfo = {
     food_name,food_photo,pickup_location,quantity,notes,expired_date,status,user_email,user_name,user_image
    };
    console.log(foodInfo)
    fetch("https://nourishnet-food-website-server.vercel.app/foodsitem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foodInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          formRef.current.reset();
          Swal.fire({
            icon: "success",
            title: "Yeah....",
            text: "Added in Successfull!",
          });
        }
      });
  };
  return (
    <div className="bg-stone-200 font-montserrat font-bold">
      <Helmet>
        <title>Add Food Item </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <form ref={formRef} onSubmit={handleAddedFood}>
        <div className="grid md:grid-cols-2 gap-6 lg:max-w-5xl p-10 mx-auto mt-10 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Image</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Food Image"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="food_name"
              placeholder="Food Name"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Food Quantity"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pick Up location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="location"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Expired Time/date</span>
            </label>
            <input
              type="date"
              name="expired_date"
              placeholder="Expired time/date"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Additional Notes</span>
            </label>
            <input
              type="text"
              name="additional_notes"
              placeholder="Additional Notes"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Status</span>
            </label>
            <input
              type="text"
              placeholder="Food Status"
              name="status"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="text-orange-600 font-bold text-3xl">
            Donetor Information
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:max-w-5xl p-10 mx-auto mt-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="User Email"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">User name</span>
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="User Name"
              defaultValue={user?.displayName}
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Image</span>
            </label>
            <input
              type="text"
              name="user_image"
              placeholder="User image"
              defaultValue={user?.photoURL}
              className="input input-bordered input-secondary w-full "
              
            />
          </div>
        </div>

        <div className="form-control p-10 lg:max-w-5xl mx-auto">
          <button className="btn btn-primary w-full bg-orange-500">
            Add Food Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
