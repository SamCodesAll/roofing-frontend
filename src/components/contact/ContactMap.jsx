import MapEmbed from '@components/serviceAreas/MapEmbed';
import { COMPANY } from '@data/company';

const ContactMap = () => (
  <MapEmbed lat={COMPANY.address.lat} lng={COMPANY.address.lng} label={COMPANY.address.full} zoom={14} />
);

export default ContactMap;
