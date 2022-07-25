import { Routes, Route } from 'react-router-dom';
import { Page01 } from './Page01';

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Page01 />} />
  </Routes>
);
