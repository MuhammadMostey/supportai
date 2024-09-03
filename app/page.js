"use client";
// next
import Image from "next/image";
import { NextRequest } from "next/server";

// react
import { useState } from "react";

// local
import styles from "./page.module.css";
import { chatStyles } from "./styles";
// material ui
import {
  Box,
  Button,
  Stack,
  TextField,
  useTheme,
  Typography,
} from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const classes = chatStyles(theme);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi there! I'm your support assistant, happy to help with any questions or issues you're facing. I'm here to provide you with quick and easy answers, so you can get back to what matters most. What's on your mind?",
    },
  ]);

  const sendMessage = async () => {
    const newMessage = { role: "user", content: message };
    setMessage("");

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    console.log(messages);

    const req = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([...message, newMessage]),
    });

    const res = await req.json();
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: res.message },
    ]);
    console.log(messages);
  };

  const [message, setMessage] = useState("");

  const chat = () => {};
  return (
    <>
      <Box sx={classes.main}>
        {/** Header */}
        <Typography variant="h3" sx={classes.mainText}>
          Support<span style={{ color: "red" }}>AI</span>{" "}
        </Typography>
        {/** Chat bot componenet */}
        <Stack sx={classes.chatBox} direction={"column"} spacing={2}>
          {/** Chat History: Chat messages div */}
          <Stack sx={classes.chatHistory} direction={"column"} spacing={3}>
            {messages.map((message, index) => (
              <Box
                key={index}
                justifyContent={
                  message.role === "user" ? "flex-end" : "flex-start"
                }
                sx={classes.messageBox}
              >
                <Box
                  bgcolor={
                    message.role === "user" ? "primary.main" : "secondary.main"
                  }
                  p={3}
                  borderRadius={12}
                >
                  {message.content}
                </Box>
              </Box>
            ))}
          </Stack>
          {/** control section, new message text and button */}
          <Stack sx={classes.chatControls} spacing={2} direction="row">
            <TextField
              placeholder="Write your message here"
              fullwidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="contained" onClick={sendMessage}>
              send message
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
