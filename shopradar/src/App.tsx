import './App.css'
import Header from './components/Header' 

function App() {
  return (
    <>
      <Header />
      <section style={{ backgroundImage: "var(--color-gradient-light)" }}
        className="pb-60 pt-20 flex flex-col items-center justify-center">
        <h1 className="text-6xl text-gray-200 font-bold text-center mb-5">Encuentra los <span className='font-extrabold text-white'>mejores productos</span></h1>
        <p className="text-xl text-center text-white w-1/2">Compara precios en tiempo real de todos los productos de los supermercados más populares en España con una sola busqueda</p>
        <div className="mt-10">
          <ul className="flex space-x-4">
            <li className="bg-white/30 backdrop-blur-md text-white px-5 py-2 rounded-full hover:bg-white/30 transition-colors">
              <a href="/ofertas">Ofertas</a>
            </li>
            <li className="bg-white/30 backdrop-blur-md text-white px-5 py-2 rounded-full hover:bg-white/30 transition-colors">
              <a href="/supermercados"> Supermercados</a>
            </li>
            <li className="bg-white/30 backdrop-blur-md text-white px-5 py-2 rounded-full hover:bg-white/30 transition-colors">
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>

      </section>
    </>
  )
}

export default App
