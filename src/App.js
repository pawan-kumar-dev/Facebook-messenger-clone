import React, { useState, useEffect } from "react";
import "./App.css";
import { Input, IconButton } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import Message from "./Components/Message";
import db from "./Components/Firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setName] = useState("");
  const sendMsg = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, { username: userName, message: input }]);
    setInput("");
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    setName(prompt("Enter your name"));
  }, []);
  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="logo"
      />
      <h1>Welcome {userName ? userName : "User"} to Fb-Messenger-Clone</h1>
      <form className="appForm">
        <FormControl className="formControl">
          <Input
            className="input"
            placeholder="Enter a message...."
            value={input}
            name="msg"
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
          />
          <IconButton
            className="btn"
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
            onClick={sendMsg}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => {
          return <Message user={userName} message={message} key={id} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
