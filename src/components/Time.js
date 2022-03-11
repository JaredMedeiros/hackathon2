import React from "react";
import TimerIconButton from "./TimerIconButton.js";
import { Add, Remove } from "@material-ui/icons";

const Time = props => {
  return (
    <div>
      <TimerIconButton onClick={props.decrement} aria-label="remove">
        <Remove />
      </TimerIconButton>
      <span>{props.time}</span>
      <TimerIconButton onClick={props.increment} aria-label="add">
        <Add />
      </TimerIconButton>
    </div>
  );
};

export default Time;
