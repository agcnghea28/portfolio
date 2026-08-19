import Image from "next/image";
import { about } from "./about";

export default function ProfileCard({ className = "", style }) {
  const { card } = about;

  return (
    <div className={`hero-visual ${className}`.trim()} style={style}>
      <aside className="hero-card">
        <div className="hero-card-photo-wrap">
          <div className="hero-card-photo-inner">
            <Image
              className="hero-card-photo"
              src={card.photo.src}
              alt={card.photo.alt}
              width={card.photo.width}
              height={card.photo.height}
            />
          </div>
        </div>
        <div className="hero-card-body">
          <p className="hero-card-name">{card.name}</p>
          <p className="hero-card-location">
            <svg className="hero-card-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5z" fill="currentColor" />
            </svg>
            {card.location}
          </p>
          <p className="hero-card-comment">
            <svg className="hero-card-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor" />
            </svg>
            {card.comment}
          </p>
        </div>
      </aside>
    </div>
  );
}
