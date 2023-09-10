import Image from 'next/image'
import Landing from "@components/Landing";
import Categories from '@components/Categories';
import Features from '@components/Features';
import Services from '@components/Services';
import Footer from '@components/Footer';


export default function Home() {
  return (
    <>
    
     <Landing/>
     <Services/>
     <Features />
     <Categories/>
     <Footer />
    </>
  )
}
