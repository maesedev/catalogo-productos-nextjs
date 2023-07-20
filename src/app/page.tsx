
import Product from '@/components/product'
import { useGetData } from '../../hooks/useGetData'

export default function Home() {
  const Products = useGetData()
  return (
      <section className='flex flex-col items-center box-content '>

        <div className='py'>
          <h2 className='text-center font-semibold text-lg mt-6'>¡Escucha la perfección! Encuentra los mejores audífonos y accesorios tecnológicos aquí.</h2>
        </div>


        <div className='flex flex-row flex-wrap justify-center gap-6 max-w-5xl py-6'>
          {
            Products.map((item, index) => (
              item.invisible ?
              <></>
              :
              <Product
                key={index}
                id={item.id}
                description={item.tagline}
                mainImageURL={"/images/audifonos" + item.imageUrl}
                price={item.price}
                title={item.title} />
            ))
          }
        </div>
      </section>
  )
}
