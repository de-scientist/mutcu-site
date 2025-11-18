export default function Introduction() {
  return (
    <section className="py-5 introduction-section">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-7 mb-4">
            <h2 className="section-title">Who We Are</h2>
            <p className="lead">
              The Murang'a University of Technology Christian Union (MUTCU) is a lively, 
              student-led religious organization...
            </p>

            <p>
              As a proud member of 
              <a href="https://focuskenya.org/" target="_blank" rel="noopener noreferrer" className="mutcu-link-orange ms-1">
                FOCUS-KENYA
              </a>,
              MUTCU benefits from a national network...
            </p>
          </div>

          <div className="col-lg-5 text-center">
            <img src="assets/images/Full Logo.png" alt="MUTCU Community" className="img-fluid rounded-3 shadow-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}
