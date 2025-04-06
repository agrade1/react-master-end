import { Container, GlobalStyle } from "./styles/Globalstyles";
import { RouterProvider } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </Container>
  );
}

export default App;
