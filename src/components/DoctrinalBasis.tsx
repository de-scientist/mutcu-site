export default function DoctrinalBasis() {
  const doctrines = [
    "The unity of the Father, the Son and the Holy Spirit...",
    "The sovereignty of God in creation...",
    "The divine inspiration and infallibility of Scripture...",
    "The universal sinfulness and guilt of man...",
    "Redemption through the sacrificial death of Jesus Christ...",
    "The bodily resurrection of Jesus Christ...",
    "The presence and power of the Holy Spirit in regeneration...",
    "Justification by grace alone through faith alone...",
    "The indwelling of the Holy Spirit...",
    "The Holy Universal Church...",
    "The personal, visible return of Jesus Christ..."
  ];

  return (
    <section className="py-5 doctrinal-section text-white">
      <div className="container">
        <h2 className="section-title text-center text-white">Our Doctrinal Basis</h2>
        <p className="text-center text-white-50 lead mb-5">
          Our beliefs are founded on the fundamental truths of Scripture.
        </p>

        <div className="doctrinal-content p-4 rounded-3 shadow-lg">
          <ul className="list-unstyled doctrinal-list">
            {doctrines.map((text, i) => (
              <li key={i}>
                <i className="fas fa-check-circle me-2"></i>
                {text}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
