function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white pt-10 pb-6 flex flex-col items-center px-4 font-Switzer">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full max-w-6xl mb-8">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <img
              src="src\assets\icon.jpg"
              alt="ShopRadar Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-2xl font-bold">ShopRadar</span>
          </div>
          <p className="text-gray-400 text-sm">
            La forma más inteligente de comparar precios y ahorrar en tus
            compras.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">
            Supermercados disponibles
          </h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>Mercadona</li>
            <li>Carrefour</li>
            <li>Alcampo</li>
            <li>DIA</li>
            <li>Lidl</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Enlaces</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="/ofertas" className="hover:text-white">
                Ofertas
              </a>
            </li>
            <li>
              <a href="/supermercados" className="hover:text-white">
                Supermercados
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-white">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">¿Dónde comprar?</h4>
          <p className="text-gray-400 text-sm">
            Descubre qué supermercado tiene el mejor precio en tiempo real.
            Compara antes de salir de casa.
          </p>
          <a
            href="/ofertas"
            className="inline-block mt-2 text-orange-400 hover:underline text-sm"
          >
            Ver ofertas destacadas →
          </a>
        </div>
      </div>

      {/* Línea de derechos */}
      <div className="text-xs text-gray-500 border-t border-gray-700 w-full text-center pt-4">
        © {new Date().getFullYear()} ShopRadar. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
