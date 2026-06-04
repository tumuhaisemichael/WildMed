export type DestinationDetail = {
  title: string;
  image: string;
  description: string;
  highlights: string[];
  details: Record<string, string>;
  price: string;
  rating: string;
  programs?: string;
  admission?: string;
  climate?: string;
  travelTips?: string;
};

export type DestinationDetails = Record<string, DestinationDetail>;

export const kenyaDetailsData: DestinationDetails = {
  'maasai-mara': {
    title: 'Maasai Mara National Reserve',
    image: 'img/Destination/Kenya/maasi.png',
    description: 'The Maasai Mara National Reserve is one of Africa\'s greatest wildlife reserves. Bordering Tanzania, the Mara is the northern extension of the Serengeti and forms a wildlife corridor between the two countries. It is named after the Maasai people, the ancestral inhabitants of the area.',
    highlights: [
      'Witness the spectacular Great Migration (July-October)',
      'Exceptional Big Five game viewing throughout the year',
      'Authentic Maasai cultural experiences and village visits',
      'Breathtaking hot air balloon safaris at sunrise',
      'Over 450 bird species, including 53 birds of prey'
    ],
    details: {
      Area: '1,510 km² (583 square miles)',
      'Best Time to Visit': 'July to October for migration, year-round for wildlife',
      'Key Wildlife': 'Lions, Leopards, Elephants, Rhinos, Buffaloes, Cheetahs, Hyenas',
      Activities: 'Game drives, Cultural visits, Balloon safaris, Bird watching',
      Accommodation: 'Luxury lodges, Tented camps, Budget options available',
      'Conservation Status': 'UNESCO World Heritage Site (as part of Serengeti ecosystem)'
    },
    price: 'From $2,350* for 3 nights (all inclusive)',
    rating: '4.9',
    climate: 'Warm days (25-30°C) and cool nights, with two rainy seasons',
    travelTips: 'Book early for migration season, bring binoculars and cameras with zoom lenses'
  },
  amboseli: {
    title: 'Amboseli National Park',
    image: 'img/Destination/Kenya/Amboseli.png',
    description: 'Amboseli National Park is famous for its spectacular views of Mount Kilimanjaro, Africa\'s highest peak, and its large herds of African elephants. The park\'s ecosystem is typical of the open savannah and provides habitat for numerous wildlife species.',
    highlights: [
      'Iconic views of Mount Kilimanjaro, especially at sunrise and sunset',
      'Large elephant herds with some of the largest tusks in Africa',
      'Observation Hill for panoramic views of the entire park',
      'Five different habitats ranging from dried-up lake bed to wetlands',
      'Maasai culture experiences with authentic village visits'
    ],
    details: {
      Area: '392 km² (151 square miles)',
      'Best Time to Visit': 'June to October and January to February',
      'Key Wildlife': 'Elephants, Lions, Cheetahs, Hyenas, Giraffes, Zebras, Wildebeest',
      Activities: 'Game drives, Nature walks, Cultural visits, Photography',
      Accommodation: 'Lodges and campsites inside and outside the park',
      'Conservation Status': 'UNESCO Biosphere Reserve'
    },
    price: 'From $1,950* for 3 nights (all inclusive)',
    rating: '4.7',
    climate: 'Dry and dusty, with hot days and cool nights',
    travelTips: 'Visit Observation Hill for best photography opportunities, early morning game drives recommended'
  },
  tsavo: {
    title: 'Tsavo National Parks',
    image: 'img/Destination/Kenya/tsavo.png',
    description: 'Tsavo National Park is Kenya\'s largest protected area, divided into Tsavo East and Tsavo West. Together they form one of the world\'s largest game sanctuaries. The park is famous for its "red" elephants that dust-bathe in the red volcanic soil.',
    highlights: [
      'Famous "red elephants" that dust-bathe in volcanic soil',
      'Mzima Springs with underwater viewing chamber for hippos and fish',
      'Shetani Lava Flows and Chaimu Crater for geological interest',
      'Diverse landscapes from arid plains to mountainous terrain',
      'Rich birdlife with over 500 recorded species'
    ],
    details: {
      Area: '22,812 km² (8,808 square miles) combined',
      'Best Time to Visit': 'June to October and January to March',
      'Key Wildlife': 'Red Elephants, Lions, Leopards, Rhinos, Hippos, Crocodiles',
      Activities: 'Game drives, Walking safaris, Photography, Cave exploration',
      Accommodation: 'Luxury lodges, Tented camps, Self-catering options',
      'Conservation Status': 'Important Bird Area (IBA)'
    },
    price: 'From $1,750* for 3 nights (all inclusive)',
    rating: '4.6',
    climate: 'Hot and dry, especially in Tsavo East',
    travelTips: 'Visit both Tsavo East and West for complete experience, carry plenty of water'
  },
  samburu: {
    title: 'Samburu National Reserve',
    image: 'img/Destination/Kenya/Samburu.png',
    description: 'Samburu National Reserve is located in northern Kenya and is renowned for its rare northern specialist species known as the "Samburu Special Five". The Ewaso Ng\'iro river flows through the reserve, providing a lifeline for wildlife in this arid region.',
    highlights: [
      'The "Samburu Special Five": Grevy\'s zebra, Somali ostrich, reticulated giraffe, gerenuk, and beisa oryx',
      'Ewaso Ng\'iro River with crocodiles and hippos',
      'Authentic Samburu cultural experiences',
      'Excellent birdwatching with over 450 species recorded',
      'Beautiful rugged landscapes with dramatic backgrounds'
    ],
    details: {
      Area: '165 km² (64 square miles)',
      'Best Time to Visit': 'June to October and December to March',
      'Key Wildlife': 'Reticulated Giraffe, Grevy\'s Zebra, Beisa Oryx, Gerenuk, Elephants',
      Activities: 'Game drives, Cultural visits, River walks, Bird watching',
      Accommodation: 'Lodges and tented camps along the river',
      'Conservation Status': 'Part of larger ecosystem with Buffalo Springs and Shaba reserves'
    },
    price: 'From $2,050* for 3 nights (all inclusive)',
    rating: '4.8',
    climate: 'Hot and dry, with relief along the river',
    travelTips: 'Look for wildlife along the river, visit local Samburu villages for cultural experience'
  },
  uon: {
    title: 'University of Nairobi',
    image: 'img/Destination/Kenya/UON.jpeg',
    description: 'The University of Nairobi is a world-class university committed to scholarly excellence. As the oldest university in Kenya, it has a rich history and has produced many of the country\'s leaders in various fields. The university offers a wide range of undergraduate and postgraduate programs.',
    highlights: [
      'Established in 1956 as Royal Technical College, became university in 1970',
      'Over 70 academic programs across various disciplines',
      'Leading research institution with numerous publications',
      'Multiple campuses located in different parts of Nairobi',
      'Strong international partnerships with universities worldwide'
    ],
    details: {
      Type: 'Public Research University',
      'Student Population': 'Over 84,000 students',
      Faculties: '35 faculties and institutes',
      Ranking: 'Top university in Kenya, ranked among best in Africa',
      'Notable Alumni': 'Nobel laureates, presidents, business leaders',
      'Research Focus': 'Agriculture, Health Sciences, Technology, Social Sciences'
    },
    price: 'Public University - varies by program',
    rating: '4.8',
    programs: 'Medicine, Law, Engineering, Business, Arts & Sciences',
    admission: 'Highly competitive, based on Kenya Certificate of Secondary Education results'
  },
  kenyatta: {
    title: 'Kenyatta University',
    image: 'img/Destination/Kenya/kenyatta.jpeg',
    description: 'Kenyatta University is a dynamic institution of higher learning located on a beautiful 1,000-acre campus. The university is named after Kenya\'s first president, Jomo Kenyatta, and has grown to become one of the most respected universities in East Africa.',
    highlights: [
      'Established in 1985 as a full-fledged university',
      'Modern facilities including state-of-the-art library and laboratories',
      'Strong focus on research and innovation',
      'Industry partnerships for practical student experience',
      'Innovation hubs supporting entrepreneurship'
    ],
    details: {
      Type: 'Public University',
      'Student Population': 'Over 70,000 students',
      Schools: '19 schools offering diverse programs',
      Programs: 'Undergraduate, Postgraduate, Diploma and Certificate courses',
      Campuses: 'Main campus in Kahawa plus 7 satellite campuses',
      'Special Programs': 'Evening and weekend classes for working professionals'
    },
    price: 'Public University - varies by program',
    rating: '4.6',
    programs: 'Education, Business, Environmental Studies, Health Sciences',
    admission: 'Based on Kenya Certificate of Secondary Education results, with minimum entry requirements'
  },
  strathmore: {
    title: 'Strathmore University',
    image: 'img/Destination/Kenya/strathmore.jpeg',
    description: 'Strathmore University is a leading private university in Kenya known for its excellence in business, information technology, and management education. Founded in 1961, the university maintains strong industry connections and emphasizes ethical leadership.',
    highlights: [
      'Established in 1961 as an Advanced Level College',
      'ACCA gold-approved learning provider',
      'Strong technology innovation and business incubation',
      'Industry connections for internships and employment',
      'International accreditation and partnerships'
    ],
    details: {
      Type: 'Private University',
      'Student Population': 'Over 5,000 students',
      Schools: '6 schools specializing in business and technology',
      Specialization: 'Business, IT, Management, Law, Hospitality',
      Accreditations: 'Accredited by Commission for University Education',
      'Ethical Focus': 'Emphasis on values-based education'
    },
    price: 'Private University - higher than public institutions',
    rating: '4.9',
    programs: 'Business Administration, Information Technology, Law, International Studies',
    admission: 'Based on Kenya Certificate of Secondary Education results, plus entrance exams for some programs'
  },
  moi: {
    title: 'Moi University',
    image: 'img/Destination/Kenya/moi.jpeg',
    description: 'Moi University is a public university located in Eldoret, Kenya. It is known for its strong programs in medicine, engineering, and sciences. The university has a main campus in Eldoret and several satellite campuses across the country.',
    highlights: [
      'Established in 1984 as Kenya\'s second public university',
      'Medical school excellence with teaching hospital',
      'Strong engineering and technology programs',
      'Research focus with multiple research centers',
      'Multiple campuses serving different regions'
    ],
    details: {
      Type: 'Public University',
      'Student Population': 'Over 45,000 students',
      Schools: '18 schools covering various disciplines',
      Specialization: 'Medicine, Engineering, Sciences, Education, Arts',
      'Teaching Hospital': 'Moi Teaching and Referral Hospital for medical training',
      'Research Centers': 'Focus on agriculture, health, and technology research'
    },
    price: 'Public University - varies by program',
    rating: '4.5',
    programs: 'Medicine, Engineering, Sciences, Education, Economics',
    admission: 'Based on Kenya Certificate of Secondary Education results, with program-specific requirements'
  }
};

