export default function Work() {
  return (
    <section className="p-10 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Work</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="/festool.jpg" alt="Festool Project" className="w-full" />
          <div className="p-4">
            <h3 className="font-bold">Festool Charge Pro</h3>
            <p className="text-gray-600 mt-2">
              A functional Festool charging system prototype, designed with
              usability and efficiency in mind.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="/redbox.jpg" alt="Packaging Design" className="w-full" />
          <div className="p-4">
            <h3 className="font-bold">Packaging Design</h3>
            <p className="text-gray-600 mt-2">
              Creative packaging concept using bold geometric patterns and a
              strong African-inspired identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
