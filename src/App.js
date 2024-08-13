import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shape from "./views/shapes";
import Histogram from "./views/histogram/histogram";
import ScatterPlot from "./views/scatter-plot/scatter-plot";
import ProjectTwo from "./views/project2/project-two";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shape />} />
        <Route path="/histogram" element={<Histogram />} />
        <Route path="/scatter-plot" element={<ScatterPlot />} />
        <Route path="/project-two" element={<ProjectTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
