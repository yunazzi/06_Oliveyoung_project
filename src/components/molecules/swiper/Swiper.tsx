import * as S from './Swiper.styles.ts';
import {Icon} from "@/components";

import React, { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
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
	width?: number;
}

const pad = (n: number) => String(n).padStart(2, '0');

export const CustomSwiper  = ({
	children,
	type = 'def',
	spaceBetween,
	slidesPerView,
	navigation = false,
	pagination = false,
	autoplay = false,
	delay = 3000,
	loop = false,
	className,
	width
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

	const [slideHeight, setSlideHeight] = useState<number>();

	const measureHeight = (s: SwiperType) => {
		const active = s.slides[s.activeIndex] as HTMLElement | undefined;
		const img = active?.querySelector('img');
		const h = img?.offsetHeight || active?.offsetHeight;
		if (h) setSlideHeight(h);
	};
	useEffect(() => {
		const swiper = swiperRef.current;
		if (!swiper) return;

		const ro = new ResizeObserver(() => measureHeight(swiper));
		swiper.slides.forEach((slide) => ro.observe(slide as HTMLElement));
		return () => ro.disconnect();
	}, [children.length]);

	const [isLocked, setIsLocked] = useState(false);

	return (
		<S.SwiperWrap $type={type} $width={width}>
			<Swiper
				className={className}
				modules={[Autoplay, Pagination]}
				spaceBetween={spaceBetween}
				slidesPerView={slidesPerView}
				loop={loop || isHero}
				navigation={false}
				pagination={!isHero && pagination && !isLocked ? { clickable: true } : false}
				autoplay={
				  autoplay || isHero
					? { delay, disableOnInteraction: false }
					: false
				}
				watchOverflow
				onLock={() => setIsLocked(true)}
    			onUnlock={() => setIsLocked(false)}
				onSwiper={(s) => {
					swiperRef.current = s;
					setIsLocked(s.isLocked);
					measureHeight(s);
				}}
				onSlideChange={(s) => {
					setCurrent(s.realIndex + 1);
					measureHeight(s);
				}}
			>
				{slides.map((child, i) => (
					<SwiperSlide key={i}>{child}</SwiperSlide>
				))}
			</Swiper>

			{isHero ? (
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
			) : (
				navigation && !isLocked && (
					<S.DefControls $height={slideHeight}>
						<button className="btn-prev" onClick={handlePrev}>
							<Icon name='leftArrow' size={'auto'} iconColor='black' />
						</button>
						<button className="btn-next" onClick={handleNext}>
							<Icon name='rightArrow' size={'auto'} iconColor='black' />
						</button>
					</S.DefControls>
				)
			)}
		</S.SwiperWrap>
	);
};