/**
 * <JsonLd data={buildFAQSchema(items)} />
 * Renders a single JSON-LD <script> tag. Safe to render inline anywhere
 * in the tree — search engines parse JSON-LD regardless of DOM position.
 */
const JsonLd = ({ data }) => {
  if (!data) return null;
  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
};

export default JsonLd;
