import React, { useState, useEffect } from "react";
import "../../App.css";
import AllPagesPDFViewer from "./all-pages";
import SinglePagePDFViewer from "./single-page";
// import sPDF from "./../../files/1623760688822_Session 4(1).pdf"
const PDFReader = (props) => {
  const [mod, setMod] = useState("");

  useEffect(() => {
    const getBook = async () => {
      const res = await fetch(
        `http://localhost:8082/api/books/${props.match.params.id}`
      );
      const { file_path1 } = await res.json();

      const paths = file_path1.split(`\\`);
      const path = "./" + paths[paths.length - 1];
      // console.log("path", path);

      try {
        const { default: module } = await import(`${path}`);
        // console.log(module);

        setMod(module);
      } catch (err) {
        console.error(err);
        alert("book not found. using default...");

        const { default: module } = await import("./sample.pdf");
        // console.log(module);

        setMod(module);
      }
    };

    getBook();
  }, []);

  return (
    <div className="single-page-container" style={{ marginLeft: "30%" }}>
      <SinglePagePDFViewer pdf={mod} />
    </div>
    // <div className="all-page-container" style={{ marginLeft: "30%" }}>
    //   <AllPagesPDFViewer pd={mod} />
    // </div>
  );
};

export default PDFReader;
