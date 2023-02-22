import React from "react";

function NavBar() {
  const links = [
    { id: 1, href: "#home", link: "home"}, 
    { id: 2, link: "about", href: "#about"}, 
    {id: 3, link: "projects", href: "#projects"}
  ];
  
  const navLinks = links.map((link) => {
    return <a key={link.id} href={link.href}>{link.link}</a>;
  });

  return <nav>
    {navLinks}
    </nav>;
}

export default NavBar;
