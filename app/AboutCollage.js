import Image from "next/image";
import { about } from "./about";

const COLLAGE_SIZES = {
  left: "(max-width: 768px) 46vw, 720px",
  right: "(max-width: 768px) 46vw, 720px",
  "mid-top": "(max-width: 768px) 46vw, 360px",
  "mid-bot": "(max-width: 768px) 46vw, 360px",
};

function CollagePhoto({ photo, priority = false }) {
  return (
    <figure className={`about-collage-item about-collage-item--${photo.slot}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={COLLAGE_SIZES[photo.slot]}
        quality={92}
        priority={priority}
      />
    </figure>
  );
}

export default function AboutCollage() {
  const photos = about.collage;
  const left = photos.find((photo) => photo.slot === "left");
  const midTop = photos.find((photo) => photo.slot === "mid-top");
  const midBot = photos.find((photo) => photo.slot === "mid-bot");
  const right = photos.find((photo) => photo.slot === "right");

  return (
    <div className="about-collage" aria-label="Photos of Ghea">
      <div className="about-collage-side">
        <CollagePhoto photo={left} priority />
      </div>

      <div className="about-collage-center">
        <CollagePhoto photo={midTop} />
        <CollagePhoto photo={midBot} />
      </div>

      <div className="about-collage-side">
        <CollagePhoto photo={right} />
      </div>
    </div>
  );
}
