import { useState,useRef } from 'react'
import Nav from './components/Nav';

function App() {
  const [foto, setFoto] = useState(null);
  const fileInputRef = useRef(null);

  const cargarFoto = (event) =>{
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = (e) =>{
        setFoto(e.target.result)
      };
      reader.readAsDataURL(file);
    }
  }

  const handleClick = () => {
    if(fileInputRef.current){
      fileInputRef.current.click();
    }
  }

  const eliminarFoto = () =>{
    setFoto(null);
    if(fileInputRef.current){
      fileInputRef.current.value = "";
    }
  }

  return (
    <>
    <Nav />
      <div className="contenedor">
        
        {foto ? (
          <div className='contenedor_imagen'>
            <img className='fotoEditar' src={foto} alt="Foto cargada" />
          </div>
        ) : (
          <p>La foto no esta cargada</p>
        )}
        <div className={`${foto ? 'botones_foto' : 'botones_sinFoto'}`}>
          {foto ? (<button className='boton' onClick={eliminarFoto}>Eliminar Foto</button>) : ""}
          <button className='boton' onClick={handleClick}>Subir Foto</button>
        </div>
        <input className='boton' type='file' accept='image/*' onChange={cargarFoto} ref={fileInputRef}></input>
      </div>
     
    </>
  )
}

export default App
