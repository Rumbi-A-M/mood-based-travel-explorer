export default function Contact() {
  return (
    <section className="p-10 text-center bg-gradient-to-br from-blue-50 to-blue-100">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Let’s Connect</h2>
      <p className="text-gray-700 mb-6">
        I’d love to collaborate or discuss creative design opportunities.
      </p>
      <div className="space-y-2 text-lg">
        <p>📧 Email: <a href="mailto:your-email@example.com" className="text-blue-600">your-email@example.com</a></p>
        <p>🔗 Behance: <a href="https://www.behance.net/sihlesibiyadesigner" className="text-blue-600">Sihle Sibiya</a></p>
        <p>📍 Pretoria, South Africa</p>
      </div>
    </section>
  );
}
