import slides from "../assets/mock.json"
import homeImage1 from "../assets/images/home-image-1.png"
import homeImage2 from "../assets/images/home-image-4.png"
import homeBackground1 from "../assets/images/home-background-1.jpg"
import homeBackground2 from "../assets/images/home-background-2.jpg"
import homeBackground3 from "../assets/images/home-background-3.webp"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { contact } from "../apis/contact"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { contactSchema } from "../schemas/contactSchema"
import Popup from "../components/Popup"
import parallax from "../assets/images/parallax.jpg"

export default function Home() {
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleResult = () => {
    return (
      <Popup data={success != "" ? success : error} status={success != "" ? "success" : "error"} />
    )
  }
  const navigate = useNavigate()
  //* contact form configuration
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [fetching, setFetching] = useState(false)
  const form = useForm({ resolver: yupResolver(contactSchema) })
  const { register, handleSubmit, formState } = form
  const { errors } = formState
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100svh",
          backgroundAttachment: "fixed",
          backgroundColor: "contrast.main",
          pt: { xs: "30px", sm: "90px", lg: "100px", xl: "110px" },
          px: { xs: "30px", sm: "60px", md: "80px", lg: "90px", xl: "100px" },
          mb: "50px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100svh",
            mt: { xs: "30svw", sm: "20svw", md: "7vw" },
            // bgcolor: "rgba(255,0,0,.5)",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ pb: { xs: "50px", sm: "100px", md: "120px" } }}>
              <motion.div
                initial={{ opacity: 0, translateY: -200 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography fontSize="3rem" sx={{ color: "contrast.reverse", fontWeight: "bold" }}>
                  Agri Space
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: 200 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography fontSize="1.5rem" sx={{ color: "contrast.reverse" }}>
                  Welcome to your best place for agricultural trade in Tunisia
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
          <Box>
            <motion.div
              initial={{ opacity: 0, translateY: -200 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                onClick={() => navigate("/market")}
                variant="contained"
                sx={{
                  borderRadius: "25px",
                  color: "contrast.main",
                  m: "10px 10px 10px 0",
                  fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                }}
              >
                discover opportunities
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "25px",
                  color: "contrast.main",
                  backgroundColor: "contrast.reverse",
                  "&:hover": { backgroundColor: "#444" },
                  fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                }}
                href="#contact"
              >
                Contact us
              </Button>
            </motion.div>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              my: { xs: "50px", sm: "70px", md: "150px" },
            }}
          >
            <Paper
              elevation={20}
              sx={{
                mx: "20px",
                width: { xs: "80%", md: "45%", lg: "30%" },
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                my: "30px",
                pb: "10px",
                backgroundColor: "primary.light",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: "90%",
                  backgroundImage: `url(${homeBackground3})`,
                  filter: "blur(2px)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  WebkitMaskImage: "linear-gradient(to Top, transparent 0%,  #00ff00 50%)",
                  backdropFilter: "blur(5px)",
                  p: "0 15px 15px 15px",
                }}
              />
              <Typography
                sx={{
                  px: "10px",
                  color: "#fff",
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                }}
              >
                Crops
              </Typography>
              <Typography
                sx={{
                  color: "#333",
                  fontSize: { xs: ".7rem", sm: ".95rem", md: "1.1rem" },
                }}
              >
                Access real-time weather information on our platform to effortless planning. Join us
                by adopting intelligence smarter weather forecast.
              </Typography>
            </Paper>
            <Paper
              elevation={20}
              sx={{
                mx: "20px",
                width: { xs: "80%", md: "45%", lg: "30%" },
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                my: "30px",
                pb: "10px",
                backgroundColor: "primary.light",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: "90%",
                  backgroundImage: `url(${homeBackground1})`,
                  filter: "blur(2px)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  WebkitMaskImage: "linear-gradient(to Top, transparent 0%,  #00ff00 70%)",
                  backdropFilter: "blur(5px)",
                  p: "0 15px 15px 15px",
                }}
              />
              <Typography
                sx={{
                  zIndex: "405",
                  px: "10px",
                  color: "#fff",
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                }}
              >
                Animals
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  px: "10px",
                  fontSize: { xs: ".7rem", sm: ".95rem", md: "1.1rem" },
                }}
              >
                browse through packs of animals until you find what suits you{" "}
              </Typography>
            </Paper>
            <Paper
              elevation={20}
              sx={{
                mx: "20px",
                width: { xs: "80%", md: "45%", lg: "30%" },
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                my: "30px",
                pb: "10px",
                backgroundColor: "primary.light",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: "90%",
                  backgroundImage: `url(${homeBackground2})`,
                  filter: "blur(2px)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  WebkitMaskImage: "linear-gradient(to Top, transparent 0%,  #00ff00 50%)",
                  backdropFilter: "blur(5px)",
                  p: "0 15px 15px 15px",
                }}
              />
              <Typography
                sx={{
                  zIndex: "405",
                  px: "10px",
                  color: "#fff",
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                }}
              >
                Vehicles
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  px: "10px",
                  fontSize: { xs: ".7rem", sm: ".95rem", md: "1.1rem" },
                }}
              >
                Explore our agricultural e-commerce platform to buy, sell and resell effortlessly.
                of this category of vehicles to provide the latest invention in the agricultural
                world
              </Typography>
            </Paper>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "600px",
              my: "50px",
              mt: { xs: "450px", sm: "300px", md: "150px" },
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              justifyContent: "space-between",
              // backgroundColor: "rgba(255,0,0,.5)",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "2.3rem", color: "rgb(0,100,0)", pb: "15px" }}>
                Why choose us{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "3.3rem",
                  color: "contrast.reverse",
                  fontWeight: "bold",
                  pb: "15px",
                }}
              >
                Personalized purchasing and sales service{" "}
              </Typography>
              <Typography sx={{ fontSize: "1.5rem", color: "contrast.reverse" }}>
                Buying and selling service with categorized selection for your convenience{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                flex: 2,
                // backgroundColor: "rgba(255,255,255,.5)",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img src={homeImage1} height="100%" width="80%" style={{ margin: "auto" }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "600px",
              my: "50px",
              mb: "300px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              // backgroundColor: "rgba(255,0,0,.5)",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                flex: 1,
                // backgroundColor: "rgba(255,255,255,.5)",
                display: "flex",
              }}
            >
              <img src={homeImage2} height="100%" style={{ margin: "auto" }} />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "2.3rem", color: "rgb(0,100,0)", pb: "15px" }}>
                who are you{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "3.3rem",
                  color: "contrast.reverse",
                  fontWeight: "bold",
                  pb: "15px",
                }}
              >
                flexible use
              </Typography>
              <Typography sx={{ fontSize: "1.5rem", color: "contrast.reverse" }}>
                our service can be used by farmers, personal use or companies
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Slider slides={slides} />
      <Box
        sx={{
          height: { xs: "200px", sm: "300px", md: "400px", lg: "500px", xl: "600px" },
          backgroundImage: `url(${parallax})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",

          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "transparent",
            height: { xs: "100px", sm: "200px", md: "300px", lg: "400px", xl: "500px" },
          }}
        />
      </Box>
      <fieldset
        id="contact"
        style={{
          width: "95%",
          objectPosition: "center",
          margin: "200px auto 100px  auto ",
          borderColor: "#0AB68B",
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

      <Footer />
    </>
  )
}