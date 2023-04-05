import DetailCard from "../Components/DetailCard";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../States/GlobalProvider";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const Detail = () => {

  const [ state, dispatch ] = useContext(GlobalContext);
  const [wait, setWait] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {

    const fechaData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            setError(true);
            setWait(false);
        }

        const data = await response.json();
        dispatch({ type: "SET_USER", payload: data });
        setWait(false);

    };

    fechaData();

  }, [dispatch, id]);

  const { name, username, email, phone, website } = state.user;

  return (
    <>
      {wait && <h1>Cargando...</h1>}
      {error && <NotFound />}
      {!wait && !error && <DetailCard name={name} username={username} email={email} phone={phone} website={website} user_id={parseInt(id)}/>}
    </>
  )
}

export default Detail