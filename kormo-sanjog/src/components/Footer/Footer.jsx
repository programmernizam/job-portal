export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="text-center">
        ©Copyright {year} Kormo Sanjog | Design By{" "}
        <a href="https://www.linkedin.com/in/programmernizam/" target="_blank" className="text-medium text-primary">
          MD Nizam Uddin
        </a>
      </p>
    </footer>
  );
}
