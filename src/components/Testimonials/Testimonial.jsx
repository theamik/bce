import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import Buffet from "../../img/Buffet.png";
import Dakshin from "../../img/Dakshin.png";
import Hiltown from "../../img/Hiltown.png";
import Khusbu from "../../img/Khusbu.png";

const Testimonial = () => {
  const clients = [
    {
      img: Hiltown,
      review:
        "Bhuiyan Computer & Electronics has been a reliable partner for Hiltwon Hotel. From CCTV and attendance system installation to top-quality IT products and networking solutions, their services are exceptional.",
    },
    {
      img: Khusbu,
      review:
        "Bhuiyan Computer & Electronics installed high-quality CCTV cameras for us. Although we faced several issues due to our own fault, their team consistently came to fix them promptly. Their service is excellent, and we truly appreciate their support and professionalism. -- Khusbu Restaurant",
    },
    {
      img: Dakshin,
      review:
        "Bhuiyan Computer & Electronics has been a trusted partner for Dhaksin Surma College. They regularly supply us with IT products like laptops, desktops, and printers, and provide excellent ongoing service. Their commitment to quality and reliability makes them our go-to IT provider.",
    },
    {
      img: Buffet,
      review:
        "Grand Buffet Restaurant is highly satisfied with the alarm and sound systems we recently acquired from Bhuiyan Computer & Electronics. The products are top-quality, and their service is prompt and dependable. We appreciate their professionalism and recommend them for anyone seeking reliable IT solutions.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from us...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
