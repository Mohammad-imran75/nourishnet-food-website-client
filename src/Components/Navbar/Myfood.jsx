import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import SingleFood from "../AddFood/SingleFood";
import Swal from "sweetalert2";

const Myfood = () => {
  const [foods, setFoods] = useState([]);
  console.log(foods);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://nourishnet-food-website-server.vercel.app/foodsitem?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [user]);
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://nourishnet-food-website-server.vercel.app/foodsitem/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
            });
              const remaining = foods.filter(food => food._id !== id)
              setFoods(remaining)
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        
        <thead>
          <tr>
            <th>
             
            </th>
            <th className="font-bold text-xl">image</th>
            <th className="font-bold text-xl">Expired Date/time</th>
            <th className="font-bold text-xl">Pickdup Location</th>
            <th className="font-bold text-xl">update</th>
            <th className="font-bold text-xl">delete</th>
          </tr>
        </thead>
        <tbody>
          {
            foods.map((food,index)=><SingleFood handleDelete={handleDelete} index={index}  key={food._id} food={food}
           ></SingleFood>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Myfood;
