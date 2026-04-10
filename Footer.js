import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <Link className="brand" href="/">
          <span className="logo small">V</span>
          <span>VEROXA</span>
        </Link>
        <div>Premium growth systems for restaurants.</div>
        <div>© 2026 Veroxa</div>
      </div>
    </footer>
  );
}
