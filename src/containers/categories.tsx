import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react"

export default function Categories({ items }) {
  const [ selectedCategory, setSelectedCategory ] = useState(useSelector((state: any) => state.category))
  const selectCategory = (cat_id) => {
    if(selectedCategory == cat_id){
      setSelectedCategory(-1)
    }else{
      setSelectedCategory(cat_id)
    }
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: 'SELECT_CATEGORY',
      payload: selectedCategory
    })
  }, [selectedCategory])
  return (
    <div className="pt-8">
      <Swiper 
        slidesPerView={10} spaceBetween={10} freeMode={true} loop={true} loopFillGroupWithBlank={true} 
        breakpoints={{
          "0": {
            "slidesPerView": 2,
            "spaceBetween": 10
          },
          "640": {
            "slidesPerView": 3,
            "spaceBetween": 10
          },
          "1024": {
            "slidesPerView": 5,
            "spaceBetween": 10
          },
          "1366": {
            "slidesPerView": 7,
            "spaceBetween": 10
          },
          "1920": {
            "slidesPerView": 10,
            "spaceBetween": 10
          }
        }}>
        { items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div 
              className={selectedCategory == item.id ? "p-4 flex flex-col border rounded-md text-center border-gray-900 category-wrapper" : "p-4 flex flex-col border rounded-md text-center border-gray-300 category-wrapper"} 
              role="button" 
              onClick={() => selectCategory(item.id)}
            >
              <div className="category">
                <div className="category-div">
                  <img className="category-image-placeholder" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="/>
                </div>
                <img
                  src={'/categories/' + item.image}
                  alt={' Alt ' + item.name}
                  decoding="async"
                  className="category-image"
                />
              </div>
              <p className="category-name font-bold text-gray-900 truncate text-center">{item.name}</p>
            </div>
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
  )
}
