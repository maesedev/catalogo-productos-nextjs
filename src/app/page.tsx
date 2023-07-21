
import Product from '@/components/product'
import { useGetData } from '../../hooks/useGetData'
import Categorias from '@/components/categories'

export default function Home() {
  const Products = useGetData()
  return (
    <section className='flex flex-col items-center box-content '>

      <Categorias />

      <div className='py'>
        <p className='text-center font-bold text-5xl mt-6'>Todo en tecnología</p>
        <h2 className='text-center font-semibold text-lg mb-10'>Encuentra los mejores audífonos y accesorios tecnológicos aquí.</h2>
      </div>


      <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-6 max-w-5xl py-6'>
        {
          Products.map((item, index) => (
            item.invisible ?
              <></>
              :
              <Product
                key={index}
                id={item.id}
                description={item.tagline}
                mainImageURL={item.mainImage}
                price={item.price}
                title={item.title} />
          ))
        }
      </div>
    </section>
  )
}
