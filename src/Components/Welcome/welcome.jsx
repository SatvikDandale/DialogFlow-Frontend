import React, { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import {
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
} from "@material-ui/core";

import { checkServer } from "../../Services/dialogflow-service";

import "./welcome.css";

export default function Welcome(props) {
  useEffect(() => {
    console.log("HELLO");
    checkServer()
      .then(() => setWait(false))
      .catch((err) => {
        setWait(true);
        setError(true);
        setOpen(true);
      });
  }, []);

  const [wait, setWait] = useState(true);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  // prettier-ignore
  let config = {
    num:      [4, 7],
    rps:      0.1,
    radius:   [5, 40],
    life:     [1.5, 3],
    v:        [2, 3],
    tha:      [-40, 40],
    alpha:    [0.8, 0],
    scale:    [.1, 0.4],
    position: "all",
    color:    ["random", "#ff0000"],
    cross:    "dead",
    random:   15
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      },
    });
  }

  return (
    <>
      <div className="welcome">
        <h1 className="hello">Hello!</h1>
        {!wait ? (
          <Button
            variant="contained"
            onClick={() => {
              props.history.push("/dialogflow");
            }}
            color="primary"
          >
            Click here to get started!
          </Button>
        ) : error ? (
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Server unreachable. Please restart"
            action={
              <React.Fragment>
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => setOpen(false)}
                >
                  Ok
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={() => setOpen(false)}
                >
                  X
                </IconButton>
              </React.Fragment>
            }
          />
        ) : (
          <CircularProgress />
        )}
      </div>
      <ParticlesBg type="custom" config={config} bg={true} />
    </>
  );
}
