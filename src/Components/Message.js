import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
const Message = forwardRef(({ message, user }, ref) => {
  const isUser = user === message.username;

  return (
    <div ref={ref} className={`message ${isUser && `messageUser`}`}>
      <Card className={isUser ? "messageUserCard" : "messegeGuestCard"}>
        <CardContent>
          <Typography color="textPrimary" variant="p" component="p">
            {!isUser && ` ${message.username || "Unknown User"} : `}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});
export default Message;
