import { Stack, Box, IconButton, InputAdornment, TextField, Fab, Tooltip } from '@mui/material'
import React, {useState } from 'react'
import { styled, useTheme } from "@mui/material/styles"
import { LinkSimple, PaperPlaneTilt, Smiley, Image, Sticker, Camera, File, User } from 'phosphor-react';
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'

const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        paddingTop: "12px",
        paddingBottom: "12px"
    }
}))

const Actions = [
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 102,
        title: "Photo/Video"
    },
    {
        color: "#1b8cfe",
        icon: <Sticker size={24} />,
        y: 172,
        title: "Stickers"
    },
    {
        color: "#0172e4",
        icon: <Camera size={24} />,
        y: 242,
        title: "Image"
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 312,
        title: "Photo/Video"
    },
    {
        color: "#013f7f",
        icon: <User size={24} />,
        y: 382,
        title: "Contact"
    },

]

const ChatInput = ({ setOpenPicker }) => {

    const [openActions, setOpenActions] = useState(false);

    return (
        <StyledInput
            fullWidth
            placeholder='Write a message...'
            variant="filled"
            InputProps={{
                disableUnderline: true,
                startAdornment:
                    <Stack sx={{ width: 'max-content' }}>
                        <Stack sx={{ position: "relative", display: openActions ? "inline-block" : "none" }}>
                            {Actions.map((el) => (
                                <Tooltip title={el.title} placement={"right"}>
                                    <Fab
                                        sx={{
                                            position: "absolute",
                                            top: -el.y,
                                            backgroundColor: el.color,
                                        }}
                                    >
                                        {el.icon}
                                    </Fab>
                                </Tooltip>
                            ))}
                        </Stack>
                        <InputAdornment>
                            <IconButton onClick={() => {
                                setOpenActions((prev) => !prev)
                            }}>
                                <LinkSimple />
                            </IconButton>
                        </InputAdornment>
                    </Stack>,
                endAdornment: <InputAdornment>
                    <IconButton onClick={() => {
                        setOpenPicker((prev) => !prev)
                    }}>
                        <Smiley />
                    </IconButton>
                </InputAdornment>
            }}
        />
    )
}

const Footer = () => {

    const theme = useTheme();
    const [openPicker, setOpenPicker] = useState(false);

    return (
        <Box
            p={2}
            sx={{
                height: 100,
                width: "100%",
                backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
            }}
        >
            <Stack direction="row" alignItems={"center"} spacing={3}>
                <Stack sx={{ width: "100%", position: "relative" }}>
                    <Box
                        sx={{
                            display: openPicker ? "inline" : "none",
                            position: "absolute",
                            bottom: "100%",
                            right: 0,
                            zIndex: 10
                        }}
                    >
                        <Picker
                            data={data}
                            onEmojiSelect={console.log}
                            theme={theme.palette.mode}
                        />
                    </Box>
                    <ChatInput setOpenPicker={setOpenPicker} />
                </Stack>

                <Box
                    sx={{
                        height: 48,
                        width: 48,
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5
                    }}
                >
                    <Stack sx={{ height: "100%" }} alignItems={"center"} justifyContent={"center"}>
                        <IconButton>
                            <PaperPlaneTilt color='#fff' />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default Footer