import ShowsCard from "../../components/showsCard/ShowsCard";
import useData from "../../utils/useData";

const Home = () => {
  const { shows } = useData();

  return (
    <div className="bg-blur my-5 p-5">
      <h2 className="text-light text-center my-4 border-bottom p-2">
        Top 10 Movies
      </h2>
      <div className="">
        <div className="row">
          {shows.map((singleShow, index) => (
            <ShowsCard key={index} singleShow={singleShow}></ShowsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
