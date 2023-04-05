import { useEffect, useContext } from "react";
import { GlobalContext } from "../States/GlobalProvider";
import Card from "../Components/Card";

const Home = () => {

  const [state, dispatch] = useContext(GlobalContext);

  useEffect(() => {

    const fechaData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      dispatch({ type: "SET_API_DATA", payload: data });
    };

    fechaData();

  }, [dispatch]);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">

        {state.apiData.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              id={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
