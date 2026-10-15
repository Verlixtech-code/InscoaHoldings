
export type DivisionSlug =
  | "consultancy"
  | "engineering"
  | "real-estate"
  | "supply-services";

export interface DivisionProject {
  title: string;
  party?: string;
  value?: string;
}

export interface GalleryItem {
  /** Text shown on the card, e.g. "Road Construction Kalutara" */
  title: string;
  /** Image path under /public, e.g. "/images/gallery/engineering/road-kalutara.jpg" */
  image: string;
  /** More photos of the same project, shown in the popup after the cover image */
  images?: string[];
  /** Optional description for screen readers (defaults to title) */
  alt?: string;
  /** Optional link for "See More". Without it, "See More" opens a popup with this project's photos. */
  href?: string;
}

export interface Division {
  slug: DivisionSlug;
  tabLabel: string;
  heroTitle: string;
  heading: string;
  /** Main picture at the top of this division's tab, e.g. "/images/divisions/engineering.webp" */
  image?: string;
  intro: string[];
  ctaLabel: string;
  services?: { heading: string; items: string[]; highlight: string };
  projects?: DivisionProject[];
  gallery?: GalleryItem[];
  sections?: { heading: string; paragraphs: string[] }[];
}

export const divisions: Division[] = [
  {
    slug: "consultancy",
    tabLabel: "Consultancy",
    heroTitle: "What We Do | INSCOA Consultancy Division",
    heading: "INSCOA Consultancy Division",
    image: "/Inscoa consultancy.png",
    intro: [
      "Division has a decade of expertise in dealing with leading international construction companies for mega development projects in Sri Lanka. The company is involved as a facilitator and local infrastructure provider for major infrastructure development projects. As a truly Sri Lankan corporate citizen, the company has thrived in the corporate world and beyond by liaising with government agencies for the implementation of country's development projects and its smooth operations.",
      "Through Inscoa Business Development, we have ventured into a variety of construction projects such as Water Treatments, Power Generation, roads, highways, expressways, bridges, buildings, town development, shopping malls, complexes and stores.",
    ],
    ctaLabel: "Get in Touch About Your Project",
    services: {
      heading:
        "Inscoa Consultancy Division is engaged offering foreign individuals and companies a comprehensive package of services, including:",
      items: [
        "Advice, guidance and assistance the initial stage, with documentation",
        "Clearance and approval from state institutions for incorporation of local companies",
        "Assistance in bringing in funds for investment and their repatriation etc.",
        "Project preparation, provision of country specific technical and local data and information",
        "Preparation and submission of project proposals",
      ],
      highlight:
        "The firm is specialized in feasibility study; planning, designing, project and contract management and construction supervision in the multifaceted environmental engineering field comprising water supply (urban & rural) sanitation and sewerage, roads, storm water, drainage wastewater sectors and other infrastructure facilities.",
    },
    projects: [
      { title: "Wave Power Plant Project" },
      { title: "Janaranjanagaga Pumping Complex Project" },
      { title: "Setting Up of a Urea Manufacturing Plant with Mini LNG Gas Terminal" },
      { title: "Housing Complex Project" },
      { title: "160 MW Solar Power Project" },
      { title: "Development of 10 MW Wing Power Plant – Sri Lanka" },
      { title: "LNG Storage Terminal with 150MW Power Plant in Maldives" },
      { title: "Fuel Storage Terminal in Maldives" },
      { title: "3.5 MW Rooftop Solar PV + 2 MW/4 MWh BESS – Maldives" },
      { title: "UGC Zambia Phase 1 – 50 MW AC / 65 MW DC Solar PV Plant – Zambia" },
    ],
  },
  {
    slug: "engineering",
    tabLabel: "Engineering",
    heroTitle: "What We Do | INSCOA Engineering Division",
    heading: "INSCOA Engineering Division",
    image: "/engineering.jpeg",
    intro: [
      "Undoubtedly, our forte. Inscoa Engineering Division is proud of the critical role that the company has played in Sri Lanka's development, especially in relation to improving and renovating the country's primary infrastructure facilities. In collaboration with many of our international investors and construction firms, Inscoa Engineering has been involved in several projects relating to the construction of infrastructural facilities. As Sri Lanka strives to break away from its lower-middle income status, Inscoa Engineering stands ready to offer its support and expertise. Inscoa Engineering will not be complacent about our accomplishments but will dedicate ourselves to the strengthening of business structure by expanding our capabilities in the fields of project planning, engineering, and design to ensure customer satisfaction.",
      "We endeavour to forge long-term relationships with all our clients so both sides can benefit from a better understanding of each other's requirements. To ensure clear communication we always guarantee our client's direct access to senior managerial staff.",
      "Our reputation is entrusted to our teams of mobile operatives, most of whom have developed long working relationships with us. We like to think of ourselves as one big happy family and are keen to extend this hospitality to new clients.",
    ],
    ctaLabel: "Get in Touch About Your Project",
    projects: [
      { title: "Installation Electro-Mechanical Equipment and Pipe Fitting at Rehabilitation & Augmentation of Kiridioya Water Supply Project" },
      { title: "DI and PVC Pipes Laying at Towns North of Colombo Water Supply Projects" },
      { title: "Installation Electro-Mechanical Equipment and Pipe Fitting at Towns North of Colombo Water Supply Project EM1" },
      { title: "Rehabilitation & Augmentation of Sewerage System at Nuwara Eliiya Hospital" },
      { title: "Construction of two stores OIC office Building at Ekala, Towns North of Colombo Water Supply Project C7 Contract" },
      { title: "Installation of Plate Settler at Muttur Water Supply Project" },
      { title: "Installation Electro-Mechanical Equipment and Pipe Fitting at Ruhunupura Water Supply Project" },
      { title: "Installation Electro-Mechanical Equipment and Pipe Fitting at Kolonna Balangoda Water Supply Project" },
      { title: "Installation of Pumps and Control Panel at Jubilee Pump House" },
      { title: "Supply and Installation of Submersible Pumps – Shangri La Hotel Project" },
      { title: "Installation of Pumps and Control Panel – Kiridioya Intake Pump House" },
      { title: "Fire System Service & Inspection for Hambanthota Port Admin Building" },
      { title: "Additions and Alteration to the Electrical Installation System for the Proposed Government Hospital at Hambantota" },
      { title: "Installation Electro-Mechanical Equipment and Pipe Fitting – Chillaw & Puttalam Water Supply Project" },
      { title: "Extension Factory and AC Facilities at Brandex Sri Lanka" },
      { title: "Supply and Installation of Hot Water Control System at Chaya Bay Hotel Beruwala" },
      {
        title: "Construction of 2 Nos Water Sumps and Supply Installation of Booster Pumps, Control Panels and Pipes Fitting at Development and Construction of District General Hospital – Hambantota",
        party: "Employer – Minister of Health, Main Contractor – EN Projects UK",
        value: "Project Value – EURO 46 Million; Subcontract Value – LKR 12,500,000.00",
      },
      { title: "Supply, Installation, Testing & Commissioning of Water Transfer and Booster Pumping System at Homeland Kota Road Apartment Building, Prime Lands Castal Street Apartment Building, SLIIT Campus Building and Prime Lands Usvetakeiyawa Apartment Building" },
      {title:"Installation Testing and Commissioning of 24MV Emergence Power Plant 4 Nos. "},
      {title:"Installation of Chlorine and Dosing System at Deduruoya Water Supply Project"},
      {title:"Installation of Mechanical, Electrical and Instrumentation Works at Ambathale Stormwater Pumping Complex "},
      {title:"Supply and Installation of 100 Nos. Street Lighting Poles with Light at Central Province Road Rehabilitation Project"},
      {title:"Subcontract of WP 10000 – Temporary Relocation of Utility Pipe Works  ",
       party: " ",
       value: " ",
      },
      {title:"Subcontract of Installation ElectroMechanical Equipment and Pipe Fitting at Aluthgama, Mathugama and Agalawatta Integrated Water Supply Project  ",
       party: " ",
       value: " ",
      },
      {title:" Subcontract of Laying of DI Pipe Fitting at Aluthgama, Mathugama and Agalawatta Integrated Water Supply Project  ",
       party: " ",
       value: " ",
      },
      {title:"Subcontract of Installation ElectroMechanical Equipment and Pipe Fitting at Jaffna Kilinochchi Water Supply and Sanitation Project  ",
       party: " ",
       value: " ",
      },

    ],
    // ---- Project Gallery ----
    // Put photos in /public/images/gallery/engineering/ and list them here.
    // Cards fill the grid in this order: wide, narrow, narrow, wide, ...
    gallery: [
      {
        title: "Road Construction Kalutara",
        image: "/Project Gallery 1.svg",
        images: [
           "/images/Projects/Road Construction (1).webp",
           "/images/Projects/Road Construction (2).webp",
           "/images/Projects/Road Construction (3).webp",
           "/images/Projects/Road Construction (4).webp",
           "/images/Projects/Road Construction (5).webp",
           "/images/Projects/Road Construction (6).webp",
        
           
        ],
      },
      {
        title: "Steel Fabrication Kalutara",
        image: "/images/Projects/Steel Fabrication (1).webp",
         images: [
           "/images/Projects/Steel Fabrication (2).webp",
           "/images/Projects/Steel Fabrication (3).webp",
           "/images/Projects/Steel Fabrication (4).webp",
           "/images/Projects/Steel Fabrication (5).webp",
           
           "/images/Projects/Steel Fabrication (6).webp",
           "/images/Projects/Steel Fabrication (7).webp",
           




           
         
        
        
           
        ],
      },
      {
        title: "Jaffna Water Project",
        image: "/images/Projects/Jaffna Water Project (7).webp",
         images: [
           "/images/Projects/Jaffna Water Project (2).webp",
           "/images/Projects/Jaffna Water Project (3).webp",
           "/images/Projects/Jaffna Water Project (4).webp",
           "/images/Projects/Jaffna Water Project (5).webp",
           "/images/Projects/Jaffna Water Project (1).webp",
           "/images/Projects/Jaffna Water Project (6).webp",
           "/images/Projects/Jaffna Water Project (8).webp",
           "/images/Projects/Jaffna Water Project (9).webp",
        
           
        ],
      },
      {
        title: "Electro Mechanical Installation Kalutara Project",
        image: "/images/Projects/Electro Mechnical Installation Kalutara Project (10).webp",
         images: [
           "/images/Projects/Electro Mechnical Installation Kalutara Project (2).webp",
           "/images/Projects/Electro Mechnical Installation Kalutara Project (3).webp",
           "/images/Projects/Electro Mechnical Installation Kalutara Project (4).webp",
           "/images/Projects/Electro Mechnical Installation Kalutara Project (5).webp",
           "/images/Projects/Electro Mechnical Installation Kalutara Project (6).webp",
           "/images/Projects/Electro Mechnical Installation Kalutara Project (7).webp",
           "/images/Projects/Electro Mechnical Installation Kalutara Project (1).webp",
  
        
           
        ],
      },
    ],
  },
  {
    slug: "real-estate",
    tabLabel: "Real Estate",
    heroTitle: "What We Do | INSCOA Real Estate Division",
    heading: "INSCOA Real Estate Division",
    image: "/Inscoa consultancy.png",
    intro: [
      "Inscoa Real Estate is part of INSCOA Holdings' diversified portfolio, contributing to property and infrastructure development ventures across Sri Lanka, including housing complex development, as part of the group's broader project development activities.",
      "We bring the same engineering discipline that sits behind every INSCOA project to property development, from the first feasibility conversation through to construction.",
    ],
    ctaLabel: "Get in Touch About Real Estate",
  },
  {
    slug: "supply-services",
    tabLabel: "Supply & Services",
    heroTitle: "What We Do | INSCOA Supply & Services",
    heading: "INSCOA Supply & Services Division",
    image: "/Inscoa Supply and Service.png",
    intro: [
      "Inscoa Supply and Services is in import/export firm that we support various material trade negotiating orders on behalf of our customers in Sri Lanka as an indenting firm. We have genuine suppliers' worldwide and good clients in Sri Lanka who has got used to purchase cargo through us. This is because of the service provided by us having a close/genuine business relationship.",
      "Inscoa Trading Company is the one place where you can believe and better sourcing service provider for you",
    ],
    ctaLabel: "Get in Touch About Your Project",
    sections: [
      {
        heading: "Import/Export",
        paragraphs: [
          "The business side of importing and exporting can be extremely challenging, fast-paced and financially rewarding. Some careers in this area focus purely on the import side of things or the export side of things. However, many careers focus on the entire shipping process.",
          "We import/export wide range of products, minimizes paperwork, and lowers shipping costs with truly personalized service. You can be confident that our convenient and reliable export services will help you complete your export shipping with ease.",
          "Export, we export wide range of products such as handicraft, spices, fruits, etc… to different zones worldwide such as Asian and Europe market.",
          "Import, we import wide range of products such as Engineering product, steel, hardware tools, chemicals, papers and ceramic etc… from different countries from all over the world.",
        ],
      },
    ],
  },
];

export function getDivision(slug: string | undefined): Division {
  return divisions.find((d) => d.slug === slug) ?? divisions[0];
}