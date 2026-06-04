
const packages = [
    {
        title: "14-Day Luxury Safari",
        desc: "Our most exclusive 14-day luxury safari across Uganda & Rwanda.",
        link: "Ugandan-14-Days.html",
        image: "img/Destination/UG/Ishasha-Wilderness-Camp.jpg",
        tag: "New Release"
    },
    {
        title: "3-Day Gorilla Trekking",
        desc: "Breathtaking encounter with Mountain Gorillas in Bwindi Forest.",
        link: "Ugandan-3Days.html",
        image: "img/Destination/UG/bwindi.jpeg",
        tag: "Best Seller"
    },
    {
        title: "5-Day Best of Kisoro",
        desc: "Explore the hidden gems of Kisoro and Mgahinga National Park.",
        link: "Ugandan-5-Days.html",
        image: "img/Destination/UG/volcanoes-safaris-bwindi-lodge-uganda-jungle-gorilla-lodge.jpg",
        tag: "Trending"
    },
    {
        title: "8-Day Chimps & Gorillas",
        desc: "The ultimate primate experience: tracking both chimps and gorillas.",
        link: "Ugandan-8days.html",
        image: "img/Destination/UG/Chimpanzee-Tracking-in-Kibale-National-Park.jpg",
        tag: "Top Rated"
    }
];

let spotlightCurrentIndex = 0;

function createSpotlight() {
    const spotlight = document.createElement('div');
    spotlight.id = 'package-spotlight';
    spotlight.className = 'fixed bottom-6 right-6 z-[60] max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 opacity-0 transform translate-y-full transition-all duration-500 hidden md:block spotlight-active';

    // Inject required styles if they don't exist
    if (!document.getElementById('spotlight-styles')) {
        const style = document.createElement('style');
        style.id = 'spotlight-styles';
        style.innerHTML = `
      @keyframes slideInUp {
        from { transform: translateY(100%) translateX(0); opacity: 0; }
        to { transform: translateY(0) translateX(0); opacity: 1; }
      }
      .spotlight-active {
        animation: slideInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      }
      .spotlight-content {
        transition: opacity 0.5s ease;
      }
    `;
        document.head.appendChild(style);
    }

    spotlight.innerHTML = `
    <div id="spotlight-inner" class="flex items-start space-x-4 spotlight-content" style="transition: opacity 0.5s ease;">
      <!-- Content Injected Here -->
    </div>
    <button onclick="this.parentElement.remove()" class="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
      <i class="ri-close-line text-lg"></i>
    </button>
  `;
    document.body.appendChild(spotlight);
    spotlight.classList.remove('hidden');
    updateSpotlightContent();
}

function updateSpotlightContent() {
    const inner = document.getElementById('spotlight-inner');
    if (!inner) return;

    const pkg = packages[spotlightCurrentIndex];

    inner.style.opacity = '0';

    setTimeout(() => {
        inner.innerHTML = `
      <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-full object-cover">
      </div>
      <div class="flex-1 pr-6">
        <span class="inline-block px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-700 rounded uppercase tracking-wider mb-1">${pkg.tag}</span>
        <h4 class="text-sm font-bold text-gray-900 mb-1">${pkg.title}</h4>
        <p class="text-xs text-gray-600 mb-2">${pkg.desc}</p>
        <a href="${pkg.link}" class="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center">
          View Details <i class="ri-arrow-right-line ml-1"></i>
        </a>
      </div>
    `;
        inner.style.opacity = '1';
        spotlightCurrentIndex = (spotlightCurrentIndex + 1) % packages.length;
    }, 500);
}

window.addEventListener('load', () => {
    setTimeout(() => {
        createSpotlight();
        setInterval(() => {
            if (document.getElementById('package-spotlight')) {
                updateSpotlightContent();
            }
        }, 10000);
    }, 3000);
});
