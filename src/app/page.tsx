import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import SimpleSlider from '@/components/simpleSlider/simpleSlider'
import ProductSlider from '@/components/productSlider/productSlider'

export default function Home() {
  return (
    <>
      <Header />
        <SimpleSlider />
        <ProductSlider />
      <Footer />
    </>
  )
}
