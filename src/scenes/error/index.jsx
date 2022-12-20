import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
const Error = () => {
  return (
    <div style={{ margin: "50px 0" }}>
      <Box display="flex" justifyContent="center" alignContent="center">
        <img
          src={`../../assets/error404.png`}
          alt=""
          height="40%"
          width="40%"
        />
      </Box>
      <Box display="flex" alignContent="center" justifyContent="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            type="submit"
            color="info"
            variant="contained"
            sx={{
              color: "#fff",
            }}
          >
            revenir en lieu sûr
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Error;
