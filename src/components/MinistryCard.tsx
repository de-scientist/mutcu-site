import React from "react";

export interface MinistryCardProps {
  image: string;
  icon: string;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const MinistryCard: React.FC<MinistryCardProps> = ({
  image,
  icon,
  title,
  description,
  link,
  delay = 100,
}) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay={delay}>
      <a className="ministry-card d-block text-center rounded-3 shadow-sm h-100 text-decoration-none" href={link}>
        <img src={image} alt={title} className="img-fluid rounded-top-3" />

        <div className="card-body">
          <i className={`${icon} feature-icon mb-3`}></i>
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>

          <span className="btn btn-sm btn-outline-primary mt-3">
            Learn More <i className="fas fa-arrow-right ms-2"></i>
          </span>
        </div>
      </a>
    </div>
  );
};

export default MinistryCard;
