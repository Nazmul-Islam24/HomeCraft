import { useState } from 'react';
import { siteConfig, ProjectItem } from '../config/siteConfig';
import { MapPin, ArrowRight } from 'lucide-react';

interface FeaturedProjectsProps {
  onNavigate?: (path: string) => void;
  onOpenQuoteModal?: (service?: string) => void;
  limit?: number;
  showFilters?: boolean;
}

export function FeaturedProjects({
  onNavigate,
  limit,
  showFilters = true,
}: FeaturedProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Kitchens', 'Bathrooms', 'Remodeling', 'Painting', 'Flooring'];

  const filteredProjects = siteConfig.projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate('/projects');
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F7F4EE] text-[#142B3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6 reveal reveal-up">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#D96B32] mb-1.5">
              Featured Transformations
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#142B3A] tracking-tight">
              Recent Arlington & Northern Virginia Projects
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600">
              Explore how we have modernized classic colonial layouts, designed tranquil master suites, and brought new warmth to Northern Virginia homes.
            </p>
          </div>

          {onNavigate && (
            <button
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D96B32] hover:text-[#BF5A24] transition-colors cursor-pointer self-start md:self-end"
            >
              <span>Explore All Galleries →</span>
            </button>
          )}
        </div>

        {/* Filter Controls */}
        {showFilters && (
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar reveal reveal-up delay-75">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#142B3A] text-white shadow-xs'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project: ProjectItem, idx: number) => (
            <div
              key={project.id}
              onClick={handleCardClick}
              className={`group bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col reveal ${
                idx % 3 === 0 ? 'reveal-left' : idx % 3 === 2 ? 'reveal-right delay-150' : 'reveal-up delay-75'
              }`}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} Remodeling Project in ${project.location}, Northern VA`}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-[#142B3A]/90 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1 shadow-xs">
                  <MapPin className="w-3 h-3 text-[#D96B32]" />
                  <span>{project.location}</span>
                </div>

                {/* Category & Title */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-amber-300 font-semibold block mb-0.5">
                    {project.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-heading font-bold text-white line-clamp-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-neutral-600 line-clamp-2 mb-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-2.5 border-t border-neutral-100 text-xs">
                  <span className="text-neutral-500 font-medium">{project.year}</span>
                  <span className="text-[#D96B32] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
