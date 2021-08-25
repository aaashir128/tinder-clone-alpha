import { IconButton } from "@material-ui/core";
import { Close, Favorite, FlashOn, Replay, StarRate } from "@material-ui/icons";
import React from "react";
import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipteButtons__repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipteButtons__left">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipteButtons__star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="swipteButtons__right">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipteButtons__lightning">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
