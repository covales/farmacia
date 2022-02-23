import React, { useState, useEffect } from "react";
import * as FileSaver from "file-saver";
import { utils, write } from "xlsx";
import data from "../../data/data";
import ReactHmlTableToExcel from "react-html-table-to-excel";

const DonwloadProduct = ({}) => {
  /*   let id = [];

  function getId() {
    data.map((p) => {
      id = p.id;      
      console.log(id);
    });
  }

  var final = {
    data_product: [
      {
        "Euromonitor category": "id",
        "Product Type": "Body Wash",
        "Inclusion(%)": "12.32",
        "GDP Class": "Medium High",
      },
      {
        "Euromonitor category": "Personal Care, PW Liquids",
        "Product Type": "Skin Cream",
        "Inclusion(%)": "0.1",
        "GDP Class": "Low",
      },
      {
        "Euromonitor category": "Personal Care, PW Bars",
        "Product Type": "Toilet soap",
        "Inclusion(%)": "0.1",
        "GDP Class": "Low",
      },
    ],
  };

  const exportToCSV = () => {
    const fileName = "Productos";
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    //const ws = utils.json_to_sheet(csvData.data_product);
    var wscols = [
      { wch: 10 }, // "characters"
      { wpx: 150 }, // "pixels"
    ];

    const ws = utils.json_to_sheet([{}], {
      header: ["Lista de productos"],
    });

    utils.sheet_add_json(ws, final.data_product, { origin: 3 });
    // utils.sheet_add_json(ws, [{}], {
    //   header: ["product and Inclusion"],
    //   origin: -1
    // });

    console.log(ws);
    ws["!cols"] = wscols;

    // var cell_ref = utils.encode_cell({ c: 0, r: 24 });
    // console.log("ws", ws);

    // ws["A2"] = { t: "s", w: "Senat", s: { font: { bold: true } } };

    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = write(wb, {
      bookType: "xlsx",
      type: "array",
      cellStyles: true,
    });

    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }; */

  return (
    <>
      <ReactHmlTableToExcel
        id="botonExportarExcel"
        className="btn btn-success"
        table="tablaProductos"
        filename="productosExcel"
        sheet="pagina 1"
        buttonText="exportar excel"
      />

      <table className="d-none table invisible" id="tablaProductos">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Nombre y Presentación</th>
            <th scope="col">Fecha de vencimiento</th>
            <th scope="col">Cantidad en Stock</th>
            <th scope="col">Precio de venta</th>
            <th scope="col">Modo de Venta</th>
            <th scope="col">Ubicación</th>
            <th scope="col">Laboratorio</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, index) => {
           return(
            <tr key={index}>
            <th scope="row">{p.id}</th>
            <td>{p.medicamentoPresentacion}</td>
            <td>{p.fVencimiento}</td>
            <td>{p.cantidad}</td>
            <td>{p.pVenta}</td>
            <td>{p.modoVenta}</td>
            <td>{p.ubicacion}</td>
            <td>{p.laboratorio}</td>
          </tr>
           );
            //console.log(p);
          })
          
          }
        </tbody>
      </table>
      {/* <button className="btn btn-success" onClick={(e) => exportToCSV()}>
      <svg
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-file-earmark-spreadsheet-fill "
        viewBox="0 0 16 16"
      >
        <path d="M6 12v-2h3v2H6z" />
        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3V9z" />
      </svg>
      Descargar
    </button> */}
    </>
  );
};

export default DonwloadProduct;
