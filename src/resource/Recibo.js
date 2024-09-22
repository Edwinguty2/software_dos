import React from "react";
import "./Recibo.css";

const Recibo = ({ pedido }) => {
  return (
    <div style={{ padding: "15px" }}>
      <div className="recibo-cabecera">
        <div>
          <img
            style={{ width: "150px" }}
            src="/images/slider/slider-mochila-1.png"
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            {" "}
            <img src="/logoLoganNegro.png" alt="" />
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <p>
              VENTA DE TODA CLASE DE MOCHILAS, MALETINES DEPORTIVOS, <br />{" "}
              CAMPERAS, EJECUTIVOS, CHIMPUNERAS.
            </p>
            <p>VENTA AL POR MAYOR Y MENOR</p>
            <p>Lima - Lima</p>
            <p>
              <b>Jr. Andahuaylas Nro. 158</b>
            </p>
            <p>
              <b>Celular: 936234467</b>
            </p>
          </div>
        </div>
        <div>
          <div className="contenedor-ruc-recibo">
            <p>
              <b>R.U.C. 10464177995</b>
            </p>
            <p>
              <b>COMPROBANTE DE PAGO</b>
            </p>
            <p>
              <b>N° {pedido.NumeroPedido}</b>
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>
            <b>Cliente: </b> {pedido.Nombres} {pedido.Apellidos}
            <br /> <b>Dirección: </b> {pedido.Direccion}
            <br /> <b>DNI: </b>
            <br /> <b>Celular: </b> {pedido.Celular}
          </p>
        </div>
        <div>
          <p>
            <b>Fecha de Emisión: </b>{" "}
            {pedido.Fecha.toDate().toLocaleDateString()}
            <br /> <b>Fecha de Vencimiento: </b>
            <br /> <b>Condición de venta: </b> PAGO ONLINE
            <br /> <b>Guía de Remisión: </b>
          </p>
        </div>
      </div>
      <table className="tabla-recibo">
        <thead>
          <tr>
            <th>ITEM</th>
            <th>CANTIDAD</th>
            <th>UNIDAD</th>
            <th>DESCRIPCION</th>
            <th>PRECIO UNITARIO</th>
            <th>IMPORTE TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {pedido.Productos.map((producto, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{producto.Unidades}</td>
              <td>UNIDAD</td>
              <td>{producto.Descripcion}</td>
              <td>S/. {producto.Precio}</td>
              <td>S/. {producto.Unidades * parseFloat(producto.Precio)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="contenedor-total-recibo">
        <div>
          <b>IMPORTE TOTAL: </b> S/.{" "}
          {pedido.Productos?.reduce(
            (antes, actual) =>
              parseFloat(actual.Precio) * actual.Unidades + antes,
            0
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default Recibo;

/*
          <p>N° Pedido: {pedido.NumeroPedido}</p>

import { Document, Page, Text } from "@react-pdf/renderer";

const Recibo = ({ pedido }) => {
  return (
    <Document>
      <Page size="A4">
        <Text>N° Pedido: {pedido.NumeroPedido}</Text>
      </Page>
    </Document>
  );
};


{verRecibo ? (
        <div className="contendor-pdf">
          <button
            onClick={() => setVerRecibo(false)}
            style={{ color: "black", backgroundColor: "white", padding: "5px" }}
          >
            Cerrar
          </button>
          <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <Recibo pedido={infoPedido} />
          </PDFViewer>
        </div>
      ) : null}







*/
