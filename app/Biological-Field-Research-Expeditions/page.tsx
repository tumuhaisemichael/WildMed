import React from 'react';
import Link from 'next/link';

export default function BiologicalFieldResearchExpeditionsPage() {
  return (
    <div className="bg-white">
      
  

  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 parallax-bg bg-cover bg-center" style={{"backgroundImage":"url('assets/15 day trip/15day9.jpg')"}}>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-900/75 to-emerald-900/40"></div>

    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div className="text-white">
          <span className="inline-flex items-center px-6 py-4 rounded-full bg-green-600/20 border border-green-300/30 text-green-200 text-3xl sm:text-4xl font-bold tracking-[0.04em] leading-tight">
            Tailored Science Driven Field Expeditions
          </span>
          <h1 className="mt-6 text-2xl sm:text-3xl font-bold leading-tight">
            Scientific field expeditions for
            <span className="block text-green-300">research, training, and conservation</span>
          </h1>
          <p className="mt-6 text-lg text-slate-100 max-w-3xl leading-relaxed">
            Structured scientific expeditions designed to study living organisms and their interaction with the
            environment in natural settings. These expeditions bring together researchers, students,
            conservationists, and field professionals for hands-on investigations in wildlife biology, ecology,
            veterinary and medical sciences, and One Health.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#activities" className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              View Activities
            </a>
            <a href="#experiential-tourism" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Explore Added Experiences
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-green-200 mb-2">Hands-on fieldwork</p>
            <p className="text-slate-100">Participants engage in biodiversity surveys, wildlife monitoring, ecological
              assessments, disease surveillance, habitat evaluation, and scientific data collection.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-white">
              <div className="text-3xl font-bold text-green-300">10</div>
              <p className="mt-2 text-sm text-slate-100">Key activity areas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-white">
              <div className="text-3xl font-bold text-green-300">One</div>
              <p className="mt-2 text-sm text-slate-100">Health perspective</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
        <div>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            Overview
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Field research that connects science and the natural world
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-gray-600">
            <p>
              Modern biological field research may also use advanced tools like GPS and satellite tracking, camera
              trapping, molecular diagnostics, and ecological sampling to understand how ecosystems function and how
              wildlife health changes over time.
            </p>
            <p>
              In East Africa, these expeditions offer unique opportunities to study savannahs, forests, wetlands, and
              mountain habitats while contributing valuable scientific data for conservation planning, wildlife
              management, and sustainable use of natural resources.
            </p>
            <p>
              Biological field expeditions are also a strong training platform for students and professionals, helping
              them build hands-on skills, ask scientific questions, and better understand the importance of protecting
              species and habitats.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Expedition themes</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                <i className="ri-leaf-line text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Ecology and biodiversity</h4>
                <p className="text-gray-600 text-sm">Study ecosystem dynamics, habitats, and species richness in natural
                  settings.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <i className="ri-heart-pulse-line text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Wildlife health and disease</h4>
                <p className="text-gray-600 text-sm">Link field observations with disease surveillance, diagnostics, and
                  One Health thinking.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <i className="ri-map-2-line text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Conservation planning</h4>
                <p className="text-gray-600 text-sm">Generate practical information that supports wildlife management and
                  habitat protection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="activities" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-gray-900">Activities for Tailored Science Driven Field Expeditions</h2>
        <p className="mt-4 text-lg text-gray-600">
          Activities may include one or several practical sessions depending on the expedition design, location, and
          season.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-5">
            <i className="ri-leaf-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Biodiversity Surveys</h3>
          <p className="text-gray-600">Conduct field surveys to identify and document plant, bird, and animal species using
            standard ecological sampling methods.</p>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
            <i className="ri-footprint-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Wildlife Monitoring and Tracking</h3>
          <p className="text-gray-600">Participate in monitoring wildlife populations through direct observation, camera
            trapping, GPS tracking, and ecological field techniques.</p>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
            <i className="ri-earth-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Habitat and Ecosystem Assessments</h3>
          <p className="text-gray-600">Study habitat characteristics, vegetation types, and ecological interactions to
            understand ecosystem dynamics and biodiversity conservation.</p>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5">
            <i className="ri-file-list-3-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Field Data Collection and Analysis</h3>
          <p className="text-gray-600">Learn practical methods for collecting, recording, and analysing biological data such
            as species abundance, behaviour, and distribution.</p>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center mb-5">
            <i className="ri-microscope-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Disease Surveillance</h3>
          <p className="text-gray-600">Assist in monitoring wildlife health through observation, sample collection, and
            basic field diagnostics for zoonotic and emerging diseases.</p>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
            <i className="ri-test-tube-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Ecological Sampling Techniques</h3>
          <p className="text-gray-600">Practise transect walks, quadrat sampling, and environmental sampling methods for
            ecological research.</p>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-5">
            <i className="ri-book-open-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Species Identification Training</h3>
          <p className="text-gray-600">Develop skills in identifying wildlife species, tracks, signs, and plant species
            with guidance from experienced field scientists.</p>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-5">
            <i className="ri-seedling-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Conservation Research Projects</h3>
          <p className="text-gray-600">Participate in short field research projects focused on wildlife conservation,
            ecosystem management, and biodiversity protection.</p>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-gray-100 text-gray-700 flex items-center justify-center mb-5">
            <i className="ri-camera-lens-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Scientific Documentation</h3>
          <p className="text-gray-600">Record field observations through research notes, photography, mapping, and
            preparation of basic field reports.</p>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm md:col-span-2 xl:col-span-3 hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center mb-5">
            <i className="ri-group-line text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Community and Conservation Engagement</h3>
          <p className="text-gray-600">Interact with local communities and conservation practitioners to understand
            human-wildlife interactions and sustainable resource management.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img src="img/Science driven field work/Field work.jpg" alt="Biological research tools and fieldwork" className="rounded-[2rem] shadow-xl object-cover w-full h-full min-h-[400px]" />
        </div>
        <div>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
            Methods and Tools
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Modern techniques in the field</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Biological field research increasingly combines classical ecological observation with modern research tools
            to improve accuracy, strengthen field decisions, and generate useful conservation data.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Tracking technology</h3>
              <p className="text-sm text-gray-600">GPS and satellite-based systems for movement and distribution data.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Camera trapping</h3>
              <p className="text-sm text-gray-600">Non-invasive wildlife monitoring for elusive and nocturnal species.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Molecular diagnostics</h3>
              <p className="text-sm text-gray-600">Field-linked sampling that supports wildlife health and disease studies.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Ecological sampling</h3>
              <p className="text-sm text-gray-600">Transects, quadrats, and environmental sampling for biodiversity data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-20 bg-slate-950 text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-bold">Why East Africa works so well for field research</h2>
        <p className="mt-4 text-lg text-slate-300">
          Diverse ecosystems create unusual opportunities for comparative field learning, conservation science, and
          applied wildlife research.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-300">Savannahs</h3>
          <p className="text-slate-300 text-sm">Open systems ideal for visibility, movement studies, and large-mammal
            ecology.</p>
        </div>
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-300">Forests</h3>
          <p className="text-slate-300 text-sm">Rich biodiversity, primate studies, and complex habitat interactions.</p>
        </div>
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-300">Wetlands</h3>
          <p className="text-slate-300 text-sm">Important for birds, aquatic ecology, ecosystem health, and resource-use
            studies.</p>
        </div>
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-300">Mountain Habitats</h3>
          <p className="text-slate-300 text-sm">Useful for altitudinal comparisons, endemic species, and habitat
            resilience.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="experiential-tourism" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiential Tourism in Uganda and East Africa</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Unique wildlife encounters through technology-assisted
          tracking and conservation-linked travel experiences.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="program-card bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-100">
          <div className="h-56 bg-cover bg-center" style={{"backgroundImage":"url('img/home/IMG-20150902-WA0011.jpg')"}}></div>
          <div className="p-7">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Photography Expeditions</h3>
            <p className="text-gray-600 mb-5">Detour inside national parks for unparalleled wildlife photography
              opportunities. Our experts help capture stunning images while ensuring minimal disturbance to animals.</p>
            <div className="flex">
              <button className="view-details w-full rounded-xl bg-blue-50 px-4 py-3 text-blue-700 font-semibold hover:bg-blue-100 transition-colors" data-target="photography-expeditions">Learn More</button>
            </div>
          </div>
        </div>

        <div className="program-card bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-100">
          <div className="h-56 bg-cover bg-center" style={{"backgroundImage":"url('img/Vet science/Research_slide6.jpg')"}}>
          </div>
          <div className="p-7">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Research Opportunities</h3>
            <p className="text-gray-600 mb-5">Participate in cutting-edge wildlife research projects, contribute to field
              data collection, and support conservation medicine and biodiversity science.</p>
            <div className="flex">
              <button className="view-details w-full rounded-xl bg-blue-50 px-4 py-3 text-blue-700 font-semibold hover:bg-blue-100 transition-colors" data-target="research-opportunities">Learn More</button>
            </div>
          </div>
        </div>

        <div className="program-card bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-100">
          <div className="h-56 bg-cover bg-center" style={{"backgroundImage":"url('img/Vet science/Research_slide7.jpg')"}}>
          </div>
          <div className="p-7">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Community Education</h3>
            <p className="text-gray-600 mb-5">Deliver educational programs to local communities about wildlife
              conservation, animal health, and sustainable coexistence practices.</p>
            <div className="flex">
              <button className="view-details w-full rounded-xl bg-blue-50 px-4 py-3 text-blue-700 font-semibold hover:bg-blue-100 transition-colors" data-target="community-education">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 italic">Simple downloadable summaries are included for quick sharing and future
          expansion.</p>
      </div>
    </div>

    <div id="experienceModal" className="fixed inset-0 bg-black/80 hidden items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button id="closeExperienceModal" className="absolute top-5 right-6 text-4xl text-gray-500 hover:text-gray-700 leading-none">×</button>
        <div id="experienceModalContent" className="p-8 pt-16"></div>
      </div>
    </div>
  </section>

  <section className="py-20 bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-white/80 text-slate-700 font-semibold text-sm tracking-wide shadow">
          Field Archive
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Science Driven Field Work Gallery</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">Tap any frame to view the image at full display size</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[210px] md:auto-rows-[230px]">
        <button type="button" className="science-gallery-item science-gallery-frame lg:col-span-2 lg:row-span-2 rotate-[-1.5deg]" data-index="0" data-src="img/Science driven field work/20150611_180903.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/20150611_180903.jpg" alt="Science driven field work image 1" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[1.2deg]" data-index="1" data-src="img/Science driven field work/20150611_180914.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/20150611_180914.jpg" alt="Science driven field work image 2" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[-0.8deg]" data-index="2" data-src="img/Science driven field work/20150611_183602.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/20150611_183602.jpg" alt="Science driven field work image 3" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame lg:row-span-2 rotate-[1.4deg]" data-index="3" data-src="img/Science driven field work/20160726_113328.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/20160726_113328.jpg" alt="Science driven field work image 4" />
        </button>
        {/*  <button type="button" className="science-gallery-item science-gallery-frame rotate-[-1.1deg]" data-index="4" data-src="img/Science driven field work/20160726_114220.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/20160726_114220.jpg" alt="Science driven field work image 5">
        </button>  */}
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[0.9deg]" data-index="5" data-src="img/Science driven field work/20160726_114450.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/20160726_114450.jpg" alt="Science driven field work image 6" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[-1.4deg]" data-index="6" data-src="img/Science driven field work/Field work.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/Field work.jpg" alt="Science driven field work image 7" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[1.1deg]" data-index="7" data-src="img/Science driven field work/IMG_6565.JPG" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/IMG_6565.JPG" alt="Science driven field work image 8" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame lg:col-span-2 rotate-[-0.9deg]" data-index="8" data-src="img/Science driven field work/LIvestock_Wildlife Interaction1.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/LIvestock_Wildlife Interaction1.jpg" alt="Science driven field work image 9" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[1.5deg]" data-index="9" data-src="img/Science driven field work/Livestock_wildlife interaction2.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/Livestock_wildlife interaction2.jpg" alt="Science driven field work image 10" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[-1deg]" data-index="10" data-src="img/Science driven field work/Researc.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/Researc.jpg" alt="Science driven field work image 11" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[0.7deg]" data-index="11" data-src="img/Science driven field work/Rodent cap 2.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/Rodent cap 2.jpg" alt="Science driven field work image 12" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[-1.2deg]" data-index="12" data-src="img/Science driven field work/Rodent capture.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/Rodent capture.jpg" alt="Science driven field work image 13" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[1.3deg]" data-index="13" data-src="img/Science driven field work/biometrics.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/biometrics.jpg" alt="Science driven field work image 14" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[-0.6deg]" data-index="14" data-src="img/Science driven field work/capture1.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/capture1.jpg" alt="Science driven field work image 15" />
        </button>
        <button type="button" className="science-gallery-item science-gallery-frame rotate-[1deg]" data-index="15" data-src="img/Science driven field work/slide staining.jpg" data-caption="Tailored Science Driven Field Expedition">
          <img src="img/Science driven field work/slide staining.jpg" alt="Science driven field work image 16" />
        </button>
      </div>
    </div>
  </section>

  <div id="science-lightbox" className="fixed inset-0 z-[120] hidden items-center justify-center bg-black/90 p-4">
    <button id="science-lightbox-close" type="button" className="absolute top-4 right-4 md:top-6 md:right-8 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white text-3xl leading-none">×</button>
    <button id="science-lightbox-prev" type="button" className="absolute left-3 md:left-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl leading-none">❮</button>
    <img id="science-lightbox-image" src="" alt="Full display science field image" className="max-w-[96vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" />
    <button id="science-lightbox-next" type="button" className="absolute right-3 md:right-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl leading-none">❯</button>
    <p id="science-lightbox-caption" className="absolute bottom-4 md:bottom-6 text-white text-sm md:text-base bg-black/40 px-3 py-1 rounded-full"></p>
  </div>

  <section id="start-research-expedition" className="py-20 bg-gray-50">
    <div className="max-w-5xl mx-auto px-6">
      <div className="rounded-[2rem] bg-gradient-to-r from-blue-900 to-green-700 p-10 md:p-14 text-white shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl font-bold">Interested in joining Tailored Science Driven Field Expeditions?</h2>
            <p className="mt-5 text-blue-50 leading-relaxed">
              This programme is designed for participants who want structured scientific exposure, practical field
              skills, and a stronger understanding of biodiversity, wildlife health, and ecosystem conservation.
            </p>
            <div className="mt-8 space-y-4 text-blue-50">
              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-green-300"></i>
                <span>wildmeduganda@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-green-300"></i>
                <span>+256 740 205146 / +256 777 370494</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 border border-white/10 p-8">
            <h3 className="text-2xl font-semibold mb-4">What participants gain</h3>
            <ul className="space-y-3 text-blue-50">
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line mt-1 text-green-300"></i>
                <span>Hands-on ecological and wildlife field methods.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line mt-1 text-green-300"></i>
                <span>Experience with research documentation and applied conservation science.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line mt-1 text-green-300"></i>
                <span>Greater understanding of biodiversity protection across East African ecosystems.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  

  

  








    </div>
  );
}
