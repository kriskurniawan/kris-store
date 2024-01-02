import { Header } from '@/common/components/layouts/Header'
import Home from '@/modules/home'
import Image from 'next/image'

export default function Homepage() {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}
