import Image from "next/image";

export default function RecommendationSection() {
  return (
    <div className="recommendation">
      <h2 className="section-title recommendation-heading">
        What It&rsquo;s Like Working With Me
      </h2>

      <figure className="recommendation-layout">
        <div className="recommendation-photo">
          <Image
            src="/recommendation/anonymous.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 420px, 62vw"
            quality={92}
          />
        </div>

        <div className="recommendation-card">
          <blockquote className="recommendation-quote">
            <span className="recommendation-mark" aria-hidden="true">
              &ldquo;
            </span>
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
              and available. Her position was eliminated only because of a
              company-wide reduction in force, not because of her performance. I
              would gladly hire her again.
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