export const ugandaDetailsData: DestinationDetails = {
  bwindi: {
    title: 'Bwindi Impenetrable National Park',
    image: 'img/Destination/UG/bwindi.jpeg',
    rating: '4.9',
    price: 'From $1,800',
    description: 'Bwindi is home to nearly half of the world\'s mountain gorillas, offering unforgettable trekking through ancient rainforest.',
    highlights: [
      'World-class mountain gorilla trekking',
      'Dense rainforest and biodiversity',
      'Community cultural encounters',
      'UNESCO World Heritage Site'
    ],
    details: {
      Location: 'Southwestern Uganda',
      'Best Time': 'June-August and December-February',
      'Top Activities': 'Gorilla trekking, forest walks, birding',
      'Travel Time': '8-10 hours by road from Kampala or 1-hour flight'
    },
    climate: 'Cool, misty rainforest climate with occasional rain showers',
    travelTips: 'Bring sturdy hiking boots, rain jacket, and gloves for steep trails'
  },
  'queen-elizabeth': {
    title: 'Queen Elizabeth National Park',
    image: 'img/Destination/UG/Queen.jpeg',
    rating: '4.7',
    price: 'From $1,500',
    description: 'Uganda\'s most popular savanna park, known for tree-climbing lions, crater lakes, and boat safaris on the Kazinga Channel.',
    highlights: [
      'Tree-climbing lions in Ishasha',
      'Boat cruise on Kazinga Channel',
      'Rich birdlife and diverse habitats',
      'Excellent photography opportunities'
    ],
    details: {
      Location: 'Western Uganda',
      'Best Time': 'June-September and December-February',
      'Top Activities': 'Game drives, boat safaris, chimp tracking in Kyambura',
      'Travel Time': '5-6 hours from Kampala'
    },
    climate: 'Warm days with cooler evenings; occasional showers in wet months',
    travelTips: 'Pack binoculars and plan an early morning game drive'
  },
  'murchison-falls': {
    title: 'Murchison Falls National Park',
    image: 'img/Destination/UG/falls.jpeg',
    rating: '4.8',
    price: 'From $1,650',
    description: 'The Nile River forces through a narrow gorge creating a dramatic waterfall, with abundant wildlife along the riverbanks.',
    highlights: [
      'Murchison Falls viewpoint',
      'Boat safari on the Nile',
      'Elephants, giraffes, and lions',
      'Rhino tracking nearby at Ziwa Sanctuary'
    ],
    details: {
      Location: 'Northwestern Uganda',
      'Best Time': 'December-February and June-September',
      'Top Activities': 'Game drives, boat cruise, hiking to the falls',
      'Travel Time': '5-6 hours from Kampala'
    },
    climate: 'Hot and sunny in dry season; lush during rains',
    travelTips: 'Wear sun protection and bring a camera for the waterfall hike'
  },
  'kibale-forest': {
    title: 'Kibale National Park',
    image: 'img/Destination/UG/kiable.jpeg',
    rating: '4.6',
    price: 'From $1,400',
    description: 'Known as the primate capital of Africa, Kibale offers the best chimpanzee tracking in Uganda.',
    highlights: [
      'Chimpanzee trekking experiences',
      'Over 13 primate species',
      'Bigodi Wetland sanctuary',
      'Excellent birdwatching'
    ],
    details: {
      Location: 'Western Uganda',
      'Best Time': 'June-August and December-February',
      'Top Activities': 'Chimp tracking, nature walks, birding',
      'Travel Time': '5-6 hours from Kampala'
    },
    climate: 'Warm and humid rainforest climate with frequent showers',
    travelTips: 'Bring rain gear and prepare for muddy forest trails'
  },
  makerere: {
    title: 'Makerere University',
    image: 'img/Destination/UG/mak.jpeg',
    rating: '4.5',
    price: 'Public University',
    description: 'Uganda\'s flagship university with a long-standing reputation for excellence across disciplines.',
    highlights: [
      'Founded in 1922',
      'Strong regional and global reputation',
      'Wide range of programs',
      'Vibrant campus life'
    ],
    details: {
      Location: 'Kampala',
      'Student Body': '35,000+',
      Type: 'Public University',
      Notable: 'Alumni across East Africa'
    },
    programs: 'Medicine, Engineering, Business, Arts, Social Sciences',
    admission: 'Competitive entry based on academic performance and program requirements'
  },
  kyambogo: {
    title: 'Kyambogo University',
    image: 'img/Destination/UG/kyu.jpeg',
    rating: '4.3',
    price: 'Public University',
    description: 'A leading institution focused on technical, vocational, and teacher education in Uganda.',
    highlights: [
      'Teacher education excellence',
      'Technical and vocational training',
      'Inclusive programs',
      'Large urban campus'
    ],
    details: {
      Location: 'Kampala',
      'Student Body': '30,000+',
      Type: 'Public University',
      Specialty: 'Technical and vocational education'
    },
    programs: 'Education, Engineering, Special Needs, Vocational Studies',
    admission: 'Admissions based on academic qualifications and program capacity'
  },
  mbarara: {
    title: 'Mbarara University of Science and Technology (MUST)',
    image: 'img/Destination/UG/must.png',
    rating: '4.4',
    price: 'Public University',
    description: 'A premier institution for medical and science education in western Uganda.',
    highlights: [
      'Strong medical programs',
      'Research-led learning',
      'Regional health partnerships',
      'Growing postgraduate offerings'
    ],
    details: {
      Location: 'Mbarara',
      'Student Body': '6,000+',
      Type: 'Public University',
      Founded: '1989'
    },
    programs: 'Medicine, Nursing, Computer Science, Public Health',
    admission: 'Competitive; strong science background required'
  },
  ucu: {
    title: 'Uganda Christian University (UCU)',
    image: 'img/Destination/UG/ucu.jpeg',
    rating: '4.2',
    price: 'Private University',
    description: 'A leading private university with strong Christian values and academic excellence.',
    highlights: [
      'Faith-based education',
      'Wide program offerings',
      'Strong student support',
      'Multiple campuses'
    ],
    details: {
      Location: 'Mukono',
      'Student Body': '12,000+',
      Type: 'Private University',
      Founded: '1997'
    },
    programs: 'Law, Business, Education, IT, Social Sciences',
    admission: 'Admissions based on academic credentials and program requirements'
  }
};

