import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import PetsIcon from "@mui/icons-material/Pets"
import GrassIcon from "@mui/icons-material/Grass"
import AgricultureIcon from "@mui/icons-material/Agriculture"
import CategoryIcon from "@mui/icons-material/Category"
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety"
import { Button, Divider } from "@mui/material"
import { useNavigate } from "react-router"

const categories = [
  { name: "Crops", icon: <GrassIcon /> },
  { name: "Animals", icon: <PetsIcon /> },
  { name: "Agricultural equipment", icon: <AgricultureIcon /> },
  { name: "Crop protection", icon: <HealthAndSafetyIcon /> },
  { name: "Agricultural technology", icon: <CategoryIcon /> },
]

export default function CategoriesList({ setSelectedCategorie }) {
  const navigate = useNavigate()

  return (
    <>
      <nav aria-label="main mailbox folders" style={{ zIndex: 500000 }}>
        <List>
          <>
            <Button
              fullWidth
              sx={{
                margin: "auto",
                color: "contrast.reverse",
                marginTop: { md: "50px", lg: "0" },
                mb: "10px",
                "&:hover": { color: "primary.dark" },
              }}
              onClick={() =>
                sessionStorage.getItem("LoggedIn") ? navigate("/createPost") : navigate("/login")
              }
            >
              Add a post
            </Button>
            <Divider sx={{ mb: "40px" }} />
          </>

          {categories.map((category, index) => {
            return (
              <ListItem
                key={category.name}
                disablePadding
                onClick={() => setSelectedCategorie(category.name)}
              >
                <ListItemButton sx={{ "&:hover": { color: "primary.dark" } }}>
                  <ListItemIcon>{category.icon}</ListItemIcon>
                  <ListItemText color="inherit" primary={category.name} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </nav>
    </>
  )
}
