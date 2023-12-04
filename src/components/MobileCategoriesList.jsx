import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import PetsIcon from "@mui/icons-material/Pets"
import GrassIcon from "@mui/icons-material/Grass"
import AgricultureIcon from "@mui/icons-material/Agriculture"
import CategoryIcon from "@mui/icons-material/Category"
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety"

const categories = [
  { name: "Crops", icon: <GrassIcon /> },
  { name: "Animals", icon: <PetsIcon /> },
  { name: "agricultural equipment", icon: <AgricultureIcon /> },
  { name: "crop protection", icon: <HealthAndSafetyIcon /> },
  { name: "Agricultural technology", icon: <CategoryIcon /> },
]

export default function MobileCategoriesList({ display, setDisplay, setSelectedCategorie }) {
  return (
    display && (
      <List
        sx={{
          position: "fixed",
          borderBottom: "1px solid #028174",
          width: "100%",
          mt: { xs: "45px", sm: "20px" },
          bgcolor: "contrast.main",
          color: "contrast.reverse",
          display: { md: "none" },
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          zIndex: 5,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        onClick={() => setDisplay(false)}
      >
        {categories.map((category, index) => {
          return (
            <ListItem
              key={category.name}
              disablePadding
              onClick={() => setSelectedCategorie(category.name)}
            >
              <ListItemButton sx={{ "&:hover": { color: "primary.main" } }}>
                <ListItemIcon>{category.icon}</ListItemIcon>
                <ListItemText color="inherit" primary={category.name} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    )
  )
}
