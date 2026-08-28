const NOTEBOOK_URL = 'https://hungyu.pse.is/9hffd6';

export default function Home() {
  return (
    <main className="portal-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <img
        className="lotus-backdrop"
        src="./lotus-backdrop-v2.png"
        alt=""
        width="1730"
        height="909"
        aria-hidden="true"
      />

      <section className="portal-card" aria-labelledby="portal-title">
        <div className="emblem-wrap">
          <img
            className="emblem"
            src="./doge-emblem.png"
            alt="臺北市政府政風處處徽"
            width="1025"
            height="1011"
          />
        </div>

        <p className="system-label">公務機密智能輔助系統</p>
        <h1 id="portal-title">臺北市政府政風處</h1>
        <div className="title-rule" aria-hidden="true" />
        <p className="intro">公務機密維護法規與實務知識入口</p>

        <a className="enter-button" href={NOTEBOOK_URL}>
          <span>進入本系統</span>
          <span className="button-arrow" aria-hidden="true">→</span>
        </a>

        <p className="destination-note">點選後將前往 NotebookLM</p>
      </section>

      <footer className="page-footer">
        <span>製作：鄭宏宇</span>
      </footer>
    </main>
  );
}
