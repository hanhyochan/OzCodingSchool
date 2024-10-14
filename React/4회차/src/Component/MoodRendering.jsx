import React, { useState } from "react";
import "../App.css";

const Moodrendering = () => {
  const [mood, setMood] = useState("happy");

  // 1. if문으로 조건부 렌더링
  //   const MoodEmoji = () => {
  //     if (mood === 'happy') {
  //         return <h1>😊</h1>
  //     } else if (mood === 'normal') {
  //         return <h1>😑</h1>
  //     } else {
  //         return <h1>😢</h1>
  //     }
  //   }

  // 2. 삼항연산자로 조건부렌더링
  //   const MoodEmoji = () => {
  //     return (
  //       <>
  //         {mood === "happy" ? (<h1>😊</h1>
  //         ) : mood === "normal" ? (
  //           <h1>😑</h1>
  //         ) : (
  //           <h1>😢</h1>
  //         )}
  //       </>
  //     );
  //   };

  // 3. 논리연산자로 조건부렌더링
  const MoodEmoji = () => {
    return (
      <>
        {mood === "happy" && <h1>😊</h1>}
        {mood === "normal" && <h1>😑</h1>}
        {mood === "sad" && <h1>😢</h1>}
      </>
    );
  };

  function MoodBtn() {
    return (
      <>
        <button onClick={() => setMood("happy")}>happy</button>
        <button onClick={() => setMood("normal")}>normal</button>
        <button onClick={() => setMood("sad")}>sad</button>
      </>
    );
  }

  return (
    <>
      <MoodEmoji />
      <span
        className={
          mood === "happy"
            ? "happy"
            : mood === "normal"
            ? "normal"
            : mood === "sad"
        }
      >
        mood : {mood}
      </span>
      <div>
        <MoodBtn />
      </div>
    </>
  );
};

export default Moodrendering;
