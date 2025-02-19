'use client';

import { CategoryTile } from './CategoryTile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCategories } from '@/context/CategoriesProvider';
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './swiper.module.css';

export function Categories() {
  const categories = useCategories();

  return (
    <section className="py-12 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <h2 className="hidden xl:block text-2xl font-bold mb-8">Kategorie</h2>
        <div className="w-full relative px-10 xl:px-0">
          <Swiper
            className={styles.wrapper}
            modules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            loop
            pagination={{
              clickable: true,
              bulletClass: styles.bullet,
              bulletActiveClass: styles.bulletActive,
              horizontalClass: styles.bulletWrapper,
            }}
            navigation={{
              nextEl: '.arrowNext',
              prevEl: '.arrowPrev',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <CategoryTile category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="xl:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full">
            <div className="arrowPrev absolute -left-2">
              <ChevronLeft className="w-10 h-10" />
            </div>
            <div className="arrowNext absolute -right-2">
              <ChevronRight className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
