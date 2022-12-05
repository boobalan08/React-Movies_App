import React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
const Edit = () => {
  return (
    <div>
      <IconButton aria-label="delete">
        <EditIcon color="primary"/>
      </IconButton>
    </div>
  );
};

export default Edit;
