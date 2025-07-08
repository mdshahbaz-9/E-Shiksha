
import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Mousewheel, Keyboard } from "swiper";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react"; 
import { ratingsEndpoints } from "../../../services/apis";
import { apiConnector } from "../../../services/apiConnector";
import RatingStars from "../../common/RatingStars";

const RatingSlider = () => {
  const [Reviews, setReviews] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      try {
        const res = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        );
        setReviews(res.data.data);
        console.log("LOGGING REVIEWS", res);
      } catch (error) {
        console.log("LOGGING Review ERROR", error);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, []);

  const handleCardTouch = (action) => {
    if (swiperInstance) {
      if (action === 'pause') {
        swiperInstance.autoplay.stop();
        setIsAutoplayPaused(true);
      } else if (action === 'resume') {
        swiperInstance.autoplay.start();
        setIsAutoplayPaused(false);
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
  };

  if (Loading) {
    return (
      <div className="w-full">
        <SkeletonTheme baseColor="#1F2937" highlightColor="#374151">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton circle height={48} width={48} />
                  <div className="flex-1">
                    <Skeleton height={20} width="60%" className="mb-2" />
                    <Skeleton height={16} width="80%" />
                  </div>
                </div>
                <Skeleton height={16} count={3} className="mb-4" />
                <div className="flex justify-between items-center">
                  <Skeleton height={20} width={120} />
                  <Skeleton height={16} width={80} />
                </div>
              </div>
            ))}
          </div>
        </SkeletonTheme>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-gray-900/30 to-slate-800/50 pointer-events-none"></div>
      
      {/* Header Section */}
      <div className="relative z-10 text-center mb-8 px-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                        backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/20 mb-4">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-300">Student Reviews</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 
                       bg-clip-text text-transparent mb-2">
          What Our Students Say
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Real feedback from our learning community
        </p>
      </div>

      <Swiper
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        mousewheel={{
          enabled: true,
          forceToAxis: true,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        allowSlidePrev={true}
        slidesPerView={1}
        loop={true}
        spaceBetween={24}
        pagination={false}
        modules={[Mousewheel, Keyboard, Autoplay]}
        className="mySwiper md:pt-5 pb-8"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-size": "20px",
        }}
        freeMode={false}
        rewind={false}
        centeredSlides={true}
        navigation={false}
        touchRatio={1.2}
        touchAngle={45}
        threshold={5}
        longSwipesRatio={0.3}
        shortSwipes={true}
        grabCursor={true}
        breakpoints={{
          300: { slidesPerView: 1.1, spaceBetween: 16 },
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 3.1, spaceBetween: 24 },
          1280: { slidesPerView: 3.5, spaceBetween: 28 },
        }}
      >
        {Reviews?.map((review, index) => (
          <SwiperSlide key={index}>
            <div 
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 
                         border border-white/10 hover:border-white/20
                         transition-all duration-500 ease-out
                         hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10
                         hover:-translate-y-2 active:scale-[0.98]
                         cursor-grab active:cursor-grabbing
                         min-h-[280px] flex flex-col"
              onTouchStart={() => handleCardTouch('pause')}
              onTouchEnd={() => handleCardTouch('resume')}
              onMouseEnter={() => handleCardTouch('pause')}
              onMouseLeave={() => handleCardTouch('resume')}
              style={{
                WebkitTapHighlightColor: 'transparent',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none'
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-white/20 group-hover:text-white/40 transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative flex-shrink-0">
                  {review?.user?.image ? (
                    <img
                      src={review?.user?.image}
                      alt={`${review?.user?.firstName} ${review?.user?.lastName}`}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/20 
                                 group-hover:border-white/40 transition-all duration-300"
                      draggable={false}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                                    flex items-center justify-center text-white font-semibold text-sm
                                    border-2 border-white/20 group-hover:border-white/40 transition-all duration-300">
                      {getInitials(review?.user?.firstName, review?.user?.lastName)}
                    </div>
                  )}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 
                                  rounded-full border-2 border-gray-800 shadow-lg"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-base leading-tight mb-1 truncate">
                    {review?.user?.firstName} {review?.user?.lastName}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2 truncate">
                    {review?.course?.courseName}
                  </p>
                  <div className="flex items-center gap-2">
                    <RatingStars Review_Count={review?.rating} />
                    <span className="text-xs text-gray-500">
                      {formatDate(review?.createdAt || new Date())}
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1 mb-4">
                <p className="text-gray-300 leading-relaxed text-sm line-clamp-4 
                              transition-colors duration-300 group-hover:text-gray-200">
                  "{review?.review || 'Great learning experience with comprehensive content and excellent support.'}"
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 
                              group-hover:border-white/20 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span className="text-xs text-gray-500 font-medium">Verified Purchase</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="text-xs">Helpful</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Progress Indicators */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <div className="flex gap-2">
          {Reviews?.slice(0, Math.min(5, Reviews.length)).map((_, index) => (
            <button
              key={index}
              onClick={() => swiperInstance?.slideToLoop(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeSlide % Reviews.length
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        
        {/* Autoplay Control */}
        <button
          onClick={() => {
            if (isAutoplayPaused) {
              swiperInstance?.autoplay.start();
              setIsAutoplayPaused(false);
            } else {
              swiperInstance?.autoplay.stop();
              setIsAutoplayPaused(true);
            }
          }}
          className="ml-4 p-2 rounded-full bg-white/10 hover:bg-white/20 
                     transition-all duration-300 group"
        >
          {isAutoplayPaused ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 group-hover:text-white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 group-hover:text-white">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Swipe Indicator for Mobile */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-gray-500 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          <span>Swipe to explore</span>
        </div>
      </div>
    </div>
  );
};

export default RatingSlider;