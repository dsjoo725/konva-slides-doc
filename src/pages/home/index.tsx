import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to={"/song"}>Song</Link>
    </div>
  );
};

export default HomePage;
