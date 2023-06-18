// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface SpritesInterface {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

const PokemonSlider = ({ sprites }: { sprites: SpritesInterface }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {sprites.back_default && (
        <SwiperSlide>
          <div>
            <div className="bg-slate-200 flex justify-center items-center flex-col">
              <img src={sprites.back_default} />
              <p className="capitalize">back default</p>
            </div>
          </div>
        </SwiperSlide>
      )}
      {sprites.back_female && (
        <SwiperSlide>
          <div>
            <div className="bg-slate-200 flex justify-center items-center flex-col">
              <img src={sprites.back_female} />
              <p className="capitalize">back female</p>
            </div>
          </div>
        </SwiperSlide>
      )}
      {sprites.back_shiny && (
        <SwiperSlide>
          <div>
            <div className="bg-slate-200 flex justify-center items-center flex-col">
              <img src={sprites.back_shiny} />
              <p className="capitalize">back shiny</p>
            </div>
          </div>
        </SwiperSlide>
      )}
      {sprites.back_shiny_female && (
        <SwiperSlide>
          <div>
            <div className="bg-slate-200 flex justify-center items-center flex-col">
              <img src={sprites.back_shiny_female} />
              <p className="capitalize">back shiny female</p>
            </div>
          </div>
        </SwiperSlide>
      )}
      {sprites.front_default && (
        <SwiperSlide>
          <div>
            <div className="bg-slate-200 flex justify-center items-center flex-col">
              <img src={sprites.front_default} />
              <p className="capitalize">front default</p>
            </div>
          </div>
        </SwiperSlide>
      )}
      {sprites.front_shiny && (
        <SwiperSlide>
          <div>
            <div className="bg-slate-200 flex justify-center items-center flex-col">
              <img src={sprites.front_shiny} />
              <p className="capitalize">front shiny</p>
            </div>
          </div>
        </SwiperSlide>
      )}
      {sprites.front_shiny_female && (
        <SwiperSlide>
          <div>
            <div className="bg-slate-200 flex justify-center items-center flex-col">
              <img src={sprites.front_shiny_female} />
              <p className="capitalize">front shiny female</p>
            </div>
          </div>
        </SwiperSlide>
      )}
      &nbsp;
    </Swiper>
  );
};

export default PokemonSlider;
