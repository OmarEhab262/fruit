const CardHome = () => {
  return (
    <>
      <div className="flex  lg:flex-row flex-col bg-gray-800 rounded-md text-white  md:w-[700px]   w-[300px]    ">
        <div className="left  mx-3  p-3 flex-col  flex gap-2">
          <div className="top">
            {" "}
            <h3>Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, delectus.
            </p>
          </div>
          <div className="bottom">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="mid  p-3 mx-3 flex-col w-fit flex gap-3">
          <h3>352$ EG</h3>
          <button className="text-white bg-yellow-400 rounded-md px-5 py-2 w-fit ">
            Shop
          </button>
        </div>
        <div className="right md:w-full  w-[300px] ">
          <img
            className="md:w-full  "
            src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-pineapple-in-glasses-for-the-eyes-free-download-pineapple-hd-wallpaper-image_2944592.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CardHome;
