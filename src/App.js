import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Service from "./routes/Service";
import Landing from "./routes/Landing";
const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  h1 {
    text-shadow: 1px 2px 2px rgba(0,0,0,0.2), 0px -3px 20px rgba(255,255,255,0.4);
    margin-top: 0;
    margin-bottom: 10px;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/service/*" element={<Service />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;