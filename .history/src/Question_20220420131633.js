import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (title, info) => {
  const [question, setQuestion] = useState(0);

  return (
    <>
      <article className="question">
        <h4>{title}</h4>
        <button className="btn">btn</button>
      </article>
    </>
  );
};

export default Question;
