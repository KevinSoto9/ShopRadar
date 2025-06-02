import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>  
      <Header />
      <div style={{ backgroundImage: "var(--color-gradient-light)" }}
      className="h-screen">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to ShopRadar</h1>
        <p className="text-center text-lg">Your one-stop shop for all things shopping!</p>
      </div>
    </>
  )
}

export default App
