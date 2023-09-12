import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        heightAdjustMode="none"
        TabIndicatorProps={{ sx: { height: 0 } }}
        sx={{
          "& button": {
            backgroundColor: "WhiteSmoke",
            margin: 1,
            borderRadius: "8px",
            padding: "4px",
            width: "auto",
            display: "flex",
            textTransform: "capitalize",
            minHeight: "32px"
          },
          "& button:focus": { backgroundColor: "black", color: "white" },
          "& button.Mui-selected": { backgroundColor: "black", color: "white" },
        }}
        style={{ maxWidth: { xs: 320, sm: 500 } }}
      >
        <Tab label="All" />
        <Tab label="Adventure" />
        <Tab label="Music" />
        <Tab label="Live" />
        <Tab label="Chill-out music" />
        <Tab label="News" />
        <Tab label="Background music" />
        <Tab label="Gadgets" />
        <Tab label="Game shows" />
        <Tab label="Sketch comedy" />
        <Tab label="Tourist destinations" />
        <Tab label="Driving" />
        <Tab label="Sport leagues" />
        <Tab label="Nature" />
        <Tab label="Recently uploaded" />
      </Tabs>
    </Box>
  );
}
