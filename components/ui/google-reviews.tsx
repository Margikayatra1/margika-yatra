"use client"
import { useEffect, useState } from 'react';
import { Star, MessageSquare, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

export function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(4.9);
  const [totalRatings, setTotalRatings] = useState(124);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/google-reviews');
        const data = await res.json();
        if (data.reviews) {
          setReviews(data.reviews);
          setRating(data.rating);
          setTotalRatings(data.user_ratings_total);
        }
      } catch (err) {
        console.error("Failed to load reviews:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const googleMapsUrl = "https://www.google.com/maps/search/Margika+Yatra";

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-16 animate-pulse">
        <div className="h-8 w-64 bg-orange-100 rounded mx-auto mb-4" />
        <div className="h-4 w-48 bg-gray-100 rounded mx-auto mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
                  <div className="h-3 w-16 bg-gray-100 rounded" />
                </div>
              </div>
              <div className="h-4 w-full bg-gray-100 rounded mb-2" />
              <div className="h-4 w-5/6 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className="google-reviews-section relative py-16 overflow-hidden bg-gradient-to-b from-orange-50/50 to-white">
      <style>{`
        .google-reviews-section.py-16,
        .google-reviews-section .py-16 { padding-top: 4rem !important; padding-bottom: 4rem !important; }
        .google-reviews-section .px-4 { padding-left: 1rem !important; padding-right: 1rem !important; }
        .google-reviews-section .p-4 { padding: 1rem !important; }
        .google-reviews-section .p-6 { padding: 1.5rem !important; }
        .google-reviews-section .p-7 { padding: 1.75rem !important; }
        .google-reviews-section .p-2 { padding: 0.5rem !important; }
        .google-reviews-section .pt-4 { padding-top: 1rem !important; }
        .google-reviews-section .pr-4 { padding-right: 1rem !important; }
        .google-reviews-section .py-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
        .google-reviews-section .px-3 { padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
        
        .google-reviews-section .mt-6 { margin-top: 1.5rem !important; }
        .google-reviews-section .mt-12 { margin-top: 3rem !important; }
        .google-reviews-section .mt-1 { margin-top: 0.25rem !important; }
        .google-reviews-section .mt-auto { margin-top: auto !important; }
        .google-reviews-section .mr-3 { margin-right: 0.75rem !important; }
        .google-reviews-section .mb-2 { margin-bottom: 0.5rem !important; }
        .google-reviews-section .mb-4 { margin-bottom: 1rem !important; }
        .google-reviews-section .mb-10 { margin-bottom: 2.5rem !important; }
        .google-reviews-section .mb-12 { margin-bottom: 3rem !important; }
        .google-reviews-section .mb-6 { margin-bottom: 1.5rem !important; }
        .google-reviews-section .mx-auto { margin-left: auto !important; margin-right: auto !important; }
        
        .google-reviews-section .space-x-3 > :not([hidden]) ~ :not([hidden]) {
          margin-left: 0.75rem !important;
        }
      `}</style>
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Google Reviews Header Card */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200 text-orange-800 font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live Google Reviews
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 font-serif">
            What Our Yatris Say On <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">Google</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 p-4 rounded-2xl bg-white/80 border border-orange-100/80 shadow-md max-w-xl mx-auto backdrop-blur-sm">
            <div className="flex items-center space-x-3 border-r border-orange-100 pr-4 last:border-none">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google Logo" 
                width={28} 
                height={28} 
                className="object-contain"
              />
              <div className="text-left">
                <div className="text-xl font-black text-gray-800 leading-none">{rating}</div>
                <div className="text-xs text-gray-500 font-medium">Google Rating</div>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <div className="text-xs text-gray-600 font-bold mt-1">Based on {totalRatings} verified reviews</div>
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Write a Review <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Desktop Carousel Grid (Hidden on mobile) */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.slice(0, 3).map((review, idx) => (
            <div 
              key={idx}
              className="flex flex-col justify-between bg-white border border-orange-100/80 p-7 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
            >
              {/* Google Verified Reviewer Icon Watermark */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-15 transition-opacity pointer-events-none">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                  alt="Google Logo" 
                  width={40} 
                  height={40} 
                />
              </div>

              <div>
                {/* Stars and date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{review.relative_time_description}</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic font-medium">
                  "{review.text}"
                </p>
              </div>

              {/* Author profile block */}
              <div className="flex items-center border-t border-orange-50/80 pt-4 mt-auto">
                <div className="relative w-10 h-10 mr-3 border border-orange-100 rounded-full overflow-hidden shadow-sm">
                  <Image 
                    src={review.profile_photo_url} 
                    alt={review.author_name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-gray-800 leading-none">{review.author_name}</h4>
                  <span className="text-[10px] text-green-600 font-bold flex items-center gap-1 mt-1">
                    <span className="inline-block w-3 h-3 bg-green-100 text-green-700 rounded-full text-center leading-3 text-[8px]">✓</span> 
                    Verified Google Reviewer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipeable View (Only shown on mobile) */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="bg-white border border-orange-100 p-6 rounded-2xl shadow-xl relative min-h-[220px] flex flex-col justify-between">
            <div className="absolute top-4 right-4 opacity-10">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google" 
                width={36} 
                height={36} 
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-medium">{reviews[currentIndex].relative_time_description}</span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic font-medium">
                "{reviews[currentIndex].text}"
              </p>
            </div>

            <div className="flex items-center border-t border-orange-50 pt-4 mt-auto">
              <div className="relative w-10 h-10 mr-3 rounded-full overflow-hidden shadow-sm">
                <Image 
                  src={reviews[currentIndex].profile_photo_url} 
                  alt={reviews[currentIndex].author_name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-black text-gray-800 leading-none">{reviews[currentIndex].author_name}</h4>
                <span className="text-[10px] text-green-600 font-bold flex items-center gap-1 mt-1">
                  ✓ Verified Google Reviewer
                </span>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button 
              onClick={handlePrev}
              className="p-2 border border-orange-200 hover:border-orange-400 bg-white hover:bg-orange-50 text-orange-600 rounded-full transition shadow-md active:scale-90"
              aria-label="Previous review"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <span className="text-xs text-gray-500 font-bold">
              {currentIndex + 1} / {reviews.length}
            </span>
            <button 
              onClick={handleNext}
              className="p-2 border border-orange-200 hover:border-orange-400 bg-white hover:bg-orange-50 text-orange-600 rounded-full transition shadow-md active:scale-90"
              aria-label="Next review"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href={googleMapsUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-black text-orange-600 hover:text-orange-700 hover:underline transition-all"
          >
            See all Google reviews <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
