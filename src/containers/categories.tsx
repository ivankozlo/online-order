import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from 'swiper/core'

export default function Categories({ items }) {
  return (
    <div className="pt-8">
      <Swiper slidesPerView={10} spaceBetween={30} freeMode={true} loop={true} loopFillGroupWithBlank={true}>
        { items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-4 flex flex-col border rounded-md text-center  border-gray-300">
              <div className="category">
                <div className="category-div">
                  <img className="category-image-placeholder" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="/>
                </div>
                <img
                  src={'/categories/' + item.image}
                  alt={' Alt ' + item.name}
                  decoding="async"
                  className="category-image"
                  width="100"
                  height="100"
                />
              </div>
              <p className="font-semibold text-gray-900 truncate">{item.name}</p>
            </div>
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
  )
}
