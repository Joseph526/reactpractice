import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

const App = () => (
  <Wrapper>
    <h1 className="title">Friends List</h1>
    {friends.map(friendItem => (
      <FriendCard
        name={friendItem.name}
        image={friendItem.image}
        occupation={friendItem.occupation}
        location={friendItem.location}
      />
    ))};
  </Wrapper>
);

export default App;
