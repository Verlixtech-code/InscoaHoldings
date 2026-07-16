import {
    Droplet, Zap, Route, Bus, Radio, Sprout, Landmark, Anchor,
    Users, Truck, Hospital, Recycle, ExternalLink, LucideIcon,MapPinHouse
} from "lucide-react";

interface WorkSector {
    icon: LucideIcon;
    title: string;
    description: string;
}

const SECTORS: WorkSector[] = [
    { icon: Droplet, title: "Water & Wastewater Management", description: "Urban and rural water supply, sanitation, sewerage and treatment infrastructure." },
    { icon: Zap, title: "Power & Renewable Energy", description: "Solar, wind, wave and LNG power generation projects." },
    { icon: Route, title: "Roads & Highways", description: "Road rehabilitation, highway and expressway infrastructure." },
    { icon: Bus, title: "Transportation", description: "Infrastructure supporting the movement of people and goods." },
    { icon: Radio, title: "Construction Material Supply & Services", description: "Sourcing and supply of materials for construction projects of every scale." },
    { icon: Sprout, title: "Agriculture", description: "Cultivation and processing infrastructure, including plant construction." },
    { icon: Landmark, title: "Financing & Investment", description: "Investment facilitation and advisory for local and foreign investors." },
    { icon: Anchor, title: "Ports & Aviation", description: "Infrastructure supporting national ports and airport development." },
    { icon: Users, title: "Manpower & Maintenance", description: "Skilled teams and ongoing maintenance support for infrastructure assets." },
    { icon: Truck, title: "Machinery & Vehicle Supply, Services & Rent", description: "Equipment and machinery supply, servicing and rental." },
    { icon: Hospital, title: "Medical", description: "Infrastructure and equipment supply for hospital and healthcare projects." },
    { icon: Recycle, title: "MEP, Fire & BMS Services", description: "Mechanical, electrical, plumbing, fire protection and building management systems." },
    { icon: MapPinHouse, title: "Real Estate", description: "Property and infrastructure development ventures." },
];

function SectorCard({ icon: Icon, title, description }: WorkSector) {
    return (
        <div className="rounded-xl border border-[#1B4C7E]/25 p-6 transition-shadow hover:shadow-md">
            <Icon className="h-6 w-6 text-[#1B4C7E]" strokeWidth={1.75} />
            <h3 className="mt-4 text-base font-semibold text-[#1B4C7E]">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
            <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm text-gray-600 hover:underline">
                View Related Projects
                <ExternalLink className="h-3.5 w-3.5" />
            </a>
        </div>
    );
}

export default function WorkSectors() {
    return (
        <section className="mx-auto max-w-7xl px-4 md:px-10 py-14">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900">Where We Work</h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-gray-600">
                INSCOA&apos;s diversified group structure allows us to operate across a wide range of infrastructure and industrial sectors, bringing engineering execution, supply capability and consultancy expertise to every space we work in, from water and power to healthcare, ports and agriculture.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {SECTORS.map((sector) => (
                    <SectorCard key={sector.title} {...sector} />
                ))}
            </div>
        </section>
    );
}