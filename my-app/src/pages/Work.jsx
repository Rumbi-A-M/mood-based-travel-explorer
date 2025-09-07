export default function Work() {
  return (
    <section className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">My Work</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
          <img src="/festool.jpg" alt="Festool Project" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="font-bold text-xl">Festool Charge Pro</h3>
            <p className="text-gray-600 mt-2">
              A functional Festool charging system prototype, designed with usability and efficiency in mind.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
          <img src="https://www.behance.net/gallery/182721869/EXAM-PROJECT-ARSMA-ROUTING-MOULDING" alt="Packaging Design" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="font-bold text-xl">Packaging Design</h3>
            <p className="text-gray-600 mt-2">
              A creative packaging concept using bold geometric patterns and African-inspired identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
