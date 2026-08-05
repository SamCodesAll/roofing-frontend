import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import AppRoutes from '@/routes/AppRoutes';
import { ToastProvider } from '@components/ui/Toast';

function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;
