import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@components/layout/Layout';

const Home = lazy(() => import('@pages/Home'));
const RoofRepair = lazy(() => import('@pages/RoofRepair'));
const RoofReplacement = lazy(() => import('@pages/RoofReplacement'));
const PatioConstruction = lazy(() => import('@pages/PatioConstruction'));
const ElectricalServices = lazy(() => import('@pages/ElectricalServices'));
const ServiceAreas = lazy(() => import('@pages/ServiceAreas'));
const ServiceArea = lazy(() => import('@pages/ServiceArea'));
const Reviews = lazy(() => import('@pages/Reviews'));
const Gallery = lazy(() => import('@pages/Gallery'));
const About = lazy(() => import('@pages/About'));
const Contact = lazy(() => import('@pages/Contact'));
const PrivacyPolicy = lazy(() => import('@pages/PrivacyPolicy'));
const Terms = lazy(() => import('@pages/Terms'));
const NotFound = lazy(() => import('@pages/NotFound'));

// NOTE: Suspense lives inside <Layout>, wrapping only <Outlet />, not here.
// That keeps Navbar/Footer/FloatingActions mounted across route changes so
// only the page content area shows the loading fallback — the chrome never
// flashes away during a lazy-loaded navigation.
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="roof-repair" element={<RoofRepair />} />
        <Route path="roof-replacement" element={<RoofReplacement />} />
        <Route path="patio-construction" element={<PatioConstruction />} />
        <Route path="electrical-services" element={<ElectricalServices />} />
        <Route path="service-areas" element={<ServiceAreas />} />
        <Route path="service-areas/:slug" element={<ServiceArea />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
