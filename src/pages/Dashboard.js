import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "Richard Hendricks",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "Richard Hendricks",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "Richard Hendricks",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "Richard Hendricks",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <>
      <div className="dashboard">
        {/* {<ChatContainer user={user} />} */}
        <div className="swipe-container">
          <div className="card-container">
            {characters.map((character) => (
              <TinderCard
                className="swipe"
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}
              >
                <div
                  style={{ backgroundImage: `url(${character.url})` }} // Use template literals for correct interpolation
                  className="card"
                >
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
