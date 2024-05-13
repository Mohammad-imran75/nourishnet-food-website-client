const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/rw5jqpg/side-view-traditional-turkish-iskender-doner-with-yogurt-clay-pot-wooden-board.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello Client</h1>
          <p className="mb-5">
          Creating a digital platform connecting local farmers directly with consumers, promoting farm-to-table transparency and supporting sustainable food systems.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
