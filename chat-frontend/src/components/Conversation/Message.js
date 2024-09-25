import { Box, Stack } from '@mui/material'
import React from 'react'

import { Chat_History } from '../../data'
import { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg } from './MsgTypes'

const Message = ({menu}) => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
            {Chat_History.map((el) => {
                switch (el.type) {
                    case "divider":
                        // Timeline
                        return <Timeline el={el} />
                    case "msg":
                        switch (el.subtype) {
                            case "img":
                                // Img Message
                                return <MediaMsg el={el} menu={menu} />
                            case "doc":
                                // Doc Message
                                return <DocMsg el={el} menu={menu} />
                            case "link":
                                // Link Message
                                return <LinkMsg el={el} menu={menu} />
                            case "reply":
                                // Reply Message
                                return <ReplyMsg el={el} menu={menu} />
                            default:
                                // Text Message
                                return <TextMsg el={el} menu={menu} />
                        }
                    default:
                        break;
                }
            })}
        </Stack>
    </Box>
  )
}

export default Message