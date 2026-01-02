"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function VirlabSwiper({
  slides = [],
  autoplay = true,
  className = "",
}) {
  return (
    <div className={`virlab-swiper ${className}`}>
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={slides.length > 1}
        autoplay={
          autoplay && slides.length > 1
            ? { delay: 7000, disableOnInteraction: false }
            : false
        }
        aria-label="Team Virlab 슬라이드"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={s.id ?? idx}>
            <div className="virlab-slide-card">
              <div className="virlab-slide-media">
                <Image
                  src={s.image}
                  alt={s.title ? `${s.title} 이미지` : "슬라이드 이미지"}
                  fill
                  priority={idx === 0}
                  className="slide-image"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="virlab-slide-body">
                {s.title && (
                  <h3 className="virlab-slide-title">{s.title}</h3>
                )}
                {s.subtitle && (
                  <p className="virlab-slide-subtitle">{s.subtitle}</p>
                )}

                {s.href ? (
                  <Link
                    className="virlab-slide-button"
                    href={s.href}
                    target={s.newTab ? "_blank" : undefined}
                    rel={s.newTab ? "noreferrer" : undefined}
                  >
                    {s.buttonLabel ?? "바로가기"}
                  </Link>
                ) : null}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
