import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="p-10 bg-gray-300">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <div
          className="underline text-blue-600 hover:text-blue-800 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          ← Go Back
        </div>
        <div
          className="underline text-blue-600 hover:text-blue-800 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go to Home
        </div>
      </div>
    </div>
  );
}
