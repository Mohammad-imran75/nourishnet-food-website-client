import { useLoaderData } from "react-router-dom";

const Modal = () => {
  const requestFood = useLoaderData();

  const {
    food_name,
    food_photo,
    pickup_location,
    quantity,
    notes,
    expired_date,
    user_name,
  } = requestFood;

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
            <button  onClick={() => document.getElementById("my_modal_3").showModal()} className="w-full btn btn-square bg-orange-700">
              Request
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
           
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
