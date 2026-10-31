
import { birthday } from '../data/content';

export default function Memories() {
  return (
    <section className="section" id="memories">
      <div className="section-tag">
        01 / A little love note
      </div>

      <h2>
        To my forever <em>favorite person</em> ♡
      </h2>

      {/* Original birthday letter */}
      <div className="letter">
        <div className="letter-icon">💌</div>

        <p style={{ whiteSpace: 'pre-line' }}>
          {birthday.letter}
        </p>

        <div className="signature">
          All my love,
          <br />
          <strong>{birthday.fromName} ♡</strong>
        </div>
      </div>

      {/* Photo gallery */}
      <h3>Our little memory lane ✨</h3>

      <div className="photo-grid">
        {birthday.photos.map((photo, i) => (
          <figure className="polaroid" key={i}>
            <img
              src={`${import.meta.env.BASE_URL}${photo.src.replace(/^\/+/, '')}`}
              alt={photo.caption}
              loading="lazy"
            />

            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      {/* Personal message below all three photos */}
      <div className="personal-note">
        <div className="personal-note-icon">💗</div>

        <span className="personal-note-label">
          A LITTLE SOMETHING FROM MY HEART
        </span>

        <h3>
          One more thing I wanted to tell you... 💌
        </h3>

        <div
          className="personal-note-message"
          style={{ whiteSpace: 'pre-line' }}
        >
          {birthday.personalNote}
        </div>

        <div className="personal-note-footer">
          Always, your annoying sibling ♡
        </div>
      </div>
    </section>
  );
}
