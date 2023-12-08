import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import { useState } from "react"
import { Avatar, Button, IconButton, Rating, Typography } from "@mui/material"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { deletePost } from "../apis/deletePost"
import AlertPopup from "./AlertPopup"

export default function UserPost({ post }) {
  const [contactInfoHidden, setContactInfoHidden] = useState(false) //? a state to show contact info(not yet used)
  const [hovered, setHovered] = useState(false) //? for animation (not yet used)
  const [ratingValue, setRatingValue] = useState(0)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const switchImage = (increment) => {
    const newIndex = (currentImageIndex + increment + post.images.length) % post.images.length
    setCurrentImageIndex(newIndex)
  }
  const id = post.post_id
  const [fetching, setFetching] = useState(false)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState(false)
  //* api call
  const handleDelete = async () => {
    await deletePost(id, setFetching, setError, setMessage, setOpen)
  }

  return (
    <Card
      elevation={5}
      sx={{
        width: { xs: "100%", sm: "400px", md: "550px" },
        height: "auto",
        padding: "15px",
        margin: "auto",
        backgroundColor: "rgba(50,200,50,.1)",
        boxShadow: "0 4px 2px rgba(0,255,0,.3)",
        zIndex: 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {Error && <AlertPopup open={open} setOpen={setOpen} message={message} error={error} />}
      <CardMedia
        component="img"
        height="300px"
        src={"http://192.168.1.112:8000" + post.images[currentImageIndex].image_url}
        alt={post.title}
      />
      {post.images.length > 1 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: "5px",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            onClick={() => switchImage(-1)}
            sx={{
              alignSelf: "center",
              color: "contrast.main",
              backgroundColor: "rgba(255,255,255,.5)",
              "&:hover": { backgroundColor: "rgba(255,255,255,.7)" },
              mx: "10px",
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton
            onClick={() => switchImage(1)}
            sx={{
              alignSelf: "center",
              color: "contrast.main",
              backgroundColor: "rgba(255,255,255,.5)",
              "&:hover": { backgroundColor: "rgba(255,255,255,.7)" },
              mx: "10px",
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </div>
      )}
      <CardContent>
        <Typography
          sx={{ fontSize: { xs: ".95rem", sm: "1.05rem", md: "1.12rem", lg: "1.15rem" } }}
        >
          {post.title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography sx={{ fontSize: { xs: ".8rem", sm: ".85em", md: ".95rem", lg: "1.15rem" } }}>
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          fullWidth
          disabled={fetching}
          variant="contained"
          sx={{ fontSize: { xs: ".7em", sm: ".9rem" } }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}
