import * as S from './Swiper.styles.ts';
import {Icon} from "@/components";

import React, { useRef, useState, type ReactNode } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


type Props = {
	children: ReactNode[];
	type?: 'hero' | 'def';
	spaceBetween?: number;
	slidesPerView?: number | 'auto';
	navigation?: boolean;
	pagination?: boolean;
	autoplay?: boolean;
	delay?: number;
	loop?: boolean;
	className?: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

export const CustomSwiper  = ({
	children,
	type = 'def',
	spaceBetween,
	slidesPerView,
	navigation = true,
	pagination = false,
	autoplay = false,
	delay = 3000,
	loop = false,
	className,
}:Props) => {
	const swiperRef = useRef<SwiperType | null>(null);
	const [current, setCurrent] = useState(1);
	const [playing, setPlaying] = useState(true);
	const slides = React.Children.toArray(children);
	const total = slides.length;
	const isHero = type === 'hero';

	const togglePlay = () => {
		const swiper = swiperRef.current;
		if (!swiper) return;
		if (playing) swiper.autoplay.stop();
		else swiper.autoplay.start();
		setPlaying(!playing);
	};

	const handlePrev = () => swiperRef.current?.slidePrev();
	const handleNext = () => swiperRef.current?.slideNext();

	return (
		<S.SwiperWrap $type={type}>
			<Swiper
				className={className}
				modules={[Autoplay, Navigation, Pagination]}
				spaceBetween={spaceBetween}
				slidesPerView={slidesPerView}
				loop={loop || isHero}
				navigation={!isHero && navigation}
				pagination={!isHero && pagination ? { clickable: true } : false}
				autoplay={
				  autoplay || isHero
					? { delay, disableOnInteraction: false }
					: false
				}
				onSwiper={(s) => (swiperRef.current = s)}
        		onSlideChange={(s) => setCurrent(s.realIndex + 1)}
			>
				{slides.map((child, i) => (
					<SwiperSlide key={i}>{child}</SwiperSlide>
				))}
			</Swiper>

			{isHero && (
				<S.HeroControls>
				  	<S.ProgressTrack>
						<S.ProgressBar $ratio={current / total} />
					</S.ProgressTrack>

					<S.HeroButtons>
						<Icon name='leftArrow' isButton size={'md'} iconColor='black' className='btn-prev' onClick={handlePrev} />
							<S.Fraction>
								<span className="current">{pad(current)}</span>
								<span className="total">{pad(total)}</span>
							</S.Fraction>
						<Icon name='rightArrow' isButton size={'md'} iconColor='black' className='btn-next' onClick={handleNext} />
						<Icon name={playing ? 'pause':'rightArrow'} isButton size={'md'} iconColor='black' className={playing ? 'btn-pause':'btn-play'} onClick={togglePlay} />
					</S.HeroButtons>
				</S.HeroControls>
			)}
		</S.SwiperWrap>
	);
};