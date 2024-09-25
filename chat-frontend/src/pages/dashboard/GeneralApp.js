import React from "react";
import Chats from "./Chats";
import { Stack, Box } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import StarredMessages from "../../components/StarredMessages";
import SharedMessages from "../../components/SharedMessages";
import NoChatSVG from "../../assets/Illustration/NoChat";

const GeneralApp = () => {

  const theme = useTheme()

  const { sidebar, chat_type, room_id } = useSelector((store) => store.app)

  return (
    <>
      <Stack
        direction={"row"}
        sx={{ width: "100%" }}
      >
        {/*Chats*/}
        <Chats />
        
        <Box
          sx={{
            height: "100%",
            width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
            backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.default
          }}
        >
          {/*Conversation*/}
          {room_id !== null && chat_type === "individual" ? <Conversation /> : 
            <Stack spacing={2} sx={{height:"100%", width: "100%"}} alignItems={"center"} justifyContent={"center"}>
              <NoChatSVG />
            </Stack>
          }
          
        </Box>

        {/* Contact */}
        {sidebar.open &&
          (() => {
            switch (sidebar.type) {
              case "CONTACT":
                return <Contact />;
              case "SHARED":
                return <SharedMessages />;
              case "STARRED":
                return <StarredMessages />
              default:
                break;
            }
          })()
        }
      </Stack>
    </>
  );
};

export default GeneralApp;
