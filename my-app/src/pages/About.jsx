export default function About() {
  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">About Me</h2>
      <p className="text-gray-700 leading-relaxed text-lg">
        I’m an Industrial Design student passionate about creating innovative and
        functional products. My design philosophy blends modern aesthetics with
        African cultural influences to make unique, practical solutions.
      </p>

      <div className="mt-10 space-y-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-bold text-lg">🎓 Education</h3>
          <p>University of Johannesburg — Industrial Design</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-bold text-lg">📍 Location</h3>
          <p>Pretoria, South Africa</p>
        </div>
      </div>
    </section>
  );
}
