import { Box, Button, TextField, Typography } from "@mui/material"
import DelegationList from "./DelegationList"
import AlertPopup from "./AlertPopup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signupSchema } from "../schemas/SignupSchema"
import { signup } from "../apis/signup"

export default function SignUp({ setValue }) {
  //* handle form validation
  const form = useForm({ resolver: yupResolver(signupSchema) })
  const { register, handleSubmit, formState } = form
  const { errors } = formState
  const [fetching, setFetching] = useState(false)
  const [open, setOpen] = useState(null)
  const [error, setError] = useState(false)
  const [payLoad, setPayload] = useState(null)
  //* api call
  const submit = (data) => {
    signup(
      data.firstName,
      data.lastName,
      data.delegation,
      data.email,
      data.password,
      setFetching,
      setPayload
    ).then((response) => {
      setOpen(true)
      setError(!response)
      if (response) {
        setTimeout(() => {
          setValue(0)
        }, 1500)
      }
    })
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        marginTop: "-33px",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Typography
        color="primary.main"
        fontWeight="bolder"
        sx={{
          fontSize: { xs: "2rem", sm: "2.3rem", md: "2.5rem", lg: "2.8rem" },
          my: "25px",
        }}
      >
        Sign Up
      </Typography>
      <Box
        onSubmit={handleSubmit(submit)}
        component="form"
        sx={{
          height: "70%",
          width: { xs: "80%", sm: "70%", md: "60%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "23px",
          }}
        >
          <TextField
            fullWidth
            id="firstName"
            autoComplete="firstName"
            variant="standard"
            label="fisrt name"
            {...register("firstName")}
            error={errors.firstName ? true : false}
            helperText={errors.firstName?.message}
          />
          <TextField
            fullWidth
            id="lastName"
            autoComplete="lastName"
            variant="standard"
            label="last name"
            {...register("lastName")}
            error={errors.lastName ? true : false}
            helperText={errors.lastName?.message}
          />
        </Box>
        <DelegationList
          // setSelectedItem={setSelectedItem} //? incase the selected state of delegations is needed
          name={"delegation"}
          registrer={{ ...register("delegation") }}
          error={errors.delegation ? true : false}
          helperText={errors.delegation?.message}
        />
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
          fullWidth
          id="password"
          autoComplete="password"
          variant="standard"
          type="password"
          label="password"
          {...register("password")}
          error={errors.password ? true : false}
          helperText={errors.password?.message}
        />
        <Box
          sx={{
            width: { xs: "80%", sm: "70%", md: "60%" },
            color: "primary.main",
          }}
        >
          <Button
            disabled={fetching}
            type="submit"
            variant="contained"
            fullWidth
            sx={{ my: "30px", mt: "40px", borderRadius: "20px" }}
          >
            {fetching ? "loding..." : "Sign Up"}
          </Button>
        </Box>
      </Box>
      {open && <AlertPopup open={open} setOpen={setOpen} message={payLoad} error={error} />}
      <Box display="flex" gap="5px">
        <Typography color="contrast.reverse" sx={{ my: "15px" }}>
          Already have an account ? &nbsp;&nbsp;&nbsp;
          <Typography
            component="span"
            onClick={() => setValue(0)} //navigate to the sign in tab
            sx={{
              color: "primary.main",
              cursor: "pointer",
              "&:hover": { color: "primary.dark", textDecoration: "underline" },
            }}
          >
            Sign in
          </Typography>
        </Typography>
      </Box>
      <Box display="flex" gap="5px"></Box>
    </div>
  )
}
