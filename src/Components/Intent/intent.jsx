import React from "react";
import { Divider, ListItem, ListItemText, Typography } from "@material-ui/core";

import "./intent.css";
// import { Star } from "@material-ui/icons";

export default function Intent(props) {
  return (
    <div className="intent">
      <ListItem alignItems="center">
        <ListItemText
          primary={props.intent.displayName}
          secondary={
            <>
              <Typography variant="body2">
                Action {" - " + props.intent.action}
              </Typography>
            </>
          }
        ></ListItemText>
      </ListItem>

      <Divider variant="middle" component="li" />
    </div>
  );
}
