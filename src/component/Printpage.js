import React from "react";
import "./printpage.scss";
export default function Printpage() {
  return (
    <div className="print">
      <a
        onClick={(event) => {
          console.log("event", event);
          event.preventDefault();
          window.print();
        }}
        href="https://www.google.com/"
      >
        PrintPage
      </a>
    </div>
  );
}
