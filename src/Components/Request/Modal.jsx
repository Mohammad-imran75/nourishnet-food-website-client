import { useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Modal = () => {
  const requestFood = useLoaderData();
  // console.log(requestFood)
  const { user } = useContext(AuthContext);
  const formRef = useRef(null);
  const {
    food_name,
    food_photo,
    pickup_location,
    notes,
    expired_date,
    _id,
    user_email,
    user_name,
    quantity
  } = requestFood;
  const handleFoodRequest = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const food_photo = form.get("photo");
    const food_name = form.get("food_name");
    const donetor_email = form.get("donetor_email")
    const pickup_location = form.get("location");
    const notes = form.get("additional_notes");
    const expired_date = form.get("expired_date");
    const donetor_name = form.get('donetor_name');
    const user_email = form.get("email");
    const request_date = form.get('request_date');
    const food_id = form.get('food_id');
    
    const foodInfo = {
      food_name,
      food_photo,
      donetor_name,
      pickup_location,
      notes,
      expired_date,
      user_email,
      donetor_email,
      food_id,
      request_date
    };
    console.log(foodInfo);
    fetch("https://foodhaven-project.vercel.app/request", {
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
          // quantity descress
          fetch(`https://foodhaven-project.vercel.app/quantity?id=${food_id}`,{
            method:"PUT",
            headers: {
              "content-type": "application/json",
            },
          }).then(res=>res.json())
          .then(updatedData=> console.log(updatedData))
          Swal.fire({
            icon: "success",
            title: "Yeah....",
            text: "request in Successfull!",
          });

        }
      });
  };
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center text-orange-900 mt-10 border-b-2 border-orange-700 pb-2">
          Donator Information
        </h2>
        <div className="flex flex-col mt-4 space-y-2 items-center bg-red-300 py-2">
          <h1 className="font-bold opacity-70">
            Donator Name : <span>{user_name}</span>
          </h1>
          <p>Food pickUp Location : {pickup_location}</p>
        </div>
      </div>

      <div>
        <div className="max-w-lg mx-auto p-4 shadow-md mt-3 bg-amber-300  dark:text-gray-800">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <a
                rel="noopener noreferrer"
                href="#"
                className="mb-0 capitalize dark:text-gray-800"
              >
                Photography
              </a>
            </div>
            <a rel="noopener noreferrer" href="#">
              See All
            </a>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={food_photo}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="flex items-center text-xs">
                <span>{expired_date}</span>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-violet-600">
                  {notes}
                </h3>
              </a>
              <p className="leading-snug font-semibold text-gray-600">
                Food Name : {food_name}
              </p>
              <p className="leading-snug font-semibold text-gray-600">
                Food quantity : {quantity}
              </p>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="w-full btn btn-square bg-orange-700"
            >
              Request
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form ref={formRef} onSubmit={handleFoodRequest}>
            <div className="grid md:grid-cols-2 gap-6 lg:max-w-5xl p-10 mx-auto mt-10 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Image</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  readOnly
                  defaultValue={food_photo}
                  placeholder="Food Image"
                  className="input input-bordered input-secondary w-full "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Donetor Email</span>
                </label>
                <input
                  type="text"
                  readOnly
                  name="donetor_email"
                  defaultValue={user_email}
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
                  readOnly
                  placeholder="Food Name"
                  defaultValue={food_name}
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
                  readOnly
                  defaultValue={pickup_location}
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
                  readOnly
                  defaultValue={expired_date}
                  placeholder="Expired time/date"
                  className="input input-bordered input-secondary w-full "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Request Time/date</span>
                </label>
                <input
                  type="date"
                  name="request_date"
                  readOnly
                  defaultValue={expired_date}
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
                  defaultValue={notes}
                  placeholder="Additional Notes"
                  className="input input-bordered input-secondary w-full "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  readOnly
                  defaultValue={user?.email}
                  placeholder="User Email"
                  className="input input-bordered input-secondary w-full "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Id</span>
                </label>
                <input
                  type="text"
                  readOnly
                  name="food_id"
                  placeholder="Food Id"
                  defaultValue={_id}
                  className="input input-bordered input-secondary w-full "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Donetor Name</span>
                </label>
                <input
                  type="text"
                  readOnly
                  name="donetor_name"
                  placeholder="Donetor Name"
                  defaultValue={user_name}
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
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
