/**
 * <MapEmbed lat={29.1872} lng={-82.1401} label="Ocala, FL" />
 * Uses the classic no-API-key embeddable Google Maps URL.
 */
const MapEmbed = ({ lat, lng, label, zoom = 12 }) => (
  <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)]">
    <iframe
      title={`Map of our service area near ${label}`}
      src={`https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`}
      width="100%"
      height="380"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default MapEmbed;
