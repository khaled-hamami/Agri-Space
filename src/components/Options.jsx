import { Box } from "@mui/material"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { useState } from "react"
import { useNavigate } from "react-router"

import {
  FacebookOutlined,
  Instagram,
  KeyboardArrowDown,
  SettingsOutlined,
} from "@mui/icons-material"

const actions = [
  { icon: <SettingsOutlined />, name: "Settings", link: "/settings", type: "internal" },
  { icon: <FacebookOutlined />, name: "Facebook", link: "#", type: "external" },
  { icon: <Instagram />, name: "Instagram", link: "#", type: "external" },
]

export default function Options() {
  const [isHovered, setIsHovered] = useState()
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        "& > :not(style)": { m: { xs: 10, sm: 7, md: 5 } },
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <SpeedDial
        title="options"
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "absolute",
          bottom: 10,
          right: { xs: -50, sm: 7, md: 10, lg: 16 },
          "&:hover": {
            transform: isHovered ? "rotate(180deg)" : "none",
          },
        }}
        icon={
          <SpeedDialIcon
            openIcon={
              <KeyboardArrowUpIcon
                sx={{
                  color: "contrast.main",
                  "&:hover": { scale: "1.02" },
                }}
              />
            }
            icon={
              <KeyboardArrowDown
                sx={{
                  color: "contrast.main",
                  "&:hover": { scale: "1.02" },
                }}
              />
            }
          />
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            components={{ Action: "a" }}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() =>
              action.type === "internal"
                ? navigate(action.link)
                : window.open(action.link, "_blank")
            }
          />
        ))}
      </SpeedDial>
    </Box>
  )
}
