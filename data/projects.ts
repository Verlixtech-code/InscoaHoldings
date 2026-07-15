export interface Project {
  partyLabel: string;
  partyName: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    partyLabel: "Employer",
    partyName: "Airport & Aviation Sri Lanka",
    title: "Bandaranaike International Airport Development Project (Phase II, Stage 2)",
    description:
      "Temporary relocation of utility pipe works — fire hydrant, water supply and sewerage water transfer pipe — for Package A, the Passenger Terminal Building and associated works.",
  },
  {
    partyLabel: "Employer",
    partyName: "National Water Supply & Drainage Board",
    title: "Integrated Water Supply Project — Aluthgama, Mathugama & Agalawatta",
    description:
      "Electro-mechanical installation of three 750kW pumps with VFD control, water treatment equipment, HV substation, SCADA, plus 45km of DI pipe laying for raw water main and transmission.",
  },
  {
    partyLabel: "Employer",
    partyName: "Ministry of Health",
    title: "District General Hospital, Hambantota — Water Sumps & Booster Pumping System",
    description:
      "Construction of two water sumps and supply/installation of booster pumps, control panels and pipe fittings.",
  },
  {
    partyLabel: "Client",
    partyName: "China State Construction Engineering Corporation Ltd.",
    title: "Upper Elahera Canal Project — Steel Fabrication Supply",
    description: "Supply of fabricated steel bars for the Upper Elahera Canal Project.",
  },
  {
    partyLabel: "Client",
    partyName: "National Water Supply & Drainage Board / CML MTD",
    title: "Diyathalawa Water Supply Scheme — Pump & Air Blower Supply",
    description: "Supply of two 55kW split casing back-wash pumps and air blowers, plus pressure sand filter equipment.",
  },
  {
    partyLabel: "Client",
    partyName: "Ceylon Electricity Board",
    title: "Kelanitissa Power Station — Finned Tube Procurement",
    description:
      'Import, supply and delivery of 7,200mm Carbon Steel ASME SA 179 seamless tubes with "L"-type aluminium fins, 440 units, replacing corroded finned tubes on the Fr V Gas Turbine 01.',
  },
];
