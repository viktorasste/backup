import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const slides = [
  {
    title: "Kurkite nuostabius elektronikos projektus",
    description: "Projektuojame, programuojame ir gaminame elektronikos gaminius pagal užsakovo reikalavimus.",
    image: "images/implementing-ideas.jpg"
  },
  {
    title: "Išmokite elektronikos pagrindus",
    description: "Pradedantiesiems prijaukite elektronikos pagrindus su mūsų detaliomis pamokomis.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=3648&auto=format&fit=crop"
  },
  {
    title: "Kūrybiški projektai",
    description: "Realizuokite savo idėjas su mūsų projektų idėjomis ir praktiniais gidais",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=3648&auto=format&fit=crop"
  }
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="container-custom relative z-100 text-white text-center px-4 h-[60vh] flex flex-col items-center justify-center mt-60">
            <div className="flex flex-col items-center justify-center h-full gap-1">
              <div className="flex flex-col items-center justify-center h-full gap-1">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-12 text-white/90">
                  {slide.description}
                </p>
              </div>
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-[600px] h-[600px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
