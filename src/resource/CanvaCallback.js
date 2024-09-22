import React, { useState, useEffect, useRef, useContext } from "react";
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

  ////CANVAS

  const canvas = useRef(null);
  var vistaCanvas = null;
  var posicionX = null;
  var posicionY = null;
  var dragok = false;
  var isDragging = false;
  var imageX = 20;
  var imageY = 20;
  var startX;
  var startY;
  useEffect(() => {
    if (canvas) {

    draw();
    }
    /*const contexto = canvas.current.getContext("2d");
    vistaCanvas = canvas.current.getBoundingClientRect();
    posicionX = vistaCanvas.left;
    posicionY = vistaCanvas.top;
    const fondo = new Image();
    fondo.src = "/images/personalizados/mochila-azul.png";
    fondo.onload = () => {
      contexto.drawImage(fondo, 0, 0);
      if(fotoVista){
        contexto.drawImage(fotoVista, imageX, imageY, 200, 200);
      }

    };*/
  }, [draw]);

  function draw() {
    const contexto = canvas.current.getContext("2d");
    vistaCanvas = canvas.current.getBoundingClientRect();
    posicionX = vistaCanvas.left;
    posicionY = vistaCanvas.top;
    const fondo = new Image();
    fondo.src = "/images/personalizados/mochila-azul.jpg";
    fondo.onload = () => {
      contexto.drawImage(fondo, 0, 0);
      if (fotoVista) {
        contexto.drawImage(fotoVista, imageX, imageY, 200, 200);
      }
    };
    canvas.current.onmousedown = myDown;
    canvas.current.onmouseup = myUp;
    canvas.current.onmousemove = myMove;
  }

  function descargarImagen(e) {
    e.preventDefault();
    const instancia = canvas.current;
    const extension = instancia.toDataURL("image/png");
    const descargar = document.createElement("a");
    descargar.download = "Mochila-logan-personalizado.png";
    descargar.href = extension;
    descargar.click();
  }

  function myDown(e) {
    e.preventDefault();
    e.stopPropagation();
    var mx = parseInt(e.clientX - posicionX);
    var my = parseInt(e.clientY - posicionY);
    dragok = true;
    isDragging = true;
    startX = mx;
    startY = my;
  }

  function myUp(e) {
    e.preventDefault();
    e.stopPropagation();
    dragok = false;
    isDragging = false;
  }

  function myMove(e) {
    if (dragok) {
      e.preventDefault();
      e.stopPropagation();

      var mx = parseInt(e.clientX - posicionX);
      var my = parseInt(e.clientY - posicionY);

      var dx = mx - startX;
      var dy = my - startY;

      imageX += dx;
      imageY += dy;
      startX = mx;
      startY = my;
      draw();
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
              style={{ background: "#ededed" }}
              ref={canvas}
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
