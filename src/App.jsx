import luxury from "./assets/icon-luxury.svg"
import suvs from "./assets/icon-suvs.svg"
import sedans from "./assets/icon-sedans.svg"

export default function App(){
  return(
    <main className="min-h-svh bg-offwhitebg py-20 px-6 lg:flex justify-center items-center">
      <section className="lg:flex mx-w-[920px]">
        <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg" >
          <img src={sedans} alt="" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg antialiased"  >Sedans</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">
            Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.
          </p>
          <a  className="font-lexend bg-offwhite  block px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-white" href="https://www.webmotors.com.br/sedans" target="_blank">ver mais</a>
        </div>
        <div className="bg-green p-12">
          <img src={suvs} alt="" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg antialiased" >SUVs</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend bg-offwhite  block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg border-2 border-offwhitebg hover:bg-green hover:text-white" href="https://www.webmotors.com.br/SUVs" target="_blank">ver mais</a>
        </div>
        <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg" >
          <img src={luxury} alt="" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg antialiased" >Luxuosos</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20" >Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend bg-offwhite  block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg border-2 border-offwhitebg hover:bg-dark-green hover:text-white" href="https://www.webmotors.com.br/carros-de-luxo/carros/rs-porto-alegre?estadocidade=Rio%20Grande%20do%20Sul%20-%20Porto%20Alegre&necessidade=Carros%20de%20luxo&idcmpint=t1:c17:m07:busque-por-categorias::carros-de-luxo:comprar" target="_blank">ver mais</a>
        </div>


      </section>
    </main>
  )
}