import AlertPopup from "../components/AlertPopup"
import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { postSchema } from "../schemas/PostSchema"
import { createPost } from "../apis/createPost"

export default function CreatePost() {
  //* image upload configuration
  const fileInputRef = useRef(null)
  const [uploadedImages, setUploadedImages] = useState([])
  const [errMessage, setErrorMessage] = useState("error") //? not yet used

  const handleImageUpload = (event) => {
    const files = event.target.files
    const uploadedImages = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()

      reader.onload = () => {
        const imageUrl = reader.result
        uploadedImages.push(imageUrl)
        setUploadedImages([...uploadedImages]) //* Update the state with the new array of uploaded image URLs
      }

      reader.readAsDataURL(file)
    }
  }
  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const [alertOpen, setAlertOpen] = useState(false) //* alert popover

  const [fetching, setFethcing] = useState(false) //* state to disable multiple requests at once
  const [error, setError] = useState(false) //* state to disable multiple requests at once
  const [payload, setPayload] = useState(false) //* state to disable multiple requests at once
  const [open, setOpen] = useState(false)
  //*forma validation configuration
  const form = useForm({ resolver: yupResolver(postSchema) })
  const { register, handleSubmit, formState } = form
  const { errors } = formState

  //*pass the form data to the api
  const addPost = (data) => {
    if (uploadedImages.length) {
      createPost(
        data.title,
        data.description,
        data.price,
        data.phone,
        data.categorie,
        uploadedImages,
        setFethcing,
        setPayload,
        setError
      ).then(() => setOpen(true))
    } else alert("please provide one image or more")
  }
  //* input select options
  const categories = [
    "Crops",
    "Animals",
    "Agricultural equipment",
    "Crop protection",
    "Agricultural technology",
  ]

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
        color="contrast.reverse"
        fontWeight="bolder"
        sx={{
          my: "25px",
          mt: "150px",
          fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2rem", lg: "2.2rem" },
        }}
      >
        What Are You Selling Today
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(addPost)}
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
        <TextField
          fullWidth
          id="Title"
          autoComplete="Title"
          variant="standard"
          label="Title"
          {...register("title")}
          error={errors.title ? true : false}
          helperText={errors.title?.message}
        />
        <TextField
          fullWidth
          id="description"
          autoComplete="description"
          variant="standard"
          label="description"
          {...register("description")}
          error={errors.description ? true : false}
          helperText={errors.description?.message}
          multiline
        />

        <TextField
          fullWidth
          id="price"
          autoComplete="price"
          type="number"
          variant="standard"
          label="price"
          {...register("price")}
          error={errors.price ? true : false}
          helperText={errors.price?.message}
        />
        <TextField
          fullWidth
          id="Phone Number"
          autoComplete="Phone Number"
          type="number"
          variant="standard"
          label="Phone Number"
          {...register("phone")}
          error={errors.phone ? true : false}
          helperText={errors.phone?.message}
        />
        <Autocomplete
          fullWidth
          disablePortal
          id="categories"
          options={categories}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              fullWidth
              variant="standard"
              {...register("categorie")}
              error={errors.categorie?.message}
              helperText={errors.categorie?.message}
              {...params}
              label="Categorie"
            />
          )}
        />
        <input
          type="file"
          accept=".png , .jpg , .jpeg"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          ref={fileInputRef}
          multiple
        />
        <Button
          variant="contained"
          sx={{
            color: "contrast.main",
            borderRadius: "25px",
            "&:hover": { color: "contrast.reverse", scale: "1.02" },
          }}
          onClick={handleButtonClick}
        >
          Importer des images
        </Button>
        <Typography sx={{ color: "contrast.reverse" }}>Images : {uploadedImages.length}</Typography>
        <Box
          sx={{
            width: { xs: "80%", sm: "70%", md: "60%" },
            color: "primary.main",
          }}
        >
          {open && <AlertPopup open={open} setOpen={setOpen} message={payload} error={error} />}
          <Button
            disabled={fetching}
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              my: "30px",
              mt: "40px",
              borderRadius: "25px",
              color: "contrast.main",
              "&:hover": { color: "contrast.reverse", scale: "1.02" },
            }}
          >
            {fetching ? "loding..." : "Confirm "}
          </Button>
        </Box>
      </Box>
      {alertOpen && <AlertPopup />}
      <Box display="flex" gap="5px"></Box>
      <Box display="flex" gap="5px"></Box>
    </div>
  )
}
