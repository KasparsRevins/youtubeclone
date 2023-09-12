import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: '100%', bgcolor: 'background.paper' }} >
      <Tabs 
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        style={{ maxWidth: { xs: 320, sm: 500 }}}
        >
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Adventure" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Music" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Live" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Chill-out music" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="News" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Background music" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Gadgets" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Game shows" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Sketch comedy" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Tourist destinations" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Driving" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Sport leagues" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Nature" />
        <Tab class="border p-1" style={{margin: 5, borderRadius: "8px"}} label="Recently uploaded" />
      </Tabs>
    </Box>
  );
}

