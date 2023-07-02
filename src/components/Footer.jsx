import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-white">
      <div className="container-fluid mx-auto">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
