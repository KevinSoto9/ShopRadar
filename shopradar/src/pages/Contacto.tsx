function Contacto() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div
                style={{ backgroundImage: "var(--color-gradient-light)" }}
                className="py-12 sm:py-20 text-white text-center px-4 flex flex-col items-center justify-center"
            >
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-Zodiak font-extrabold mb-3 sm:mb-5 text-balance">
                    Contacto
                </h1>
                <p className="text-sm sm:text-base md:text-xl font-Switzer max-w-screen-md text-balance">
                    ¿Tenés dudas o sugerencias? ¡Escribinos!
                </p>
            </div>

            <main className="flex-1">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16 mb-8 sm:mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Hablemos</h2>
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                                            <p className="text-gray-600">soporte@shopradar.com</p>
                                            <p className="text-sm text-gray-500">Te respondemos en 24hs</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.39a.75.75 0 00-.596-.732l-1.925-.418a1.125 1.125 0 01-.809-1.091v-.381c0-.621.444-1.144 1.07-1.265l1.018-.153a1.125 1.125 0 011.07 1.265v.199c0 .488.348.883.82.956l.17.02.011.011.128.128a3 3 0 00.75 2.121M1.5 10.5V2.25c0-.414.336-.75.75-.75h15a.75.75 0 01.75.75v8.25" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">Teléfono</h3>
                                            <p className="text-gray-600">+54 9 11 5555-5555</p>
                                            <p className="text-sm text-gray-500">Lunes a Viernes, 9 a 18hs</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">Ubicación</h3>
                                            <p className="text-gray-600">Calle Ficticia 123, Madrid</p>
                                            <p className="text-sm text-gray-500">España</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">Horarios</h3>
                                            <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                                            <p className="text-sm text-gray-500">Sábados: 10:00 - 13:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Envíanos un mensaje</h2>
                                <form className="space-y-4 sm:space-y-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nombre completo</label>
                                        <input type="text" id="fullName" name="fullName" placeholder="Tu nombre" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm sm:text-base" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" name="email" placeholder="tu@email.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm sm:text-base" />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Asunto</label>
                                        <input type="text" id="subject" name="subject" placeholder="¿En qué podemos ayudarte?" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm sm:text-base" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                                        <textarea id="message" name="message" rows={4} placeholder="Contanos más detalles..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm sm:text-base"></textarea>
                                    </div>
                                    <button
                                        style={{ backgroundImage: "var(--color-gradient-light)" }}
                                        type="submit"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                        Enviar mensaje
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg mt-8 sm:mt-12 mb-8 sm:mb-12 p-4 sm:p-8 md:p-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Preguntas Frecuentes</h2>
                        <div className="space-y-4">
                            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">¿Cómo funciona ShopRadar?</h3>
                                <p className="text-sm sm:text-base text-gray-600">ShopRadar utiliza bots que consultan los precios en tiempo real de los supermercados cada pocos minutos, para mantenerte siempre actualizado.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">¿Puedo solicitar que agreguen un supermercado o producto?</h3>
                                <p className="text-sm sm:text-base text-gray-600">¡Por supuesto! Escribinos y evaluaremos agregar nuevos supermercados o productos según la demanda.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Contacto;
