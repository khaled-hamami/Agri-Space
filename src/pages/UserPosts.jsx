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
import { getUserPosts } from "../apis/getUserPosts"
import UserPost from "../components/userPost"

export default function Market() {
  //* animation configuration
  const [ref, outerComponentInView] = useInView({
    triggerOnce: false,
  })
  //* animation component
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

  //* load the posts as soon as the page load or the categorie changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getUserPosts(setFetching, setError, Error).then((data) => {
          setPayload(data)
        })
      } catch (err) {
        setError(true)
      }
    }

    fetchData()
  }, []) //* array of dependecies of use Effect objects

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100svh",
        backgroundColor: "contrast.main",
        pt: { xs: "0", sm: "65px", lg: "100px", xl: "110px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: "0" }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            pt: { xs: "80px", md: "50px" },
            px: { xs: "20px", sm: "40px" },
            // pl: { md: "320px" },
          }}
          className="testtttttttttttttt"
        >
          {fetching && (
            <Typography fontSize="1.5rem" sx={{ color: "contrast.reverse" }}>
              loading...
            </Typography>
          )}
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
              <Typography fontSize="1.5rem" sx={{ color: "contrast.reverse" }}>
                Error downloading content. {payload?.message}
              </Typography>
            )
             : 
            payload?.posts && payload?.posts.length === 0 ? (
              <Typography fontSize="1.5rem" sx={{ color: "contrast.reverse" }}>
                You don't have any posts
              </Typography>
            )
             :
              (
              payload?.posts?.map((post, i) => (
                <AnimatedEventBlock index={i} key={i}>
                  {console.log(post)}
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
                    <UserPost post={post} />
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
