import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  CircularProgress,
  IconButton,
  List,
  Snackbar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Intent from "../Intent/intent";

import "./intentList.css";
import { getIntents } from "../../Services/dialogflow-service";
import Scrollbars from "react-custom-scrollbars";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    // maxWidth: "36ch",
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function IntentList() {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [intents, setIntents] = useState([]);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getIntents()
      .then((listOfIntents) => {
        listOfIntents.sort((intentA, intentB) => {
          if (intentA.displayName.includes("Default")) return -1;
          if (intentB.displayName.includes("Default")) return 1;
          return -1;
        });
        setIntents(listOfIntents);
        setLoaded(true);
      })
      .catch((error) => {
        setOpen(true);
        setError(true);
      });
  }, []);

  return (
    <div className="intent__list">
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h5">List on Intents</Typography>
        </Toolbar>
      </AppBar>
      <Scrollbars>
        <div className={`intent_list_items ${loaded && "loading"}`}>
          {loaded ? (
            <List className={classes.root}>
              {intents.map((intent, index) => {
                return (
                  <React.Fragment key={index}>
                    <Intent intent={intent} key={index} />
                  </React.Fragment>
                );
              })}
            </List>
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
      </Scrollbars>
    </div>
  );
}
