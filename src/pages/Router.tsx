import { Routes, Route } from 'react-router-dom';
import { Page01 } from './Page01';
import { Page02 } from './Page02';

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Page02 />} />
    <Route path="/2" element={<Page01 />} />
  </Routes>
);
