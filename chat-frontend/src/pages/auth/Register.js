import { Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import AuthSocial from '../../sections/auth/AuthSocial'
import RegisterForm from '../../sections/auth/RegisterForm'

const Register = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Get Started With AIDA</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">Already have an account?</Typography>
          <Link to="/auth/login" component={RouterLink} variant="subtitle2">Sign in</Link>
        </Stack>
      </Stack>
      {/* Register Form */}
      <RegisterForm />
      <Typography component={"div"} sx={{ color: "text.secondary", mt: 3, typography: "caption", textAlign: "center" }} >
        {'By signing up, I agree to the '}
        <Link underline="always" color="text.primary">Terms & Conditions</Link>
      </Typography>
      {/* Auth Social */}
      <AuthSocial />
    </>
  )
}

export default Register