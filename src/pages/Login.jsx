import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import { Box, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@emotion/react"

export default function Login() {
  //* sign (in/up) page swap configuration
  const [value, setValue] = useState(0) //* a state to determine if sign in or sign up page is displayed(1=sign in, 2=sign up)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const theme = useTheme()

  return !sessionStorage.getItem("isLoggedIn") ? (
    <motion.div
      style={{
        width: "100%",
        minHeight: "100svh",
        backgroundColor: theme.palette.mode === "dark" ? "#111" : "#F8F8F8",
        position: "relative",
      }}
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: { sx: "calc(450px + 15svh)", md: "calc(520px + 20svh)" },
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: "80px", sm: "120px" },
          }}
        >
          <Paper
            elevation={15}
            sx={{
              width: { xs: "90%", sm: "65%", md: "55%", lg: "40%", xl: "35%" },
              height: { xs: "110%", sm: "100%", md: "100%" },
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              alignItems: "center",
              px: "14px",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  borderBottom: 1,
                  borderColor: "divider",
                  borderWidth: "1px",
                }}
              >
                <Tabs value={value} onChange={handleChange} aria-label="form">
                  <Tab
                    label="Sign in"
                    {...a11yProps(0)}
                    sx={{ mx: { xs: "15px", sm: "25px", md: "35px", lg: "45px", xl: "55px" } }}
                  />
                  <Tab
                    label="Sign up"
                    {...a11yProps(1)}
                    sx={{ mx: { xs: "15px", sm: "25px", md: "35px", lg: "45px", xl: "55px" } }}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <SignIn setValue={setValue} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <SignUp setValue={setValue} />
              </CustomTabPanel>
            </Box>
          </Paper>
        </Box>
      </Box>
    </motion.div>
  ) : (
    <Typography sx={{ mt: "150px" }} variant="h4">
      connected
    </Typography>
  )
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      style={{
        height: "90%",
        width: "100%",
      }}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3, width: "100%", height: "100%" }}>{children}</Box>}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}
