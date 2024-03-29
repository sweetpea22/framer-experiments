import { Routes, Route } from 'react-router-dom';
import { GradientTest } from './GradientTest';
import { Page01 } from './Page01';
import { Page02 } from './Page02';
import { Page03 } from './Page03';
import { Page04 } from './Page04';
import Page05 from './Page05';
import { Page06 } from './Page06';

export const Router: React.FC = () => (
  <Routes>
    {/* <Route path='/' element={<Page02 />} /> */}
    <Route path='/' element={<GradientTest />} />
    {/* <Route path='/2' element={<Page01 />} />
    <Route path='/3' element={<Page03 />} />
    <Route path='/4' element={<Page04 />} />
    <Route path='/5' element={<Page05 />} />
    <Route path='/6' element={<Page06 />} /> */}
  </Routes>
);
