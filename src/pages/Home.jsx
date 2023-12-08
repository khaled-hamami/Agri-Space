import slides from "../assets/mock.json"
import homeImage1 from "../assets/images/home-image-1.png"
import homeImage2 from "../assets/images/home-image-4.png"
import homeBackground1 from "../assets/images/home-background-1.jpg"
import homeBackground2 from "../assets/images/home-background-2.jpg"
import homeBackground3 from "../assets/images/home-background-3.webp"
import homeBackground4 from "../assets/images/home-background-4.jpg"
import homeBackground5 from "../assets/images/home-background-5.jpg"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import parallax from "../assets/images/parallax.jpg"
import Popup from "../components/Popup"
import logo from "../assets/images/logo.png"
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { contact } from "../apis/contact"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { contactSchema } from "../schemas/contactSchema"

export default function Home() {
  //* api call
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
    // sessionStorage.setItem("isLoggedIn", true) //! to delete
  }, [])

  const handleResult = () => {
    return (
      <Popup data={success != "" ? success : error} status={success != "" ? "success" : "error"} />
    )
  }
  const navigate = useNavigate()

  //* animate on scroll configuration

  const [ref1, inView1] = useInView({
    triggerOnce: false,
  })

  const [ref2, inView2] = useInView({
    triggerOnce: false,
  })

  const [ref3, inView3] = useInView({
    triggerOnce: false,
  })

  const [ref4, inView4] = useInView({
    triggerOnce: false,
  })

  const [ref5, inView5] = useInView({
    triggerOnce: false,
  })
  const [ref6, inView6] = useInView({
    triggerOnce: false,
  })
  const [ref7, inView7] = useInView({
    triggerOnce: false,
  })
  const [ref8, inView8] = useInView({
    triggerOnce: false,
  })
  const [ref9, inView9] = useInView({
    triggerOnce: false,
  })

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
          pt: { xs: "30px" },
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
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
                  m: "10px",
                  fontSize: { xs: ".9rem", sm: "1.05rem", md: "1.1rem" },
                  "&:hover": { color: "contrast.reverse", scale: "1.02" },
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
                  ml: "10px",
                  fontSize: { xs: ".9rem", sm: "1.05rem", md: "1.1rem" },
                  "&:hover": { color: "contrast.reverse", scale: "1.02", backgroundColor: "#444" },
                }}
                href="#contact"
              >
                Contact us
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <img src={logo} alt="" />
              </div>
            </motion.div>
          </Box>

          <Typography
            sx={{
              fontSize: "3.3rem",
              color: "contrast.reverse",
              fontWeight: "bold",
            }}
          >
            Our Services
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <Paper
              elevation={20}
              ref={ref1}
              sx={{
                mx: "20px",
                width: { xs: "80%", md: "45%", lg: "30%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                my: "30px",
                pb: "10px",
                backgroundColor: "primary.main",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                position: "relative",
                opacity: inView1 ? 1 : 0,
                transform: inView1
                  ? "scale(1) rotate(0) translate(0)"
                  : "scale(0.8) rotate(-15deg) translateY(20px)",
                transformOrigin: "center bottom",
                transition: "opacity 0.8s, transform 0.8s",
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
              ref={ref2}
              sx={{
                mx: "20px",
                width: { xs: "80%", md: "45%", lg: "30%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                my: "30px",
                pb: "10px",
                backgroundColor: "primary.main",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                position: "relative",
                opacity: inView2 ? 1 : 0,
                transform: inView2
                  ? "scale(1) rotate(0) translate(0)"
                  : "scale(0.8) rotate(-15deg) translateY(20px)",
                transformOrigin: "center bottom",
                transition: "opacity 0.8s, transform 0.8s",
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
              ref={ref3}
              sx={{
                mx: "20px",
                width: { xs: "80%", md: "45%", lg: "30%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                my: "30px",
                pb: "10px",
                backgroundColor: "primary.main",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                position: "relative",
                opacity: inView3 ? 1 : 0,
                transform: inView3
                  ? "scale(1) rotate(0) translate(0)"
                  : "scale(0.8) rotate(-15deg) translateY(20px)",
                transformOrigin: "center bottom",
                transition: "opacity 0.8s, transform 0.8s",
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
                Agricultural equipment
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  px: "10px",
                  fontSize: { xs: ".7rem", sm: ".95rem", md: "1.1rem" },
                }}
              >
                Explore our agricultural e-commerce platform to buy, sell and resell effortlessly.
                of this category of vehicles and equipments to provide the latest invention in the
                agricultural world
              </Typography>
            </Paper>
            <Paper
              elevation={20}
              ref={ref4}
              sx={{
                mx: "20px",
                width: { xs: "80%", md: "45%", lg: "30%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                my: "30px",
                pb: "10px",
                backgroundColor: "primary.main",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                position: "relative",
                opacity: inView4 ? 1 : 0,
                transform: inView4
                  ? "scale(1) rotate(0) translate(0)"
                  : "scale(0.8) rotate(-15deg) translateY(20px)",
                transformOrigin: "center bottom",
                transition: "opacity 0.8s, transform 0.8s",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: "90%",
                  backgroundImage: `url(${homeBackground4})`,
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
                Crop protection
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  px: "10px",
                  fontSize: { xs: ".7rem", sm: ".95rem", md: "1.1rem" },
                }}
              >
                look through the list of crops protection to find what best suits you. You can also
                scan your plant and get suggestions
              </Typography>
            </Paper>
            <Paper
              elevation={20}
              ref={ref5}
              sx={{
                mx: "20px",
                width: { xs: "80%", md: "45%", lg: "30%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                my: "30px",
                pb: "10px",
                backgroundColor: "primary.main",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                position: "relative",
                opacity: inView5 ? 1 : 0,
                transform: inView5
                  ? "scale(1) rotate(0) translate(0)"
                  : "scale(0.8) rotate(-15deg) translateY(20px)",
                transformOrigin: "center bottom",
                transition: "opacity 0.8s, transform 0.8s",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: "90%",
                  backgroundImage: `url(${homeBackground5})`,
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
                Agricultural technology
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  px: "10px",
                  fontSize: { xs: ".7rem", sm: ".95rem", md: "1.1rem" },
                }}
                f
              >
                Find out the latest and greatest new technologies for sale, and get your hands on
                them
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
              <motion.div
                ref={ref6}
                initial={{ opacity: 0, translateX: -200 }}
                transition={{ duration: 0.8 }}
                style={{ opacity: 0, translateX: -200 }}
                animate={inView6 ? { opacity: 1, translateX: 0 } : {}}
              >
                <Typography sx={{ fontSize: "2.3rem", color: "primary.main", pb: "15px" }}>
                  Why choose us
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
              </motion.div>
            </Box>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                flex: 2,
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
              my: "10px",
              mb: "300px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                flex: 1,
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
              <motion.div
                ref={ref7}
                initial={{ opacity: 0, translateX: 200 }}
                transition={{ duration: 0.8 }}
                style={{ opacity: 0, translateX: 200 }}
                animate={inView7 ? { opacity: 1, translateX: 0 } : {}}
              >
                <Typography sx={{ fontSize: "2.3rem", color: "primary.main", pb: "15px" }}>
                  who are you
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
              </motion.div>
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
            backgroundColor: "rgba(0,0,0,0.5)",
            height: { xs: "200px", sm: "300px", md: "400px", lg: "500px", xl: "600px" },
          }}
        />
      </Box>
      <fieldset
        id="contact"
        style={{
          marginTop: "120px",
          marginBottom: "120px",
          width: "95%",
          objectPosition: "center",
          margin: "50x auto 100px  auto ",
          borderColor: "#0AB68B",
          borderRadius: "20px",
          margin: "auto",
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
                borderRadius: "25px",
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
      <motion.div
        ref={ref9}
        initial={{ opacity: 0, translateY: 200 }}
        transition={{ duration: 0.8 }}
        style={{ opacity: 0, translateY: 200, marginTop: "20px" }}
        animate={inView9 ? { opacity: 1, translateY: 0 } : {}}
      >
        <Footer />
      </motion.div>
    </>
  )
}
