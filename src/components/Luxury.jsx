import luxury from "../assets/icon-luxury.svg"

export default function Luxury() {
  return (
    <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg" >
          <img src={luxury} alt="" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg antialiased" >Luxuosos</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20" >Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend bg-offwhite  block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg border-2 border-offwhitebg hover:bg-dark-green hover:text-white" href="https://www.webmotors.com.br/carros-de-luxo/carros/rs-porto-alegre?estadocidade=Rio%20Grande%20do%20Sul%20-%20Porto%20Alegre&necessidade=Carros%20de%20luxo&idcmpint=t1:c17:m07:busque-por-categorias::carros-de-luxo:comprar" target="_blank">ver mais</a>
        </div>
  )
}
