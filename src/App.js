import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./About";
import NoPage from "./NoPage";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {/* To use different layout: <Route path="/" element={<Layout />}> {RoutesHere} </Route>*/}
          {/* for more info visit this link: https://www.w3schools.com/react/react_router.asp */}
          <Route index element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
