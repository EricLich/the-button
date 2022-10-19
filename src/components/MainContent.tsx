import React, { memo } from "react";
import { useFetch } from "../hooks/useFetch";
import { User } from "../utils/types";
import TheButton from "./TheButton";

const FETCH_URL = "https://jsonplaceholder.typicode.com/users";

const MainContent = () => {
  const { data: users, loading, error } = useFetch<User>(FETCH_URL);
  console.log(users);

  return (
    <main className="w-full h-[calc(100vh-80px)] grid place-content-center">
      <TheButton />
    </main>
  );
};

export default memo(MainContent);
