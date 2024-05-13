import { useLoaderData } from "react-router-dom";

const SortSingleView = () => {
  const singleFood = useLoaderData();
  console.log(singleFood);
  const {
    food_name,
    food_photo,
    pickup_location,
    notes,
    expired_date,
    status,
    user_email,
    user_name,
    user_image,
  } = singleFood;
  const backgroundImageStyle = {
    backgroundImage: `url(${food_photo})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  };

  return (
    <section className="bg-pink-200 mt-6 dark:text-gray-800">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div
          className="w-full lg:w-1/3"
          style={backgroundImageStyle}
        ></div>
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
        <div className="flex space-x-4">
		<img alt="" src={user_image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{user_name}</a>
			<span className="text-xs dark:text-gray-600">{user_email}</span>
		</div>
	</div>
          <h2 className="text-3xl mt-3 font-semibold leading-none">
            {notes}
          </h2>
          <p className="mt-4 font-bold mb-8 text-sm">
           Food Name : {food_name}
          </p>
          <p className="mt-4 font-bold mb-8 text-sm">
           Location : {pickup_location}
          </p>
          <p className="mt-4 font-bold mb-8 text-sm">
           Expired date/time : {expired_date}
          </p>
          <p className="mt-4 font-bold mb-8 text-sm">
           Status : {status}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SortSingleView;
