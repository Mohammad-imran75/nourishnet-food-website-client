

const Mission = () => {
  return (
    <div>
      <p className="text-center text-3xl font-bold my-6">Our Mission_</p>
      <div className="grid grid-cols-1 md:grid-cols-2 space-x-2">
        <img className="rounded-lg " src="https://i.ibb.co/6Zd7MPT/pexels-chanwalrus-958545.jpg" alt="" />
        <div className="font-semibold ">
          <p className="p-5 mb-3 bg-base-300 rounded-lg">
            <span className="text-primary">Why:</span> This platform helps you find and access surplus food in your community. Whether you are an individual looking to reduce your grocery expenses or an organization needing extra food, this platform connects you with food that would otherwise go to waste.
          </p>
          <p className="p-5 mb-3 bg-base-300 rounded-lg">
            <span className="text-primary">What:</span>  By participating in this platform, you can contribute to reducing food waste and helping those in need. If you have excess food, you can donate it through this platform, ensuring it reaches people who can use it.
          </p>
          <p className="p-5  bg-base-300 rounded-lg">
            <span className="text-primary">How:</span> The platform is designed to be responsive and easy to navigate, whether you are using a mobile, tablet, or desktop device. Features such as search, sort, and filter functions make it simple to find the food items you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;