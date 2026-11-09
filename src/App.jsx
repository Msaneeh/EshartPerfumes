import AppRouter from './router';
import { Toaster } from "@/components/ui/sonner"; // <-- Import this

function App() {
  return (
    <>
      <AppRouter />
      <Toaster position="top-right" richColors /> {/* <-- Add this */}
    </>
  );
}

export default App;