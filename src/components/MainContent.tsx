import { useFetch } from "../hooks/useFetch";
import { User } from "../utils/types";
import TheButton from "./TheButton";

//setting the url to fetch (should be on the .env file but im doing it this way for the efficency and clarity when this code will be tested)
const FETCH_URL = "https://jsonplaceholder.typicode.com/users";

const MainContent = () => {
  //fetching random user from json placeholder api
  const { data: users, loading, error } = useFetch<User>(FETCH_URL);

  return (
    <main className="w-full h-[calc(100vh-80px)] grid place-content-center">
      <TheButton />
    </main>
  );
};

export default MainContent;
