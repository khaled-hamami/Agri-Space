import React from "react"
import StatesData from "../assets/data.json"
import { Autocomplete, Paper, TextField } from "@mui/material"

function DelegationList({ name, registrer, error, helperText }) {
  //* making the required object for the autocomlete
  const statesList = []
  const delegationSet = new Set()
  StatesData.data.forEach((value) => {
    statesList.push(value.delegations)
  })

  statesList.forEach((value) => {
    value.forEach((delegation) => {
      delegationSet.add(delegation)
    })
  })
  const delegationList = Array.from(delegationSet)

  return (
    <Autocomplete
      fullWidth
      disablePortal
      id="delegation"
      options={delegationList}
      renderInput={(params) => (
        <TextField
          autoComplete="delegaion"
          variant="standard"
          name={name}
          {...registrer}
          {...params}
          error={error}
          helperText={helperText}
          label="Delegation"
        />
      )}
      PaperComponent={(props) => (
        <Paper elevation={8} sx={{ backgroundColor: "contrast.main" }} {...props} />
      )}
    />
  )
}

export default DelegationList
