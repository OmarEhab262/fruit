import { ArrowRight } from "lucide-react";
import Card from "../components/Card";

const FavoriteFruits = () => {
  // Create an array with the desired number of items (4 in this case)
  const items = Array.from({ length: 4 });

  return (
    <div id="favorite-fruits ">
      <div className="mx-7 my-5 flex  justify-between text-white sm:flex-row flex-col sm:items-center items-start ">
        <h1 className="text-white mx-7 my-5">Favorite Fruits</h1>
        <div className="flex flex-row mx-7 justify-center items-center gap-1">
          <h3>More</h3>
          <ArrowRight size={20} className="mt-1" />
        </div>
      </div>
      <hr className="mx-11" />
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {items.map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteFruits;
