import React, { useState, useEffect, useRef, useContext, useCallback } from "react";
import {
  editarPerfilSinFoto,
  editarPerfilConFoto,
} from "../../../controllers/Perfil";
import { EstadoContexto } from "../../../context/EstadoGeneral";
import "./Personalizar.css";

const Personalizar = () => {
  const { usuario } = useContext(EstadoContexto);
  const [foto, setFoto] = useState(undefined);
  const [fotoVista, setFotoVista] = useState(undefined);
  const [imageX, setImageX] = useState(20);
  const [imageY, setImageY] = useState(20);
  const [posicionX, setPosicionX] = useState(20);
  const [posicionY, setPosicionY] = useState(20);

  const imagenRef = useRef();

  useEffect(() => {
    if (!foto) {
      return;
    }
    const catImage = new Image();
    const fotoCargada = new FileReader();
    fotoCargada.onload = () => {
      //setFotoVista(fotoCargada.result);
      catImage.src = fotoCargada.result;
    };
    fotoCargada.readAsDataURL(foto);
    catImage.onload = () => setFotoVista(catImage);
  }, [foto]);

  function cambiarImagen(e) {
    let fotoSeleccionado;
    if (e.target.files && e.target.files.length === 1) {
      fotoSeleccionado = e.target.files[0];
      setFoto(fotoSeleccionado);
    }
    imagenRef.current.value = "";
  }

  function cambiarImagenSubir() {
    imagenRef.current.click();
  }

  function eliminarImagen(e) {
    setFoto(undefined);
    imagenRef.current.value = "";
  }

  const guardarFoto = (e) => {
    e.preventDefault();
    const userId = usuario.IdCliente;
    if (foto === undefined) {
      editarPerfilSinFoto(fotoVista, userId);
      setFoto(undefined);
      setFotoVista(fotoVista);
    } else {
      editarPerfilConFoto(foto, userId);
      setFoto(undefined);
      setFotoVista(fotoVista);
    }
  };

  const canvasRef = useRef(null);
  var dragok = false;
  var startX = 0;
  var startY = 0;
  

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const contexto = canvas.getContext("2d");
    const vistaCanvas = canvas.getBoundingClientRect();
    setPosicionX(vistaCanvas.left)
    setPosicionY(vistaCanvas.top)
    const fondo = new Image();
    fondo.src = "/images/personalizados/mochila-azul.jpg";
    fondo.onload = () => {
      contexto.drawImage(fondo, 0, 0);
      if (fotoVista) {
        contexto.drawImage(fotoVista, imageX, imageY, 200, 200);
      }
    };
  }, [fotoVista, imageX, imageY]);

  useEffect(() => {
    if (canvasRef) {
      draw();
    }
  }, [draw]);

  function descargarImagen(e) {
    e.preventDefault();
    const instancia = canvasRef.current;
    const extension = instancia.toDataURL("image/png");
    const descargar = document.createElement("a");
    descargar.download = "Mochila-logan-personalizado.png";
    descargar.href = extension;
    descargar.click();
  }

  const myDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    var mx = parseInt(e.clientX - posicionX);
    var my = parseInt(e.clientY - posicionY);
    dragok = true;
    startX = mx;
    startY = my;
  }

  function myUp(e) {
    e.preventDefault();
    e.stopPropagation();
    dragok = false;
  }
  const myMove = (e) => {
    if (dragok) {
      e.preventDefault();
      e.stopPropagation();
      var mx = parseInt(e.clientX - posicionX);
      var my = parseInt(e.clientY - posicionY);
      console.log("mx: ", mx)
      var dx = mx - startX;
      console.log("dx: ", dx)

      var dy = my - startY;
      setImageX(imageX + dx)
      setImageY(imageY + dy)
      startX = mx;
      startY = my;
    }
  }

  return (
    <>
      <div className="titulo-paginas">
        <h1>PERSONALIZAR MI MOCHILA</h1>
      </div>
      <div className="grid-perfil-cliente">
        <div className="grid-perfil-cliente-datos">
          <div className="contenedor-personalizar">
            <canvas
              onMouseDown={myDown}
              onMouseUp={myUp}
              onMouseMove={myMove}
              style={{ background: "#ededed" }}
              ref={canvasRef}
              width={600}
              height={600}
            ></canvas>
          </div>
          <button
            type="button"
            style={{ backgroundColor: "red" }}
            onClick={descargarImagen}
          >
            Descargar imagen
          </button>
        </div>

        <div className="grid-perfil-cliente-foto">
          <label htmlFor="name">Foto de perfil:</label>
          <div className="grid-perfil-cliente-imagen">
            {fotoVista === undefined && (
              <div>
                <img src="/images/perfil/sinPerfil.jpg" alt="" />
                <button
                  style={{ backgroundColor: "black" }}
                  type="button"
                  onClick={cambiarImagenSubir}
                >
                  Cambiar perfil
                </button>
              </div>
            )}
            {fotoVista && (
              <>
                <img src={fotoVista} alt="vista previa" />
                <button
                  type="button"
                  style={{ backgroundColor: "black" }}
                  onClick={cambiarImagenSubir}
                >
                  Cambiar foto
                </button>
                {foto !== undefined && (
                  <>
                    <button
                      type="button"
                      style={{ backgroundColor: "#7e7878" }}
                      onClick={eliminarImagen}
                    >
                      Cancelar cambio
                    </button>
                    <button
                      type="button"
                      style={{ backgroundColor: "red" }}
                      onClick={guardarFoto}
                    >
                      Guardar foto
                    </button>
                  </>
                )}
              </>
            )}
            <input
              ref={imagenRef}
              type="file"
              accept=".jpg, .png, .jpeg"
              onChange={cambiarImagen}
              style={{
                display: "none",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Personalizar;
