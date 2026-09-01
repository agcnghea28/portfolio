import Image from "next/image";

export default function RecommendationSection() {
  return (
    <div className="recommendation">
      <h2 className="section-title recommendation-heading">
        What My Former Manager Says
      </h2>

      <figure className="recommendation-layout">
        <div className="recommendation-photo">
          <Image
            src="/recommendation/daniel-shultz.jpg"
            alt="Portrait of Daniel Shultz"
            fill
            sizes="(max-width: 768px) 240px, 32vw"
            quality={100}
            unoptimized
          />
        </div>

        <div className="recommendation-card">
          <blockquote className="recommendation-quote">
            <p>
              I highly recommend Ghea Agcang for UI/UX, WordPress, Elementor, and
              front-end website work. At P1peline, our fast-moving business
              solutions agency, Ghea asked the right questions and took a website
              from research and Figma design through Elementor development, custom
              CSS, responsive testing, launch, and support. She solved difficult
              WordPress problems using plugins, AI, and careful research, including
              e-commerce, forms, mobile navigation, templates, and custom 3D
              product-builder integrations.
            </p>
            <p>
              Ghea also used Claude, Claude Code, Claude Cowork, Cursor, ChatGPT,
              and Visily to improve custom-coded sites and create first-pass
              content and assets, while still checking the final work herself. She
              communicated clearly, kept Asana updated, adapted well to change, and
              was a dependable, well-liked teammate who was consistently reliable
              and available. I would gladly hire her again.
            </p>
          </blockquote>

          <figcaption className="recommendation-byline">
            <div className="recommendation-person">
              <p className="recommendation-name">Daniel Shultz</p>
              <p className="recommendation-role">Founder at Launch Forge</p>
              <p className="recommendation-role">Former Manager at P1peline</p>
            </div>
            <a
              className="recommendation-linkedin"
              href="https://www.linkedin.com/in/daniel-bryan-shultz"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
