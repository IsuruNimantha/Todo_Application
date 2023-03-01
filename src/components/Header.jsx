import React from "react";
import { AppBar, Toolbar, Typography, Paper } from "@mui/material";

const Header = React.memo(({ children }) => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
  >
    <AppBar color="primary" position="static" style={{ height: 100 }}>
      <Toolbar style={{ height: 100 }}>
        <Typography color="inherit" style={{ flexGrow: 1, textAlign: "center", fontSize: 30}}>TODO APP</Typography>
      </Toolbar>
    </AppBar>
    {children}
  </Paper>
));

export default Header;