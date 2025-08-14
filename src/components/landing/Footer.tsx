export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground/80 py-6">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm">
        <p>&copy; {currentYear} Púlpito de Esther. Todos los derechos reservados.</p>
        <p className="mt-2">Una herramienta para empoderar la voz de la mujer en el ministerio.</p>
      </div>
    </footer>
  );
}
