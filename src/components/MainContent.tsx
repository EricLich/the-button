import ClicksInfo from "./ClicksInfo";
import { ColorSelectedTimes, User } from "../utils/types";
import { useFetch } from "../hooks/useFetch";
import TheButton from "./TheButton";
import { useState } from "react";

//setting the url to fetch (should be on the .env file but im doing it this way for the efficency and clarity when this code will be tested)
const FETCH_URL = "https://jsonplaceholder.typicode.com/users";

const MainContent = () => {
  //fetching random user from json placeholder api with custom fetch hook
  const { data: users, loading, error } = useFetch<User>(FETCH_URL);

  // state to dynamically show the clicks info component after the user clicks the btn
  const [openInfo, setOpenInfo] = useState<boolean>(false);

  // state to store each individual time a color counter changes depending on when the "users" and real user clicked the btn to then use it for different cases
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

  // defining state to store the amount of total clicks from all the randomly generated clicks and the user's click
  const [totalClicks, setTotalClicks] = useState<number>(0);

  return (
    <main className="w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8">
      {/* rendering button component and passing necessary data for the expected behavior */}
      <TheButton
        setOpenInfo={setOpenInfo}
        setColorSelectedTimes={setColorSelectedTimes}
        colorSelectedTimes={colorSelectedTimes}
        setTotalClicks={setTotalClicks}
      />
      {/* show the info about clicks only after the user has clicked the btn */}
      {openInfo && (
        <ClicksInfo
          colorSelectedTimes={colorSelectedTimes}
          totalClicks={totalClicks}
        />
      )}
    </main>
  );
};

export default MainContent;
