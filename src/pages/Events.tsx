import React from "react";

// Define the type for a single event
interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

// Props type if you want to pass events from a parent
interface EventProps {
  events?: EventItem[];
}

const Event: React.FC<EventProps> = ({ events }) => {
  // Sample events if none are passed as props
  const sampleEvents: EventItem[] = [
    {
      id: 1,
      title: "Campus Revival Meeting",
      date: "2025-12-05",
      location: "Main Auditorium",
      description:
        "Join us for a powerful evening of worship and teaching with special guest speakers.",
      image: "assets/images/event1.jpg",
    },
    {
      id: 2,
      title: "Missions Outreach",
      date: "2025-12-12",
      location: "Local Community Center",
      description:
        "Participate in our annual missions outreach and serve the local community with love.",
      image: "assets/images/event2.jpg",
    },
    {
      id: 3,
      title: "Creative Arts Showcase",
      date: "2025-12-20",
      location: "University Hall",
      description:
        "Experience drama, dance, and music performed by our talented ministries.",
      image: "assets/images/event3.jpg",
    },
  ];

  const displayedEvents = events || sampleEvents;

  return (
    <section className="events-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">Upcoming Events</h2>
        <p className="text-center mb-5 text-muted">
          Stay informed and join our community in worship, service, and celebration.
        </p>

        <div className="row">
          {displayedEvents.map((event) => (
            <div className="col-md-6 col-lg-4 mb-4" key={event.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={event.image}
                  className="card-img-top"
                  alt={event.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <p className="card-text">
                    <strong>Date:</strong> {event.date} <br />
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-primary btn-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
