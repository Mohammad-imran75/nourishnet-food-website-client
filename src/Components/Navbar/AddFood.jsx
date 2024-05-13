

import { useRef } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AddFood = () => {
    const formRef = useRef(null);
    const handleAddedFood=e=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const photo = form.get('photo')
        const coutryName = form.get('coutryName')
        const location = form.get('location')
        const description = form.get('description')
        const cost = form.get('cost')
        const seasonality = form.get('seasonality')
        const traveltime = form.get('traveltime')
        const totalVisitor = form.get('totalVisitor')
        const email = form.get('email')
        const name = form.get('name')
        const touristSpot = form.get('touristSpot')
        const visitor = {touristSpot,name,email,totalVisitor,traveltime,seasonality,cost,description,location,coutryName,photo};
        fetch("http://localhost:5000/foodsitem",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(visitor)
        }).then(res=>res.json())
        .then(data => {
            if(data.insertedId){
                formRef.current.reset()
                Swal.fire({
                    icon: "success",
                    title: "Yeah....",
                    text: "Added in Successfull!",
                  });
            }
        })
    }
  return (
    <div className="bg-stone-200 font-montserrat font-bold">
       <Helmet>
        <title>Add Food Item </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <form ref={formRef} onSubmit={handleAddedFood}>
        <div>
         <div className="grid md:grid-cols-2 gap-6 lg:max-w-5xl p-10 mx-auto mt-10 ">
         <div className="form-control">
            <label className="label">
              <span className="label-text">Food Image</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="image"
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
              name="expared_date"
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
            <h1>Donetor Information</h1>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <input
              type="text"
              name="seasonality"
              placeholder="Seasonality"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <input
              type="text"
              placeholder="Travel time"
              name="traveltime"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Total visitor per year</span>
            </label>
            <input
              type="text"
              placeholder="Total visitors per yer"
              name="totalVisitor"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">You Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="input input-bordered input-secondary w-full "
              required
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