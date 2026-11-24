/* Trip answers for the Luxpackers "New Trip Builder".
   Plain strings come from the PDF. S("...") marks a suggestion that is NOT written in the PDF.
   null means the PDF does not cover that field. */
const S = (t) => ({ text: t, suggested: true });

window.TRIPS = [
/* ───────────────────────── THAILAND ───────────────────────── */
{
  id: "thailand", tab: "Thailand", sub: "6N / 7D", pdf: "Thailand_6N7D_Itinerary.pdf",
  checks: [
    "Phuket → Bangkok domestic flight is not in the inclusions. The PDF says to quote it separately.",
    "The PDF gives no price, so Pricing is empty apart from days and nights.",
    "Safari World is closed on Mondays. Make sure Day 6 does not fall on a Monday."
  ],
  basics: {
    destination: "Thailand",
    market: "International",
    tripType: "Custom / private trip",
    title: "ISLAND ESCAPE & CITY ADVENTURES",
    slug: "island-escape-city-adventures",
    theme: "Adventurous, Thrilling",
    subtitle: "6 Nights | 7 Days | Phuket - Krabi - Bangkok",
    description: "Explore the islands, discover the cities and make memories along the way. Two nights each in Phuket (Patong Area), Krabi (Ao Nang Area) and Bangkok, with a Phi Phi Islands speedboat excursion, Krabi island hopping by long-tail boat, a Phuket city tour and a day at Safari World & Marine Park."
  },
  pricing: {
    days: "7", nights: "6", full: null, slashed: null, token: null,
    note: "No price or payment policy in this PDF.",
    optional: []
  },
  itinerary: [
    { day: 1, title: "Arrival in Phuket | Leisure & Exploration", locations: "Phuket, Patong",
      activities: ["Arrive at Phuket International Airport and meet the local representative.","Private transfer to your hotel in the Patong area.","Check in, relax and enjoy the rest of the day at leisure.","Explore Patong Beach, nearby markets or Bangla Road in the evening.","Overnight stay in Phuket."] },
    { day: 2, title: "Phi Phi Islands | Speedboat Excursion", locations: "Phi Phi Islands, Maya Bay, Pileh Lagoon, Viking Cave",
      activities: ["Breakfast at the hotel.","Proceed for a full-day Phi Phi Islands excursion on a shared speedboat.","Explore the islands and scenic locations such as Maya Bay, Pileh Lagoon and Viking Cave, subject to the operator itinerary and local restrictions.","Lunch included during the excursion.","Return to Phuket; evening at leisure.","Overnight stay in Phuket."],
      note: "National Park fees are excluded. Stops and access may change due to weather, sea conditions and local regulations." },
    { day: 3, title: "Phuket City Tour | Transfer to Krabi", locations: "Phuket Old Town, Krabi, Ao Nang",
      activities: ["Breakfast and check out from the Phuket hotel.","Enjoy a Phuket city tour by private transfer, covering selected viewpoints and local attractions such as Phuket Old Town, subject to the route arranged.","Continue by private van from Phuket to Krabi.","Arrive in Ao Nang, check in to your hotel and relax.","Evening free to explore Ao Nang Beach and local markets.","Overnight stay in Krabi."],
      note: "The city tour and intercity journey are planned together on this travel day." },
    { day: 4, title: "Krabi Island Hopping | 4 or 7 Islands Tour", locations: "Krabi islands",
      activities: ["Breakfast at the hotel.","Proceed for a shared long-tail boat island-hopping excursion.","Explore the scenic islands and beaches of Krabi. The exact stops depend on the selected 4 Islands or 7 Islands programme.","Lunch or dinner included, according to the selected tour option.","Return to the hotel and overnight stay in Krabi."],
      note: "National Park fees are excluded. Exact island stops and meal timing are subject to the selected operator programme and conditions." },
    { day: 5, title: "Krabi to Phuket Airport | Flight to Bangkok", locations: "Krabi, Phuket Airport, Bangkok",
      activities: ["Breakfast and check out from the Krabi hotel.","Private van transfer from Krabi to Phuket International Airport.","Board your domestic flight from Phuket to Bangkok (airfare not specified in the supplied inclusions).","On arrival at Suvarnabhumi Airport (BKK), meet the representative and transfer by private van to your Bangkok hotel.","Check in; evening at leisure.","Overnight stay in Bangkok."] },
    { day: 6, title: "Safari World & Marine Park | Wildlife Adventure", locations: "Bangkok, Safari World & Marine Park",
      activities: ["Breakfast at the hotel.","Private transfer to Safari World and Marine Park.","Explore Safari Park and Marine Park attractions and scheduled shows, subject to operating schedules.","Lunch included at the park.","Return to the Bangkok hotel by private transfer.","Evening at leisure; overnight stay in Bangkok."],
      note: "Safari World is closed on Mondays. Schedule this visit on a different day if Day 6 falls on a Monday." },
    { day: 7, title: "Departure from Bangkok", locations: "Bangkok, Suvarnabhumi Airport",
      activities: ["Breakfast at the hotel and check out.","Private transfer from the hotel to Suvarnabhumi International Airport (BKK).","Board your return flight with wonderful memories of Thailand."] }
  ],
  stays: {
    note: "The PDF gives the area for each stay but no hotel names or Luxury / Ultra Luxury tier.",
    items: [
      { days: "Day 1–2", location: "Phuket", nights: "2 Nights", hotel: "Patong Area" },
      { days: "Day 3–4", location: "Krabi", nights: "2 Nights", hotel: "Ao Nang Area" },
      { days: "Day 5–6", location: "Bangkok", nights: "2 Nights", hotel: "Bangkok City" }
    ]
  },
  included: {
    inclusions: ["2 nights accommodation in Phuket (Patong area).","2 nights accommodation in Krabi (Ao Nang area).","2 nights accommodation in Bangkok.","Phi Phi Island Tour by Speedboat with lunch (SIC/shared basis).","Phuket City Tour with private transfer.","4 or 7 Islands Tour by Long-tail Boat with lunch or dinner (SIC/shared basis).","Safari World & Marine Park with lunch and private transfer.","Mentioned airport and intercity private transfers by van."],
    exclusions: ["National Park fees for Phi Phi Island and Krabi island tours.","Phuket-to-Bangkok domestic airfare (quoted separately unless confirmed otherwise)."],
    highlights: ["Phi Phi Islands by speedboat: Maya Bay, Pileh Lagoon and Viking Cave","Phuket city tour, including Phuket Old Town","Krabi 4 or 7 Islands tour by long-tail boat","Safari World & Marine Park in Bangkok","Patong Beach and Bangla Road evenings","Ao Nang Beach and local markets"]
  },
  tour: {
    pickup: "Phuket International Airport",
    dropoff: "Suvarnabhumi International Airport (BKK), Bangkok",
    accommodation: "Phuket 2 Nights (Patong Area), Krabi 2 Nights (Ao Nang Area), Bangkok 2 Nights (City Hotel)",
    transport: ["Private van: Phuket Airport to Phuket Hotel","Private van: Phuket Hotel to Krabi Hotel, with Phuket City Tour en route","Private van: Krabi Hotel to Phuket Airport","Private van: Suvarnabhumi Airport to Bangkok Hotel","Private van: Bangkok Hotel to Safari World & Marine Park","Private van: Bangkok Hotel to Suvarnabhumi Airport","Shared speedboat (Phi Phi Islands)","Shared long-tail boat (Krabi islands)"],
    meal: "Breakfast at the hotel daily (as per day-wise itinerary). Lunch on the Phi Phi tour and at Safari World. Lunch or dinner on the Krabi islands tour.",
    group: null, difficulty: S("Easy"), best: null
  },
  media: { cover: S("Speedboat in the turquoise water of Maya Bay, Phi Phi Islands"), alt: S("Speedboat anchored in the turquoise water of Maya Bay below limestone cliffs, Phi Phi Islands, Thailand") },
  gallery: [S("Maya Bay, Phi Phi Islands"), S("Pileh Lagoon"), S("Long-tail boats on a Krabi island beach"), S("Ao Nang Beach at sunset"), S("Phuket Old Town street"), S("Safari World & Marine Park, Bangkok")],
  shorts: null, pastPhotos: null,
  testimonials: [],
  related: [S("Bali Customisable Trip – 9D8N"), S("Vietnam In Depth – 9D8N"), S("Sri Lanka Island Loop – 7D6N")],
  faqs: [
    { q: "Is the Phuket to Bangkok flight included?", a: "Phuket-to-Bangkok domestic airfare is not included in the supplied inclusions and should be quoted separately unless confirmed otherwise." },
    { q: "Are National Park fees included?", a: "National Park fees for Phi Phi Island and Krabi island tours are excluded." },
    { q: "Which Bangkok airport should I fly into?", a: "Bangkok airport transfers are based on Suvarnabhumi Airport (BKK). If arrival or departure is from Don Mueang Airport (DMK), the package cost will increase." },
    { q: "Are the tours private or shared?", a: "Tours marked SIC operate on a shared basis; private transfers are as specified." },
    { q: "Can Safari World be visited any day?", a: "Safari World & Marine Park is closed on Mondays; the visit must be scheduled accordingly." }
  ],
  terms: [
    { t: "National Park fees", d: "National Park fees for Phi Phi Island and Krabi island tours are excluded." },
    { t: "Safari World", d: "Safari World & Marine Park is closed on Mondays; the visit must be scheduled accordingly." },
    { t: "Bangkok airport", d: "Bangkok airport transfers are based on Suvarnabhumi Airport (BKK). If arrival or departure is from Don Mueang Airport (DMK), the package cost will increase." },
    { t: "Domestic airfare", d: "Phuket-to-Bangkok domestic airfare is not included in the supplied inclusions and should be quoted separately unless confirmed otherwise." },
    { t: "Shared tours", d: "Tours marked SIC operate on a shared basis; private transfers are as specified." },
    { t: "Check-in / check-out", d: "Hotel check-in/check-out timings are subject to hotel policies." },
    { t: "Weather & schedules", d: "Activities and sightseeing are subject to weather, sea conditions, local restrictions and operator schedules." }
  ]
},

/* ───────────────────────── VIETNAM NEW YEAR ───────────────────────── */
{
  id: "vietnam-new-year", tab: "Vietnam New Year", sub: "11D / 10N", pdf: "Luxpackers_Vietnam_NewYear_RoadTrip_11D10N_HD.pdf",
  checks: [
    "Two prices exist: Land Package ₹66,999 (was ₹74,499) and All-Inclusive with flights ₹1,18,499 (was ₹1.26 L). The Pricing tab below uses the Land Package.",
    "The Festive Offer (flat 11% off, book by 22 Nov) has already expired.",
    "Day 4 lists “Optional activities (own cost)” in the PDF. The Dark Cave zipline is shown as optional here; confirm that against the PDF."
  ],
  basics: {
    destination: "Vietnam",
    market: "International",
    tripType: "Group trip",
    title: "VIETNAM NEW YEAR’S SIGNATURE TRIP",
    slug: "vietnam-new-years-signature-trip",
    theme: S("Party, Road Trip, Adventurous"),
    subtitle: "Exclusive Road Trip & Unlimited Drinks Are Included",
    description: "Journey Across Vietnam: travel from the historic streets of Hanoi to the vibrant pulse of Ho Chi Minh City in one unforgettable road trip. Cruise through Ha Long Bay, explore hidden river caves in Phong Nha, wander lantern-lit Hoi An, party on the beaches of Nha Trang and ride jeeps across the Mui Ne dunes, then ring in New Year’s Eve in Saigon at Luxpackers’ exclusive NYE bash with unlimited drinks, music and a countdown till 4 AM."
  },
  pricing: {
    days: "11", nights: "10", full: "66999", slashed: "74499", token: "33500",
    note: "Land Package (without flights), per person. Token = 50% booking amount at confirmation (₹66,999 × 50%, rounded). 5% GST + 2% TCS applicable.",
    optional: [
      { name: "All-Inclusive (with flights)", dur: "Same 11D/10N", price: "₹1,18,499 per person (was ₹1.26 L)", note: "Return international flights up to ₹50,000 per person + 20 kg luggage. Use this only if the dashboard lets you add a price option." },
      { name: "Pre-Trip: Sapa", dur: "2D/1N", price: "Priced on request", note: "Mountain air, rice terraces & hill-tribe villages" },
      { name: "Pre-Trip: Ha Giang Loop", dur: "3D/2N", price: "Priced on request", note: "Mountain passes by motorbike" },
      { name: "Pre-Trip: Cao Bang", dur: "2D/1N", price: "Priced on request", note: "Waterfalls and quiet northern valleys" },
      { name: "Pre-Trip: Ultimate North Tour", dur: "6D/5N", price: "Priced on request", note: "All three, Hanoi to Hanoi" },
      { name: "Post-Trip: Phu Quoc Island", dur: "3–4 days", price: "Priced on request", note: "White sand & island resorts" }
    ]
  },
  itinerary: [
    { day: 1, title: "Welcome to Vietnam", locations: "Hanoi",
      activities: ["Land at Noi Bai International Airport, where the Luxpackers team awaits you with warm smiles. Enjoy a comfortable transfer to the hotel, settle in, and rest after the journey.","Evening: an optional walk through Hanoi’s Old Quarter, its buzzing streets filled with cafés, street food, and shops.","A traditional Vietnamese coffee or a bánh mì, on a tiny street-side stool.","Meet your Trip Captain and the group: introductions, a travel brief, and a toast to the road ahead."],
      note: "Stay: Premium 3–4★ hotel, Hanoi. Tip: Exchange a small amount of currency for local shopping and snacks." },
    { day: 2, title: "Cruising Through Ha Long Bay", locations: "Hanoi → Ha Long Bay → Hanoi",
      activities: ["After breakfast, a scenic 3-hour drive to Ha Long Bay, a UNESCO World Heritage Site known for its emerald green waters and limestone pillars.","Board a luxury day cruise and sail through hundreds of majestic limestone islands.","A fresh seafood buffet lunch on board.","Visit Thien Cung Cave (Heavenly Palace Cave), one of the most beautiful in the bay.","Optional kayaking, or simply relax on deck and soak in the view.","Evening: drive back to Hanoi. Rest, explore a local restaurant, or enjoy a rooftop view of the Old Quarter at night."],
      note: "Meals: Breakfast, Buffet Lunch. Tip: Bring sunscreen, sunglasses and a hat — it’s sunny on the bay!" },
    { day: 3, title: "Vietnam’s Hidden Heaven", locations: "Hanoi → Ninh Binh → Dong Hoi",
      activities: ["After breakfast, a 2-hour drive to Ninh Binh, often called “Ha Long Bay on land.”","A rowboat ride through Tam Coc or Trang An, drifting through caves, limestone cliffs and rice paddies.","Visit Hoa Lu, Vietnam’s first capital, with temples to the Dinh and Le dynasties.","Lunch at a local riverside restaurant serving authentic Vietnamese food.","Evening: overnight sleeper bus or train to Dong Hoi, arriving around 1 AM.","Check-in assistance and rest at your hotel in the Phong Nha region."],
      note: "24 Dec. Stay: Premium 3–4★ hotel, Phong Nha region. Meals: Breakfast, Lunch. Tip: Keep a small overnight bag handy — you reach the hotel late tonight." },
    { day: 4, title: "Into the Cave Era", locations: "Phong Nha National Park",
      activities: ["Wake up in Phong Nha–Ke Bang, a UNESCO World Heritage Site and home to some of the world’s largest caves.","A boat ride along the Son River into Phong Nha Cave — an underground river and cathedral-like chambers.","Paradise Cave: trek inside stunning 30 m-high chambers.","Optional (own cost) — Dark Cave: zipline adventure and a natural mud bath.","Lunch at a local eatery with countryside views.","Afternoon & evening: free to relax or café-hop around this peaceful village."],
      note: "25 Dec. Stay: Premium 3–4★ hotel, Phong Nha. Meals: Breakfast, Lunch. Fun fact: Some caves in Phong Nha are big enough to fit a Boeing 747." },
    { day: 5, title: "The Imperial Road South", locations: "Phong Nha → Hue → Hoi An",
      activities: ["After breakfast, a scenic road trip south to Hoi An via Hue, Vietnam’s imperial capital.","Stopover in Hue (approx. 2 hours): explore Hue Citadel, the Perfume River or Thien Mu Pagoda.","Taste Bún bò Huế, Hue’s signature spicy beef noodle soup.","Over the Hai Van Pass (weather permitting), one of Asia’s most beautiful coastal roads.","Evening: arrive in Hoi An, a town frozen in time. Check in and rest."],
      note: "26 Dec. Stay: Premium 3–4★ hotel, Hoi An. Meals: Breakfast. Tip: Entrance fees in Hue are not included." },
    { day: 6, title: "From Basket Boats to Ba Na Hills", locations: "Hoi An · Ba Na Hills",
      activities: ["Explore Hoi An Ancient Town, known for its lantern-lit streets, riverside charm and tailor shops.","The Japanese Covered Bridge and Tan Ky Ancient House.","A basket boat ride in the Coconut Village — learn how locals spin the round bamboo boats!","Evening: Ba Na Hills by night, an exclusive Luxpackers experience few tourists see.","Ride the world’s longest cable car to the mountaintop.","The Golden Bridge under the night sky, magical and quiet.","Return to Hoi An for the night."],
      note: "Stay: Premium 3–4★ hotel, Hoi An. Meals: Breakfast, Dinner. Tip: Carry a light jacket — Ba Na Hills gets chilly at night." },
    { day: 7, title: "A Day That’s Yours", locations: "Da Nang → Nha Trang",
      activities: ["Morning at leisure — no alarm, no pick-up.","Rent a bike to My Khe Beach or the Marble Mountains.","See Dragon Bridge, which breathes fire at night.","A slow coffee at a café with sea views.","Evening: board the overnight sleeper bus south to Nha Trang. Sleep comfortably as you travel."],
      note: "28 Dec. Stay: Overnight sleeper bus to Nha Trang. Meals: Breakfast." },
    { day: 8, title: "Sun, Sea & Party", locations: "Nha Trang",
      activities: ["Wake up to turquoise seas and palm-lined boulevards, then pick your day.","Nha Trang Boat Party – cruise the bay with drinks, music, swimming and beach stops. Lunch on board.","or VinWonders Theme Park – the world’s longest overwater cable car to a full amusement park. Food not included.","Evening: free for nightlife, or a relaxing spa session."],
      note: "29 Dec. Stay: Premium 3–4★ hotel, Nha Trang. Meals: Breakfast · lunch on the boat party. Tip: Carry swimwear, a towel and a waterproof phone case for the boat party." },
    { day: 9, title: "A Day of Two Worlds", locations: "Nha Trang → Da Lat → Mui Ne",
      activities: ["Travel inland to Da Lat, the “City of Eternal Spring.”","Crazy House – surreal architecture inspired by Gaudí.","Datanla Falls – a mini roller-coaster ride down to the waterfall.","The flower gardens and the French Quarter.","Evening: on to Mui Ne, a charming beach town. Check in and unwind at the resort."],
      note: "30 Dec. Stay: Premium 3–4★ hotel, Mui Ne. Meals: Breakfast. Tip: Da Lat is cooler — carry a light sweater." },
    { day: 10, title: "The Party Starts Here", locations: "Mui Ne → Ho Chi Minh City",
      activities: ["Sunrise: jeep ride across Mui Ne’s red and white sand dunes — Vietnam’s mini Sahara!","The perfect spot for photos and sandboarding.","Afternoon: drive to Ho Chi Minh City (Saigon), Vietnam’s most vibrant city.","New Year’s Eve: Luxpackers’ exclusive New Year party — unlimited drinks, snacks, music and dancing.","Then Bui Vien Walking Street and Times Square for fireworks and the countdown, till 4 AM."],
      note: "31 Dec. Stay: Premium 3–4★ hotel, Ho Chi Minh City. Meals: Boxed breakfast, Lunch." },
    { day: 11, title: "Happy New Year, Then Home", locations: "Ho Chi Minh City",
      activities: ["Start your New Year with a relaxed breakfast.","Notre Dame Cathedral, the Central Post Office and Ben Thanh Market.","The hop-on hop-off city bus.","The War Remnants Museum or the Saigon Skydeck.","Evening: airport transfer as per your flight."],
      note: "1 Jan. Meals: Breakfast, Lunch. Staying an extra night? Add the optional Saigon dinner cruise to wrap up the journey in style." }
  ],
  stays: {
    note: "All stays are Premium 3–4★ hotels, as per availability — hygienic, double sharing, with guest ratings of 8–8.5+. Hotel as per the availability of rate at the time of booking. No hotel names or Luxury / Ultra Luxury tier in the PDF.",
    items: [
      { days: "Nights 1–2", location: "Hanoi", nights: "2 Nights", hotel: "Premium 3–4★ hotel" },
      { days: "Nights 3–4", location: "Phong Nha / Dong Hoi", nights: "2 Nights", hotel: "Premium 3–4★ hotel" },
      { days: "Nights 5–6", location: "Hoi An", nights: "2 Nights", hotel: "Premium 3–4★ hotel" },
      { days: "Night 7", location: "Overnight sleeper bus", nights: "1 Night", hotel: "On the road" },
      { days: "Night 8", location: "Nha Trang", nights: "1 Night", hotel: "Premium 3–4★ hotel" },
      { days: "Night 9", location: "Mui Ne", nights: "1 Night", hotel: "Premium 3–4★ hotel" },
      { days: "Night 10", location: "Ho Chi Minh City", nights: "1 Night", hotel: "Premium 3–4★ hotel" }
    ]
  },
  included: {
    inclusions: ["Premium 3–4★ hotels · 9 nights · double sharing","Daily breakfast + select lunches and dinners","All transfers & transport (road trip as per itinerary)","Airport pick-up & drop","E-visa and travel insurance (up to $250,000)","Guided tours with English-speaking guides","Trip Captain and local support throughout","New Year’s Eve party · unlimited drinks & snacks","1 complimentary beer daily","Return international flights (All-Inclusive only, up to ₹50,000 per person, with 20 kg luggage)"],
    exclusions: ["Tips for guide & driver ($4/day per person, mandatory)","Meals and drinks other than those listed","Personal expenses (laundry, room service, etc.)","Entrance fees in Hue · optional tours & add-ons","International flights on the Land Package"],
    highlights: ["Journey Across Vietnam — Travel from the historic streets of Hanoi to the vibrant pulse of Ho Chi Minh City in one unforgettable road trip.","Cruise Through Ha Long Bay — Sail past limestone cliffs on a luxury day cruise with breathtaking views and onboard lunch.","Caves, Culture & Countryside — Explore hidden river caves in Phong Nha, ancient temples in Ninh Binh, and the royal charm of Hue.","Hoi An’s Magic Nights — Wander lantern-lit streets, enjoy a basket boat ride, and experience Ba Na Hills after dark.","Beachside Fun & Mountain Escapes — Party on the beaches of Nha Trang, chase waterfalls in Da Lat, and unwind in Mui Ne’s coastal calm.","Desert Sunrise at Mui Ne Dunes — Ride jeeps across golden sands and capture the perfect dawn moment.","New Year’s Eve in Saigon — Luxpackers’ exclusive NYE bash with unlimited drinks, music and a countdown till 4 AM.","Luxury Meets Local — Premium 3–4★ stays and handpicked local experiences."]
  },
  tour: {
    pickup: "Noi Bai International Airport, Hanoi",
    dropoff: "Ho Chi Minh City airport (airport transfer as per your flight)",
    accommodation: "Premium 3–4★ hotels, double sharing (9 nights) + 1 night on an overnight sleeper bus",
    transport: ["Airport pick-up & drop","Road trip transfers as per itinerary","Overnight sleeper bus or train: Hanoi → Dong Hoi","Overnight sleeper bus: Da Nang → Nha Trang","Ha Long Bay luxury day cruise","Jeep ride across the Mui Ne sand dunes"],
    meal: "Daily breakfast + select lunches and dinners (as listed day by day)",
    group: S("Group trip with a Trip Captain (group size not stated in PDF)"),
    difficulty: S("Moderate (two overnight sleeper journeys)"),
    best: "New Year departure: 22 Dec – 1 Jan"
  },
  media: { cover: S("Lanterns over Hoi An Ancient Town, or Ha Long Bay cruise among limestone islands"), alt: S("Wooden boat cruising among limestone islands in Ha Long Bay, Vietnam") },
  gallery: [S("Ha Long Bay day cruise"), S("Rowboat through Tam Coc / Trang An, Ninh Binh"), S("Phong Nha Cave boat ride"), S("Hoi An lantern-lit streets"), S("Golden Bridge, Ba Na Hills at night"), S("Nha Trang boat party"), S("Mui Ne sand dunes jeep ride"), S("New Year’s Eve party in Saigon")],
  shorts: null, pastPhotos: null,
  testimonials: [],
  related: [S("Vietnam In Depth – 9D8N"), S("Vietnam Roadtrip Experience"), S("Bali Customisable Trip – 9D8N")],
  faqs: [
    { q: "What is the difference between the Land Package and All-Inclusive?", a: "Land Package (without flights): ₹66,999/person. All-Inclusive (with flights): ₹1,18,499/person, with flights covered up to ₹50,000/person + 20 kg luggage — any fare difference is paid by the customer." },
    { q: "Are visa and travel insurance included?", a: "Yes. E-visa and travel insurance (up to $250,000) are included." },
    { q: "Are tips included?", a: "No. Guide and driver tips of $4 per person per day are mandatory and paid locally." },
    { q: "Are there overnight journeys?", a: "Two overnight journeys (Hanoi → Dong Hoi, Da Nang → Nha Trang) are by sleeper bus or train. Keep a small overnight bag." },
    { q: "What should I pack?", a: "Light clothes, sunblock, walking shoes, a fanny pack, a water bottle and a light jacket for Ba Na Hills and Da Lat." },
    { q: "What is included in the New Year’s Eve party?", a: "Luxpackers’ exclusive New Year party — unlimited drinks, snacks, music and dancing. Then Bui Vien Walking Street and Times Square for fireworks and the countdown, till 4 AM." }
  ],
  terms: [
    { t: "Payment Policy", d: "50% booking amount at confirmation. 50% 15-20 days before scheduled arrival. GST No. required for tax invoice (if applicable). Service vouchers issued 5-7 days before departure." },
    { t: "Cancellation & Refund Policy", d: "30 days or more before arrival: 70% of land cost. 15–29 days before arrival: 50% of land cost. Less than 15 days: No refund. Name change: No refund. Refund processing: 15 working days." },
    { t: "Child Policy", d: "Children (3–12 yrs, 90–120 cm): charged at child rate. 12+ years or over 120 cm: charged at adult rate." },
    { t: "Taxes", d: "5% GST + 2% TCS applicable · TCS is claimable when you file your ITR." },
    { t: "Flights", d: "Flights covered up to ₹50,000/person — any fare difference is paid by the customer." },
    { t: "Itinerary changes", d: "This itinerary is a sample; the order may change at the discretion of Luxpackers management. Tour sequence may change depending on availability, weather and traffic." },
    { t: "SIC tours", d: "All SIC (group) tours include guide, entrance and local lunch unless specified." },
    { t: "Hotels", d: "Hotels: Premium 3–4★, as per availability of rate at the time of booking. Early check-in depends on room availability." },
    { t: "Tips", d: "Guide and driver tips of $4 per person per day are mandatory and paid locally." },
    { t: "Missed flights or tours", d: "Missed flights or tours due to delays are not Luxpackers’ responsibility." },
    { t: "High season", d: "High season: flight and land prices may increase. Rates are subject to change as per season and booking timelines." },
    { t: "Payee name", d: "Luxpackers is a brand of Travel with Vision — the name you’ll see on all payments." }
  ]
},

/* ───────────────────────── SRI LANKA ───────────────────────── */
{
  id: "sri-lanka", tab: "Sri Lanka", sub: "7D / 6N", pdf: "Luxpackers_SriLanka_7D6N_Client.pdf",
  checks: [
    "Updated to the new Client PDF. It gives no price (“Your price, your way… we'll send a clear, itemised quote”), so Full Amount and Token Amount are yours to fill.",
    "Hotel category is now “to be confirmed” (the old v5 PDF said Standard 3★/4★). Star Rating below is left blank.",
    "Departure is fixed at 23:40 on Day 7 in this version. Change it if the client's flight is different.",
    "No reviews in this PDF, so Testimonials stay empty."
  ],
  basics: {
    destination: "Sri Lanka",
    market: "International",
    tripType: "Custom / private trip",
    title: "SRI LANKA ISLAND LOOP",
    slug: "sri-lanka-island-loop",
    theme: S("Family, Relaxed, Nature"),
    subtitle: "Beach, hills, tea and elephants. None of it rushed.",
    description: "See Sri Lanka. Don't rush it. In one week this island gives you warm surf, a Dutch fort town, a train through tea country, cool mountain mornings, a sacred temple city and a river full of elephants. Most itineraries try to squeeze all of it in and send you home needing another holiday. We built this one the other way round: fewer hotel changes, short days where it matters, and time left over to simply sit still. Six nights, five stays, one easy loop: Colombo → Mirissa → Galle → Ella → Nuwara Eliya → Kandy → Colombo. For couples, families, kids, first-timers and three generations together."
  },
  pricing: {
    days: "7", nights: "6", full: null, slashed: null, token: null,
    note: "No price in this PDF: “It depends on travel dates, hotel category and how many of you are travelling. Tell us yours and we'll send a clear, itemised quote.”",
    optional: []
  },
  itinerary: [
    { day: 1, title: "Land. Breathe. Beach.", locations: "Bandaranaike Airport (CMB), Colombo → Mirissa",
      activities: ["~03:00 — Land at Colombo. Your private chauffeur meets you at arrivals; bags in, seats back, straight down the coast.","Morning — Reach Mirissa. Early check-in, subject to hotel availability.","Midday — Sleep, shower, breakfast. In whatever order the kids decide.","Afternoon — Nothing scheduled. Pool, or the sand at Mirissa Beach.","Sunset — By the water. That's the whole plan."],
      note: "Recover · Reset · Relax. Airport pickup · Mirissa Beach · Night 1 · Mirissa. Day one has a single job: undo the overnight flight. We kept it that way on purpose." },
    { day: 2, title: "Up the Coast to Bentota", locations: "Mirissa → Bentota → Mirissa",
      activities: ["Morning — Slow breakfast. No alarm needed.","Late morning — Scenic drive up the southwest coast to Bentota.","Bentota — River & mangrove safari by boat, then Bentota Beach.","Afternoon — Lunch. A local handicraft or gem outlet on the way, only if you're curious.","Evening — Back to the same room in Mirissa. No packing tonight."],
      note: "Nature · Coast · Leisure. Mangrove safari · Private chauffeur · Night 2 · Mirissa." },
    { day: 3, title: "From Fort Walls to Mountain Air", locations: "Mirissa → Galle Fort → Ella",
      activities: ["Morning — Breakfast, check-out, and a short run along the coast to Galle.","Galle Fort — A slow walk through a walled town that people still live in: Dutch Quarter, Fort Ramparts, Galle Lighthouse, Old Dutch Hospital, colonial streets.","Lunch — Inside the fort, then boutiques and cafés on the old colonial lanes.","Afternoon — Scenic drive inland and uphill to Ella. We stop whenever anyone needs to.","Evening — Check in and settle into Ella's slower hill-town rhythm."],
      note: "Heritage · Road Journey · Mountains. Check-out after breakfast; the longest drive of the week, broken up by Galle. The fort walk comes first, the car hours after lunch — which happens to be prime nap time for smaller travellers. Night 3 · Ella." },
    { day: 4, title: "The Train Through Tea Country", locations: "Ella → Nanu Oya → Nuwara Eliya",
      activities: ["Early — Breakfast. If the train timing allows, a quick stop at Nine Arch Bridge.","Ella Station — Board the scenic train to Nanu Oya.","On board — A few unhurried hours of window: tea plantations, misty mountains, green valleys and local villages.","Nanu Oya — Your private chauffeur meets you off the train.","Afternoon — Tea plantation & factory visit, then Sita Amman Temple. Lunch on the way.","Evening — Check in at Nuwara Eliya. It gets cool up here; bring a layer."],
      note: "Signature day. Train · Tea Country · Ramayana Heritage. Scenic train · Tea estate & factory · Sita Amman Temple · Night 4 · Nuwara Eliya. Train schedules and seats are subject to availability and confirmed closer to travel. With children aboard, we enjoy the view from the windows, not the open doors." },
    { day: 5, title: "Waterfalls, a Tower, and the Sacred City", locations: "Nuwara Eliya → Ramboda → Gampola → Kandy",
      activities: ["Morning — Relaxed breakfast and check-out.","Ramboda — Ramboda Falls, then the Bhaktha Hanuman Temple on the hillside.","Gampola — Ambuluwawa Tower. The views from the lower levels are plenty; the climb to the top is optional.","Afternoon — Into Kandy and check in.","Evening — Temple of the Sacred Tooth Relic, then a slow walk around Kandy Lake."],
      note: "Waterfalls · Culture · Mountain Views. Night 5 · Kandy. The final stretch of Ambuluwawa is a steep, narrow climb and doesn't suit everyone — little ones, grandparents, or anyone uneasy with heights can enjoy the grounds and wait below." },
    { day: 6, title: "Colombo, at Your Pace", locations: "Kandy → Colombo",
      activities: ["Morning — Breakfast, check-out, and the drive down from the hills to Colombo.","Midday — Check in. Lunch, then some proper downtime.","Late afternoon — A relaxed city tour. Pick what appeals, skip what doesn't: Gangaramaya Temple, Independence Square, Colombo Fort, Galle Face Green, shopping, cafés.","Evening — Dinner, and an early night. Tomorrow starts early."],
      note: "City · Heritage · Leisure. Private chauffeur · Night 6 · Colombo. After five days on the road, the city tour is meant to feel like a stroll, not a checklist." },
    { day: 7, title: "Elephants, Then Home", locations: "Colombo → Pinnawala → Bandaranaike Airport (CMB)",
      activities: ["Early — Breakfast and check-out. Bags go into the car and stay there all day.","~09:15 — Feeding time at Pinnawala. The part children talk about for weeks.","~10:00 — The herd walks down to the Ma Oya river to bathe. Watch from the riverbank.","Lunch — Nearby, unhurried.","Afternoon — Straight to the airport, with hours in hand. No extra stops.","23:40 — Departure from Colombo."],
      note: "Wildlife · Last Experience · Departure. Why nothing else today? A late flight is easy to miss by adding “one more stop.” We don't. Feeding and bathing times are set by the elephant orphanage and may shift slightly on the day." }
  ],
  stays: { note: "", items: [] },
  included: {
    inclusions: ["Accommodation · 6 nights: Mirissa 2N · Ella 1N · Nuwara Eliya 1N · Kandy 1N · Colombo 1N (hotel category to be confirmed)","Private transportation: chauffeur-driven private vehicle for the route (vehicle type to be confirmed)","Airport transfers: arrival pickup on Day 1 · departure drop on Day 7","Private chauffeur, with you from arrival to departure","Sightseeing mentioned in the itinerary (entrance fees to be confirmed)","Scenic train · Ella → Nanu Oya (seat class and tickets subject to availability)","Pinnawala elephant experience (entry arrangements to be confirmed)","Breakfast + dinner (meal plan subject to package selection)","Other inclusions, listed in your final quote"],
    exclusions: ["International flights","Visa / ETA fees","Personal expenses","Meals not mentioned","Optional activities & add-ons","Travel insurance","Tips","Anything not listed under inclusions"],
    highlights: []
  },
  tour: {
    pickup: "Bandaranaike International Airport (CMB), Colombo",
    dropoff: "Bandaranaike International Airport (CMB), Colombo",
    accommodation: "6 nights, 5 stays: Mirissa 2N · Ella 1N · Nuwara Eliya 1N · Kandy 1N · Colombo 1N. Hotels are shared with your personalised quote, based on your dates and preferred category.",
    transport: ["Private chauffeur-driven car, arrival to departure (vehicle type to be confirmed)","Scenic train, Ella → Nanu Oya (subject to availability)","Boat: Bentota river & mangrove safari"],
    meal: "Breakfast + dinner (meal plan subject to package selection)",
    group: "Private journey · couples, families, kids, first-timers, three generations together",
    difficulty: S("Easy (climbs and walks stay optional for every age)"),
    best: null
  },
  media: { cover: "Blue train crossing Nine Arch Bridge, Ella (or tea hills in morning mist) · full-bleed, landscape", alt: S("Blue train crossing the Nine Arch Bridge in Ella, surrounded by green tea hills, Sri Lanka") },
  gallery: ["Mirissa Beach at sunset","Boat in the Bentota mangroves","Galle Fort ramparts & lighthouse","Nine Arch Bridge, Ella","Ella → Nanu Oya train through tea country","Ceylon tea plantation & factory","Sita Amman Temple by the hill stream","Ramboda Falls","Ambuluwawa Tower, Gampola","Temple of the Sacred Tooth Relic & Kandy Lake","Gangaramaya Temple / Galle Face Green, Colombo","Pinnawala elephants at feeding time","Elephants bathing in the Ma Oya river"],
  shorts: null, pastPhotos: null,
  testimonials: [],
  related: [],
  faqs: [
    { q: "Is this trip good for families with small children?", a: "Yes. Activities can be adjusted according to the age, comfort and routine of younger travellers. Share your child's routine when you enquire, and we'll shape the days around naps, feeds and early nights. A few things, like the Ambuluwawa climb, simply aren't for little ones — those stay optional." },
    { q: "Why does this route suit families and grandparents?", a: "Private, chauffeur-led (stop whenever someone needs to), comfortable pacing, no needless hotel hopping (two nights in Mirissa first), flexible sightseeing, plenty of downtime, a daytime scenic train, no rushed airport run, and climbs and walks stay optional so nobody is pushed into anything." },
    { q: "Is the scenic train guaranteed?", a: "Schedules and seat classes are set by the railway. Seats are subject to availability and confirmed closer to travel." },
    { q: "Can I check in early on Day 1?", a: "Early check-in is subject to hotel availability. Want a room guaranteed on arrival? Ask us to quote for it." },
    { q: "Do I have to climb Ambuluwawa Tower?", a: "No. The climb to the top is optional. The final section is steep and narrow and may not suit everyone." },
    { q: "What should I wear at temples?", a: "Shoulders and knees covered, shoes off at the door. A light scarf in the day bag solves most of it." },
    { q: "What is the weather like?", a: "Warm and humid on the coast; noticeably cooler in Ella and Nuwara Eliya, especially evenings. Bring layers." },
    { q: "Do I need a visa?", a: "Check current Sri Lanka entry requirements for your passport before you travel. We're happy to point you the right way." },
    { q: "How much does it cost?", a: "Your price, your way. It depends on travel dates, hotel category and how many of you are travelling. Send us your travel dates, number of adults, children's ages and preferred hotel category, and we'll send a clear, itemised quote." }
  ],
  terms: [
    { t: "Inclusions", d: "Final inclusions depend on the package you choose. Anything marked “To be confirmed” is locked in your personalised quote — subject to package selection / confirmation." },
    { t: "Hotels", d: "Hotels are shared with your personalised quote, based on your dates and preferred category." },
    { t: "The train", d: "Schedules and seat classes are set by the railway. Seats are subject to availability and confirmed closer to travel." },
    { t: "Timings", d: "All times are indicative. The fixed ones: ~03:00 arrival, Pinnawala ~09:15 and ~10:00, and your 23:40 flight." },
    { t: "Day 1 check-in", d: "Early check-in is subject to hotel availability. A room guaranteed on arrival can be quoted for." },
    { t: "The last day", d: "You check out on Day 7 morning. A day-use room before the flight can be requested, at additional cost." },
    { t: "With little ones", d: "Galle's ramparts and temple steps are uneven — a baby carrier is often easier than a stroller. Child seats on request, subject to confirmation." },
    { t: "Flexibility", d: "The order of sightseeing may shift for weather, local conditions or opening hours. We'll always tell you why." },
    { t: "Optional extension", d: "Dambulla Cave Temple is not part of the core package. Quoted separately on request, along with any extra time it needs." }
  ]
},


/* ───────────────────────── VIETNAM IN DEPTH ───────────────────────── */
{
  id: "vietnam-in-depth", tab: "Vietnam In Depth", sub: "9D / 8N", pdf: "Luxpackers_Vietnam_9D8N.pdf",
  checks: [
    "The PDF gives a price range (₹75,000–85,000). Full Amount below uses the starting price, ₹75,000.",
    "The PDF has no payment policy, so Token Amount is left for you to set.",
    "These are fixed dates, 5–13 Nov 2026, which have already passed. Update the dates if this runs again."
  ],
  basics: {
    destination: "Vietnam",
    market: "International",
    tripType: "Group trip",
    title: "VIETNAM IN DEPTH",
    slug: "vietnam-in-depth",
    theme: S("Adventurous, Scenic, Island"),
    subtitle: "Mountains. Rivers. Lanterns. Islands.",
    description: "North to South, in Nine Days. Nine days, four bases, one country that changes completely every few hundred kilometres: the cool mountain north, the heritage centre and the island south. Sapa’s H'Mong villages and valley viewpoints, Ninh Binh’s karst rivers, Hoi An at lantern hour, the Golden Bridge in Ba Na Hills and island days on Phu Quoc. Visa and travel insurance are included, with private airport and hotel transfers."
  },
  pricing: {
    days: "9", nights: "8", full: "75000", slashed: null, token: null,
    note: "₹75,000–85,000 per person + taxes (5% GST + 2% TCS). Final price depends on hotel choice and room category.",
    optional: [
      { name: "+1 Night · Ho Chi Minh City Extension", dur: "+1 Night", price: "Priced on request", note: "Cu Chi Tunnels tour; Saigon River dinner cruise (optional); overnight in Ho Chi Minh City; next-day transfer to the airport." }
    ]
  },
  itinerary: [
    { day: 1, title: "Up Into the Clouds.", locations: "Hanoi → Sapa · Moana Sapa viewpoint · Cat Cat Village",
      activities: ["Early morning — leave Hanoi for the mountains of the far north.","Arrival — Moana Sapa viewpoint: swings, frames and the valley falling away beneath you.","Afternoon — Cat Cat Village: H'Mong homes, weaving traditions and the waterfall at the bottom of the path.","Evening — check in, find a warm bowl of something, early night. Sapa runs cooler than Hanoi."],
      note: "5 Nov · Thu. Included today: Lunch, Hanoi → Sapa transfer, Sightseeing, Stay · Sapa. Pack a warm layer in your day bag. You'll want it by sunset." },
    { day: 2, title: "Roof of Indochina, Your Call.", locations: "Sapa → Hanoi",
      activities: ["Morning — your pick: Fansipan by cable car (optional add-on: pre-book with us, or buy at the desk), or a slow Sapa morning: coffee with a view, the town market, one more walk before the road.","Afternoon / Evening — VIP bus back to Hanoi. Check in, then the Old Quarter if you have the energy."],
      note: "6 Nov · Fri. Included today: Breakfast, VIP bus to Hanoi, Stay · Hanoi. Fansipan is weather-dependent. If the summit is in cloud, the slow morning is the smarter choice." },
    { day: 3, title: "Rivers Through Limestone.", locations: "Hanoi ⇄ Ninh Binh",
      activities: ["Morning — drive south from Hanoi to Ninh Binh.","Midday — rowboat ride between limestone karsts and paddy fields, then a local lunch.","Route (one included): Tam Coc & Bich Dong — river caves, rice fields and the pagoda set into the cliff; or Trang An & Hoa Lu — grotto-to-grotto boat route and Vietnam's ancient capital.","Evening — return to Hanoi. Overnight in Hanoi."],
      note: "7 Nov · Sat. Included today: Breakfast, Lunch, Boat ride, Guide & entries, Stay · Hanoi." },
    { day: 4, title: "Marble, Baskets & Lanterns.", locations: "Hanoi → Da Nang · Marble Mountains · Hoi An",
      activities: ["Morning — land in Da Nang. Marble Mountains: caves, pagodas and steps cut into the rock.","Afternoon — coconut basket boat ride through the water palms.","Evening — Hoi An Ancient Town and night market, then a lantern boat on the river.","Night — it's a Sunday, so the Dragon Bridge fire show is on. Add Lady Buddha Pagoda: self-explore, or we arrange it at extra cost."],
      note: "8 Nov · Sun. Early-morning flight, Hanoi → Da Nang. Included today: Breakfast, Lunch, Marble Mountains, Basket boat, Lantern boat, Private airport transfers, Stay · Da Nang." },
    { day: 5, title: "A Bridge Held Up by Hands.", locations: "Ba Na Hills · Da Nang",
      activities: ["Morning — cable car up from the lowlands into Ba Na Hills.","Late morning — the Golden Bridge, cradled by two giant stone hands above the forest.","Lunch — included, up on the hill.","Afternoon — Fantasy Park: rides and games, at whatever speed you like.","Evening — leisure in Da Nang. Beach walk, seafood, your call."],
      note: "9 Nov · Mon. Included today: Breakfast, Lunch, Cable car, Ba Na Hills entry, Stay · Da Nang. Everyone has seen the photo of this bridge. Today you're in it." },
    { day: 6, title: "Island Time, Unscheduled.", locations: "Da Nang → Phu Quoc",
      activities: ["Morning — fly south to Phu Quoc and check in.","Afternoon — at leisure. Grand World, Phu Quoc town or Starfish Beach, on your own, or book a tour with us in advance at extra cost.","Evening — the night market in central Phu Quoc. Grilled seafood, fresh fruit, a slow walk."],
      note: "10 Nov · Tue. Included today: Breakfast, Private airport transfers, Stay · Phu Quoc. First day on the island and nothing is booked. That's deliberate." },
    { day: 7, title: "Theme Park, Then the Wild.", locations: "Phu Quoc · VinWonders · Vinpearl Safari",
      activities: ["Morning — VinWonders theme park: rides, shows and water play.","Lunch — on us, with the included lunch voucher.","Afternoon — Vinpearl Safari: the island's wildlife park.","Evening — Grand World and the Teddy Bear Museum, if you still have legs."],
      note: "11 Nov · Wed. Included today: Breakfast, VinWonders entry, Vinpearl Safari entry, Lunch voucher, Stay · Phu Quoc. Wear proper walking shoes. The parks are big, and you'll do both." },
    { day: 8, title: "Four Islands, One Cable Car.", locations: "Phu Quoc · Fingernail Island, May Rut, Gam Ghi, Mong Tay · Hon Thom · Sunset Town",
      activities: ["Morning — island hopping: Fingernail Island, May Rut, Gam Ghi, Mong Tay.","Midday — snorkelling, beach time and a local lunch.","Afternoon — the Hon Thom cable car, the world's longest over the sea.","Sunset — the tour ends at Sunset Town.","Evening, your call — back with the group (included transfer from Sunset Town to your hotel), or stay for the show: Kiss of the Sea and fireworks, and return to the hotel on your own."],
      note: "12 Nov · Thu. Included today: Breakfast, Lunch, 4-island tour, Hon Thom cable car, Snorkelling, Hotel transfer, Stay · Phu Quoc." },
    { day: 9, title: "One Last Look, Then Home.", locations: "Phu Quoc → India via Ho Chi Minh City or Bangkok",
      activities: ["Morning — check out and private transfer to Phu Quoc airport.","Long layover? — with an evening flight out of Ho Chi Minh City, there's time for a half-day city tour: Notre Dame Cathedral & Central Post Office, War Remnants Museum, Ben Thanh Market. Self-guided, or arranged by us at extra cost.","Evening — transfer to the airport for your international flight."],
      note: "13 Nov · Fri. Included today: Breakfast, Private airport transfer." }
  ],
  stays: {
    note: "Hotel category: Standard 3★ / 4★ or similar. Hotel as per the availability of rate at the time of booking. Upgraded room categories where possible. No hotel names or Luxury / Ultra Luxury tier in the PDF.",
    items: [
      { days: "Night 1", location: "Sapa", nights: "1 Night", hotel: "Premium 3–4★ hotel" },
      { days: "Nights 2–3", location: "Hanoi", nights: "2 Nights", hotel: "Premium 3–4★ hotel" },
      { days: "Nights 4–5", location: "Da Nang", nights: "2 Nights", hotel: "Premium 3–4★ hotel" },
      { days: "Nights 6–8", location: "Phu Quoc", nights: "3 Nights", hotel: "Premium 3–4★ hotel" }
    ]
  },
  included: {
    inclusions: ["Stays at premium 3–4★ hotels, with possible upgraded room categories","Breakfast every day at the hotel","Lunches on day tours, as per itinerary","Vietnam visa","Travel insurance","Private airport & hotel transfers","All tickets & SIC tours, unless marked private","Sightseeing & activities as per itinerary","Domestic flights up to ₹5,000 per person, per flight*"],
    exclusions: ["International airfare","Personal expenses: shopping, drinks, beverages, food","Optional add-ons, and anything not mentioned in inclusions"],
    highlights: ["Three Vietnams, one trip — Cool mountain north, heritage centre, island south","Mountain air in Sapa — H'Mong villages, valley viewpoints, waterfalls","Vietnam from the water — Karst rivers, basket boats, lantern boats, open sea","Two cable cars included — Up into Ba Na Hills, then across the sea to Hon Thom","After-dark Hoi An — The ancient town and night market, lantern-lit","Island days that breathe — Snorkelling, white sand, a free day on Phu Quoc","Local lunches on tour days — Six lunches, eaten where the locals eat","Visa & insurance included — Plus private airport and hotel transfers","Your pace, your add-ons — Fansipan, fire shows, a Saigon night: you decide","Routed for the photos — Planned by a photographer, around the light"]
  },
  tour: {
    pickup: "Hanoi (private airport & hotel transfer; arrival timings set around your flight)",
    dropoff: "Phu Quoc airport (private transfer), flying to India via Ho Chi Minh City or Bangkok",
    accommodation: "Premium 3–4★ hotels (Standard 3★ / 4★ or similar): Sapa 1N · Hanoi 2N · Da Nang 2N · Phu Quoc 3N",
    transport: ["Day 1 · Hanoi → Sapa by road, early morning","Day 2 · Sapa → Hanoi by VIP bus, afternoon or evening","Day 3 · Hanoi ⇄ Ninh Binh on the day tour","Day 4 · Hanoi → Da Nang, early-morning flight","Day 6 · Da Nang → Phu Quoc, morning flight","Day 9 · Phu Quoc → India via Ho Chi Minh City or Bangkok","Private airport & hotel transfers"],
    meal: "Breakfast every day at the hotel + lunches on day tours, as per itinerary (14 meals)",
    group: null,
    difficulty: S("Easy to moderate"),
    best: "Departure: 5 – 13 Nov 2026"
  },
  media: { cover: S("Golden Bridge held by giant stone hands, Ba Na Hills"), alt: S("The Golden Bridge held up by two giant stone hands above the forest in Ba Na Hills, Vietnam") },
  gallery: [S("Moana Sapa viewpoint"), S("Cat Cat Village & waterfall, Sapa"), S("Rowboat through the karsts, Ninh Binh"), S("Marble Mountains, Da Nang"), S("Coconut basket boat ride"), S("Hoi An lantern boat at night"), S("Golden Bridge, Ba Na Hills"), S("Hon Thom sea cable car"), S("Phu Quoc 4-island tour, snorkelling"), S("Sunset Town, Phu Quoc")],
  shorts: "Founder’s travel films are on @visionbyumang (Instagram) and the Vision By Umang YouTube channel. The PDF gives no individual video links.",
  pastPhotos: null,
  testimonials: [
    { quote: "The itinerary was perfectly curated we explored beautiful landscapes, tasted amazing food, and soaked in the culture without any stress.", name: "Aman T.", trip: "9-day Vietnam trip · Google Reviews" },
    { quote: "The coordination was spot-on — transfers, hotel check-ins, and local tours were all perfectly timed, allowing us to make the most of each day without ever feeling rushed.", name: "Santosh B.", trip: "Vietnam, as a couple · Google Reviews" },
    { quote: "Umang and his whole team was so good, they managed everything smoothly keeping our requirements in mind. … They know the perfect timings for clicks and will help you to get the same.", name: "DJ D.", trip: "Vietnam trip · Google Reviews" },
    { quote: "From the moment we landed, we were greeted with punctual airport pick-ups and, timely drop-offs, making our journey smooth and hassle-free.", name: "Revati W.", trip: "Girls' trip to Vietnam · Google Reviews" },
    { quote: "We visited Phu Quoc, Danang, Phong Nha Cave, Hanoi with Ninh Binh & Halong Bay. The experience was unique & Kudos to your team for your efforts.", name: "Ankur G.", trip: "Vietnam trip · Google Reviews" },
    { quote: "He's also a passionate photographer—and yes, he clicked some amazing photos of me throughout the trip!", name: "Priya P.", trip: "Bali & Vietnam group trip · Google Reviews" }
  ],
  related: [S("Vietnam New Year’s Signature Trip – 11D10N"), S("Vietnam Roadtrip Experience"), S("Thailand – Island Escape & City Adventures")],
  faqs: [
    { q: "Are domestic flights included?", a: "Domestic flights up to ₹5,000 per person, per flight. Fares are as per online prices. If a domestic flight costs more than ₹5,000, the client pays the difference." },
    { q: "Are visa and insurance included?", a: "Yes. Vietnam visa and travel insurance are in the package." },
    { q: "What do group (SIC) tours include?", a: "Group (SIC) tours include guide, entry and local lunch unless stated." },
    { q: "Is the Fansipan cable car included?", a: "No. Fansipan cable car is an optional add-on: pre-book with us, or buy at the desk. Fansipan is weather-dependent." },
    { q: "Can I extend the trip?", a: "Yes. +1 Night · Ho Chi Minh City Extension: Cu Chi Tunnels tour, optional Saigon River dinner cruise, overnight in Ho Chi Minh City and next-day transfer to the airport. Priced on request, based on your flight out of Saigon." },
    { q: "What should I pack?", a: "Pack light clothes, sunblock, walking shoes, a fanny pack and a water bottle." }
  ],
  terms: [
    { t: "Itinerary", d: "Itinerary is tentative and subject to change as per flight route. Tour order may shift with availability, weather or traffic." },
    { t: "Hotels", d: "Hotel category: Standard 3★ / 4★ or similar. Hotel as per the availability of rate at the time of booking. Rates are subject to change as per season and booking timelines. Early check-in depends on room availability." },
    { t: "Domestic flights", d: "*Fares are as per online prices. If a domestic flight costs more than ₹5,000, the client pays the difference." },
    { t: "Taxes", d: "Taxes: 5% GST + 2% TCS. TCS is adjustable/claimable when you file your ITR; GST is not." },
    { t: "SIC tours", d: "Group (SIC) tours include guide, entry and local lunch unless stated." },
    { t: "Missed flights or tours", d: "Flights or tours missed due to delays are not Luxpackers' responsibility." },
    { t: "High season", d: "High season moves flight and land prices, so earlier is cheaper." },
    { t: "Payee name", d: "Luxpackers is a brand of Travel with Vision. That's the name you'll see on all payments." }
  ]
},

/* ───────────────────────── JAPAN FUJI TO OSAKA BAY ───────────────────────── */
{
  id: "japan-fuji-osaka", tab: "Japan Fuji to Osaka", sub: "8D / 7N", pdf: "Luxpackers_Japan_FujiToOsakaBay_8D7N_..._TEXT.pdf",
  checks: [
    "This PDF is a personal quote for one family (5 adults + 2 children). Don't put the customer’s name on the website. The family-specific lines (Day 3 split day, group size) may need generalising.",
    "The price in the PDF is still a placeholder (“₹ PRICE”). Fill Full Amount and Token Amount yourself.",
    "The reviews in this PDF are about Vietnam trips, so they are not added as Japan testimonials."
  ],
  basics: {
    destination: "Japan",
    market: "International",
    tripType: "Custom / private trip",
    title: "JAPAN, FUJI TO OSAKA BAY",
    slug: "japan-fuji-to-osaka-bay",
    theme: S("Family, Culture, Scenic"),
    subtitle: "Mountains, temples and a harbour sunset, at a pace that suits seven",
    description: "You land at Narita in the afternoon and do nothing that evening. Then Mt. Fuji from the Hakone side, a day where the kids get DisneySea while the grown-ups get Tokyo their way, the bullet train to Kyoto, deer in Nara, and two nights by Osaka Bay with a Ferris wheel outside your window. We fix the vans, timings and tickets, so the only plan you make is where to eat."
  },
  pricing: {
    days: "8", nights: "7", full: null, slashed: null, token: null,
    note: "Price is a placeholder in the PDF: “₹ PRICE per person + 5% GST + 2% TCS”. Adult, child (11 yrs) and child (6 yrs) prices are also blank.",
    optional: []
  },
  itinerary: [
    { day: 1, title: "Narita → Tokyo: land, check in, slow down", locations: "Tokyo · arrival & leisure",
      activities: ["14:30 — Land at Tokyo Narita International Airport (NRT). Clear immigration and collect your bags.","Arrivals hall — Meet your driver and load up the private Toyota HiAce. There's room for all seven of you and your luggage.","Afternoon — Private transfer to your Tokyo hotel, about 75–90 minutes depending on traffic.","Evening — Check in. The rest of the day is at leisure: a walk around the neighbourhood, a konbini snack run, an early night."],
      note: "Included today: Private airport transfer, Hotel stay · Tokyo, Dedicated team support. Hotel check-in is usually from 15:00. Pick up a Suica or PASMO card at the airport for small purchases." },
    { day: 2, title: "Mt. Fuji & Hakone: ropeway, volcano, lake", locations: "Tokyo · Mt. Fuji & Hakone day tour · 12-hour vehicle",
      activities: ["09:00 — Hotel pick-up in your private HiAce.","Morning — Drive to Hakone, with Mt. Fuji views on the way on a clear day.","Late morning — Hakone Ropeway over Owakudani, the steaming volcanic valley. Try a black egg, boiled in the hot springs.","Afternoon — Lake Ashi cruise, then a stop at Hakone Shrine and its red torii standing in the water.","If time allows — Gotemba Premium Outlets, with Fuji as the backdrop to your shopping.","Evening — Drive back to your Tokyo hotel."],
      note: "Included today: Private HiAce · 12 hrs, Hakone Ropeway, Lake Ashi cruise, 2 × 500 ml water / person. Fuji hides in cloud on some days, and mornings are clearest. The ropeway and cruise may pause in strong wind." },
    { day: 3, title: "DisneySea for the kids, Tokyo your way", locations: "Tokyo · two plans, two vehicles",
      activities: ["Group 1 · 2 adults + 2 kids — Tokyo DisneySea, full day. Private pick-up from the hotel to DisneySea, and drop back to the hotel when you're done. General entry tickets included.","Group 2 · 3 adults — A vehicle at your disposal for 10 hours. Shopping, food streets, museums or a second look at Tokyo. We'll finalise this plan with you before travel.","Evening — Both groups back at the hotel. Pick-up times are set to each group's day."],
      note: "Included today: DisneySea general entry · Group 1, Hotel ⇄ DisneySea transfers, Vehicle 2 · 10 hrs, 2 × 500 ml water / person. Ideas for the 10 hours: Tsukiji Outer Market, Ginza & Nihonbashi, Akihabara, Ueno Park, Shinjuku Gyoen, Odaiba, Omoide Yokocho, Kappabashi Street." },
    { day: 4, title: "Tokyo's big hitters, then the bullet train", locations: "Tokyo city tour → evening Shinkansen to Kyoto",
      activities: ["09:00 — Check-out and hotel pick-up. Bags go into the HiAce for the day.","Late morning — Asakusa: Senso-ji and Nakamise street, with Tokyo Skytree rising across the river.","Midday — Imperial Palace outer gardens and the Nijubashi bridge.","Afternoon — Meiji Jingu and Harajuku's Takeshita Street, then the Shibuya Scramble Crossing.","Evening — Drop at Tokyo Station. Shinkansen to Kyoto, about 2 hrs 15 min (suggested Nozomi).","On arrival — Private transfer from Kyoto Station to your Kyoto hotel. Check in."],
      note: "Included today: Private HiAce · from 9:00, All entry tickets, Shinkansen Tokyo → Kyoto, Kyoto Station → hotel, 2 × 500 ml water / person. Large suitcases over 160 cm (H+W+D) need an oversized-baggage seat. Luggage forwarding to Kyoto is an easy option." },
    { day: 5, title: "Kyoto: torii, temples and bamboo", locations: "Kyoto · full day at ease · 12-hour vehicle",
      activities: ["09:00 — Hotel pick-up, then Fushimi Inari Taisha and its torii tunnels.","Late morning — Kiyomizu-dera, then a stroll down the stone lanes of Ninenzaka and Sannenzaka.","Afternoon — Kinkaku-ji, the Golden Pavilion, then Arashiyama: the Bamboo Grove and Togetsukyo Bridge.","Evening — Gion, Kyoto's old teahouse district, as the lanterns come on. Return to the hotel."],
      note: "Included today: Private HiAce · 12 hrs, All entry tickets, 2 × 500 ml water / person. Fushimi Inari's full hike takes 2–3 hours. Most families turn back at the first viewpoint. Wear comfortable shoes." },
    { day: 6, title: "Kyoto → Nara → Tempozan, Osaka", locations: "Kyoto → Nara → Osaka Bay · 10-hour vehicle",
      activities: ["09:00 — Check-out and hotel pick-up. Drive to Nara, about an hour.","Morning — Nara Park and its free-roaming deer, then Todai-ji and its giant bronze Buddha.","Midday — Kasuga Taisha, the shrine of thousands of stone and bronze lanterns. Lunch in Nara.","By 16:00 — Drive to Osaka Bay and check in at your Tempozan / Osakako hotel.","Sunset — Suggested: the Tempozan Ferris Wheel, LEGOLAND Discovery Center Osaka and the harbour at sunset."],
      note: "Included today: Private HiAce · 10 hrs, Todai-ji entry, Drop at Osaka hotel, 2 × 500 ml water / person. The Tempozan attractions are at your own cost. The Tempozan stay is availability-based, and the hotel and location may vary at booking." },
    { day: 7, title: "Osaka: a castle, a sky garden, street food", locations: "Osaka · full day · 10-hour vehicle",
      activities: ["09:00 — Hotel pick-up. Osaka Castle and its grounds, then Shitenno-ji.","Midday — Kuromon Market for a grazing lunch.","Afternoon — Umeda Sky Building, the open-air Floating Garden Observatory.","Evening — Dotonbori & Shinsaibashi: neon, takoyaki and shopping arcades. Return to Tempozan."],
      note: "Included today: Private HiAce · 10 hrs, Osaka Castle, Umeda Sky, 2 × 500 ml water / person." },
    { day: 8, title: "Private drop at Osaka Itami Airport (ITM)", locations: "Departure",
      activities: ["Morning — Check-out. A last walk along the bay if time allows.","Approx. 11:00 — Private HiAce pick-up from the hotel. Set from your flight, with a comfortable buffer.","14:00 — Flight departs Osaka Itami Airport (ITM). Sayonara, Japan."],
      note: "Good to know: the bay to Itami takes about 45–60 minutes. The final pick-up time is confirmed once your ticket is issued." }
  ],
  stays: {
    note: "Hotels are shown “or similar” and confirmed at booking. Hotel names are blank in the PDF (“HOTEL NAME”). The Tempozan / Osakako stay is fully availability-based. No Luxury / Ultra Luxury tier in the PDF.",
    items: [
      { days: "Days 1–3", location: "Tokyo", nights: "3 nights", hotel: "Standard 3★/4★ · or similar" },
      { days: "Days 4–5", location: "Kyoto", nights: "2 nights", hotel: "Standard 3★/4★ · or similar" },
      { days: "Days 6–7", location: "Osaka · Tempozan", nights: "2 nights", hotel: "Standard 3★/4★ · or similar" }
    ]
  },
  included: {
    inclusions: ["Hotel accommodation only, 7 nights in Standard 3★/4★ hotels or similar: Tokyo 3N, Kyoto 2N, Osaka · Tempozan 2N","All tours on a private basis in a private Toyota HiAce: 10-hour timeline, start time 9:00 am (12 hrs on Mt. Fuji & Kyoto days)","Private arrival transfer from Narita (NRT) and private drop at Osaka Itami Airport (ITM)","Day 3: second vehicle at disposal for 10 hours","Tokyo DisneySea tickets (general entry): 2 adults + 2 children","All entry tickets for the sightseeing in this itinerary, incl. Hakone Ropeway, Lake Ashi cruise, Kiyomizu-dera, Todai-ji, Osaka Castle, Shitenno-ji, Umeda Sky","1 × Shinkansen ride, Tokyo → Kyoto, ordinary reserved (suggested train · final at booking)","Dedicated team support and trip management","Complimentary: 2 × 500 ml drinking water per person on every tour day"],
    exclusions: ["International and domestic flights","Japan visa and travel insurance","All meals: breakfast, lunch and dinner","Tempozan attractions: Ferris Wheel, LEGOLAND Discovery Center, Kaiyukan","Entries not part of the itinerary sightseeing","Luggage forwarding and oversized-baggage seats","Early check-in, late check-out and hotel city tax","Personal expenses and anything not listed under “Included”"],
    highlights: ["Mt. Fuji & Hakone: the ropeway over a steaming volcanic valley and a cruise on Lake Ashi.","A split day that suits everyone: DisneySea for the kids, a free-hand Tokyo day for the adults.","Tokyo's big hitters in one day: Asakusa, Shibuya, Meiji Jingu and the Imperial Palace.","Shinkansen to Kyoto: about two and a quarter hours on the bullet train.","Kyoto at ease: torii tunnels, wooden temples and the bamboo grove, with no rush.","Nara: bowing deer and the giant bronze Buddha of Todai-ji.","Two nights on Osaka Bay: the Tempozan Ferris Wheel, LEGOLAND Discovery Center and harbour sunsets."]
  },
  tour: {
    pickup: "Tokyo Narita International Airport (NRT) · arrive 14:30",
    dropoff: "Osaka Itami Airport (ITM) · depart 14:00",
    accommodation: "Hotel accommodation only (no meals), Standard 3★/4★ or similar: Tokyo 3N · Kyoto 2N · Osaka · Tempozan 2N",
    transport: ["Private Toyota HiAce with driver, every touring day","Shinkansen Tokyo → Kyoto (ordinary reserved)","Day 3: second private vehicle at disposal for 10 hours"],
    meal: "No meals (hotel accommodation only). Complimentary 2 × 500 ml drinking water per person on every tour day.",
    group: "5 adults + 2 children (11 & 6 yrs)",
    difficulty: S("Easy (every tour starts at 9 am)"),
    best: null
  },
  media: { cover: S("Mt. Fuji above Lake Ashi with the red torii of Hakone Shrine"), alt: S("Mount Fuji rising behind Lake Ashi and the red torii gate of Hakone Shrine, Japan") },
  gallery: [S("Hakone Ropeway over Owakudani"), S("Lake Ashi cruise"), S("Senso-ji, Asakusa"), S("Shibuya Scramble Crossing"), S("Fushimi Inari torii tunnels"), S("Arashiyama Bamboo Grove"), S("Deer in Nara Park"), S("Tempozan Ferris Wheel, Osaka Bay"), S("Dotonbori at night")],
  shorts: null, pastPhotos: null,
  testimonials: [],
  related: [S("Japan Group Trip – 10D9N")],
  faqs: [
    { q: "What time do tours start?", a: "Every tour starts at 9 am. The long days get a 12-hour vehicle." },
    { q: "Are meals included?", a: "No. Hotel accommodation only. All meals (breakfast, lunch and dinner) are not included." },
    { q: "Are entry tickets included?", a: "All entry tickets for the sightseeing in this itinerary are included, incl. Hakone Ropeway, Lake Ashi cruise, Kiyomizu-dera, Todai-ji, Osaka Castle, Shitenno-ji, Umeda Sky. All entries pre-booked, so no ticket queues on the day." },
    { q: "Can I take big suitcases on the Shinkansen?", a: "Large suitcases over 160 cm (H+W+D) need an oversized-baggage seat. Luggage forwarding to Kyoto is an easy option." },
    { q: "Will we see Mt. Fuji?", a: "Fuji hides in cloud on some days, and mornings are clearest. The ropeway and cruise may pause in strong wind." }
  ],
  terms: [
    { t: "Hotels", d: "Hotels: confirmed at booking, “or similar”, as per availability of rate at that time. The Tempozan / Osakako stay and its location may vary with availability. Rates may change with season and booking timelines." },
    { t: "Timings", d: "All times are approximate and may shift with traffic, weather and opening hours." },
    { t: "Taxes", d: "+ 5% GST + 2% TCS. TCS is adjustable when you file your ITR. GST is not. Rates are subject to change as per season and booking timelines." },
    { t: "Payee name", d: "Luxpackers is a brand of Travel with Vision, our registered firm. Payments, invoices and GST all carry that name." }
  ]
},

/* ───────────────────────── BALI ───────────────────────── */
{
  id: "bali", tab: "Bali", sub: "9D / 8N", pdf: "Bali Customisable Trip - 9D8N.pdf",
  checks: [
    "The PDF gives no price, so Pricing is empty apart from days and nights.",
    "The nights don’t match: the inclusions say 3N South Bali + 2N Ubud, but the day plan has 2 nights in South Bali (Days 1–2) and 3 in Ubud (Days 6–8). Confirm which is right.",
    "Two stray phrases in the PDF were left out: “Speedboat to the surrounding islands” on Day 1 and “Scuba diving” on Day 6."
  ],
  basics: {
    destination: "Bali",
    market: "International",
    tripType: "Custom / private trip",
    title: "BALI CUSTOMISABLE TRIP",
    slug: "bali-customisable-trip",
    theme: S("Island, Adventurous, Relaxed"),
    subtitle: "Uluwatu · Nusa Penida · Gili Trawangan · Ubud",
    description: "Welcome to paradise! Nine days across Uluwatu, Nusa Penida, Gili Trawangan and Ubud: a South Bali tour with GWK Park, Uluwatu Temple and a 2-hour Balinese spa, the Nusa Penida island tour, two nights on Gili Trawangan with snorkelling and cycling, a Mount Batur sunrise jeep adventure, and Ubud’s rice terraces, coffee plantation, Monkey Forest and waterfalls. 100% customisation."
  },
  pricing: {
    days: "9", nights: "8", full: null, slashed: null, token: null,
    note: "No price or payment policy in this PDF.",
    optional: [
      { name: "Add an extra day in Bali", dur: "+1 day", price: "Not in PDF", note: "" },
      { name: "Labuan Bajo – island adventure", dur: "3D/2N", price: "Not in PDF", note: "" },
      { name: "Jakarta – city escape", dur: "3D/2N", price: "Not in PDF", note: "" },
      { name: "Raja Ampat – luxury island stay", dur: "3D/2N", price: "Not in PDF", note: "" },
      { name: "Watersports at Nusa Dua", dur: "Activity add-on", price: "Not in PDF", note: "" }
    ]
  },
  itinerary: [
    { day: 1, title: "Welcome to Paradise", locations: "Kuta / Seminyak / Canggu",
      activities: ["Private transfer to your hotel in Kuta/Seminyak/Canggu.","Hotel check-in & free time for leisure.","Relax, freshen up and enjoy your first evening in Bali."],
      note: "Evening Options (extra cost): Finns Beach Club for sunset & cocktails; Bounty Dinner Cruise with music & buffet; Visit Beach Love by renting a scooter for a magical sunset view." },
    { day: 2, title: "South Bali Tour + Spa", locations: "GWK Cultural Park · Pandawa / Suluban Beach · Uluwatu Temple",
      activities: ["Start with breakfast at your hotel.","Visit GWK Cultural Park, known for its giant Garuda statue.","Spend time at Pandawa or Suluban Beach, both stunning & Instagram-worthy!","Visit Uluwatu Temple, perched over a cliff with panoramic sea views.","Back to hotel and relax.","End the day with a 2-hour traditional Balinese Spa to rejuvenate."],
      note: "Optional: watch the Kecak Fire Dance during sunset. Meals: Breakfast." },
    { day: 3, title: "Nusa Penida West Island Tour", locations: "Nusa Penida · Kelingking Beach · Broken Beach · Angel’s Billabong · Crystal Bay",
      activities: ["Early breakfast & speedboat to Nusa Penida.","Visit the island’s highlights: Kelingking Beach Viewpoint (the iconic T-Rex cliff!), Broken Beach, Angel’s Billabong natural pool, Crystal Bay for a chill swim.","Enjoy lunch at a local restaurant and check in at your Nusa Penida hotel.","Check-in and overnight in Nusa Penida."],
      note: "Meals: Breakfast, Lunch." },
    { day: 4, title: "Transfer to Gili Trawangan", locations: "Nusa Penida → Gili Trawangan",
      activities: ["After breakfast, take a fast boat to Gili Trawangan.","Hop onto a cute Cidomo (horse cart) to reach your hotel.","Spend your evening by the beach, explore island cafés, or enjoy a beach bar sunset.","Overnight stay in Gili Trawangan."],
      note: "Optional: Go for a short snorkelling session to spot colorful reefs and turtles. Tip: Gili sunsets are magical, don’t miss the beach swings photo! Meals: Breakfast." },
    { day: 5, title: "Free Day in Gili Trawangan", locations: "Gili Trawangan",
      activities: ["Do what you love today. Explore the island at your own pace:","Snorkelling with turtles","Scuba diving","Cycle around the island","Beach hopping & chill.","Overnight stay in Gili Trawangan."],
      note: "Snorkelling and scuba are optional. Meals: Breakfast." },
    { day: 6, title: "Return to Bali | Ubud", locations: "Gili Trawangan → Besakih or Tirta Gangga → Ubud / Kintamani",
      activities: ["Breakfast & fast boat back to Bali.","En route, visit either: Besakih Mother Temple – the largest in Bali, or Tirta Gangga Water Palace – famous for its beautiful pools.","Lunch stop on the way.","Check in at your Ubud or Kintamani resort and relax among the rice fields."],
      note: "Meals: Breakfast, Lunch." },
    { day: 7, title: "Mount Batur Jeep Tour Adventure", locations: "Mount Batur · Kintamani",
      activities: ["Wake up early for the adventure of a lifetime.","2:00 AM pick-up for a Sunrise Jeep Ride to Mount Batur’s peak.","Watch the sun rise over volcanic landscapes.","Continue your thrill with one of the following: ATV Quad Ride through off-road trails, or White Water Rafting in scenic rivers.","Enjoy lunch at a local restaurant & return to your hotel for a relaxed evening."],
      note: "Meals: Lunch." },
    { day: 8, title: "Ubud Tour & Leisure", locations: "Ubud · Campuhan Ridge · Monkey Forest · Tegalalang",
      activities: ["Your final full day in Bali.","Visit Campuhan Ridge Walk for morning views.","Explore Monkey Forest Sanctuary.","Stop at a Coffee Plantation for a tasting.","Visit the stunning Tegalalang Rice Terrace.","Try the Aloha Swing for those perfect Insta shots.","Cool off at Kanto Lampo / Tegenungan / Suwat Waterfall.","Evening: shop at Ubud Market or chill at cozy cafés.","Overnight stay in Ubud/Kintamani."],
      note: "Meals: Breakfast." },
    { day: 9, title: "Departure", locations: "Ubud → Bali airport",
      activities: ["Breakfast, check-out & private airport transfer.","Fly home with memories that last a lifetime."],
      note: "Meals: Breakfast. Private transfer." }
  ],
  stays: {
    note: "The PDF lists nights per area but no hotel names or Luxury / Ultra Luxury tier. Nights below follow the inclusions line; see the check above.",
    items: [
      { days: "Days 1–2", location: "South Bali (Kuta / Seminyak / Canggu)", nights: "3N (inclusions) / 2N (day plan)", hotel: "Not in PDF" },
      { days: "Day 3", location: "Nusa Penida", nights: "1N", hotel: "Not in PDF" },
      { days: "Days 4–5", location: "Gili Trawangan", nights: "2N", hotel: "Not in PDF" },
      { days: "Days 6–8", location: "Ubud / Kintamani", nights: "2N (inclusions) / 3N (day plan)", hotel: "Not in PDF" }
    ]
  },
  included: {
    inclusions: ["Accommodation (3N South Bali, 1N Nusa Penida, 2N Gili, 2N Ubud)","Private airport & inter-hotel transfers","Daily breakfasts","Full-day Nusa Penida Tour","Fast boat transfers (Bali ↔ Nusa ↔ Gili)","2-hour Balinese Spa","English-speaking driver-guide","Entrance fees","Travel Insurance (up to $250,000)"],
    exclusions: ["Lunches & dinners (unless mentioned)","Optional adventure or nightlife activities","Personal expenses, tips & shopping","Anything not mentioned in inclusions","E-Visa"],
    highlights: ["South Bali Tour – GWK Park, Uluwatu Temple & Beach Day","Balinese Spa","Nusa Penida Island Tour","Gili Trawangan Island Stay & Sunset Vibes","Snorkeling & Cycling on Gili","Besakih Temple / Tirta Gangga Visit","Mount Batur Sunrise Jeep Adventure","ATV Ride or White Water Rafting","Ubud Sightseeing – Rice Terraces, Coffee Plantation, Monkey Forest","Waterfalls & Aloha Swing Experience"]
  },
  tour: {
    pickup: "Bali airport (private transfer to your hotel in Kuta/Seminyak/Canggu)",
    dropoff: "Bali airport (private airport transfer)",
    accommodation: "3N South Bali, 1N Nusa Penida, 2N Gili, 2N Ubud",
    transport: ["Private airport & inter-hotel transfers","Fast boat transfers (Bali ↔ Nusa ↔ Gili)","Speedboat to Nusa Penida","Cidomo (horse cart) on Gili Trawangan","Sunrise jeep ride, Mount Batur","English-speaking driver-guide"],
    meal: "Daily breakfasts. Lunch on Days 3, 6 and 7 (as per day-wise itinerary).",
    group: null,
    difficulty: S("Moderate (2:00 AM start for Mount Batur)"),
    best: null
  },
  media: { cover: S("Kelingking Beach T-Rex cliff, Nusa Penida"), alt: S("Kelingking Beach and its T-Rex shaped cliff above turquoise water, Nusa Penida, Bali") },
  gallery: [S("Uluwatu Temple on the cliff"), S("GWK Cultural Park Garuda statue"), S("Kelingking Beach viewpoint"), S("Angel’s Billabong"), S("Gili Trawangan beach swing at sunset"), S("Snorkelling with turtles, Gili"), S("Mount Batur sunrise jeep"), S("Tegalalang Rice Terrace"), S("Aloha Swing, Ubud"), S("Tegenungan Waterfall")],
  shorts: null, pastPhotos: null,
  testimonials: [],
  related: [S("Jakarta Explorer: Urban Adventure & Cultural Discovery"), S("Thailand – Island Escape & City Adventures"), S("Sri Lanka Island Loop – 7D6N")],
  faqs: [
    { q: "Can this trip be customised?", a: "Yes. 100% Customisation." },
    { q: "Is the visa included?", a: "No. E-Visa is excluded." },
    { q: "Which meals are included?", a: "Daily breakfasts. Lunches & dinners are excluded unless mentioned." },
    { q: "Is travel insurance included?", a: "Yes. Travel Insurance (up to $250,000) is included." },
    { q: "What add-ons can I book?", a: "Watersports at Nusa Dua; Add an extra day in Bali; Labuan Bajo – 3D/2N island adventure; Jakarta – 3D/2N city escape; Raja Ampat – 3D/2N luxury island stay." }
  ],
  terms: [
    { t: "Exclusions", d: "Lunches & dinners (unless mentioned), optional adventure or nightlife activities, personal expenses, tips & shopping, E-Visa, and anything not mentioned in inclusions are not included." },
    { t: "Evening options", d: "Day 1 evening options (Finns Beach Club, Bounty Dinner Cruise, Beach Love) are at extra cost." }
  ]
},

/* ───────────────────────── JAPAN GROUP ───────────────────────── */
{
  id: "japan-group", tab: "Japan Group", sub: "10D / 9N", pdf: "LXPJAPAN GROUP TRIP 1.pdf",
  checks: [
    "The PDF groups some days (Days 1–2, 4–5, 9–10). The day cards below keep that grouping. In the dashboard, add each grouped day as two days with the same content, or merge them into one.",
    "The PDF also gives a USD price: Offer $1745 + taxes (Original $2746), remittance as per ROE.",
    "Day 6 and Day 8 in the PDF carry the tagline “Proof that nature flexes harder than you!”, which only fits Hakone, so it is left out there."
  ],
  basics: {
    destination: "Japan",
    market: "International",
    tripType: "Group trip",
    title: "JAPAN GROUP TRIP",
    slug: "japan-group-trip",
    theme: S("Culture, Cherry Blossom, Group"),
    subtitle: "Blend of Blossom, Culture & Magic You Can’t Miss",
    description: "Osaka nights with Namba streets, Umeda Sky views and Osaka Castle; Nara deer encounters with temples, aquarium fun and a ferris wheel; Kyoto’s Kiyomizu-dera, Golden Pavilion and 10,000 torii gates; a Mt Fuji day with ropeways, volcanic valleys and lake cruises; and Tokyo energy featuring TeamLabs, Shibuya Crossing and Harajuku. Daily JR travel tickets and a traditional onsen experience are included."
  },
  pricing: {
    days: "10", nights: "9", full: "159999", slashed: "260000", token: "64000",
    note: "Starting price ₹1,59,999 + taxes (Original Price ₹2,60,000). Token = 40% booking amount at confirmation (₹1,59,999 × 40%, rounded).",
    optional: [
      { name: "Day 5 · Hiroshima detour", dur: "Uses the open Day 5 (no extra day)", price: "Not included in cost · ask a salesperson", note: "Shinkansen Kyoto → Hiroshima (~2 hours 30 mins via Nozomi Shinkansen), Peace Memorial Park & Atomic Bomb Dome, ferry to Miyajima Island and Itsukushima Shrine’s Floating Torii Gate, back to Kyoto." }
    ]
  },
  itinerary: [
    { day: "1–2", title: "Exploring Osaka", locations: "Kansai International Airport (KIX) · Osaka",
      activities: ["Arrival: Morning/Afternoon at Kansai International Airport (KIX)","Take Nankai/Haruka Express to the city (~45-60 mins)","Explore Namba Street (Shopping, local food)","Visit Osaka Castle (Ideal for cherry blossoms & history)","Enjoy panoramic views at Umeda Sky Building (173m high)","Visit Osaka Aquarium Kaiyukan (Meet the whale shark)","Dinner at a Sumo Restaurant or a full-day adventure at Universal Studios Japan (optional experience on day 2)"],
      note: "Welcome to Japan! Let the adventure begin! Day starts at 9:00 AM." },
    { day: 3, title: "Exploring Nara", locations: "Osaka → Nara → Osaka",
      activities: ["Take JR or Kintetsu train to Nara (~45 mins)","Visit Todai-ji Temple (the largest Buddha statue)","Explore Nara Park – Feed the deer","Return towards Osaka","Visit Osaka Kaiyukan Aquarium & ride the Tempozan Ferris Wheel","Overnight stay in Osaka"],
      note: "Bow to the deer, and they just might bow back. Day starts at 8:00 AM." },
    { day: "4–5", title: "Exploring Kyoto", locations: "Osaka → Kyoto",
      activities: ["Shinkansen Osaka → Kyoto (~15 mins via JR Rapid services)","Arrive in Kyoto, and have breakfast at the hotel","Explore Kiyomizu-dera Temple (Panoramic Kyoto views)","Visit Kinkaku-ji (Golden Pavilion) – Gold-covered temple","Visit Fushimi Inari Shrine (10,000 torii gates)","In Evening take a look at Nishiki Market (Street food & local delicacies)","Return to the hotel & free time"],
      note: "More torii gates than your legs can handle! Day starts at 8:00 AM. Day 5 Add on: An extra day is open, optionally perfect for a Hiroshima detour. To include this as an add-on, please connect with a salesperson to get it added to the itinerary." },
    { day: "5 (optional)", title: "Exploring Hiroshima", locations: "Kyoto → Hiroshima → Miyajima → Kyoto",
      activities: ["Shinkansen Kyoto → Hiroshima (~2 hours 30 mins via Nozomi Shinkansen)","Take the Shinkansen to Hiroshima","Arrive in Hiroshima & drop luggage at hotel","Visit Hiroshima Peace Memorial Park & Atomic Bomb Dome","Lunch & exploration","Take a ferry to Miyajima Island","Visit Itsukushima Shrine’s Floating Torii Gate","Board the Shinkansen to Kyoto","Stay overnight in Kyoto"],
      note: "Optional Tour - Not included in cost. Day starts at 7:30 AM." },
    { day: 6, title: "Exploring Tokyo", locations: "Kyoto / Osaka → Tokyo",
      activities: ["As per flight timings & tickets - Departure from Kyoto / Osaka","Arrive & check into the hotel","Explore Shibuya Crossing","Visit TeamLabs Tokyo (Digital art experience)","Stroll through Ueno Park (Green spaces, museums, and seasonal cherry blossoms)","Walk around Harajuku Street","Check out the famous Hachiko statue in your free time","Overnight stay in Tokyo"],
      note: "Day starts at 9:00 AM." },
    { day: 7, title: "Exploring Hakone & Mount Fuji", locations: "Tokyo → Hakone → Mount Fuji → Tokyo",
      activities: ["Proceed to Hakone","Explore Hakone Open-Air Museum","Take the Hakone Ropeway (Owakudani volcanic valley)","Pirate ship ride on Lake Ashi","Scenic views of Mount Fuji from 5th Station","Transfer back to Tokyo","Overnight stay in Tokyo"],
      note: "Proof that nature flexes harder than you! Day starts at 2:00 PM. Transportation via Car: English Speaking Driver." },
    { day: 8, title: "Exploring Tokyo", locations: "Asakusa · Ginza · Tokyo Skytree · Shinjuku",
      activities: ["Breakfast at the hotel","Discover Senso-ji Temple","Stroll through Nakamise Street (Asakusa)","Luxury Stroll in Ginza","Walk around Ginza for premium shopping & cafés","Head to Tokyo Skytree (350 m observation deck)","Photo stop at Shinjuku"],
      note: "Day starts at 9:00 AM." },
    { day: "9–10", title: "Exploring Tokyo & Departure", locations: "Akihabara · Roppongi Hills · Odaiba · Tokyo airport",
      activities: ["Breakfast at the hotel","Explore Akihabara (electronics, anime stores, gaming arcades)","Visit Roppongi Hills for panoramic Tokyo views","Visit Odaiba and see the Statue of Liberty","Drive by Rainbow Bridge","Airport transfer","Board the flight and departure"],
      note: "Day starts at 9:00 AM." }
  ],
  stays: {
    note: "The PDF gives only “3⭐ Accommodation with breakfast (Room Sizes in Japan are small as compared to other countries)”. No hotel names or Luxury / Ultra Luxury tier. Bases below follow the day plan.",
    items: [
      { days: "Days 1–3", location: "Osaka", nights: "3 nights", hotel: "3⭐ with breakfast" },
      { days: "Days 4–5", location: "Kyoto", nights: "2 nights", hotel: "3⭐ with breakfast" },
      { days: "Days 6–9", location: "Tokyo", nights: "4 nights", hotel: "3⭐ with breakfast" }
    ]
  },
  included: {
    inclusions: ["3⭐ Accommodation with breakfast (Room Sizes in Japan are small as compared to other countries)","Daily Japan Rail travel (ride the Shinkansen like a pro!)","TeamLabs Tokyo ticket (prepare to be mind-blown!)","Everyday Breakfast (As per Hotel’s Menu) & 2 Bottles of mineral water per person","Entrance fees (no surprises!)","Public transportation passes (swipe, tap, go!)","Onsen experience in Hakone/Osaka (hot springs = pure bliss)"],
    exclusions: ["International airfare (we can’t teleport you… yet)","Visa application fees - ATLYS is our official Partner for Visa services","Travel insurance (safety first, folks!)","Lunch & dinner (unless specified – foodie adventures await!)","Personal expenses, shopping, and souvenirs (shop till you drop – your wallet, that is)","Optional activities (your call!)","Extra transport for personal wandering (exploration mode: ON!)","Unexpected surprises (like typhoons – fingers crossed!)","Optional cost: Universal Studios Japan ticket & Sumo dinner","Optional: flight from Kyoto to Tokyo (vice versa), depending upon the timeline"],
    highlights: ["Osaka nights with Namba streets, Umeda Sky views, & Osaka Castle","Tokyo energy featuring TeamLabs, Shibuya Crossing, and Harajuku","Nara deer encounters with temples, aquarium fun, & ferris wheel","Daily JR travel tickets (8 Days)","Onsen Experience – Relax in traditional hot springs","Mt Fuji day with ropeways, volcanic valleys, and lake cruises"]
  },
  tour: {
    pickup: "Kansai International Airport (KIX), Osaka",
    dropoff: "Tokyo (airport transfer on the last day)",
    accommodation: "3⭐ Accommodation with breakfast: Osaka, Kyoto, Tokyo (Room Sizes in Japan are small as compared to other countries)",
    transport: ["Daily JR travel tickets (8 Days)","Osaka → Kyoto: JR Rapid Service, 15 mins","Kyoto → Tokyo: Nozomi Shinkansen, 2h 30m","Tokyo → Hakone: Private car (English speaking driver), 2h","Hakone → Tokyo: Odakyu Limited/JR, 1.5h","Public transportation passes","Nankai/Haruka Express from KIX to the city"],
    meal: "Everyday Breakfast (As per Hotel’s Menu) & 2 Bottles of mineral water per person",
    group: null,
    difficulty: S("Moderate (lots of walking and train travel)"),
    best: S("Spring, cherry blossom season (the PDF mentions cherry blossoms at Osaka Castle and Ueno Park)")
  },
  media: { cover: S("Mt Fuji with cherry blossoms, or Fushimi Inari torii gates"), alt: S("Mount Fuji framed by pink cherry blossoms in spring, Japan") },
  gallery: [S("Osaka Castle with cherry blossoms"), S("Namba Street at night"), S("Deer in Nara Park"), S("Fushimi Inari torii gates"), S("Kinkaku-ji Golden Pavilion"), S("Shibuya Crossing"), S("TeamLabs Tokyo"), S("Lake Ashi pirate ship with Mt Fuji"), S("Tokyo Skytree")],
  shorts: null, pastPhotos: "The PDF has an “Our Last Trip Highlights” page, but its photos are images only. Use those photos for the Past Trip Photo Carousel.",
  testimonials: [],
  related: [S("Japan, Fuji to Osaka Bay – 8D7N")],
  faqs: [
    { q: "Are rooms in Japan small?", a: "Room Sizes in Japan is very small compared to other countries." },
    { q: "Is the visa included?", a: "No. Visa application fees are excluded. ATLYS is our official Partner for Visa services." },
    { q: "Is the Hiroshima day included?", a: "No. Day 5 is open and optionally perfect for a Hiroshima detour. It is an optional tour, not included in cost. To include it, please connect with a salesperson to get it added to the itinerary." },
    { q: "Are Universal Studios Japan and the Sumo dinner included?", a: "No. Optional cost: Universal Studios Japan ticket & Sumo dinner." },
    { q: "What are the offbeat add-ons?", a: "Osaka: Kuromon Ichiba Market; Kyoto: Uji’s legendary green tea & Byodo-in Temple; Traditional Kimono wear + shrine hopping; Hakone: Owakudani Valley; Tokyo: Yanaka & Shimokitazawa." }
  ],
  terms: [
    { t: "Payment Policy", d: "40% booking amount at confirmation. 40% 45 days before scheduled arrival. 20% 21 days before scheduled arrival. GST No. required for tax invoice (if applicable)." },
    { t: "Cancellation & Refund Policy", d: "45-30 days before arrival: 70% - Land. 15-29 days before arrival: 50% - Land. 15 days: No Refund. Name Change: No Refund. Refund Processing: 15 Working Days." },
    { t: "Child Policy", d: "Children (3-12 years & 90-120cm): Charged at child rate. 12+ years or >120cm: Charged at adult rate." },
    { t: "Itinerary", d: "This is a proposed itinerary and is subject to change as per the designated locations." },
    { t: "Rooms", d: "Room Sizes in Japan is very small compared to other countries." },
    { t: "USD pricing", d: "Offer Price $1745 + Taxes (Original Price $2746). Remittance applicable as per ROE." }
  ]
},

/* ───────────────────────── GEORGIA ───────────────────────── */
{
  id: "georgia", tab: "Georgia Couple", sub: "7D / 6N", pdf: "Georgia_Luxpackers_Couple_Itinerary.html",
  checks: [
    "The cover says “7 Nights · 8 Days”, but the day-by-day plan runs 25 → 31 Dec: 7 days and 6 nights (Tbilisi 4N + Batumi 2N). This sheet uses 7 days / 6 nights. Change both if the team means 8D/7N.",
    "Price is only an estimate in USD: $1,475 – $2,370 per couple, excluding flights. There is no ₹ price, so Full Amount and Token Amount are yours to fill.",
    "The file has no “Inclusions / Exclusions” list. The ones marked Suggested are read from the day plan and budget table. Confirm them with the team.",
    "This is a bespoke couple proposal: “All dates, hotels, inclusions and pricing are indicative and subject to availability at time of booking.”"
  ],
  basics: {
    destination: "Georgia",
    market: "International",
    tripType: "Custom / private trip",
    title: "GEORGIA — A COUPLE'S WINTER JOURNEY",
    slug: "georgia-couples-winter-journey",
    theme: "Slow, Romantic, Scenic",
    subtitle: "Where ancient mountains hold your secrets & wine warms your evenings",
    description: "A private romantic journey through Georgia in December. Georgia doesn't ask you to rush. It asks you to pour another glass, linger over a fire, watch the mountains turn copper at dusk — and forget, just for a while, that the rest of the world exists. From the cobblestone warmth of Old Tbilisi to the snow-dusted ridges of Kazbegi, from the Black Sea promenade of Batumi to the turquoise silence of Martvili Canyon, with the UNESCO cathedrals of Mtskheta in morning mist. Four nights in Tbilisi, two in Batumi, and a day trip to Kazbegi and the Gergeti Trinity Church. This is not a checklist trip. This is a story you'll tell for years."
  },
  pricing: {
    days: "7", nights: "6", full: null, slashed: null, token: null,
    note: "Only a USD estimate in the file: $1,475 – $2,370 per couple, excluding flights (Astoria Tbilisi 4N $320–480 · Grandeur Batumi 2N $200–300 · private tours & transfers $400–550 · meals $250–400 · wine & cafés $100–180 · sulfur bath $25–40 · shopping $100–300 · misc & tips $80–120). Add ~$150–200 for the 3-day extension.",
    optional: []
  },
  itinerary: [
    { day: 1, title: "Tbilisi, First Light", locations: "Tbilisi International Airport, Old Tbilisi, Rustaveli Avenue",
      activities: ["Private transfer from Tbilisi International Airport to the Astoria Tbilisi — one of the capital's most refined historic addresses on Rustaveli Avenue.","Check-in, freshen up, and take your first evening walk through the lantern-lit lanes of Old Tbilisi.","Dinner at Barbarestan — Tbilisi's most celebrated restaurant, where recipes are drawn from an 1874 cookbook. Warm, amber-lit, impossibly romantic.","Nightcap: head to Lgims or Wine Factory N1 — a converted factory space that hums quietly on winter evenings."],
      note: "25 December — Arrival. Tonight's romantic moment: walk across the Peace Bridge after dinner — the LED-lit glass bridge is dramatically beautiful at night, with the Narikala Fortress glowing above the old city." },
    { day: 2, title: "Mtskheta at Dawn, Old Tbilisi by Dusk", locations: "Mtskheta, Jvari Monastery, Svetitskhoveli Cathedral, Old Tbilisi",
      activities: ["Breakfast at the hotel — linger over it. There is no rushing today.","09:00 — Private drive to Mtskheta (30 minutes). UNESCO's “town museum” is best experienced in the soft morning light of December.","Jvari Monastery — walk to the cliff's edge together. The view of the two rivers merging below is genuinely breathtaking.","Svetitskhoveli Cathedral — a 5th century masterpiece, calm and cool inside even on the coldest day.","Return to Tbilisi for a slow afternoon. Walk Chardin Street — boutique galleries, warm cafés, and the faint sound of jazz.","Old Tbilisi walking tour — Metekhi Church, Narikala Fortress by cable car, the Sulfur Baths district (book a private dome for one hour — it's unmissable)."],
      note: "26 December — Tbilisi & Mtskheta. Photo moment: the Narikala cable car offers the best panoramic shot of Tbilisi's old town. Go at golden hour (around 4pm in December)." },
    { day: 3, title: "Into the Earth — Prometheus Cave, Onwards to Batumi", locations: "Tbilisi → Prometheus Cave → Kutaisi → Batumi",
      activities: ["09:00 — Check out and begin the scenic drive towards Batumi via Western Georgia.","En route stop: Prometheus Cave, near Kutaisi — six magnificent chambers of stalactites, underground rivers and illuminated formations. A two-person boat ride through the cave is available.","The cave maintains 14°C year-round. Bring a light layer.","Lunch in Kutaisi — Georgia's second city, charming and understated in December.","Arrive Batumi by evening. Check in to Grandeur Batumi 5★ — sea-facing rooms preferred.","Evening: walk the deserted Batumi Boulevard in the dark, listening to the Black Sea."],
      note: "27 December — Transfer Day. For two: book the private boat ride through Prometheus Cave in advance — it's short (around 10 minutes) but unforgettable." },
    { day: 4, title: "Batumi — Wine, Waterfalls & a City to Yourselves", locations: "Makhuntseti, Batumi",
      activities: ["Morning: drive east into the mountains to the Adjarian Wine House winery at Makhuntseti. Taste wines pressed from ancient Adjarian varietals, paired with local churchkhela and cheese.","Makhuntseti Waterfall and the medieval bridge of Queen Tamar.","Return to Batumi for a slow afternoon city walk: Batumi Boulevard, Statue of Medea, the art nouveau Piazza and the Alphabetic Tower.","Ride the Argo Cable Car for panoramic views over the Black Sea coast.","Dinner at Meze — Batumi's most refined dining experience. Ask for a sea-view table.","Evening: the seafront in December is moody, windswept and entirely photogenic."],
      note: "28 December — Batumi. Wine lover's note: Adjara wines are lighter and more mineral than Kakheti's. Ask to see the Qvevri vessels — clay pots buried in the earth, used for fermentation since the Neolithic period." },
    { day: 5, title: "Martvili Canyon — Where the Earth Turns Turquoise", locations: "Batumi → Martvili Canyon → Tbilisi",
      activities: ["09:00 — Check out from Batumi. Begin the return drive to Tbilisi via the western route.","Stop at Martvili Canyon — turquoise waters, towering limestone cliffs and waterfall mist. Boat tours run even in December (weather permitting).","The canyon's stillness in winter is unlike anything in high season — photograph freely, move at your own pace.","Continue east towards Tbilisi with afternoon light building behind the Caucasus ridge.","Evening check-in at Astoria Tbilisi. Rest, refresh, exhale.","Late dinner at Shavi Lomi (“Black Lion”) — elevated Georgian cuisine in a warm, candlelit interior."],
      note: "29 December — Batumi → Tbilisi." },
    { day: 6, title: "Kazbegi — The Mountains Remember Everything", locations: "Zhinvali, Ananuri, Gudauri, Stepantsminda (Kazbegi), Gergeti Trinity Church",
      activities: ["09:00 — Early departure in a 4×4 jeep — essential in December conditions.","Zhinvali Dam and Reservoir — turquoise water reflecting the Caucasus peaks. Stop for photos.","Ananuri Fortress — a medieval tower complex beside the water.","Gudauri — if there's snow (in December there almost certainly is), stop to play, breathe and absorb the altitude.","Stepantsminda (Kazbegi) — have khinkali (Georgian dumplings) at a local spot before the final ascent.","Gergeti Trinity Church (2,170 m, with Mount Kazbek behind) — the jeep takes you as high as it can; the final walk is short and unforgettable.","Return to Tbilisi by evening, in time for a quiet, celebratory dinner."],
      note: "30 December — Kazbegi Day Trip, via the Georgian Military Highway. Once-in-a-trip shot: Gergeti Church with snow in the foreground and Mount Kazbek rising behind." },
    { day: 7, title: "One Last Morning in Tbilisi", locations: "Tbilisi, Abanotubani, Dry Bridge Market, Tbilisi International Airport",
      activities: ["Leisurely breakfast at the hotel — the Astoria does a fine Georgian spread.","Optional: one final slow walk through the Abanotubani (Sulfur Baths) district with morning light on the domed rooftops.","Pick up last-minute gifts: churchkhela, Georgian wine, hand-painted cloisonné jewellery from the Dry Bridge antique market.","12:00 — Check out. Transfer to the airport based on departure time."],
      note: "31 December — New Year's Eve · Departure. Optional upgrade: if you can extend one night, Tbilisi celebrates New Year's Eve with a firework-lit street party across the old city." }
  ],
  stays: { note: "", items: [] },
  included: {
    inclusions: [
      S("Accommodation · 6 nights: Astoria Tbilisi 4★ (4 nights) · Grandeur Batumi 5★ (2 nights, sea-facing room preferred)"),
      "Private transfer from Tbilisi International Airport to the hotel on arrival",
      S("Airport drop on Day 7, based on departure time"),
      "All transfers — private drives between Tbilisi, Mtskheta, Batumi and Martvili",
      "4×4 jeep for the Kazbegi day trip (essential in December)",
      S("Private tours on all days, including cave entrances and cable cars"),
      S("Daily breakfast at the hotel")
    ],
    exclusions: [
      "International flights",
      S("Lunches, dinners and drinks (the file budgets $250–400 for meals and $100–180 for wine per couple)"),
      S("Private sulfur bath dome (~₾60–100 / $25–40 per couple)"),
      S("Luxury add-ons: Gudauri ski day, helicopter flight, private supra, couple photoshoot, in-suite spa"),
      S("3-day Wild Georgia extension and the New Year's Eve extra night"),
      S("Shopping, souvenirs and tips"),
      "Travel insurance (strongly recommended)"
    ],
    highlights: []
  },
  tour: {
    pickup: "Tbilisi International Airport",
    dropoff: "Tbilisi International Airport",
    accommodation: "Astoria Tbilisi 4★ on Rustaveli Avenue (4 nights) · Grandeur Batumi 5★, sea-facing room preferred (2 nights)",
    transport: ["Private car & driver for all transfers and drives","4×4 jeep for Kazbegi (Georgian Military Highway)","Narikala cable car (Tbilisi)","Argo Cable Car (Batumi)","Boat ride: Prometheus Cave & Martvili Canyon (weather permitting)"],
    meal: S("Daily breakfast at the hotel; lunches and dinners at recommended restaurants"),
    group: "Couple · private trip (2 travellers)",
    difficulty: S("Easy (short walks; Kazbegi needs warm layers and insulated boots)"),
    best: "December — Winter (Tbilisi 3–9°, Batumi 6–12°, Kazbegi –8–2°, Gudauri –10–0°)"
  },
  media: { cover: "Gergeti Trinity Church in the snow with Mount Kazbek rising behind · landscape, 1200 × 675", alt: S("Gergeti Trinity Church in winter snow with Mount Kazbek behind, Kazbegi, Georgia") },
  gallery: ["Gergeti Trinity Church, Kazbegi, in snow","Peace Bridge at night, Tbilisi","Old Tbilisi from Narikala Fortress at golden hour","Martvili Canyon boat ride","Jvari Monastery cliff above the Aragvi & Kura rivers, Mtskheta","Svetitskhoveli Cathedral, Mtskheta","Ananuri Fortress & Zhinvali reservoir","Chardin Street, Tbilisi, lantern-lit","Sulfur bath domes, Abanotubani","Prometheus Cave chambers","Batumi Boulevard & Alphabetic Tower in winter","Makhuntseti Waterfall & Queen Tamar bridge","Gudauri ski slopes in December","Candlelit wine cellar, Old Tbilisi"],
  shorts: null, pastPhotos: null,
  testimonials: [],
  related: [],
  faqs: [
    { q: "Do Indian passport holders need a visa for Georgia?", a: "Georgia offers visa-free entry to Indian passport holders for up to 1 year. Check updated requirements at evisa.gov.ge before travel." },
    { q: "What currency is used?", a: "Georgian Lari (GEL). 1 USD ≈ 2.7 GEL (check rates before travel). ATMs are widely available in Tbilisi and Batumi. Rural areas prefer cash." },
    { q: "Is English spoken?", a: "English is widely spoken in Tbilisi hotels, restaurants and tour services. Carry a translation app for smaller towns." },
    { q: "Will I have mobile data?", a: "Georgian SIM cards (Magti or Geocell) offer excellent data coverage in cities for very low cost. Buy one at the airport. Coverage in Kazbegi is limited." },
    { q: "Is the road to Kazbegi safe in December?", a: "It needs a 4×4 vehicle — your included jeep is essential. Do not attempt it in a regular car after snowfall. Your driver will know current conditions." },
    { q: "How cold is it in December?", a: "Tbilisi 3–9°, Batumi 6–12°, Kazbegi –8–2° with heavy snow, Gudauri –10–0°. Pack a wool coat or parka, thermals, a fleece, waterproof and insulated boots, scarf, gloves and a beanie — plus one smart outfit each for dinners." },
    { q: "Is Georgia safe for tourists?", a: "Georgia is consistently ranked among the safest countries in Europe and the Caucasus. Petty crime is rare. Walk freely at night in Tbilisi's Old Town. Emergency number: 112." },
    { q: "Should we tip?", a: "10% in restaurants is appreciated but not obligatory. Tour guides typically receive $10–15/day per couple. Hotel porters — a few Lari is generous." },
    { q: "Can we extend the trip?", a: "Yes. Add the 3-day Wild Georgia extension (Kakheti glamping, Alazani Valley & Sighnaghi, Davit Gareja), or one extra night in Tbilisi for New Year's Eve." }
  ],
  terms: [
    { t: "Bespoke proposal", d: "This itinerary is a bespoke proposal. All dates, hotels, inclusions and pricing are indicative and subject to availability at time of booking. Your Luxpackers curator will personalise every detail." },
    { t: "Estimated budget", d: "Estimated total per couple, excluding flights: $1,475 – $2,370. Add ~$150–200 for the 3-day extension." },
    { t: "Weather & road conditions", d: "The Kazbegi road in December requires a 4×4. Martvili Canyon boat tours run weather permitting. The road to Tusheti is closed in deep winter." },
    { t: "Travel insurance", d: "Strongly recommended — include winter sports/mountain coverage if you intend to ski or trek at altitude in December conditions." },
    { t: "Alcohol & driving", d: "Drunk driving laws are strict (zero tolerance). All transfers are included — let your driver handle the roads." },
    { t: "Add-on experiences", d: "Luxury add-ons are extra and priced as estimates: private ski day at Gudauri $120–180 per person (half day) · helicopter over the Caucasus $300–500 per couple (30 min) · private supra $60–100 per couple · couple photoshoot $150–300 (half day) · in-suite spa $80–150 per couple (90 min)." }
  ]
}

];
