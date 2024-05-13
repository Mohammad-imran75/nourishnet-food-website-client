import { useEffect, useState } from "react";



const Available = () => {
   const [allfoods,setAllFoods] = useState([]);
   console.log(allfoods)
   useEffect(()=>{
    fetch('http://localhost:5000/foodsitem')
    .then(res=>res.json())
    .then(data=>setAllFoods(data))
   },[])
    return (
        <div>
            {
                allfoods.map(food=><)
            }
        </div>
    );
};

export default Available;