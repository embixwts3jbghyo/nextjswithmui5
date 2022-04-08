

import { Container, Autocomplete,TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [top100Films, setTop100Films] = useState(null)
  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(data => {
        setTop100Films(data)
      })
  }, [])
  return (
    <Container maxWidth="sm" sx={{ marginTop: '10px' }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      
    </Container>
  );
}
