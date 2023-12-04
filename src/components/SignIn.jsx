import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { signinSchema } from "../schemas/SigninSchema"
import { useState } from "react"
import { login } from "../apis/login"
import AlertPopup from "./AlertPopup"
export default function SignIn({ setValue }) {
  //* handle form validation
  const form = useForm({ resolver: yupResolver(signinSchema) })
  const { register, handleSubmit, formState } = form
  const { errors } = formState
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false)
  const [payload, setPayload] = useState(false)
  const submit = (data) => {
    login(data.email, data.password, setFetching, setError, setPayload).then(() => setOpen(true))
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Typography
        color="primary.main"
        fontWeight="bolder"
        sx={{ fontSize: { xs: "2rem", sm: "2.3rem", md: "2.5rem", lg: "2.8rem" }, my: "15px" }}
      >
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(submit)}
        sx={{
          height: "40%",
          width: { xs: "80%", sm: "70%", md: "60%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <TextField
          fullWidth
          id="email"
          autoComplete="email"
          variant="standard"
          label="email"
          {...register("email")}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
        />
        <TextField
          id="password"
          autoComplete="true"
          fullWidth
          variant="standard"
          label="password"
          type="password"
          {...register("password")}
          error={errors.password ? true : false}
          helperText={errors.password?.message}
        />
        <FormControlLabel
          name="remember me"
          labelPlacement="start"
          label="Remember me"
          control={<Checkbox defaultChecked color="primary" />}
          sx={{ alignSelf: "self-start", m: "0" }}
        />
        <Box
          sx={{
            width: { xs: "80%", sm: "70%", md: "60%" },
          }}
        >
          <Button
            disabled={fetching}
            type="submit"
            variant="contained"
            fullWidth
            sx={{ my: "15px", borderRadius: "17px" }}
          >
            {fetching ? "loading..." : "Sign In"}
          </Button>
        </Box>
      </Box>
      {open && <AlertPopup open={open} setOpen={setOpen} message={payload} error={error} />}
      <Box display="flex" gap="5px">
        <Typography color="contrast.reverse">
          Dont have an account yet ? &nbsp;&nbsp;&nbsp;
          <Typography
            component="span"
            onClick={() => setValue(1)} // navigate to the signup tab
            sx={{
              color: "primary.main",
              cursor: "pointer",
              "&:hover": { color: "primary.dark", textDecoration: "underline" },
            }}
          >
            Sign up
          </Typography>
        </Typography>
      </Box>
      <Box display="flex" gap="5px">
        <Typography
          color="primary.main"
          onClick={() => alert("Apologies , this is feature still in developement")}
          sx={{
            color: "primary.main",
            cursor: "pointer",
            "&:hover": { color: "primary.dark", textDecoration: "underline" },
            my: "15px",
          }}
        >
          Mot de passe oublié ?
        </Typography>
      </Box>
    </div>
  )
}
