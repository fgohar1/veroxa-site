import Link from 'next/link';

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/">
          <span className="logo">V</span>
          <span>VEROXA</span>
        </Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <Link className="btn btn-primary" href="/contact">Book a Call</Link>
        </nav>
      </div>
    </header>
  );
}
