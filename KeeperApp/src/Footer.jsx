import React from "react";

function Footer() {
    const date = new Date();
    return (
      <footer>
        <p>made in {date.getFullYear()}</p>
      </footer>
    );
}

export default Footer;