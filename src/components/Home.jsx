import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Home = () => {
  const { openModal } = useGlobalContext();

  return (
    <div className="main">
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </div>
  );
};

export default Home;
