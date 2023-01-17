import React from "react";
import Copywrite from "./Copywrite";
import RedesSociais from "./RedesSociais";

export default function Footer() {
  return (
    <div className="footer">
      <div className="inside-footer">
        <RedesSociais />
        <footer>rodapé</footer>
      </div>
      <div>
        <Copywrite />
      </div>
    </div>
  );
}
