import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SortCard from "../Available/SortCard";

const Available = () => {
  const allFoods = useLoaderData();
  console.log(allFoods);
  const [availableFood, setAvailableFood] = useState([]);
  const [sortedFoods, setSortedFoods] = useState("asc");
  useEffect(() => {
    const availableFoods = allFoods.filter(
      (food) => food?.status === "available"
    );
    if (availableFoods) {
      setAvailableFood(availableFoods);
    }
  }, [allFoods]);
  const handleSortOrderChange = () => {
    setSortedFoods(sortedFoods === "asc" ? "desc" : "asc");
  };
  const sortedAllFoods = [...availableFood].sort((a, b) => {
    const dateA = new Date(a.expired_date);
    const dateB = new Date(b.expired_date);
    return sortedFoods === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <div>
      <section className="bg-gray-400 text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              This is
              <span className="dark:text-violet-600"> Available Food</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Savoring the symphony of flavors, each bite tells
              <br className="hidden md:inline lg:hidden" />a story of culture
              and craftsmanship.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

              {/* <div className="text-center font-bold text mt-10 ">
                <p className="text-3xl text-fuchsia-800"> Sorting :</p>
                <select value={sortedFoods} onChange={handleSortOrderChange}>
                  <option
                    className="font-bold text-xl text-teal-900 opacity-70"
                    value="ascending"
                  >
                    Ascending
                  </option>
                  <option
                    className="font-bold text-xl text-teal-900 opacity-70"
                    value="descending"
                  >
                    Descending
                  </option>
                </select>
              </div> */}
              <div className="join">
                <div>
                  <div>
                    <input
                      className="input input-bordered join-item"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <select value={sortedFoods} onChange={handleSortOrderChange} className="select select-bordered join-item">
                  <option disabled selected>
                    Sort 
                  </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary">
                    new
                  </span>
                  <button className="btn join-item">Search</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.ibb.co/qY6DpzY/close-up-appetizing-ramadan-meal.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
      {
        <div className="grid md:grid-cols-2  gap-5 p-5">
          {sortedAllFoods.map((food) => (
            <SortCard key={food._id} food={food}></SortCard>
          ))}
        </div>
      }
    </div>
  );
};

export default Available;
