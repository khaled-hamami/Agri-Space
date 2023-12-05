import ImageIcon from "@mui/icons-material/Image"
import CoronavirusIcon from "@mui/icons-material/Coronavirus"
import VaccinesIcon from "@mui/icons-material/Vaccines"
import draganddrop from "../assets/images/draganddrop.png"
import draganddropdark from "../assets/images/draganddropdark.png"
import AlertPopup from "../components/AlertPopup"
import { Box, Button, IconButton, Typography, hexToRgb } from "@mui/material"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { useTheme } from "@emotion/react"
import { reviewMyPlant } from "../apis/reviewMyPlant"
import { Cancel } from "@mui/icons-material"
import { useNavigate } from "react-router"
import { atom, useAtom } from "jotai"
// const demo = {
//   title: "tomato : a tomato",
//   desc: "lorem ipsum dolor sit amet lorem ezklhfezkf kjzehfze lfhEZKRLJFG ZLJRGBNerklj gbnkejLR HFNKLErzjhf gkljer gneNGJ.ERNG KErn gkjerbngkj eRBGNLEKgjlke GJ LREJF LR FLZJFJZRO¨GHZifjz lghogùzgoe",
//   prevent:
//     "test calleed way to hiu yu i jhy redv hgta rejfjh ekjrfh ekjghekrhg erg erohg ergh ERG reh herlg her gheRGER E GERGKEGH ",
//   image_url: "http://a radndom image url",
//   pred: 9,
//   sname: "test sname  ufkhe fkh no  data  found",
//   simage: "https://a random similar image preview",
//   uimage: "http://a random u???? image preview",
// }
export const data = atom()
export default function MyPlant() {
  const [Aidata, setAiData] = useAtom(data)
  const navigate = useNavigate()
  const [error, setError] = useState(false) //* error state incase of error
  const [payload, setPayload] = useState(false) // *payload state that contain either data of response
  const [fetching, setFetching] = useState(false) //* to disable confirm button to prevent mutiple requests
  const [open, setOpen] = useState(false) //* to open the alert incase of error or success

  const maxSizeInBytes = 3 * 1024 * 1024 //* 3MB : max size that uploaded file can be

  const theme = useTheme()

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
  // const handleSubmission = () => {
  //   if (files.length === 1) {
  //     //* declaration
  //     const file = files[0]
  //     const maxSizeInBytes = 3 * 1024 * 1024 // 3 MB
  //     if (file.size > maxSizeInBytes) {
  //       alert("Maximum size exceeded")
  //     } else {
  //       const allowedExtensions = ["png", "jpeg", "jpg"]
  //       const fileExtension = file.name
  //         .toLowerCase()
  //         .slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2)
  //       if (allowedExtensions.includes(fileExtension)) {
  //         //* File has a valid extension, proceed with the reviewMyPlant function
  //         reviewMyPlant(setFetching, setError, setPayload).then(() => {
  //           setOpen(true)
  //           // setAiData(demo) //! to set to payload
  //           // navigate("/aiResult")
  //         })
  //       } else {
  //         alert("Invalid file type. Please submit a .png, .jpeg, or .jpg file.")
  //       }
  //     }
  //   } else {
  //     alert("Please submit 1 image")
  //   }
  // }
  function send() {
    let url = "http://192.168.252.224:8000/submit"
    let formData = new FormData()
    let inputElement = document.getElementById("image-upload")
    let file = inputElement.files[0]
    console.log(inputElement)
    formData.append("image", file)

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error))
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
      <Box
        sx={{
          width: "100%",
          py: "30px",
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
              <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>upload image</Typography>
              <Typography fontSize=".9rem">drag and drop or click the import Button</Typography>
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
              <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>Process Image</Typography>
              <Typography fontSize=".9rem">we will inform you if the plant is sick</Typography>
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
              <VaccinesIcon />
            </IconButton>
            <div>
              <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
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
                fontSize: { xs: "1.5rem", sm: "1.7rem", md: "1.9rem", lg: "2.1rem", xl: "2.5rem" },
              }}
            >
              Upload Files
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: ".8rem", sm: "1rem" },
              }}
            >
              * Please make sure to upload only one image
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: ".8rem", sm: "1rem" },
              }}
            >
              * this AI is not 100% accurate so please if the result is unsatisfying try again,
              sorry
            </Typography>
          </div>
          {files.length > 0 && (
            <Button onClick={() => setFiles([])} endIcon={<Cancel />}>
              Cancel
            </Button>
          )}
        </Box>
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
          // {...getRootProps()}
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
          type="file"
            // {...getInputProps()}
            // style={{ display: "none" }}
            // accept=".png, .jpg, .jpeg"
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
            <Button variant="outlined" fullWidth>
              Upload file
            </Button>
          </Box>
        </Box>
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
            variant="outlined"
            onClick={() => send()}
            fullWidth
          >
            {fetching ? "loading..." : "Confirm"}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
