import ClicksInfo from "./ClicksInfo";
import { ColorSelectedTimes, User } from "../utils/types";
import { useFetch } from "../hooks/useFetch";
import TheButton from "./TheButton";
import { useState } from "react";

//setting the url to fetch (should be on the .env file but im doing it this way for the efficency and clarity when this code will be tested)
const FETCH_URL = "https://jsonplaceholder.typicode.com/users";

const MainContent = () => {
  //fetching random user from json placeholder api
  const { data: users, loading, error } = useFetch<User>(FETCH_URL);
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const [colorSelectedTimes, setColorSelectedTimes] =
    useState<ColorSelectedTimes>({
      blue: 0,
      green: 0,
      orange: 0,
      notClicked: 0,
      purple: 0,
      red: 0,
      yellow: 0,
    });

  return (
    <main className="w-full h-[calc(100vh-80px)] grid place-content-center">
      <TheButton
        setOpenInfo={setOpenInfo}
        setColorSelectedTimes={setColorSelectedTimes}
        colorSelectedTimes={colorSelectedTimes}
      />
      {openInfo && <ClicksInfo colorSelectedTimes={colorSelectedTimes} />}
    </main>
  );
};

export default MainContent;
