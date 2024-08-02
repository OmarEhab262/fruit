import { Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="text-white mx-7 my-5 flex items-center md:justify-between justify-center flex-wrap">
        <div className="left mx-7 my-5">
          <h2>
            Subscribe <br /> To Newsletter
          </h2>
        </div>
        <div className="mid">
          {" "}
          <input
            type="search"
            className="bg-black border text-white px-3 py-2 md:w-[400px] outline-none"
            placeholder="Enter your email address"
          />
          <button className="bg-white  border text-black px-3 py-2 ">
            Search
          </button>
        </div>
        <div className="right">
          <h2>Social Media</h2>
          <div className="flex justify-around">
            <Facebook />
            <Linkedin />
            <Youtube />
          </div>
        </div>
      </div>
      <div className="bottom flex md:justify-between justify-center text-white mx-7 items-center md:flex-row   flex-col gap-4 my-3 ">
        <h1>Food</h1>
        <ul className="flex w-full justify-around">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
        <p className="w-[300px] text-center">
          © 2022. All Rights Reserved form Omar Ehab
        </p>
      </div>
    </>
  );
};

export default Footer;
