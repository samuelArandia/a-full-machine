import ogImageSrc from "@images/tool2.jpeg";

export const SITE = {
  title: "A toda makina",
  tagline: "Arriendo de maquinaria, herramientas y equipos para la construcción",
  description: "A toda makina ofrece el servicio de arriendo de maquinaria, herramientas y equipos para la construcción como placas compactadoras, martillos demoledores, rodillos, escaleras, generadores eléctricos, entre otros. Contactanos para más información.",
  description_short: "A toda makina ofrece el servicio de arriendo de maquinaria, herramientas y equipos para la construcción.",
  url: "https://atodamakina.cl",
  author: "Samuel Arandia",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es_CL",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_CL",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Herramientas y equipos para la construcción`,
  description: "En A toda makina ofrecemos herramientas, maquinas, grupos electrogenos y equipos para la construcción, arriendo de maquinaria, herramientas y equipos para la construcción.",
  image: ogImageSrc,
};
