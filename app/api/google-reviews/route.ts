import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Fallback reviews to display if no Google Places API key or Place ID is configured
const FALLBACK_REVIEWS = [
  // {
  //   author_name: "Ketaki Joglekar",
  //   profile_photo_url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  //   rating: 5,
  //   text: "Harsh and Ganesh from Margika Yatra organized a memorable trip for our team of 14 members. We successfully completed the 4-day trip. The Bhasma Aarti, travel arrangements, accommodation, and food were all excellent.",
  //   relative_time_description: "3 months ago",
  // },
  {
    author_name: "Dhriti Bose",
    profile_photo_url: "/Dhristi.png",
    rating: 5,
    text: "We had an amazing spiritual journey with Magrika Yatra. Their team helped us at every place and made every temple visit smooth, comfortable, and successful. From guiding us properly to providing all the necessary facilities, everything was managed perfectly. They explained the importance, history, and details of every temple so beautifully, which made our journey even more meaningful and memorable. Their support, coordination, and hospitality throughout the trip were truly commendable. Highly recommended for anyone planning a peaceful and well-organized pilgrimage experience. Thank you, Magrika Yatra, for making our yatra so special and unforgettable!",
    relative_time_description: "a month ago",
  },
  {
    author_name: "Parag Kumbhar",
    profile_photo_url: "/Parag.png",
    rating: 5,
    text: "I recently went on a New Year trip to Himachal and had an amazing experience with Margika Yatra. The tour managers were extremely supportive and managed everything very smoothly. They were available 24/7 to assist us whenever needed. I was a solo traveler, and even though I had booked this trip through another travel company, I still received excellent support and service from the Margika Yatra tour manager. Overall, it was a wonderful experience, and I truly appreciate their professionalism and dedication.",
    relative_time_description: "5 months ago",
  },
  // {
  //   author_name: "friendsunstoppablesgujarat",
  //   profile_photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  //   rating: 5,
  //   text: "Had an incredible Gujarat spiritual and wildlife trip with Margika Yatra! Visiting Nageshwar Jyotirlinga and Somnath Temple was deeply divine, and the darshan arrangements were smooth and well managed. The peaceful visit to Dwarkadhish Temple added to the spiritual joy, while the thrilling safari at Gir National Park made the journey even more memorable. Everything — travel, stay, and coordination — was perfectly organized. A beautiful mix of devotion, adventure, and comfort. Highly recommended!",
  //   relative_time_description: "4 months ago",
  // },
  {
    author_name: "ARCHANA CHAUHAN",
    profile_photo_url: "/Archana.png",
    rating: 5,
    text: "Visiting the Mahakaleshwar Temple in Ujjain with margik yatra team was one of the most unforgettable spiritual experiences of my life. We attended the Bhasma Aarti, and I can’t even put into words how powerful it was. The Aarti lasts for about 2 hours and from the very beginning, it gave us goosebumps! The energy, the chanting, the rituals—everything was incredibly moving. It’s a truly divine experience that stays with you for life. I highly recommend the margik yatra team and special thanks to Ratan & team to get a good spot and to soak in the sacred atmosphere. Everything is well planned and all the arrangements of tour are awesome.",
    relative_time_description: "a month ago",
  }
];

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // If credentials are not present, return high-quality fallback reviews
  if (!apiKey || !placeId) {
    return NextResponse.json({
      reviews: FALLBACK_REVIEWS,
      rating: 4.9,
      user_ratings_total: 124,
      source: "fallback"
    });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    const response = await fetch(url, { next: { revalidate: 86400 } }); // Cache reviews for 24 hours
    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      return NextResponse.json({
        reviews: data.result.reviews || FALLBACK_REVIEWS,
        rating: data.result.rating || 4.9,
        user_ratings_total: data.result.user_ratings_total || 124,
        source: "google"
      });
    }

    // If API returned error status, fallback
    return NextResponse.json({
      reviews: FALLBACK_REVIEWS,
      rating: 4.9,
      user_ratings_total: 124,
      source: "fallback_api_error"
    });
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return NextResponse.json({
      reviews: FALLBACK_REVIEWS,
      rating: 4.9,
      user_ratings_total: 124,
      source: "fallback_catch_error"
    });
  }
}
