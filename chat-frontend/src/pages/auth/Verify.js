import { Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { CaretLeft } from 'phosphor-react'
import VerifyForm from '../../sections/auth/VerifyForm'

const Verify = () => {
    return (
        <>
            <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
                <Typography variant="h3">Please Verify OTP</Typography>
                <Stack direction="row" spacing={.5}> 
                    <Typography variant="body2">Sent to email (laizhenyoong10@gmail.com)</Typography>
                </Stack>
            </Stack>

            {/* Verify Form */}
            <VerifyForm />
        </>
    )
}

export default Verify