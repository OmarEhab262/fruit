import CardHome from "../components/CardHome";

const Home = () => {
  return (
    <div id="home">
      <div
        className="relative "
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-pineapple-in-glasses-for-the-eyes-free-download-pineapple-hd-wallpaper-image_2944592.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-70"
          style={{ zIndex: 1 }}
        />
        <div
          style={{ position: "relative", zIndex: 2 }}
          className="container  md:px-[150px]   flex flex-col "
        >
          <div className="top md:h-[70vh] flex px-10 justify-between flex-wrap">
            {" "}
            <div className="left text-white  mt-20">
              <h1>01/02</h1>
              <h2>anything</h2>
              <p className="md:w-[350px] w-full">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                laboriosam incidunt optio vero rerum asperiores quam porro
                dignissimos veritatis vel!
              </p>
            </div>
            <div className="right self-center">
              <h1 className="text-[60px] text-white">
                Fruit
                <br /> Delivery
              </h1>
            </div>
          </div>
          <div className="bottom self-end px-10 mb-5">
            <CardHome />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
