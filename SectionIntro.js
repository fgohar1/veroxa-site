export default function SectionIntro({ kicker, title, text }) {
  return (
    <div className="section-top">
      <div>
        {kicker ? <div className="kicker">{kicker}</div> : null}
        <h2>{title}</h2>
      </div>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
