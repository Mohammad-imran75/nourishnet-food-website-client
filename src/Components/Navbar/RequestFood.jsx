import { useLoaderData } from "react-router-dom";
import RequestFoodCard from "../requestFoodCard/RequestFoodCard";


const RequestFood = () => {
    const requesedFood = useLoaderData();
    console.log(requesedFood)
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">Requested Food {requesedFood.length} </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-3">
        {
            requesedFood.map(food=> <RequestFoodCard key={food._id} food={food}/>)
        }
      </div>
    </div>
  );
};

export default RequestFood;