export const rwandaDetailsData: DestinationDetails = {
  volcanoes: {
    title: 'Volcanoes National Park',
    image: 'img/Destination/rwanda/volcanoes park.jpeg',
    description: 'Volcanoes National Park is a protected area in northwestern Rwanda that covers 160 km² of rainforest and encompasses five of the eight volcanoes in the Virunga Mountains. It is world-renowned as a sanctuary for the critically endangered mountain gorillas.',
    highlights: [
      'Home to approximately one-third of the world\'s mountain gorillas',
      'Made famous by Dian Fossey\'s gorilla research and conservation work',
      'Stunning volcanic landscapes with elevations from 2,400-4,507 meters',
      'Golden monkey tracking in addition to gorilla trekking',
      'Rich biodiversity with 200+ bird species and various mammals'
    ],
    details: {
      Area: '160 km² (62 square miles)',
      'Best Time to Visit': 'June to September and December to February (dry seasons)',
      'Key Wildlife': 'Mountain Gorillas, Golden Monkeys, Spotted Hyena, Buffaloes',
      Activities: 'Gorilla trekking, Golden monkey tracking, Hiking the volcanoes',
      'Permit Cost': '$1,500 per person for gorilla trekking (2023)',
      'Conservation Status': 'UNESCO World Heritage Site (as part of Virunga Massif)'
    },
    price: 'From $1,500 for gorilla trekking permit',
    rating: '4.9',
    climate: 'Cool and misty with temperatures ranging from 10-22°C depending on altitude',
    travelTips: 'Book permits 6-12 months in advance, good physical fitness required for trekking'
  },
  nyungwe: {
    title: 'Nyungwe Forest National Park',
    image: 'img/Destination/rwanda/nyungwe.jpeg',
    description: 'Nyungwe Forest is one of the oldest rainforests in Africa, dating back to before the last Ice Age. This biodiverse montane rainforest is home to 13 primate species including chimpanzees, and features East Africa\'s only canopy walkway.',
    highlights: [
      '13 primate species including chimpanzees and Angolan colobus monkeys',
      'East Africa\'s only canopy walkway suspended 50 meters above the forest floor',
      'Over 1,000 plant species, 300 bird species, and 120 butterfly species',
      'Source of both the Nile and Congo rivers within the forest',
      'Beautiful waterfalls and numerous hiking trails'
    ],
    details: {
      Area: '1,019 km² (393 square miles)',
      'Best Time to Visit': 'December to February and June to August (dry seasons)',
      'Key Wildlife': 'Chimpanzees, L\'Hoest\'s monkeys, Colobus monkeys, Forest birds',
      Activities: 'Chimp tracking, Canopy walk, Waterfall hikes, Bird watching',
      Accommodation: 'Lodges and campsites available near the park',
      'Conservation Status': 'Important Bird Area and biodiversity hotspot'
    },
    price: 'From $1,200* for 2-night package',
    rating: '4.7',
    climate: 'Cool and humid with frequent rainfall, temperatures 10-20°C',
    travelTips: 'Waterproof clothing essential, good walking shoes required for trails'
  },
  akagera: {
    title: 'Akagera National Park',
    image: 'img/Destination/rwanda/akagera.jpeg',
    description: 'Akagera National Park is Rwanda\'s only savanna reserve, named after the Akagera River that flows along its eastern boundary. After successful conservation efforts, the park now hosts all of the Big Five animals (lion, leopard, rhino, elephant, and buffalo).',
    highlights: [
      'Big Five game viewing (lions, leopards, rhinos, elephants, and buffalo)',
      'Diverse landscapes from savanna to wetlands and lakes',
      'Boat trips on Lake Ihema to see hippos and water birds',
      'Over 500 bird species including rare papyrus specialists',
      'Community-focused conservation success story'
    ],
    details: {
      Area: '1,122 km² (433 square miles)',
      'Best Time to Visit': 'June to September (dry season for best game viewing)',
      'Key Wildlife': 'Lions, Leopards, Rhinos, Elephants, Buffaloes, Hippos, Giraffes',
      Activities: 'Game drives, Boat safaris, Bird watching, Fishing',
      Accommodation: 'Lodges and tented camps inside the park',
      'Conservation Status': 'Managed in partnership with African Parks since 2010'
    },
    price: 'From $950* for 2-night safari package',
    rating: '4.6',
    climate: 'Warm with temperatures 20-30°C, wetter than other Rwandan parks',
    travelTips: 'Early morning and late afternoon game drives best for wildlife viewing'
  },
  'lake-kivu': {
    title: 'Lake Kivu',
    image: 'img/Destination/rwanda/lakekivu.jpeg',
    description: 'Lake Kivu is one of Africa\'s Great Lakes, lying on the border between Rwanda and the Democratic Republic of the Congo. It is Rwanda\'s largest lake and offers beautiful scenery, sandy beaches, and numerous islands. The lake is known for its methane gas reserves and being free of bilharzia.',
    highlights: [
      'Beautiful sandy beaches and clear waters safe for swimming',
      'Island hopping to Napoleon Island and Monkey Island',
      'Kayaking, boat trips, and fishing experiences',
      'Lakeside resorts and relaxation after gorilla trekking',
      'Stunning sunsets over the lake and surrounding hills'
    ],
    details: {
      Size: '2,700 km² (1,040 square miles), Africa\'s eighth largest lake',
      'Best Time to Visit': 'Year-round destination',
      'Key Activities': 'Swimming, Boat trips, Kayaking, Cycling, Coffee tours',
      Towns: 'Gisenyi, Kibuye, and Cyangugu are main lakeside towns',
      'Special Feature': 'Methane gas extraction for power generation',
      Safety: 'Bilharzia-free and safe for swimming'
    },
    price: 'From $800* for 2-night lakeside stay',
    rating: '4.5',
    climate: 'Warm and pleasant with temperatures 20-28°C year-round',
    travelTips: 'Perfect add-on after gorilla trekking, try local fish from the lake'
  },
  ur: {
    title: 'University of Rwanda',
    image: 'img/Destination/rwanda/uor.jpeg',
    description: 'The University of Rwanda is the largest institution of higher learning in the country, formed in 2013 through the merger of several public higher education institutions. It has multiple campuses across Rwanda and offers a wide range of undergraduate and postgraduate programs.',
    highlights: [
      'Formed through merger of 7 public higher education institutions in 2013',
      'Six colleges offering diverse academic programs',
      'Strong focus on research and community engagement',
      'Partnerships with international universities and organizations',
      'Contribution to Rwanda\'s development goals'
    ],
    details: {
      Type: 'Public University',
      'Student Population': 'Over 30,000 students',
      Colleges: '6 colleges across multiple disciplines',
      Campuses: 'Multiple campuses throughout Rwanda',
      'Research Focus': 'Agriculture, Health Sciences, Technology, Education',
      Vision: 'To be a leading university globally recognized for excellence'
    },
    price: 'Public University - varies by program',
    rating: '4.5',
    programs: 'Medicine, Engineering, Business, Education, Agriculture, Sciences',
    admission: 'Based on Rwanda National Examination Council results or equivalent'
  },
  alu: {
    title: 'African Leadership University',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&height=256',
    description: 'African Leadership University is a pioneering network of universities transforming higher education in Africa. The Rwanda campus focuses on developing entrepreneurial leaders through innovative teaching methods and real-world experiences.',
    highlights: [
      'Mission to develop 3 million ethical, entrepreneurial African leaders by 2035',
      'Innovative curriculum focused on leadership and real-world projects',
      'Students spend time working on actual business challenges',
      'Diverse student body from across Africa and beyond',
      'Strong emphasis on entrepreneurship and innovation'
    ],
    details: {
      Type: 'Private University',
      Founded: '2015 in Mauritius, Rwanda campus opened in 2017',
      Programs: 'Undergraduate degrees in International Business, Computer Science',
      'Learning Model': 'Project-based learning with industry partnerships',
      Campuses: 'Kigali Innovation City, Rwanda and Pamplemousses, Mauritius',
      'Special Feature': 'Each student creates a leadership portfolio'
    },
    price: 'Private University - contact for tuition information',
    rating: '4.7',
    programs: 'International Business, Computer Science, Leadership Development',
    admission: 'Holistic admissions process including academic records and leadership potential'
  },
  ughe: {
    title: 'University of Global Health Equity',
    image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&height=256',
    description: 'The University of Global Health Equity is a specialized institution focused on training global health professionals who will strive for equity in health care delivery. It was founded by Partners In Health with support from the Rwandan government.',
    highlights: [
      'Founded by Partners In Health, a renowned global health organization',
      'Focus on health equity and social justice in health care',
      'State-of-the-art campus in Butaro, Northern Rwanda',
      'Diverse student body from Rwanda and internationally',
      'Strong emphasis on community-based learning'
    ],
    details: {
      Type: 'Specialized Private University',
      Founded: '2015',
      Programs: 'Global Health Delivery, One Health, Nursing, Medical Education',
      Campus: 'Butaro campus in Northern Rwanda with modern facilities',
      Partnerships: 'Harvard Medical School, Partners In Health, Rwandan Ministry of Health',
      Mission: 'To change the way health care is delivered around the world'
    },
    price: 'Various scholarship opportunities available',
    rating: '4.8',
    programs: 'Global Health, Nursing, Medical Education, One Health',
    admission: 'Competitive process with emphasis on commitment to health equity'
  },
  cmu: {
    title: 'Carnegie Mellon University Africa',
    image: 'img/Destination/rwanda/CMU.jpeg',
    description: 'Carnegie Mellon University Africa is the first U.S. research university offering its master\'s degrees with full-time faculty, staff, and operations in Africa. Located in Kigali, it is developing the next generation of African technology leaders.',
    highlights: [
      'First U.S. research university with a full-scale campus in Africa',
      'Focus on technology and engineering education at graduate level',
      'Strong industry connections for internships and employment',
      'Diverse student body from across Africa',
      'Research opportunities in African context'
    ],
    details: {
      Type: 'Postgraduate Campus of U.S. University',
      Established: '2011 in Rwanda',
      Programs: 'MSc in Information Technology, Electrical and Computer Engineering',
      Degree: 'Same Carnegie Mellon degree as Pittsburgh campus',
      Location: 'Kigali Innovation City, Rwanda',
      Partnership: 'With Rwanda government and support from African Development Bank'
    },
    price: 'Contact for tuition information, scholarships available',
    rating: '4.9',
    programs: 'Information Technology, Electrical and Computer Engineering',
    admission: 'Competitive process similar to main campus requirements'
  }
};

