/* Stay entries shaped like the dashboard's "Add Stay" form.
   Fields: From Day, To Day, Tier, Hotel, Star Rating, Location, Alternative Label, Hotel Photo, Description, Amenities.
   S("...") = suggestion (not written in the PDF). null = not in the PDF. */
const LUX = "Luxury · 3/4 star";
window.STAYS = {
  "thailand": {
    note: "One stay per city. Every PDF hotel is 3–4★ “or similar”, so pick Tier “Luxury · 3/4 star” each time. No Ultra Luxury stays.",
    items: [
      { from: "1", to: "2", tier: LUX, hotel: null, star: null, location: "Patong Area, Phuket", alt: "or similar", photo: null,
        desc: S("2 nights in the Patong area, close to Patong Beach, nearby markets and Bangla Road."), amenities: "Daily Breakfast" },
      { from: "3", to: "4", tier: LUX, hotel: null, star: null, location: "Ao Nang Area, Krabi", alt: "or similar", photo: null,
        desc: S("2 nights in Ao Nang, with the evening free to explore Ao Nang Beach and local markets."), amenities: "Daily Breakfast" },
      { from: "5", to: "6", tier: LUX, hotel: null, star: null, location: "Bangkok City", alt: "or similar", photo: null,
        desc: S("2 nights at a city hotel in Bangkok, with private transfers from Suvarnabhumi Airport (BKK)."), amenities: "Daily Breakfast" }
    ]
  },
  "vietnam-new-year": {
    note: "Night 7 is on the overnight sleeper bus (Da Nang → Nha Trang), so there is no stay for Day 7.",
    items: [
      { from: "1", to: "2", tier: LUX, hotel: null, star: "4", location: "Hanoi", alt: "or similar", photo: null,
        desc: "Premium 3–4★ hotel, as per availability — hygienic, double sharing, with guest ratings of 8–8.5+.", amenities: "Daily Breakfast, Double Sharing" },
      { from: "3", to: "4", tier: LUX, hotel: null, star: "4", location: "Phong Nha / Dong Hoi", alt: "or similar", photo: null,
        desc: "Premium 3–4★ hotel, as per availability — hygienic, double sharing, with guest ratings of 8–8.5+.", amenities: "Daily Breakfast, Double Sharing" },
      { from: "5", to: "6", tier: LUX, hotel: null, star: "4", location: "Hoi An", alt: "or similar", photo: null,
        desc: "Premium 3–4★ hotel, as per availability — hygienic, double sharing, with guest ratings of 8–8.5+.", amenities: "Daily Breakfast, Double Sharing" },
      { from: "8", to: "8", tier: LUX, hotel: null, star: "4", location: "Nha Trang", alt: "or similar", photo: null,
        desc: "Premium 3–4★ hotel, as per availability — hygienic, double sharing, with guest ratings of 8–8.5+.", amenities: "Daily Breakfast, Double Sharing" },
      { from: "9", to: "9", tier: LUX, hotel: null, star: "4", location: "Mui Ne", alt: "or similar", photo: null,
        desc: "Premium 3–4★ hotel, as per availability — hygienic, double sharing, with guest ratings of 8–8.5+.", amenities: "Daily Breakfast, Double Sharing" },
      { from: "10", to: "10", tier: LUX, hotel: null, star: "4", location: "Ho Chi Minh City", alt: "or similar", photo: null,
        desc: "Premium 3–4★ hotel, as per availability — hygienic, double sharing, with guest ratings of 8–8.5+.", amenities: "Daily Breakfast, Double Sharing" }
    ]
  },
  "sri-lanka": {
    note: "Single-night stays use the same day in From Day and To Day. The Client PDF says hotel category is “to be confirmed”, so Star Rating is blank: pick the tier that matches the quote you send.",
    items: [
      { from: "1", to: "2", tier: LUX, hotel: null, star: null, location: "Mirissa · south coast", alt: "or similar", photo: null,
        desc: "Two nights in Mirissa first, so the first unpack counts. Your first sunsets on the south coast, and Day 2 brings you back to the same room. No packing.", amenities: "Breakfast + dinner (as per package selected)" },
      { from: "3", to: "3", tier: LUX, hotel: null, star: null, location: "Ella · hill country", alt: "or similar", photo: null,
        desc: "Check in and settle into Ella's slower hill-town rhythm.", amenities: "Breakfast + dinner (as per package selected)" },
      { from: "4", to: "4", tier: LUX, hotel: null, star: null, location: "Nuwara Eliya · tea country", alt: "or similar", photo: null,
        desc: "Check in at Nuwara Eliya. It gets cool up here; bring a layer.", amenities: "Breakfast + dinner (as per package selected)" },
      { from: "5", to: "5", tier: LUX, hotel: null, star: null, location: "Kandy · the sacred city", alt: "or similar", photo: null,
        desc: "Into Kandy and check in, with the Temple of the Sacred Tooth Relic and a slow walk around Kandy Lake in the evening.", amenities: "Breakfast + dinner (as per package selected)" },
      { from: "6", to: "6", tier: LUX, hotel: null, star: null, location: "Colombo · the capital", alt: "or similar", photo: null,
        desc: "Check in. Lunch, then some proper downtime. An early night before the elephants and the flight home.", amenities: "Breakfast + dinner (as per package selected)" }
    ]
  },
  "vietnam-in-depth": {
    note: "Single-night stays use the same day in From Day and To Day.",
    items: [
      { from: "1", to: "1", tier: LUX, hotel: null, star: "4", location: "Sapa", alt: "or similar", photo: null,
        desc: "Premium 3–4★ hotel, with possible upgraded room categories. Sapa runs cooler than Hanoi.", amenities: "Daily Breakfast" },
      { from: "2", to: "3", tier: LUX, hotel: null, star: "4", location: "Hanoi", alt: "or similar", photo: null,
        desc: "Premium 3–4★ hotel, with possible upgraded room categories. Close to the Old Quarter.", amenities: "Daily Breakfast" },
      { from: "4", to: "5", tier: LUX, hotel: null, star: "4", location: "Da Nang", alt: "or similar", photo: null,
        desc: "Premium 3–4★ hotel, with possible upgraded room categories.", amenities: "Daily Breakfast" },
      { from: "6", to: "8", tier: LUX, hotel: null, star: "4", location: "Phu Quoc", alt: "or similar", photo: null,
        desc: "Premium 3–4★ hotel, with possible upgraded room categories. Three nights of island days that breathe.", amenities: "Daily Breakfast" }
    ]
  },
  "japan-fuji-osaka": {
    note: "Hotel accommodation only, so the PDF lists no meals or amenities.",
    items: [
      { from: "1", to: "3", tier: LUX, hotel: null, star: "4", location: "Tokyo", alt: "or similar", photo: null,
        desc: "3 nights in Tokyo. Hotel check-in is usually from 15:00.", amenities: "Room only (no meals)" },
      { from: "4", to: "5", tier: LUX, hotel: null, star: "4", location: "Kyoto", alt: "or similar", photo: null,
        desc: "2 nights in Kyoto, with a private transfer from Kyoto Station on arrival.", amenities: "Room only (no meals)" },
      { from: "6", to: "7", tier: LUX, hotel: null, star: "4", location: "Tempozan / Osakako, Osaka Bay", alt: "or similar", photo: null,
        desc: "Two nights on Osaka Bay: the Tempozan Ferris Wheel, LEGOLAND Discovery Center and harbour sunsets. The Tempozan / Osakako stay is fully availability-based.", amenities: "Room only (no meals)" }
    ]
  },
  "bali": {
    note: "Days follow the day plan. The PDF’s inclusions say 3N South Bali + 2N Ubud instead; if that is right, use 1–3 for South Bali and 7–8 for Ubud.",
    items: [
      { from: "1", to: "2", tier: LUX, hotel: null, star: null, location: "Kuta / Seminyak / Canggu, South Bali", alt: "or similar", photo: null,
        desc: S("Your South Bali base for the first nights, close to the beach clubs and sunset spots."), amenities: "Daily Breakfast" },
      { from: "3", to: "3", tier: LUX, hotel: null, star: null, location: "Nusa Penida", alt: "or similar", photo: null,
        desc: "Check-in and overnight in Nusa Penida after the West Island Tour.", amenities: "Daily Breakfast" },
      { from: "4", to: "5", tier: LUX, hotel: null, star: null, location: "Gili Trawangan", alt: "or similar", photo: null,
        desc: "Hop onto a cute Cidomo (horse cart) to reach your hotel. Spend your evening by the beach, explore island cafés, or enjoy a beach bar sunset.", amenities: "Daily Breakfast" },
      { from: "6", to: "8", tier: LUX, hotel: null, star: null, location: "Ubud / Kintamani", alt: "or similar", photo: null,
        desc: "Check in at your Ubud or Kintamani resort and relax among the rice fields.", amenities: "Daily Breakfast" }
    ]
  },
  "japan-group": {
    note: "The PDF gives 3⭐ accommodation for the whole trip. Bases follow the day plan.",
    items: [
      { from: "1", to: "3", tier: LUX, hotel: null, star: "3", location: "Osaka", alt: "or similar", photo: null,
        desc: "3⭐ Accommodation with breakfast. Room Sizes in Japan are small as compared to other countries.", amenities: "Daily Breakfast (as per hotel’s menu), 2 Bottles of Mineral Water per person" },
      { from: "4", to: "5", tier: LUX, hotel: null, star: "3", location: "Kyoto", alt: "or similar", photo: null,
        desc: "3⭐ Accommodation with breakfast. Room Sizes in Japan are small as compared to other countries.", amenities: "Daily Breakfast (as per hotel’s menu), 2 Bottles of Mineral Water per person" },
      { from: "6", to: "9", tier: LUX, hotel: null, star: "3", location: "Tokyo", alt: "or similar", photo: null,
        desc: "3⭐ Accommodation with breakfast. Room Sizes in Japan are small as compared to other countries.", amenities: "Daily Breakfast (as per hotel’s menu), 2 Bottles of Mineral Water per person" }
    ]
  },
  "georgia": {
    note: "The file names the hotels. Tbilisi is split into two stays because you leave for Batumi in between (Nights 1–2, then Nights 5–6). For Batumi (5★) pick the highest tier your dropdown has.",
    items: [
      { from: "1", to: "2", tier: LUX, hotel: "Astoria Tbilisi", star: "4", location: "Rustaveli Avenue, Tbilisi", alt: "or similar", photo: null,
        desc: "One of the capital's most refined historic addresses on Rustaveli Avenue, steps from the lantern-lit lanes of Old Tbilisi.", amenities: S("Daily Breakfast, Georgian breakfast spread, Concierge, In-suite spa on request") },
      { from: "3", to: "4", tier: S("Ultra Luxury · 5 star"), hotel: "Grandeur Batumi", star: "5", location: "Batumi, Black Sea coast", alt: "or similar", photo: null,
        desc: "Two nights on the Black Sea, with a sea-facing room preferred. Walk the empty winter boulevard right outside.", amenities: S("Daily Breakfast, Sea-view room") },
      { from: "5", to: "6", tier: LUX, hotel: "Astoria Tbilisi", star: "4", location: "Rustaveli Avenue, Tbilisi", alt: "or similar", photo: null,
        desc: "Back to the Astoria after Martvili Canyon. Rest, refresh, exhale — then Kazbegi on Day 6 and a last Tbilisi morning.", amenities: S("Daily Breakfast, Georgian breakfast spread, Concierge, In-suite spa on request") }
    ]
  }
};
