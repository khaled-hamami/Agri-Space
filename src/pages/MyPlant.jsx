import ImageIcon from "@mui/icons-material/Image"
import CoronavirusIcon from "@mui/icons-material/Coronavirus"
import VaccinesIcon from "@mui/icons-material/Vaccines"
import draganddrop from "../assets/images/draganddrop.png"
import draganddropdark from "../assets/images/draganddropdark.png"
import AlertPopup from "../components/AlertPopup"
import { Box, Button, IconButton, Typography, hexToRgb } from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { useTheme } from "@emotion/react"
import { reviewMyPlant } from "../apis/reviewMyPlant"
import { Cancel } from "@mui/icons-material"
import { useNavigate } from "react-router"
import { atom, useAtom } from "jotai"
import { motion } from "framer-motion"
import FileUploadIcon from "@mui/icons-material/FileUpload"

export const data = atom()
export default function MyPlant() {
  const [Aidata, setAiData] = useAtom(data)
  const navigate = useNavigate()
  const [error, setError] = useState(false) //* error state incase of error
  const [payload, setPayload] = useState(false) // *payload state that contain either data of response
  const [fetching, setFetching] = useState(false) //* to disable confirm button to prevent mutiple requests
  const [open, setOpen] = useState(false) //* to open the alert incase of error or success
  const [invalidConfirm, setInavlidCofirm] = useState(false) //* to open the alert incase of error or success
  const [invalidConfirmMessage, setInavlidCofirmMessage] = useState("") //* to open the alert incase of error or success

  const theme = useTheme()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [files, setFiles] = useState([]) //*the file uploaded to the handler
  const [image, setImage] = useState([]) //* state with the correct convernted image format

  //* drop zone configuration
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 1) {
      const file = acceptedFiles[0]
      const reader = new FileReader()

      reader.onloadend = () => {
        const imageUrl = reader.result
        setImage(imageUrl)

        // convert the image to the correct format to display to the user before he can confirm
        setFiles([Object.assign(file, { preview: URL.createObjectURL(file) })])

        // Review the plant by sending a POST request to the Django backend
        // reviewMyPlant(file, setFetching, setError, setPayload);
      }

      reader.readAsDataURL(file)
    }
  }, [])

  //*drop zone hook that handle when something is hovering or dropeed
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  })

  //* verify if the the image is only one and if the image exceeds the max size or if the image extension is invalid
  const handleSubmission = () => {
    if (files.length === 1) {
      //* declaration
      const file = files[0]
      const maxSizeInBytes = 3 * 1024 * 1024 //* 3MB : max size that uploaded file can be
      if (file.size > maxSizeInBytes) {
        setInavlidCofirm(true)
        setInavlidCofirmMessage("Maximum size exceeded")
      } else {
        const allowedExtensions = ["png", "jpeg", "jpg"]
        const fileExtension = file.name
          .toLowerCase()
          .slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2)
        if (allowedExtensions.includes(fileExtension)) {
          //* File has a valid extension, proceed with the reviewMyPlant function
          reviewMyPlant(files[0], setFetching, setError, setPayload).then((data) => {
            setOpen(true)
            setAiData(data)
            navigate("/aiResult")
          })
        } else {
          setInavlidCofirm(true)
          setInavlidCofirmMessage("Invalid file type. Please submit a .jpg file.")
        }
      }
    } else {
      setInavlidCofirm(true)
      setInavlidCofirmMessage("Please submit 1 image")
    }
  }
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100svh",
        backgroundColor: "contrast.main",
        pt: { sm: "85px" },
      }}
    >
      <motion.div
        initial={{ translateY: -200, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            width: "100%",
            py: "10px",
            px: { xs: "30px", sm: "60px", md: "80px", lg: "90px", xl: "100px" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "80%",
              display: "flex",
              justifyContent: { xs: "flex-start", md: "space-evenly" },
              alignItems: { xs: "flex-start", md: "center" },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                my: { xs: "15px", md: "none" },
              }}
            >
              <IconButton
                sx={{
                  cursor: "auto",
                  backgroundColor: "primary.dark",
                  color: "contrast.main",
                  "&:hover": { backgroundColor: "primary.main" },
                }}
              >
                <ImageIcon />
              </IconButton>

              <div>
                <Typography
                  sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "contrast.reverse" }}
                >
                  upload image
                </Typography>
                <Typography fontSize=".9rem" sx={{ color: "contrast.reverse" }}>
                  drag and drop or click the import Button
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                my: { xs: "15px", md: "none" },
              }}
            >
              <IconButton
                sx={{
                  cursor: "auto",
                  backgroundColor: "primary.dark",
                  "&:hover": { backgroundColor: "primary.main" },
                  color: "contrast.main",
                }}
              >
                <CoronavirusIcon />
              </IconButton>
              <div>
                <Typography
                  sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "contrast.reverse" }}
                >
                  Process Image
                </Typography>
                <Typography sx={{ color: "contrast.reverse" }} fontSize=".9rem">
                  we will inform you if the plant is sick
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                my: { xs: "15px", md: "none" },
                color: "contrast.reverse",
              }}
            >
              <IconButton
                sx={{
                  cursor: "auto",

                  backgroundColor: "primary.dark",
                  "&:hover": { backgroundColor: "primary.main" },
                  color: "contrast.main",
                }}
              >
                <VaccinesIcon />
              </IconButton>
              <div>
                <Typography
                  sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "contrast.reverse" }}
                >
                  procedural cautions
                </Typography>
                <Typography fontSize=".9rem">
                  we ill suggest the best medicin for the plant
                </Typography>
              </div>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            minHeight: "100px",
            width: "100%",
          }}
        >
          {open && <AlertPopup open={open} setOpen={setOpen} message={payload} error={error} />}
          <Box
            sx={{
              marginX: "auto",
              width: { xs: "90%", sm: "80%", md: "70%", lg: "50%" },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.25rem",
                    sm: "1.7rem",
                    md: "1.9rem",
                    lg: "2.1rem",
                    xl: "2.5rem",
                  },
                  color: "contrast.reverse",
                }}
              >
                Upload Files
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: ".8rem", sm: "1rem" },
                  color: "contrast.reverse",
                }}
              >
                <span style={{ color: "#f00" }}>*</span> Please make sure to upload only one image
                (jpg format)
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: ".8rem", sm: "1rem" },
                  color: "contrast.reverse",
                }}
              >
                <span style={{ color: "#f00" }}>*</span> this AI is not 100% accurate so please if
                the result is unsatisfying try again
              </Typography>
            </div>
            {files.length > 0 && (
              <Button
                onClick={() => setFiles([])}
                endIcon={<Cancel />}
                sx={{
                  color: "contrast.reverse",
                  height: "",
                  "&:hover": { scale: "1.02" },
                }}
              >
                Cancel
              </Button>
            )}
          </Box>
          <motion.div
            initial={{ translateX: -400, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ marginTop: "15px" }}
          >
            {invalidConfirm && (
              <AlertPopup
                open={invalidConfirm}
                setOpen={setInavlidCofirm}
                message={invalidConfirmMessage}
                error={true}
              />
            )}
            <Box
              sx={{
                width: { xs: "70%", sm: "80%", md: "70%", lg: "50%" },
                border: "dashed 2px",
                borderColor: isDragActive ? "primary.light" : "primary.dark",
                borderRadius: "20px",
                boxShadow: "paper",
                marginX: "auto",
                display: "felx",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "20svh", sm: "30svh", md: "40svh", lg: "50svh" },
              }}
              {...getRootProps()}
            >
              <Box
                sx={{
                  marginX: "auto",
                  width: { xs: "80%", sm: "70%", md: "60%", lg: "50%" },
                  height: { xs: "100%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!isDragActive ? (
                  files.length === 0 ? (
                    <>
                      <img
                        src={theme.palette.mode === "dark" ? draganddrop : draganddropdark}
                        style={{ width: "40%" }}
                      />
                      <Typography
                        sx={{
                          color: "contrast.reverse",
                          fontSize: {
                            xs: "1.3rem",
                            sm: "1.5rem",
                            md: "1.7rem",
                            lg: "1.9rem",
                            xl: "2.2rem",
                          },
                        }}
                      >
                        Drag and drop
                      </Typography>
                    </>
                  ) : (
                    files.map((file) => (
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                        key={file.name}
                      >
                        <img
                          src={file.preview}
                          width="40%"
                          style={{ marginTop: "15px", borderRadius: "10px" }}
                          alt={file.name}
                        />
                        <Typography>{file.name}</Typography>
                      </div>
                    ))
                  )
                ) : (
                  <Typography
                    sx={{
                      color: "contrast.reverse",
                      fontSize: {
                        xs: "1.3rem",
                        sm: "1.5rem",
                        md: "1.7rem",
                        lg: "1.9rem",
                        xl: "2.2rem",
                      },
                    }}
                  >
                    Release
                  </Typography>
                )}
              </Box>
              <input
                // type="file"
                // {...getInputProps()}
                style={{ display: "none" }}
                accept=".jpg"
                id="image-upload"
              />
              <Box
                sx={{
                  my: "25px",
                  width: { xs: "70%", sm: "80%", md: "70%", lg: "50%" },
                  display: "flex",
                  marginX: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  endIcon={<FileUploadIcon />}
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: "rgba(0,0,0,.05)", color: "contrast.reverse" }}
                >
                  Upload file
                </Button>
              </Box>
            </Box>
          </motion.div>

          <Box
            sx={{
              marginX: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              my: "80px",
              width: { xs: "70%", sm: "80%", md: "70%", lg: "50%" },
            }}
          >
            <Button
              disabled={fetching}
              type="submit"
              sx={{ backgroundColor: "rgba(0,0,0,.05)", color: "contrast.reverse" }}
              variant="outlined"
              onClick={() => handleSubmission()}
              fullWidth
            >
              {fetching ? "loading..." : "Confirm"}
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Box>
  )
}
