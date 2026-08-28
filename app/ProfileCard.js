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
      </aside>
    </div>
  );
}
