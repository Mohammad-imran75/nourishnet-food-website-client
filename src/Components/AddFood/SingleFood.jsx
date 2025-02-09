import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";


const SingleFood = ({ food,index,handleDelete}) => {
  const {_id, food_photo, food_name, pickup_location,expired_date,} = food;
  console.log(food);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask  w-24 h-">
              <img src={food_photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{food_name}</div>
          </div>
        </div>
      </td>
      <td>{expired_date}</td>
      <td>{pickup_location}</td>
      <th>
      <Link to={`/update/${_id}`}>
      <button
            className="btn btn-secondary text-white bg-[#FF3811]"
          >
            Update
          </button>
      </Link>
      </th>
      <th>
      <button
            onClick={() => handleDelete(_id)}
            className="btn btn-secondary text-white bg-[#FF3811]"
          >
           <AiFillDelete className="text-3xl" />
          </button>
      </th>
    </tr>
  );
};

export default SingleFood;
