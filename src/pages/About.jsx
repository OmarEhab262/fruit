import { ArrowLeft, ArrowRight } from "lucide-react";
import Reviewe from "../components/Reviewe";

const About = () => {
  return (
    <div id="about" className="mx-7 my-5 ">
      <div className="mx-7 my-5 flex  justify-between text-white sm:flex-row flex-col sm:items-center  items-start ">
        <h1 className="text-white  my-5">About Us</h1>
        <div className="flex flex-row mx-7 justify-center items-center gap-1">
          <ArrowLeft size={20} className="mt-1" />
          <ArrowRight size={20} className="mt-1" />
        </div>
      </div>
      <hr className="mx-7" />
      <br />
      <div className="flex justify-around     flex-wrap gap-5">
        <Reviewe />
        <Reviewe />
        <Reviewe />
      </div>
    </div>
  );
};

export default About;
