const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living in this spacious penthouse apartment. Enjoy panoramic city views from your private terrace.",
    image: "https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Discover the beauty of the English countryside in this picturesque cottage. Perfect for a romantic retreat.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet. Après-ski by the fireplace.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Desert Oasis Retreat",
    description:
      "Experience the magic of the desert in this tranquil oasis. Relax by the pool under the starlit sky.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Palm Springs",
    country: "United States",
  },
  {
    title: "Cultural Riad in Marrakech",
    description:
      "Immerse yourself in Moroccan culture in this beautifully decorated riad. Explore the bustling souks.",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Tropical Bungalow in Bali",
    description:
      "Experience Bali in this private tropical bungalow surrounded by lush greenery and rice fields.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Arctic Igloo Adventure",
    description:
      "Sleep under the Northern Lights in this glass igloo. A once-in-a-lifetime Arctic experience.",
    image: "https://images.unsplash.com/photo-1505691934933-7f19fc3a4e9d?auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Relax in this charming farmhouse surrounded by fields and fresh air. Great for families and kids.",
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Texas",
    country: "United States",
  },
  {
    title: "Modern Apartment near Eiffel Tower",
    description:
      "Enjoy your Paris vacation in this stylish apartment just minutes from the Eiffel Tower.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Paris",
    country: "France",
  },
  {
    title: "Coastal Villa with Infinity Pool",
    description:
      "Breathtaking sea views and a private infinity pool make this villa unforgettable.",
    image: "https://images.unsplash.com/photo-1505691938891-1758d7feb522?auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Traditional Japanese Ryokan",
    description:
      "Experience authentic Japanese culture with tatami rooms, hot springs, and tea ceremonies.",
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Urban Studio with Skyline Views",
    description:
      "Compact yet luxurious studio apartment offering panoramic city skyline views.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Singapore",
    country: "Singapore",
  },
  {
    title: "Safari Lodge Adventure",
    description:
      "Stay close to wildlife in this luxury safari lodge with guided tours and campfires.",
    image: "https://images.unsplash.com/photo-1524492449090-1a065f2d8cb0?auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Serengeti",
    country: "Tanzania",
  },
  {
    title: "Chic Studio in Berlin",
    description:
      "Minimalist design meets comfort in this chic Berlin studio located in the city center.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    price: 1450,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Private Island Getaway",
    description:
      "Live like royalty on this private island villa with beaches all to yourself.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Castle Stay Experience",
    description:
      "Spend a night in a real medieval castle with royal chambers and historic charm.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d782d?auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Eco-Friendly Jungle Retreat",
    description:
      "Reconnect with nature in this eco-friendly bamboo retreat surrounded by rainforest.",
    image: "https://images.unsplash.com/photo-1519822472717-2e684abcfb9a?auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Luxury Houseboat Stay",
    description:
      "Float in style in this luxury houseboat with modern interiors and lake views.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Snow Cabin Under Aurora",
    description:
      "Witness Northern Lights from this warm and cozy wooden snow cabin.",
    image: "https://images.unsplash.com/photo-1509610696553-9243c1a4fd7f?auto=format&fit=crop&w=800&q=60",
    price: 3700,
    location: "Reykjavik",
    country: "Iceland",
  },
  {
    title: "Countryside Vineyard Stay",
    description:
      "Sip world-class wines and stay amidst vineyards in this rustic countryside home.",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Napa Valley",
    country: "United States",
  },
  {
    title: "Cave House in Cappadocia",
    description:
      "Unique cave-style accommodation carved into the rocks with magical balloon views.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Cappadocia",
    country: "Turkey",
  },
  {
    title: "Luxury Desert Camp",
    description:
      "Glamp in style under desert skies with modern amenities in a luxury tent.",
    image: "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Dubai Desert",
    country: "United Arab Emirates",
  },
  {
    title: "Floating Villa on Lagoon",
    description:
      "Stay in a floating villa surrounded by turquoise waters and coral reefs.",
    image: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Maldives",
    country: "Maldives",
  }
];

module.exports = { data: sampleListings };

