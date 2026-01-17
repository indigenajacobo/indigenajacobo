import Amarres from '@/components/amarres'
import Dominios from '@/components/dominios'
import Main from '@/components/main'
import Retornos from '@/components/retornos'
import Testimonios from '@/components/testimonios'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gray-800">
      <Main />
      <Amarres />
      <Retornos />
      <Dominios />
      <Testimonios />
    </main>
  )
}
