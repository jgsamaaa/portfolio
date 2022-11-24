import { Route, Routes } from 'react-router-dom';
import ContextProvider from './Context/ContextProvider';
import AboutTwo from './Pages/About/AboutTwo';
import ContactTwo from './Pages/Contact/ContactTwo';
import HomeTwo from './Pages/Home/HomeTwo';
import PortfiloTwo from './Pages/Portfilo/PortfiloTwo';
import ResumeTwo from './Pages/Resume/ResumeTwo';
import NotFound from './Share/NotFound';

function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomeTwo />}>
            <Route index element={<AboutTwo />} />
            <Route path="about" element={<AboutTwo />} />
            <Route path="resume" element={<ResumeTwo />} />
            <Route path="works" element={<PortfiloTwo />} />
            <Route path="contact" element={<ContactTwo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
