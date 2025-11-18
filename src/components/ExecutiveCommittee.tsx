export default function ExecutiveCommittee() {
  const leaders = [
    { name: "Ezekiel Thaara", role: "Chairman", img: "assets/images/EZEKIEL.jpg", link: "committees/chairman.html", border:"border-orange" },
    { name: "Jesca Kinya", role: "1st Vice Chair", img: "assets/images/JES.jpg", link: "committees/vice-chair1.html", border:"border-navy" },
    // Add the rest of the leaders here...
  ];

  return (
    <section className="py-5 executive-committee-section">
      <div className="container">
        <h2 className="section-title text-center">Meet Our Executive Committee</h2>
        <p className="text-center lead mb-5">Leading MUTCU with dedication...</p>

        <div className="row justify-content-center">
          {leaders.map((m, i) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={i}>
              <a href={m.link} className="executive-member-card text-center d-block shadow-sm rounded-3">
                <img src={m.img} alt={m.name} className={`img-fluid rounded-circle mb-3 border border-3 ${m.border}`} />
                <h4 className="member-name">{m.name}</h4>
                <p className="member-role">{m.role}</p>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
