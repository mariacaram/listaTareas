import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';
import FormTareas from './components/FormTareas';

function App() {
  return (
<>
<Titulo></Titulo>
<Subtitulo comision = "16i" estado={true}></Subtitulo>
<FormTareas></FormTareas>   </>
  );
}

export default App;
