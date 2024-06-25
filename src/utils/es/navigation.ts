const navBarLinks = [
  { name: "Inicio", url: "/es" },
  { name: "Productos", url: "/es/products" },
  { name: "Servicios", url: "/es/services" },
  // { name: "Blog", url: "/es/blog" },
  { name: "Contacto", url: "/es/contact" },
];

const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      // { name: "Documentación", url: "/es/welcome-to-docs/" },
      { name: "Herramientas y Equipamiento", url: "/es/products" },
      { name: "Servicios de Construcción", url: "/es/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Contacto", url: "/es/contact" },
      // { name: "Blog", url: "/es/blog" },
      { name: "Carreras", url: "#" },
      { name: "Aliados", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.instagram.com/atodamakina.cl",
  x: "https://www.instagram.com/atodamakina.cl",
  instagram: "https://www.instagram.com/atodamakina.cl",
  google: "https://maps.app.goo.gl/rvMSRvFjWNmcmh7D6",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};