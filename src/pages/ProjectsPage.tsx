import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/SEO';
import { QuoteBanner } from '../components/QuoteBanner';
import { UtensilsCrossed, Bath, Paintbrush, Layers, Home, Hammer } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (service?: string) => void;
}

interface ServiceGalleryGroup {
  id: string;
  name: string;
  iconName: string;
  images: { id: string; src: string; alt: string }[];
}

export function ProjectsPage({ onNavigate, onOpenQuoteModal }: ProjectsPageProps) {
  // Gallery collections for each service category with 12 high-fidelity images
  const serviceGalleries: ServiceGalleryGroup[] = [
    {
      id: 'kitchens',
      name: 'Kitchen Remodeling',
      iconName: 'UtensilsCrossed',
      images: [
        { id: 'k1', src: '/images/kitchen-white-island.webp', alt: 'Quartz waterfall island kitchen remodel' },
        { id: 'k2', src: '/images/kitchen-remodel.webp', alt: 'Navy shaker cabinetry and brass pendants' },
        { id: 'k3', src: '/images/hero-home-remodel.webp', alt: 'Open-concept craftsman kitchen' },
        { id: 'k4', src: '/images/kitchen-white-island.webp', alt: 'Luxury marble backsplash and range hood' },
        { id: 'k5', src: '/images/kitchen-remodel.webp', alt: 'Custom butler pantry with wine storage' },
        { id: 'k6', src: '/images/hero-home-remodel.webp', alt: 'Hardwood floor kitchen transition' },
        { id: 'k7', src: '/images/kitchen-white-island.webp', alt: 'Dovetailed soft-close cabinetry' },
        { id: 'k8', src: '/images/kitchen-remodel.webp', alt: 'Built-in panel-ready refrigeration' },
        { id: 'k9', src: '/images/kitchen-white-island.webp', alt: 'Farmhouse undermount porcelain sink' },
        { id: 'k10', src: '/images/kitchen-remodel.webp', alt: 'Contemporary chef cooking zone' },
        { id: 'k11', src: '/images/kitchen-white-island.webp', alt: 'Recessed under-cabinet task lighting' },
        { id: 'k12', src: '/images/kitchen-remodel.webp', alt: 'Custom spice rack and pull-out pantry' },
      ],
    },
    {
      id: 'bathrooms',
      name: 'Bathroom Remodeling',
      iconName: 'Bath',
      images: [
        { id: 'b1', src: '/images/bathroom-frameless-shower.webp', alt: 'Frameless glass walk-in shower' },
        { id: 'b2', src: '/images/bathroom-remodel.webp', alt: 'Freestanding soaking tub and double vanity' },
        { id: 'b3', src: '/images/bathroom-frameless-shower.webp', alt: 'Marble floor tile and floating vanity' },
        { id: 'b4', src: '/images/bathroom-remodel.webp', alt: 'Vertical subway tile and bronze fixtures' },
        { id: 'b5', src: '/images/bathroom-frameless-shower.webp', alt: 'Zero-threshold curbless shower entry' },
        { id: 'b6', src: '/images/bathroom-remodel.webp', alt: 'Architectural vanity mirrors with wall sconces' },
        { id: 'b7', src: '/images/bathroom-frameless-shower.webp', alt: 'Thermostatic shower column in matte black' },
        { id: 'b8', src: '/images/bathroom-remodel.webp', alt: 'Heated radiant floor travertine install' },
        { id: 'b9', src: '/images/bathroom-frameless-shower.webp', alt: 'Custom recessed shower shampoo niche' },
        { id: 'b10', src: '/images/bathroom-remodel.webp', alt: 'Powder room remodel with quartz vanity' },
        { id: 'b11', src: '/images/bathroom-frameless-shower.webp', alt: 'Hexagon mosaic shower pan flooring' },
        { id: 'b12', src: '/images/bathroom-remodel.webp', alt: 'Dual undermount sink master vanity' },
      ],
    },
    {
      id: 'painting',
      name: 'Interior & Exterior Painting',
      iconName: 'Paintbrush',
      images: [
        { id: 'p1', src: '/images/exterior-craftsman-paint.webp', alt: 'Exterior historic craftsman home painting' },
        { id: 'p2', src: '/images/interior-painting.webp', alt: 'Interior living room designer wall paint' },
        { id: 'p3', src: '/images/exterior-craftsman-paint.webp', alt: 'Architectural exterior trim and portico' },
        { id: 'p4', src: '/images/interior-painting.webp', alt: 'Crown molding and baseboard enamel' },
        { id: 'p5', src: '/images/exterior-craftsman-paint.webp', alt: 'Weather-resistant exterior masonry coating' },
        { id: 'p6', src: '/images/interior-painting.webp', alt: 'Level 5 drywall skim and paint' },
        { id: 'p7', src: '/images/exterior-craftsman-paint.webp', alt: 'Front door spray lacquer and trim' },
        { id: 'p8', src: '/images/interior-painting.webp', alt: 'Two-tone living room wall accents' },
        { id: 'p9', src: '/images/exterior-craftsman-paint.webp', alt: 'Soffit and fascia wood restoration' },
        { id: 'p10', src: '/images/interior-painting.webp', alt: 'Benjamin Moore satin woodwork finish' },
        { id: 'p11', src: '/images/exterior-craftsman-paint.webp', alt: 'Architectural siding and trim coating' },
        { id: 'p12', src: '/images/interior-painting.webp', alt: 'Stairwell high-ceiling painting' },
      ],
    },
    {
      id: 'flooring',
      name: 'Flooring Installation',
      iconName: 'Layers',
      images: [
        { id: 'f1', src: '/images/flooring-herringbone-hall.webp', alt: 'White oak herringbone parquet in hallway' },
        { id: 'f2', src: '/images/flooring-installation.webp', alt: 'Wide-plank white oak open concept flooring' },
        { id: 'f3', src: '/images/flooring-herringbone-hall.webp', alt: 'Custom hardwood stair treads and risers' },
        { id: 'f4', src: '/images/flooring-installation.webp', alt: 'Seamless room-to-room flush thresholds' },
        { id: 'f5', src: '/images/flooring-herringbone-hall.webp', alt: 'Bona Traffic HD matte poly finish' },
        { id: 'f6', src: '/images/flooring-installation.webp', alt: 'Subfloor squeak-proof installation' },
        { id: 'f7', src: '/images/flooring-herringbone-hall.webp', alt: 'Character grade white oak flooring' },
        { id: 'f8', src: '/images/flooring-installation.webp', alt: 'Rigid-core luxury vinyl plank basement' },
        { id: 'f9', src: '/images/flooring-herringbone-hall.webp', alt: 'Foyer entryway hardwood pattern' },
        { id: 'f10', src: '/images/flooring-installation.webp', alt: 'Wide plank natural satin finish' },
        { id: 'f11', src: '/images/flooring-herringbone-hall.webp', alt: 'Dining room border inlay hardwood' },
        { id: 'f12', src: '/images/flooring-installation.webp', alt: 'Refinished original colonial oak planks' },
      ],
    },
    {
      id: 'remodeling',
      name: 'Home Remodeling',
      iconName: 'Home',
      images: [
        { id: 'r1', src: '/images/hero-home-remodel.webp', alt: 'Whole house craftsman open concept' },
        { id: 'r2', src: '/images/carpentry-builtins-mantel.webp', alt: 'Living room fireplace and library built-ins' },
        { id: 'r3', src: '/images/kitchen-remodel.webp', alt: 'Load-bearing wall removal remodel' },
        { id: 'r4', src: '/images/bathroom-remodel.webp', alt: 'Master suite reconfiguration' },
        { id: 'r5', src: '/images/exterior-craftsman-paint.webp', alt: 'Colonial home exterior modernization' },
        { id: 'r6', src: '/images/hero-home-remodel.webp', alt: 'Coffered ceiling beam installation' },
        { id: 'r7', src: '/images/flooring-herringbone-hall.webp', alt: 'Main level continuous floor renovation' },
        { id: 'r8', src: '/images/carpentry-builtins-mantel.webp', alt: 'Custom architectural millwork' },
        { id: 'r9', src: '/images/kitchen-white-island.webp', alt: 'Turnkey architectural renovation' },
        { id: 'r10', src: '/images/hero-home-remodel.webp', alt: 'Arlington craftsman home handover' },
        { id: 'r11', src: '/images/carpentry-builtins-mantel.webp', alt: 'Open-concept family room conversion' },
        { id: 'r12', src: '/images/kitchen-remodel.webp', alt: 'Basement suite transformation' },
      ],
    },
    {
      id: 'carpentry',
      name: 'Custom Built-ins & Finish Work',
      iconName: 'Hammer',
      images: [
        { id: 'c1', src: '/images/carpentry-builtins-mantel.webp', alt: 'Floor-to-ceiling library bookcases' },
        { id: 'c2', src: '/images/hero-home-remodel.webp', alt: 'Fireplace mantel and coffered beams' },
        { id: 'c3', src: '/images/interior-painting.webp', alt: 'Wainscoting and solid core doors' },
        { id: 'c4', src: '/images/carpentry-builtins-mantel.webp', alt: 'Custom crown molding scribed to walls' },
        { id: 'c5', src: '/images/hero-home-remodel.webp', alt: 'Mudroom storage cubbies and bench' },
        { id: 'c6', src: '/images/carpentry-builtins-mantel.webp', alt: 'Integrated media unit cabinetry' },
        { id: 'c7', src: '/images/flooring-herringbone-hall.webp', alt: 'Architectural baluster and handrail carpentry' },
        { id: 'c8', src: '/images/interior-painting.webp', alt: 'Board and batten dining room wall' },
        { id: 'c9', src: '/images/carpentry-builtins-mantel.webp', alt: 'Hidden storage cabinet doors' },
        { id: 'c10', src: '/images/hero-home-remodel.webp', alt: 'Master finish carpenter detailed woodwork' },
        { id: 'c11', src: '/images/carpentry-builtins-mantel.webp', alt: 'Window seat bench with storage drawers' },
        { id: 'c12', src: '/images/interior-painting.webp', alt: 'Custom coffered ceiling beam grid' },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('all');

  const renderIcon = (name: string) => {
    switch (name) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-4 h-4 text-[#D96B32]" />;
      case 'Bath':
        return <Bath className="w-4 h-4 text-[#D96B32]" />;
      case 'Paintbrush':
        return <Paintbrush className="w-4 h-4 text-[#D96B32]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#D96B32]" />;
      case 'Home':
        return <Home className="w-4 h-4 text-[#D96B32]" />;
      case 'Hammer':
      default:
        return <Hammer className="w-4 h-4 text-[#D96B32]" />;
    }
  };

  const filteredGalleries =
    activeTab === 'all'
      ? serviceGalleries
      : serviceGalleries.filter((g) => g.id === activeTab);

  return (
    <>
      <SEO
        title="Project Gallery & Recent Craftsmanship"
        description="Browse our portfolio of completed residential renovations in Arlington, VA. Visual gallery of custom kitchens, master bathrooms, painting, flooring, and whole-house remodeling."
        canonicalPath="/projects"
        keywords={[
          'Home Remodeling Gallery Arlington VA',
          'Kitchen Remodel Photos Arlington',
          'Bathroom Renovation Showcase Northern VA',
          'Hardwood Flooring Portfolio Arlington',
        ]}
      />

      <main className="py-10 sm:py-14 bg-[#F7F4EE] text-[#142B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-xs text-neutral-500">
            <ol className="flex items-center gap-1.5">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#D96B32] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>/</li>
              <li className="font-semibold text-neutral-800" aria-current="page">
                Projects
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D96B32]">
              Visual Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#142B3A] tracking-tight mt-1">
              Our Completed Renovation Projects
            </h1>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Explore curated project captures across each specialty service. Pure visual proof of our craftsmanship across Arlington, Alexandria, and McLean homes.
            </p>
          </div>

          {/* Service Category Tabs Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-neutral-200/80 no-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#142B3A] text-white shadow-xs'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              All Projects
            </button>

            {serviceGalleries.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  activeTab === group.id
                    ? 'bg-[#142B3A] text-white shadow-xs'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                <span>{group.name}</span>
              </button>
            ))}
          </div>

          {/* Galleries Section by Section */}
          <div className="space-y-14 sm:space-y-16">
            {filteredGalleries.map((group) => (
              <section key={group.id} className="space-y-4 sm:space-y-6 reveal reveal-up">
                {/* Section Title with Icon */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shadow-2xs">
                      {renderIcon(group.iconName)}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#142B3A]">
                      {group.name}
                    </h2>
                  </div>
                </div>

                {/* 12 Images Grid:
                    - Mobile: 2 images per row (grid-cols-2)
                    - Tablet: 3 images per row (md:grid-cols-3)
                    - Desktop: 4 images per row (lg:grid-cols-4)
                */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                  {group.images.map((img, idx) => (
                    <div
                      key={img.id}
                      className={`group relative aspect-4/3 rounded-xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-2xs transition-all duration-300 hover:shadow-md reveal ${
                        idx % 4 < 2 ? 'reveal-left' : 'reveal-right'
                      } ${idx % 2 === 1 ? 'delay-75' : ''}`}
                    >
                      <img
                        src={img.src}
                        alt={`${img.alt} - Virginia HomeCraft ${group.name} Arlington VA`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA Banner */}
          <QuoteBanner onOpenQuoteModal={() => onOpenQuoteModal()} />
        </div>
      </main>
    </>
  );
}
