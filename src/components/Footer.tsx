const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} The Washboard — Murray's Friendly Neighborhood Laundromat
        </p>
      </div>
    </footer>
  );
};

export default Footer;
