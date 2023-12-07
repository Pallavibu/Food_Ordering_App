import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <>
    <h4>{err.status} : {err.statusText}</h4>
      <h1>Oopss!!!</h1>
      <h3>Something went wrong!!!</h3>
    </>
  );
};

export default Error;
