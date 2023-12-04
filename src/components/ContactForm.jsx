import { TextField } from "@mui/material"
import React, { useState } from "react"

export default function ContactForm() {
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const submit = async (data) => {
    await contact(
      data.name,
      data.email,
      data.subject,
      data.message,
      setFetching,
      setError,
      setSuccess
    )
    handleResult()
    setTimeout(() => {
      document.getElementById("form").reset()
    }, 500)
  }

  const form = useForm({ resolver: yupResolver(contactShema) })
  const { register, handleSubmit, formState } = form
  const { errors } = formState
  return (
    <fieldset
      style={{
        width: "95%",
        objectPosition: "center",
        margin: "0 auto 100px  auto ",
        borderColor: " #783cc2",
        borderRadius: "20px",
      }}
    >
      <legend style={{ marginLeft: "30px" }}>
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
      </legend>
      <Container
        maxWidth="xxl"
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <form
          id="form"
          name="form"
          autoComplete="on"
          onSubmit={handleSubmit(submit)}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: "35px 0 35px 0",
          }}
        >
          <TextField
            autoComplete="on"
            name="name"
            color="primary"
            id="name"
            label="Name"
            variant="outlined"
            type="text"
            {...register("name")}
            error={errors.name ? true : false}
            helperText={errors.name?.message}
            sx={{ width: "80%", m: "30px", maxWidth: "1000px" }}
          />
          <TextField
            autoComplete="on"
            name="email"
            color="primary"
            id="email"
            label="Email"
            variant="outlined"
            type="text"
            {...register("email")}
            error={errors.email ? true : false}
            helperText={errors.email?.message}
            sx={{ width: "80%", m: "30px", maxWidth: "1000px" }}
          />
          <TextField
            id="subject"
            autoComplete="on"
            name="subject"
            color="primary"
            label="Subject"
            variant="outlined"
            type="text"
            {...register("subject")}
            error={errors.subject ? true : false}
            helperText={errors.subject?.message}
            sx={{ width: "80%", m: "30px", maxWidth: "1000px" }}
          />
          <TextField
            id="message"
            autoComplete="on"
            color="primary"
            name="messageS"
            label="Message"
            variant="outlined"
            type="text"
            {...register("message")}
            error={errors.message ? true : false}
            helperText={errors.message?.message}
            sx={{ width: "80%", m: "30px", maxWidth: "1000px" }}
            multiline
            rows={6}
          />
          <Button
            id="submit"
            className="home-button"
            variant="contained"
            type="submit"
            disabled={fetching}
            sx={{
              width: "230px",
              textShadow: "none",
              "&:hover": { color: "contrast.reverse", scale: "1.02" },
              mb: "40px",
            }}
          >
            Submit
          </Button>
          {(error || success) && handleResult()}
        </form>
      </Container>
    </fieldset>
  )
}
