import { Link } from "react-router";

const HomePage = () => {
  return (
    <>
      <Link to="/modal-component">
        <button>Go to Modal Component</button>
      </Link>
    </>
  );
};

export default HomePage;
