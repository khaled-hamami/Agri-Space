import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation, Pagination } from "swiper"
import { useState, useEffect } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

export default function Slider({ slides }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  //* responsive Slides configuration
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const navigationStyles = {
    color: "#0AB68B",
  }

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      slidesPerView={windowWidth > 1240 ? 3 : windowWidth > 800 ? 2 : 1}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      rewind={true}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mySwiper"
      style={{ margin: "100px 0px" }}
      spaceBetween={50}
      navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      scrollbar={{ draggable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide.image}
            style={{ width: "100%", height: "350px", borderRadius: "10px" }}
            alt={`slide-${index}`}
          />
        </SwiperSlide>
      ))}
      <div className="swiper-button-next" style={navigationStyles}></div>
      <div className="swiper-button-prev" style={navigationStyles}></div>
    </Swiper>
  )
}
