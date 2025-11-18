export default function Structure() {
  return (
    <section className="py-5 structure-section bg-light">
      <div className="container">
        <h2 className="section-title text-center">Organizational Structure & Leadership</h2>
        <p className="text-center lead mb-5">
          MUTCU is a student-led organization with a robust leadership structure.
        </p>

        <div className="structure-overview p-4 rounded-3 shadow-lg mb-4">
          <h3 className="text-center mb-4">Executive Council</h3>
          <p>
            The Executive Council is the highest governing body...
          </p>
          <p>
            New leaders are nominated annually through a democratic...
          </p>
        </div>

        <div className="row">

          <div className="col-md-6 mb-4">
            <div className="structure-card p-4 rounded-3 shadow-sm h-100">
              <i className="fas fa-sitemap feature-icon mb-3"></i>
              <h4>Committees</h4>
              <p>Responsibilities are delegated to various committees...</p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="structure-card p-4 rounded-3 shadow-sm h-100">
              <i className="fas fa-users-gear feature-icon mb-3"></i>
              <h4>Operational Policies</h4>
              <p>All Union functions follow detailed operational policies...</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
