import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Home from "./component/Home";
import Tools from "./component/Tools";
import Pricing from "./component/Pricing";
import Channels from "./component/Channel";
import Blogs from "./component/Blogs";
import LoginForm from "./component/login";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Tools" element={< Tools />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="<Pricing" element={< Pricing />} />
          <Route path="<Channels" element={<Channels />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
