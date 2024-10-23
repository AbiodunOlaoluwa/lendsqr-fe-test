import Link from 'next/link';
import Image from 'next/image';
import './landing.css';
import Logo from '@/app/Assets/Logo_Group.svg';

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* Header section containing logo and navigation links */}
      <header className="landing-header">
        <div className="logo">
          {/* Logo image for the landing page header */}
          <Image src={Logo} alt="Lendsqr Logo" width={150} height={50} />
        </div>
        <nav className="nav-menu">
          {/* Link to the login page */}
          <Link href="/login" className="login-button">
            Log in
          </Link>
          {/* Disabled button for creating a free account */}
          <button disabled className="cta-button">Create free account</button>
        </nav>
      </header>

      {/* Main content section with hero message */}
      <main className="landing-main">
        <section className="hero">
          {/* Hero image illustration for visual impact */}
          <Image
            src="https://lendsqr.com/assets/images/HeroIllustration.svg"
            alt="Hero Illustration"
            className="hero-illustration"
            width={600}
            height={400}
          />
          {/* Main headline to attract users */}
          <h1>The best loan management system for smart lenders</h1>
          {/* Description paragraph explaining the value proposition */}
          <p>
            Lending is profitable but also difficult, but not with Lendsqr&apos;s loan management software! Start, launch, and scale your loan business easily across multiple channels and make smart decisions at a fraction of the cost!
          </p>
          <div className="cta-buttons">
            {/* Disabled button for getting started - placeholder for future functionality */}
            <button className="primary-button" disabled>Get started free</button>
            {/* Disabled button for contacting sales - placeholder for future functionality */}
            <button className="secondary-button" disabled>Contact Sales</button>
          </div>
        </section>
      </main>
    </div>
  );
}