export const tanzaniaDetailsData: DestinationDetails = {
  serengeti: {
    title: 'Serengeti National Park',
    image: 'https://readdy.ai/api/search-image?query=Serengeti%20National%20Park%20endless%20plains%20during%20Great%20Migration%2C%20thousands%20of%20wildebeest%20and%20zebras%20crossing%20savanna%2C%20dramatic%20sky%20with%20scattered%20clouds%2C%20golden%20grassland%20stretching%20to%20horizon%2C%20iconic%20African%20wildlife%20spectacle%2C%20professional%20nature%20photography&width=1200&height=600&seq=serengeti-modal&orientation=landscape',
    rating: '4.9',
    price: 'From $2,450',
    description: 'The Serengeti is Tanzania\'s most iconic safari destination, famed for endless plains, abundant predators, and the Great Migration of wildebeest and zebra.',
    highlights: [
      'Great Migration river crossings (July-October)',
      'Year-round big cat sightings',
      'Hot-air balloon safaris at sunrise',
      'Classic acacia savanna landscapes'
    ],
    details: {
      Location: 'Northern Tanzania',
      'Best Time': 'June to October for migration; January to March for calving',
      'Top Activities': 'Game drives, balloon safari, photography',
      'Travel Time': '6-7 hours by road from Arusha or 1-hour flight'
    },
    climate: 'Warm days and cool nights; dry season June-October, short rains Nov-Dec, long rains Mar-May',
    travelTips: 'Pack layers for cool mornings, bring binoculars and camera with zoom lens'
  },
  ngorongoro: {
    title: 'Ngorongoro Crater',
    image: 'https://readdy.ai/api/search-image?query=Ngorongoro%20Crater%20aerial%20panoramic%20view%20showing%20massive%20volcanic%20caldera%20with%20diverse%20wildlife%20on%20crater%20floor%2C%20lush%20green%20vegetation%2C%20pristine%20lake%20reflecting%20sky%2C%20dramatic%20crater%20rim%20walls%2C%20UNESCO%20World%20Heritage%20natural%20wonder&width=1200&height=600&seq=ngorongoro-modal&orientation=landscape',
    rating: '4.8',
    price: 'From $2,150',
    description: 'A UNESCO World Heritage Site and the world\'s largest intact volcanic caldera, packed with wildlife including black rhino, lions, and flamingos.',
    highlights: [
      'Dense wildlife in a compact area',
      'Black rhino sightings',
      'Spectacular crater rim viewpoints',
      'Cultural visits to Maasai communities'
    ],
    details: {
      Location: 'Ngorongoro Conservation Area',
      'Best Time': 'Year-round; dry season best for game viewing',
      'Top Activities': 'Crater game drive, viewpoints, cultural tours',
      'Travel Time': '3-4 hours from Arusha'
    },
    climate: 'Cooler temperatures on the crater rim; warmer on the crater floor',
    travelTips: 'Carry a light jacket for the rim and plan early descent to avoid crowds'
  },
  kilimanjaro: {
    title: 'Mount Kilimanjaro',
    image: 'https://readdy.ai/api/search-image?query=Mount%20Kilimanjaro%20majestic%20snow-capped%20peak%20towering%20above%20African%20plains%2C%20dramatic%20clouds%20surrounding%20summit%2C%20golden%20savanna%20grassland%20in%20foreground%2C%20clear%20blue%20sky%2C%20Africas%20highest%20mountain%2C%20inspiring%20adventure%20landscape%20photography&width=1200&height=600&seq=kilimanjaro-modal&orientation=landscape',
    rating: '4.7',
    price: 'From $3,200',
    description: 'Africa\'s highest peak and the world\'s tallest free-standing mountain, offering legendary trekking routes and dramatic alpine scenery.',
    highlights: [
      'Uhuru Peak summit at 5,895m',
      'Routes for all experience levels',
      'Diverse ecosystems from rainforest to alpine desert',
      'Stunning sunrise summit views'
    ],
    details: {
      Location: 'Kilimanjaro Region',
      'Best Time': 'January-March and June-October',
      'Top Activities': 'Trekking, photography, acclimatization hikes',
      'Typical Duration': '6-9 days depending on route'
    },
    climate: 'Varies by altitude; warm at base, freezing at summit',
    travelTips: 'Acclimatize properly and pack layered clothing for summit night'
  },
  tarangire: {
    title: 'Tarangire National Park',
    image: 'https://readdy.ai/api/search-image?query=Tarangire%20National%20Park%20landscape%20with%20massive%20ancient%20baobab%20trees%20scattered%20across%20golden%20savanna%2C%20elephants%20grazing%20peacefully%20beneath%20giant%20trees%2C%20warm%20afternoon%20lighting%2C%20unique%20African%20wilderness%20scenery%2C%20professional%20wildlife%20photography&width=1200&height=600&seq=tarangire-modal&orientation=landscape',
    rating: '4.6',
    price: 'From $1,850',
    description: 'Tarangire is famous for its ancient baobab trees, large elephant herds, and excellent birdlife, especially during the dry season.',
    highlights: [
      'Huge elephant herds',
      'Iconic baobab landscapes',
      'Excellent birdwatching',
      'Quiet, less-crowded safari experiences'
    ],
    details: {
      Location: 'Northern Tanzania',
      'Best Time': 'June to October',
      'Top Activities': 'Game drives, birding',
      'Travel Time': '2-3 hours from Arusha'
    },
    climate: 'Hot and dry in peak season; green and humid in rainy months',
    travelTips: 'Bring binoculars for birding and schedule early morning game drives'
  },
  udsm: {
    title: 'University of Dar es Salaam (UDSM)',
    image: 'img/Destination/TZ/UDAS.jpeg',
    rating: '4.5',
    price: 'Public University',
    description: 'Tanzania\'s premier public university known for strong programs in business, engineering, and social sciences.',
    highlights: [
      'Largest public university in Tanzania',
      'Vibrant campus in Dar es Salaam',
      'Broad range of undergraduate and postgraduate programs',
      'Strong research culture'
    ],
    details: {
      Founded: '1961',
      Location: 'Dar es Salaam',
      'Student Body': '45,000+',
      Type: 'Public University'
    },
    programs: 'Business, Engineering, Law, Education, Arts & Social Sciences',
    admission: 'Competitive; admissions based on academic performance and program requirements'
  },
  muhas: {
    title: 'Muhimbili University of Health and Allied Sciences (MUHAS)',
    image: 'img/Destination/TZ/muhimbili.jpeg',
    rating: '4.6',
    price: 'Specialized University',
    description: 'Tanzania\'s leading health sciences university with a major teaching hospital and research facilities.',
    highlights: [
      'Top medical and health sciences programs',
      'Strong clinical training partnerships',
      'Research-driven faculty',
      'Modern teaching hospital access'
    ],
    details: {
      Founded: '2007',
      Location: 'Dar es Salaam',
      'Student Body': '5,000+',
      Type: 'Public Specialized University'
    },
    programs: 'Medicine, Nursing, Public Health, Dentistry, Pharmacy',
    admission: 'Highly competitive; requires strong science background'
  },
  sua: {
    title: 'Sokoine University of Agriculture (SUA)',
    image: 'img/Destination/TZ/sokoine.jpeg',
    rating: '4.4',
    price: 'Public University',
    description: 'A leading institution in agriculture, veterinary medicine, and environmental sciences with extensive field research.',
    highlights: [
      'Renowned for agriculture and veterinary programs',
      'Strong fieldwork and research focus',
      'Large campus with experimental farms',
      'International partnerships'
    ],
    details: {
      Founded: '1984',
      Location: 'Morogoro',
      'Student Body': '15,000+',
      Type: 'Public University'
    },
    programs: 'Agriculture, Veterinary Medicine, Forestry, Environmental Science',
    admission: 'Admissions based on academic performance and program capacity'
  },
  'nm-aist': {
    title: 'Nelson Mandela African Institution of Science and Technology (NM-AIST)',
    image: 'img/Destination/TZ/nelson.jpeg',
    rating: '4.5',
    price: 'Postgraduate Institution',
    description: 'A postgraduate science and technology institute focused on innovation, research, and advanced engineering.',
    highlights: [
      'Strong STEM and research focus',
      'Modern labs and facilities',
      'Regional innovation hub',
      'Postgraduate specialization'
    ],
    details: {
      Founded: '2010',
      Location: 'Arusha',
      'Student Body': '1,000+',
      Type: 'Postgraduate Institution'
    },
    programs: 'Engineering, Materials Science, Data Science, Biotechnology',
    admission: 'Postgraduate admissions based on academic merit and research fit'
  }
};

