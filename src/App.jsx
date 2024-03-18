import luxury from "./assets/icon-luxury.svg"
import suvs from "./assets/icon-suvs.svg"
import sedans from "./assets/icon-sedans.svg"

export default function App(){
  return(
    <main className="min-h-svh bg-offwhitebg py-20 px-6">
      <section>
        <div className="bg-orange">
          <img src={sedans} alt="" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-lexend">
            Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.
          </p>
          <a  className="font-lexend" href="https://www.webmotors.com.br/sedans" target="_blank">ver mais</a>
        </div>
        <div className="bg-green">
          <img src={suvs} alt="" />
          <h2 className="font-shoulders" >SUVs</h2>
          <p className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/SUVs" target="_blank">ver mais</a>
        </div>
        <div className="bg-dark-green">
          <img src={luxury} alt="" />
          <h2 className="font-shoulders" >Luxuosos</h2>
          <p className="font-lexend" >Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/carros-de-luxo/carros/rs-porto-alegre?estadocidade=Rio%20Grande%20do%20Sul%20-%20Porto%20Alegre&necessidade=Carros%20de%20luxo&idcmpint=t1:c17:m07:busque-por-categorias::carros-de-luxo:comprar" target="_blank">ver mais</a>
        </div>


      </section>
    </main>
  )
}