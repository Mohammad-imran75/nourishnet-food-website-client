import { useRef } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedFood = () => {
  const formRef = useRef(null);

  const foodData = useLoaderData();
  const {
    food_name,
    food_photo,
    pickup_location,
    quantity,
    notes,
    expired_date,
    status,
  } = foodData;
  console.log(foodData);
  const handleUpdatedFood = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const food_photo = form.get("photo");
    const food_name = form.get("food_name");
    const pickup_location = form.get("location");
    const quantity = form.get("quantity");
    const notes = form.get("additional_notes");
    const expired_date = form.get("expired_date");
    const status = form.get("status");
    const _id = foodData._id;
    const updatedFoodInfo = {
      food_name,
      food_photo,
      pickup_location,
      quantity,
      notes,
      expired_date,
      status,
    };
    console.log(updatedFoodInfo);
    fetch(`https://foodhaven-project.vercel.app/foodsitem/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFoodInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          formRef.current.reset();
          Swal.fire({
            icon: "success",
            title: "Yeah....",
            text: "updated in Successfull!",
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
      <form ref={formRef} onSubmit={handleUpdatedFood}>
        <div className="grid md:grid-cols-2 gap-6 lg:max-w-5xl p-10 mx-auto mt-10 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Image</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Food Image"
              defaultValue={food_photo}
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
              defaultValue={food_name}
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
              defaultValue={quantity}
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
              defaultValue={pickup_location}
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
              <span className="label-text">Food Status</span>
            </label>
            <input
              type="text"
              placeholder="Food Status"
              name="status"
              defaultValue={status}
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
        </div>

        <div className="form-control p-10 lg:max-w-5xl mx-auto">
          <button className="btn btn-primary w-full bg-orange-500">
            Updated food Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatedFood;
