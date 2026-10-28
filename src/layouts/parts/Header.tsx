import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold text-foreground tracking-tight">
          Test Page
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#info" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Info
          </a>
        </nav>
      </div>
    </header>
  );
}
