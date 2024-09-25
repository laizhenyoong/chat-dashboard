import React from 'react'
import { Grid, Dialog, DialogTitle, DialogContent, Slide, Stack, Typography, Button, DialogActions } from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
    {
        key: 0,
        title: "Mark as unread",
        combination: ["Cmd", "Shift", "U"]
    },
    {
        key: 1,
        title: "Mark as unreal",
        combination: ["Cmd", "U"]
    },
    {
        key: 2,
        title: "Mute",
        combination: ["Cmd", "Shift", "M"]
    },
    {
        key: 3,
        title: "Archive Chat",
        combination: ["Cmd", "A"]
    },
    {
        key: 4,
        title: "Delete Chat",
        combination: ["Cmd", "Shift", "D"]
    },
    {
        key: 5,
        title: "Pin Chat",
        combination: ["Cmd", "P"]
    },
    {
        key: 6,
        title: "Search",
        combination: ["Cmd", "Shift", "F"]
    },
    {
        key: 7,
        title: "Next Chat",
        combination: ["Cmd", "N"]
    },
    {
        key: 8,
        title: "Next Step",
        combination: ["Cmd", 'Shift', "+"]
    },
    {
        key: 9,
        title: "Previous Step",
        combination: ["Cmd", 'Shift', "-"]
    },
    {
        key: 10,
        title: "New Group",
        combination: ["Cmd", 'Shift', "G"]
    },
    {
        key: 11,
        title: "Profile & About",
        combination: ["Cmd", "I"]
    },
    {
        key: 12,
        title: "Increase Speed of Voice Message",
        combination: ["Cmd", "+"]
    },
    {
        key: 13,
        title: "Decrease Speed of Voice Message",
        combination: ["Cmd", "-"]
    },
    {
        key: 14,
        title: "Settings",
        combination: ["Cmd", ","]
    },
    {
        key: 15,
        title: "Emoji Panel",
        combination: ["Cmd", "E"]
    },
    {
        key: 16,
        title: "Sticker Panel",
        combination: ["Cmd", "T"]
    }
];

const Shortcuts = ({ open, handleClose }) => {

    return (
        <>
            <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                TransitionComponent={Transition}
                sx={{ p: 4 }}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Keyboard Shortcuts</DialogTitle>
                <DialogContent sx={{ mt: 4 }}>
                    <Grid container spacing={3}>
                        {list.map(({ key, title, combination }) => 
                            <Grid key={key} container item xs={6}>
                                <Stack 
                                    sx={{ width: "100%" }} 
                                    justifyContent={"space-between"} 
                                    spacing={3} 
                                    direction="row"
                                    alignItems={"center"}
                                >
                                    <Typography variant="caption">{title}</Typography>
                                    <Stack spacing={2} direction="row">
                                        {combination.map((el) => {
                                            return <Button disabled variant="contained" sx={{ color: "#212121" }}>{el}</Button>
                                        })}
                                    </Stack>
                                </Stack>
                            </Grid>
                        )}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Shortcuts