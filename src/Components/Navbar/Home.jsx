import { useLoaderData } from "react-router-dom";
import FoodCard from "../Available/FoodCard";
import Banner from "../Banner/Banner";
import Review from "../review/Review";
import Mission from "../mission/Mission";

const Home = () => {
  const allFoods = useLoaderData().slice(0, 6);
  console.log(allFoods);
  return (
    <div>
      <Banner></Banner>
      <div>
        <p className="text-center text-2xl font-bold mt-6">Foods |</p>
        <div className="grid md:grid-cols-3  gap-5 p-5">
          {allFoods?.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      </div>
      <Review />
      <Mission/>
    </div>
  );
};
export default Home;
