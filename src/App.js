import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Diego y Familia, Bienvenidos a BARILOCHE!:</h1>
        <Testimonio
          nombre='Cerro Campanario'
          pais='Bariloche'
          imagen='mirador-campanario'
          cargo='Se tarda 30 minutos caminando'
          empresa='un bosquesito'
          testimonio='El ascenso dura aproximadamente unos 30 minutos, por un sendero que atraviesa el bosque. ¡Es un paseo estupendo ! 35 km en total, desde el centro de la ciudad de Bariloche y 15 km desde la zona del hotel Llao Llao (ida y vuelta). '
          extension='.jpg' />
        <Testimonio
          nombre='Circuito Chico'
          pais='Bariloche'
          imagen='circuito-chico'
          cargo='Inicia en Avenida Bustillo, termina en el'
          empresa='HOTEL LLAO LLAO'
          testimonio='todo el recorrido tiene su encanto: Melipal, Cerro Campanario, Punto Panoramico, Hotel Llao Llao, Puerto Pañuelo, Parroquia San Eduardo, Colonia Suiza.'
          extension='.jpg'/>
        <Testimonio 
          nombre='Villa los Cohihues'
          pais='Bariloche'
          imagen='villa'
          cargo='Se toma el colectivo numero 50'
          empresa='Por Avenida Pioneros'
          testimonio='Se puede hacer el sendero que lleva a La cascada de los Duendes y luego el Mirador del Lago Gutierrez, es de dificultad media, una hermosa vista'
          extension='.webp' />     
      <Testimonio
      nombre='Cerro Otto'
      pais='Bariloche'
      imagen='otto'
      cargo='Se tarda entre dos y 4 horas caminando'
      empresa='Cerro'
      testimonio='La vista desde la cima del cerro Otto es extraordinaria: hacia el norte se divisa la ciudad de Bariloche y el lago Nahuel Huapi. Hacia el este se pueden observar los cerros Leones y Villegas, y parte de la estepa patagónica.'
      extension='.jpeg'
      />
      </div>
    </div>
  );
}

export default App;
