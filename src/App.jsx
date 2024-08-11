import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./container/maincomponents/Main";
import Oraytiqoralcares from "./routes/oraytiqoralcare/Oraytiqoralcares";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/oraytiqoralcare" element={<Oraytiqoralcares />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
