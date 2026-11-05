import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This is where Home or Shop will render */}
      </main>
    </div>
  );
};
export default PublicLayout;