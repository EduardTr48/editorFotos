import { useState, useRef } from "react";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import SideBarItem from "./components/SideBarItem";
function App() {
    const [foto, setFoto] = useState(null);
    const fileInputRef = useRef(null);

    const cargarFoto = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFoto(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const eliminarFoto = () => {
        setFoto(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <>
            <div className="contenedor">
                <div className="main-image"></div>
                <div className="sidebar">
                    <SideBarItem />
                    <SideBarItem />
                    <SideBarItem />
                    <SideBarItem />
                </div>
                <Slider />
            </div>
        </>
    );
}

export default App;
