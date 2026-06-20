export type TripPackage = {
  id: string
  name: string
  price: string
  duration: string
  image: string
  description: string
  location: string
  highlights: string[]
  overview: string
  inclusions: string[]
}

export const tripPackages: TripPackage[] = [
  {
    id: "char-dham",
    name: "Char Dham & Do Dham Yatra",
    price: "₹34,999",
    duration: "10N/11D",
    image: "/4dham.png",
    description: "Sacred journey to the four holy shrines",
    location: "Uttarakhand",
    highlights: ["Kedarnath", "Badrinath", "Gangotri", "Yamunotri"],
    overview:
      "Experience a deeply guided Himalayan yatra with temple darshan support, comfortable stays, local transfers, and team assistance throughout the journey.",
    inclusions: ["Hotel accommodation", "Local transfers", "Darshan guidance", "Trip coordinator support"],
  },
  {
    id: "varanasi",
    name: "Varanasi - Ayodhya - Prayagraj",
    price: "₹7,999",
    duration: "2N/3D",
    image: "/vr1.png",
    description: "Experience the spiritual capital of India",
    location: "Uttar Pradesh",
    highlights: ["Ganga Aarti", "Kashi Vishwanath", "River Cruise", "Sarnath"],
    overview:
      "Walk through the timeless ghats of Kashi, attend the Ganga Aarti, visit sacred temples, and explore the spiritual heart of Varanasi.",
    inclusions: ["Hotel accommodation", "Temple visits", "Local sightseeing", "Assistance during trip"],
  },
  {
    id: "ujjain",
    name: "Ujjain & Omkareshwar",
    price: "₹8,999",
    duration: "3N/4D",
    image: "/mp.jpg",
    description: "Visit the sacred Jyotirlingas",
    location: "Madhya Pradesh",
    highlights: ["Mahakaleshwar", "Omkareshwar", "Narmada River", "Ancient Temples"],
    overview:
      "A focused Jyotirlinga journey covering Mahakaleshwar and Omkareshwar with smooth local coordination and temple visit planning.",
    inclusions: ["Hotel accommodation", "Local transfers", "Temple darshan support", "Coordinator assistance"],
  },
  {
    id: "maharashtra",
    name: "3 Jyotirling of Maharashtra",
    price: "₹12,999",
    duration: "3N/4D",
    image: "/mh.jpg",
    description: "Explore Maharashtra's divine temples",
    location: "Maharashtra",
    highlights: ["Trimbakeshwar", "Bhimashankar", "Grishneshwar", "Shirdi"],
    overview:
      "Cover three sacred Jyotirlingas along with key spiritual stops in Maharashtra through a planned and comfortable route.",
    inclusions: ["Hotel accommodation", "Local transfers", "Temple visits", "Trip assistance"],
  },
  {
    id: "tri-city",
    name: "Varanasi-Ayodhya-Prayagraj",
    price: "₹15,999",
    duration: "3N/4D",
    image: "/up.jpg",
    description: "Tri-city spiritual circuit",
    location: "Uttar Pradesh",
    highlights: ["Ram Janmabhoomi", "Triveni Sangam", "Hanuman Garhi", "Ganga Aarti"],
    overview:
      "A powerful three-city pilgrimage combining the sacred energy of Kashi, Ayodhya, and Prayagraj in one guided circuit.",
    inclusions: ["Hotel accommodation", "Intercity transfers", "Local sightseeing", "Trip coordinator support"],
  },
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    price: "₹14,999",
    duration: "3N/4D",
    image: "/rameshwaram.jpg",
    description: "Southern pilgrimage destination",
    location: "Tamil Nadu",
    highlights: ["Ramanathaswamy Temple", "Dhanushkodi", "Adam's Bridge", "Pamban Bridge"],
    overview:
      "Visit one of India's most revered pilgrimage destinations with temple darshan, coastal sightseeing, and local assistance.",
    inclusions: ["Hotel accommodation", "Local transfers", "Temple visit support", "Sightseeing assistance"],
  },
  {
    id: "jagannath-puri",
    name: "Jagannath Puri",
    price: "₹12,999",
    duration: "2N/3D",
    image: "/puri.png",
    description: "Sacred journey to the land of Lord Jagannath",
    location: "Odisha",
    highlights: ["Jagannath Temple", "Puri Beach", "Konark", "Local darshan"],
    overview:
      "A peaceful Puri yatra centered around Jagannath Temple darshan, coastal moments, and nearby spiritual sightseeing.",
    inclusions: ["Hotel accommodation", "Local sightseeing", "Temple visit assistance", "Trip support"],
  },
  // {
  //   id: "meghalaya",
  //   name: "Meghalaya",
  //   price: "₹19,999",
  //   duration: "5N/6D",
  //   image: "/mg.png",
  //   description: "Land of clouds and natural beauty",
  //   location: "Meghalaya",
  //   highlights: ["Living Root Bridges", "Waterfalls", "Mountains", "River"],
  //   overview:
  //     "Explore Meghalaya's serene landscapes, waterfalls, bridges, caves, and hill routes with a nature-focused travel plan.",
  //   inclusions: ["Hotel accommodation", "Local transfers", "Sightseeing", "Trip coordinator support"],
  // },
  {
    id: "kerala",
    name: "Kerala Tour from Mumbai",
    price: "₹18,999",
    duration: "3N/4D",
    image: "/rambg.jpg",
    description: "God's Own Country — Munnar, Thekkady, Alleppey & Kochi",
    location: "Kerala",
    highlights: ["Munnar Tea Gardens", "Periyar Safari", "Alleppey Houseboat", "Fort Kochi"],
    overview:
      "A complete Kerala holiday covering Munnar's tea gardens and Kolukkumalai, Thekkady's Periyar wildlife and spice gardens, an Alleppey backwater houseboat, and historic Fort Kochi. Flights, hotels, houseboat stay, private AC transport and sightseeing all included. Coordinated from Mumbai & Thane.",
    inclusions: [
      "Hotel accommodation",
      "Alleppey houseboat stay",
      "Private AC transport",
      "Periyar boat ride / safari",
      "Spice garden visit",
      "Kathakali cultural show",
      "Cochin airport pickup & drop",
      "Dedicated coordinator support",
    ],
  },
  {
    id: "dev-deepawali",
    name: "Dev Deepawali in Varanasi",
    price: "₹14,999",
    duration: "2N/3D",
    image: "/DD1.PNG",
    description: "Experience Kashi's once-a-year festival of light",
    location: "Uttar Pradesh",
    highlights: ["Dev Deepawali Ghats", "Mangala Aarti at 2 AM", "Maha Ganga Aarti", "Laser & Fire Show"],
    overview:
      "Witness Kashi's 84 ghats light up with a million earthen diyas on Kartik Purnima. Our special 2-night, 3-day tour covers the Dev Deepawali festival, 2 AM Kashi Vishwanath Mangala Aarti (Sparsh Darshan), and local sacred temples with full coordination from Mumbai and Thane.",
    inclusions: [
      "Hotel accommodation",
      "AC local transport",
      "Dev Deepawali boat ride",
      "Mangala Aarti assistance",
      "Pure vegetarian meals",
      "Dedicated tour coordinator",
    ],
  },
  {
    id: "dwarka-somnath",
    name: "Dwarka - Somnath Yatra",
    price: "₹6,999",
    duration: "3N/4D",
    image: "/rambg.jpg",
    description: "Sacred Gujarat pilgrimage to Dwarka, Nageshwar & Somnath",
    location: "Gujarat",
    highlights: ["Dwarkadhish Temple", "Nageshwar Jyotirlinga", "Somnath Temple", "Beyt Dwarka"],
    overview:
      "A complete 3-night, 4-day pilgrimage tour covering Dwarka, Nageshwar Jyotirlinga, Somnath Jyotirlinga, Beyt Dwarka, and Madhavpur Beach. Structured for families, couples, and senior citizens with departures from Mumbai and Thane.",
    inclusions: [
      "Hotel accommodation",
      "Private AC transport",
      "Pure vegetarian meals",
      "Darshan assistance",
      "Beyt Dwarka ferry ride",
      "Dedicated coordinator support",
    ],
  },
]

export function getTripPackage(id: string) {
  return tripPackages.find((pkg) => pkg.id === id)
}
