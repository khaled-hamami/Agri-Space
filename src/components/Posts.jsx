import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import { useState } from "react"
import { Avatar, Backdrop, Button, IconButton, Paper, Rating, Typography } from "@mui/material"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import copyToClipboard from "../utils/CopyToClipboard"
export default function Posts({ post }) {
  const [hovered, setHovered] = useState(false) //? for animation (not yet used)
  const [ratingValue, setRatingValue] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const switchImage = (increment) => {
    const newIndex = (currentImageIndex + increment + post.images.length) % post.images.length
    setCurrentImageIndex(newIndex)
  }
  const [open, setOpen] = useState(false)
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
      <CardHeader
        sx={{ margin: 0 }}
        avatar={<Avatar sx={{ bgcolor: "#0AB68B" }}>{post.user_first_name.charAt(0)}</Avatar>}
        title={post.user_first_name + " " + post.user_last_name}
        titleTypographyProps={{
          fontSize: { xs: ".9rem", md: "1rem" },
          textShadow: "none",
          fontWeight: "600",
        }}
        subheaderTypographyProps={{
          fontSize: { xs: ".8rem", md: ".9rem" },
          textShadow: "none",
          fontWeight: "600",
        }}
      />
      <CardMedia
        component="img"
        height="300px"
        src={"http://192.168.196.224:8000" + post.images[currentImageIndex].image_url}
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
        <Typography sx={{ fontSize: { xs: ".8rem", sm: ".85em", md: ".95rem", lg: "1.15rem" } }}>
          price : {post.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          sx={{ fontSize: { xs: ".7em", sm: ".9rem" } }}
          onClick={() => setOpen(true)}
        >
          Show Contact Info
        </Button>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={() => setOpen(false)}
        >
          <Paper
            elevation={20}
            sx={{
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "50%",
              height: "30%",
              gap: "30px",
              backgroundColor: "primary.dark",
            }}
          >
            <Typography>
              {post.user_first_name} {post.user_last_name}
            </Typography>
            <Typography>{post.title}</Typography>

            <Button
              onClick={copyToClipboard(post.phone)}
              endIcon={<ContentCopyIcon />}
              variant="contained"
              sx={{
                backgroundColor: "primary.dark",
                color: "#fff",
                "&:hover": {
                  scale: "1.05",
                },
              }}
            >
              {post.phone}
            </Button>
          </Paper>
        </Backdrop>
        <Rating
          name="rating"
          value={ratingValue}
          onChange={(e, newValue) => {
            setRatingValue(newValue)
          }}
        />
      </CardActions>
    </Card>
  )
}
