import { Container, GlobalStyle } from "./styles/Globalstyles";
import { RouterProvider } from 'react-router-dom';
import Router from './Router';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <AnimatePresence>
        <RouterProvider router={Router} />
      </AnimatePresence>
    </Container>
  );
}

export default App;
