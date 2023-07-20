import { redirect } from 'next/navigation'
export default async function Producto() {

    return (
        <section className="px-4 py-24 mx-auto max-w-7xl">
            <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
                <div>
                    <p className="text-pink-400 mb-2 text-xl font-semibold tracking-wide  uppercase">Error 404</p>
                    <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">Oops! Parece que no hay ningun producto aquí.</h1>
                    <p className="mb-5 text-base text-left text-gray-800 md:text-xl">Tal vez esta URL no es correcta o la página fue movida.</p>
                    <a href="/" className="w-full text-pink-400 mb-2 btn btn-lg btn-light sm:w-auto sm:mb-0 hover:scale-150 " >Ir a la homepage...</a>
                </div>
                <div>
                    <div className="w-full py-10 bg-gray-200 rounded-lg">
                        <img className='hover:rotate-12 transition-all' src="/assets/404 cat.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        )
}