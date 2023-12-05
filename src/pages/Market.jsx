import { Box, IconButton, List, Typography } from "@mui/material"
import ListIcon from "@mui/icons-material/List"
import { useTheme } from "@emotion/react"
import CategoriesList from "../components/CategoriesList"
import MobileCategoriesList from "../components/MobileCategoriesList"
import { useEffect, useState } from "react"
import Posts from "../components/Posts"
import AddIcon from "@mui/icons-material/Add"
import { getPosts } from "../apis/getPosts"
import { useNavigate } from "react-router"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "../styles/index.css"

export default function Market() {
  //* animation configuration
  const [ref, outerComponentInView] = useInView({
    triggerOnce: false,
  })
  const AnimatedEventBlock = ({ children, index }) => {
    const [innerRef, inView] = useInView({
      triggerOnce: false,
    })

    const animationVariants = {
      hidden: { opacity: 0, translateX: index % 2 === 0 ? -200 : 200 },
      visible: { opacity: 1, translateX: 0 },
    }

    return (
      <motion.div
        ref={innerRef}
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          fontSize: "inherit",
          overflow: "hidden",
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    )
  }

  const navigate = useNavigate()
  const [mobileListVisible, setMobileListVisible] = useState(false) //* responsive mobile/desktop list view
  const [selectedCategorie, setSelectedCategorie] = useState("Crops") //* a selected categori to pass to the api
  const [Error, setError] = useState(false) //*error state in case of fail
  const [fetching, setFetching] = useState(false) //* a state to prevent multiple requests at once
  const [payload, setPayload] = useState(null) //* the return data(posts) from the api
  const theme = useTheme()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getPosts(selectedCategorie, setFetching, setPayload, setError, Error)
      } catch (err) {
        setError(true)
        console.log(Error)
      }
    }

    fetchData() // Call fetchData here, not inside the try-catch block
  }, [selectedCategorie])

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100svh",
        backgroundColor: "contrast.main",
        pt: { xs: "0", sm: "65px", lg: "100px", xl: "110px" },
      }}
    >
      <motion.div
        initial={{ opacity: "0" }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            zIndex: 2,
            mt: { xs: "0", sm: "20px" },
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            height: "45px",
            width: "100%",
            bgcolor: "primary.main",
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            onClick={() => setMobileListVisible((prev) => !prev)}
            sx={{ display: { md: "none" } }}
          >
            <ListIcon />
          </IconButton>

          <IconButton
            size="large"
            onClick={() =>
              sessionStorage.getItem("LoggedIn") ? navigate("/createPost") : navigate("/login")
            }
          >
            <AddIcon />
          </IconButton>
        </Box>

        <MobileCategoriesList
          display={mobileListVisible}
          setDisplay={setMobileListVisible}
          setSelectedCategorie={setSelectedCategorie}
        />
        <motion.div
          initial={{ translateX: -100, translateY: -100 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: "fixed" }}
        >
          <List
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100svh",
              width: "450px",
              maxWidth: 300,
              bgcolor: theme.palette.mode == "dark" ? "#444" : "#EEE",
              color: "contrast.reverse",
              display: { xs: "none", md: "block" },
              zIndex: 1,
              pt: { md: "70px", lg: "80px", xl: "90px" },
              borderRight: "1px solid #0AB68B",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <CategoriesList setSelectedCategorie={setSelectedCategorie} />
          </List>
        </motion.div>
        <Box
          sx={{
            pt: { xs: "80px", md: "50px" },
            px: { xs: "20px", sm: "40px" },
            pl: { md: "320px" },
          }}
        >
          <Box
            width="100%"
            borderRadius="10vw"
            bgcolor="rgba(0,255,0,.2)"
            display="flex"
            justifyContent="center"
            sx={{ my: "15px" }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                color: "contrast.reverse",
              }}
            >
              {selectedCategorie}
            </Typography>
          </Box>

          {fetching && <Typography fontSize="1.5rem">loading...</Typography>}
          <Box
            ref={ref}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "45px",
            }}
          >
            {Error ? (
              <Typography fontSize="1.5rem">
                Error downloading content. {payload?.message}
              </Typography>
            ) : (
              payload?.map((post, i) => (
                <AnimatedEventBlock index={i} key={i}>
                  <motion.div
                    style={{ marginBlock: "50px" }}
                    initial={{
                      opacity: 0,
                      translateY: -100,
                      translateX: i % 2 === 0 ? -200 : 200,
                    }}
                    animate={{ opacity: 1, translateY: 0, translateX: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.2 }}
                  >
                    <Posts post={post} />
                  </motion.div>
                </AnimatedEventBlock>
              ))
            )}
          </Box>
        </Box>
      </motion.div>
    </Box>
  )
}
