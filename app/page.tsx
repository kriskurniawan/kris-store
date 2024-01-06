import Footer from '@/common/components/layouts/Footer'
import { Header } from '@/common/components/layouts/MobileHeader'
import Home from '@/modules/home'

export default function Homepage() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}
