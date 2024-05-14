import { useLoaderData } from "react-router-dom";
import FoodCard from "../Available/FoodCard";
import Banner from "../Banner/Banner";

const Home = () => {
  const allFoods = useLoaderData().slice(0, 6);
  console.log(allFoods);
  return (
    <div>
        <Banner></Banner>
      {
        <div className="grid md:grid-cols-2  gap-5 p-5">
          {allFoods?.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      }
    </div>
  );
};
export default Home;
