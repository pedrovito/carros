import Luxury from "./components/Luxury";
import Sedans from "./components/Sedans";
import Suvs from "./components/Suvs";




export default function App(){
  return(
    <main className="min-h-svh bg-offwhitebg py-20 px-6 lg:flex justify-center items-center">
      <section className="lg:flex mx-w-[920px]">
        
        <Sedans/>
        <Suvs/>
        <Luxury/>


      </section>
    </main>
  )
}