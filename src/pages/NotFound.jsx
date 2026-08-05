import { HiHome } from 'react-icons/hi2';
import Button from '@components/ui/Button';
import SEO from '@components/shared/SEO';

const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" noindex />
      <div className="text-center">
        <p className="font-heading text-7xl font-extrabold text-[var(--color-primary-100)]">404</p>
        <h1 className="heading-display mt-2">Page Not Found</h1>
        <p className="text-body-lg mt-3 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <Button to="/" variant="primary" size="lg" leftIcon={<HiHome />} className="mt-6">
          Back to Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
