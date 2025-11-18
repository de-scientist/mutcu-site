export default function GuidingPrinciples() {
  return (
    <section className="py-5 bg-light principles-section">
      <div className="container">
        <h2 className="section-title text-center">Our Guiding Principles</h2>
        <p className="text-center lead mb-5">
          Our motto, vision, and mission are interconnected...
        </p>

        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <div className="principle-card p-4 rounded-3 shadow-sm h-100">
              <i className="fas fa-bullhorn feature-icon mb-3"></i>
              <h3>Our Motto</h3>
              <p className="lead-sm">"To Inspire Love, Hope, and Godliness."</p>
              <p>This motto serves as our daily call...</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="principle-card p-4 rounded-3 shadow-sm h-100">
              <i className="fas fa-eye feature-icon mb-3"></i>
              <h3>Our Vision</h3>
              <p className="lead-sm">"To be a model Christian Union..."</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="principle-card p-4 rounded-3 shadow-sm h-100">
              <i className="fas fa-hands-helping feature-icon mb-3"></i>
              <h3>Our Mission</h3>
              <p className="lead-sm">"To raise a family well-equipped..."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