const modalButton = (target: string) => `onclick="window.generateDestinationPDF('${target}')"`;

export function renderDestinationModalHTML(data: DestinationDetail, isWildlife: boolean, target: string) {
  return `
    <div class="modal-header">
      <img src="${data.image}" alt="${data.title}" class="modal-image mb-6 rounded-xl w-full h-64 object-cover object-top" />
      <h2 class="text-3xl font-bold mb-2 text-gray-800">${data.title}</h2>
      <div class="flex flex-wrap items-center gap-4 mb-6">
        <span class="rating">
          <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          ${data.rating}/5
        </span>
        <span class="text-lg font-bold text-green-600">${data.price}</span>
      </div>
    </div>
    <p class="text-lg text-gray-700 mb-6">${data.description}</p>
    <div class="detail-grid grid gap-6 lg:grid-cols-2">
      <div class="info-card bg-gray-50 rounded-xl p-6 border border-gray-100">
        <h3 class="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Key Highlights</h3>
        <ul class="feature-list space-y-2">
          ${data.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}
        </ul>
      </div>
      <div class="info-card bg-gray-50 rounded-xl p-6 border border-gray-100">
        <h3 class="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Detailed Information</h3>
        <div class="space-y-3">
          ${Object.entries(data.details).map(([key, value]) => `
            <div>
              <span class="font-medium text-gray-700">${key}:</span>
              <p class="text-gray-600">${value}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    ${isWildlife ? `
    <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
      <h3 class="text-lg font-semibold text-blue-800 mb-2">Travel Information</h3>
      <p class="text-blue-700"><span class="font-medium">Climate:</span> ${data.climate ?? 'N/A'}</p>
      <p class="text-blue-700 mt-2"><span class="font-medium">Travel Tips:</span> ${data.travelTips ?? 'N/A'}</p>
    </div>
    ` : `
    <div class="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
      <h3 class="text-lg font-semibold text-purple-800 mb-2">Academic Information</h3>
      <p class="text-purple-700"><span class="font-medium">Programs:</span> ${data.programs ?? 'N/A'}</p>
      <p class="text-purple-700 mt-2"><span class="font-medium">Admission:</span> ${data.admission ?? 'N/A'}</p>
    </div>
    `}
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 pt-6 border-t border-gray-200 gap-4">
      <div class="flex flex-wrap gap-2">
        ${isWildlife ? `
          <span class="badge badge-primary">Wildlife</span>
          <span class="badge badge-secondary">Safari</span>
          <span class="badge badge-primary">Conservation</span>
        ` : `
          <span class="badge badge-primary">Education</span>
          <span class="badge badge-secondary">Research</span>
          <span class="badge badge-primary">Academic</span>
        `}
      </div>
      <button ${modalButton(target)} class="download-btn inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition-all">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
        Download PDF
      </button>
    </div>
  `;
}

export function loadJsPDF() {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  const existing = document.querySelector<HTMLScriptElement>("script[src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js']");
  if (existing) {
    return existing.getAttribute('data-loaded') === 'true'
      ? Promise.resolve()
      : new Promise<void>((resolve, reject) => {
          existing.addEventListener('load', () => resolve());
          existing.addEventListener('error', () => reject(new Error('Failed to load jsPDF script')));
        });
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.async = true;
    script.onload = () => {
      script.setAttribute('data-loaded', 'true');
      resolve();
    };
    script.onerror = () => reject(new Error('Failed to load jsPDF script'));
    document.body.appendChild(script);
  });
}
