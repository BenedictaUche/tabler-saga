import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import Interface from './pages/Interface';
import Components from './pages/Components';
import Pages from './pages/Pages';
import Forms from './pages/Forms';
import Gallery from './pages/Gallery';
import Documentation from './pages/Documentation';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/interface" element={<Interface />} />
          <Route path="/components" element={<Components />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/documentation" element={<Documentation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
