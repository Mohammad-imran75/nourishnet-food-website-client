

const RequestFoodCard = ({food}) => {

  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={food.food_photo}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {food.food_name}
          </h2>
          <p className="dark:text-gray-800">
          Pickup location:{food.pickup_location}
          </p>
          <p className="dark:text-gray-800">
          Request Date:{food.request_date}
          </p>
          <p className="dark:text-gray-800">
          Expire Date:{food.expired_date}
          </p>
          <p className="dark:text-gray-800">
          Donation Amount: 12$    </p>
        </div>
      </div>
    </div>
  );
};

export default RequestFoodCard;
