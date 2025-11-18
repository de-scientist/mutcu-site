export default function Aims() {
  const aims = [
    { icon: "fa-book-bible", title: "Biblical Discipleship", text: "To deepen members’ understanding..." },
    { icon: "fa-user-plus", title: "Evangelism & Outreach", text: "To reach out to non-believers..." },
    { icon: "fa-users-line", title: "Fellowship & Unity", text: "To foster a strong sense of community..." },
    { icon: "fa-handshake", title: "Leadership Development", text: "To identify, train and equip leaders..." },
    { icon: "fa-graduation-cap", title: "Academic Excellence", text: "To encourage excellence for God's glory..." },
    { icon: "fa-hands-holding-circle", title: "Social Responsibility", text: "To engage in community service..." },
  ];

  return (
    <section className="py-5 aims-section">
      <div className="container">
        <h2 className="section-title text-center">Aims of The Union</h2>
        <p className="text-center lead mb-5">MUTCU operates with clear objectives...</p>

        <div className="row">
          {aims.map((item, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="aim-item d-flex p-3 rounded-3 shadow-sm h-100">
                <i className={`fas ${item.icon} aim-icon me-3`} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
