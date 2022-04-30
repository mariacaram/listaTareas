import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';

function App() {
  return (
<>
<Titulo></Titulo>
<Subtitulo comision = "16i" estado={true}></Subtitulo>
    </>
  );
}

export default App;
