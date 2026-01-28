import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography
} from "@mui/material"

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>

      <Typography variant="h4" align="center" gutterBottom>
        Material UI Login Form
      </Typography>

      <Card>
        <CardContent>

          <Typography variant="h6" gutterBottom>
            User Login
          </Typography>

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>

        </CardContent>
      </Card>

    </Container>
  )
}

export default App
