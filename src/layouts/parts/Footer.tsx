export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Test Page. All rights reserved.
      </div>
    </footer>
  );
}
