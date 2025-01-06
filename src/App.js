import React from "react";
import CommentView from "./components/CommentView";
import { dummyData as data } from "./dummyData";

const App = () => {
  return (
    <div>
      <h1>Comment View </h1>
      <CommentView data={data}/>
    </div>
  );
};

export default App;
