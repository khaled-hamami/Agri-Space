import { Alert, Box, Collapse, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"
import copyToClipboard from "./CopyToClipboard"

export default function Popup({ data, status }) {
  const [open, setOpen] = useState(true)

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          severity={status}
          action={
            <IconButton
              name="navigation button"
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
                copyToClipboard()
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {data}
        </Alert>
      </Collapse>
    </Box>
  )
}
