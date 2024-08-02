import { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="text-white w-[300px] border  rounded-md gap-3 flex flex-col m-3">
        <div className="img">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-pineapple-in-glasses-for-the-eyes-free-download-pineapple-hd-wallpaper-image_2944592.jpg"
            alt=""
          />
        </div>
        <div className="mid px-3">
          <h3>Food</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bottom px-3 pb-4">
          <div className="price my-3"> 35$</div>

          <div className="flex space-x-3">
            <div className="count flex gap-2 justify-center items-center bg-black border w-full ">
              <button
                className="text-[20px]"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
              <span>{count}</span>
              <button
                className="text-[20px]"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
            </div>
            <button className="bg-yellow-400 px-5 py-2 w-full"> Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
