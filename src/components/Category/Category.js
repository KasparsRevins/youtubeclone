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
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab class="border rounded-pill p-1" style={{margin: 5}} label="Adventure" />
        <Tab class="border rounded-pill p-1" style={{margin: 5}} label="Music" />
        <Tab class="border rounded-pill p-1" style={{margin: 5}} label="Live" />
        <Tab class="border rounded-pill p-1" style={{margin: 5}} label="Chill-out music" />
        <Tab class="border rounded-pill p-1" style={{margin: 5}} label="News" />
        <Tab class="border rounded-pill p-1" style={{margin: 5}} label="Background music" />
        <Tab class="border rounded-pill p-1" style={{margin: 5}} label="Gadgets" />
      </Tabs>
    </Box>
  );
}

