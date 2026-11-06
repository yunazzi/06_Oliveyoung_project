// 컴포넌트 import
import {
	Layout,
	CustomSwiper, ProdUnit,
	Typography, Button,
} from "@/components/index.ts";

import * as S from './Main.styles.ts';
import * as T from './TabCategory.styles.ts';
import {tabCategories} from '@/data/tabCategory.ts';
import type { TagData } from "@/components/molecules/prodUnit/ProdUnit.tsx"

// 이미지 import
import mainHero from '@/assets/main_hero.png';
const oliveBetter = 'https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/9150117102901960085.jpg';
const blackFriday = 'https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/5894762829911584005.jpg';

const swiperItem = [
	{
		HeroBanner: mainHero, HeroBannerAlt: '산리오',
		cate: '올리브영 X 산리오',
		title: <>산리오캐릭터즈와 <br />매일 똑같은 일상도 특별하게</>,
		description: '미션 이벤트 & 단독 콜라보템'
	},
	{
		HeroBanner: oliveBetter, HeroBannerAlt: '올리브베러',
		cate: '올영신상위크',
		title: <>매월 마지막주 <br />트렌디한 신상을 최대 혜택으로</>,
		description: '신상 쿠폰 & 리뷰 포인트 혜택'
	},
	{
		HeroBanner: blackFriday, HeroBannerAlt: '블랙프라이데이',
		cate: '블랙프라이데이',
		title: <>1년에 단 한번 <br />곧 시작되는 블프 미리보기</>,
		description: '사전쿠폰에 더해지는 나만의 혜택'
	}
]

const tagItems: TagData[] = [
    { text: '증정', color: 'gray', type: 'solid' },
    { text: '오늘드림', color: 'pink', type: 'solid' },
];

export default function Main () {
	return (
		<Layout>
			<CustomSwiper type={'hero'} delay={4000} loop>
				{swiperItem.map((item) => (
					<>
						<div className="img-area">
							<img src={item.HeroBanner} alt={item.HeroBannerAlt} />
						</div>
						<div className="text-area">
							<Typography className="cate" variant={'title'} weight={'bold'} color={'gray50'}>{item.cate}</Typography>
							<Typography className="title" variant={'display'} weight={'bold'} color={'gray50'}>{item.title}</Typography>
							<Typography className="description" variant={'subTitle'} weight={'medium'} color={'gray50'}>{item.description}</Typography>
						</div>
					</>
				))}
			</CustomSwiper>

			<S.ContWrap className="content-wrap">
				<S.ContBox className={'mt-28'}>
					<CustomSwiper type={'def'} navigation slidesPerView={'auto'} width={88} spaceBetween={20}>
						{tabCategories.map((item) => (
							<T.TabSlide className="tab-slide" key={item.alt}>
								<div className="img-area">
									<img src={item.src} alt={item.alt} />
								</div>
								<div className="text-area">
									<Typography variant={'subTitle'} weight={'semiBold'}>{item.name}</Typography>
								</div>
							</T.TabSlide>
						))}
					</CustomSwiper>
				</S.ContBox>
				<S.ContBox>
					<div className="title-wrap">
						<Button type={'text'} size={'lg'} text={'⚡ ️오늘 바로 드려요'} iconEnd={'rightArrow'} />
						<Typography variant={'subTitle'} weight={'medium'} color={'gray700'}>
							지금 주문하면 바로 오는 <span className={'pink'}>오늘드림™</span>으로 만나보세요
						</Typography>
					</div>
					<CustomSwiper type={'def'} navigation slidesPerView={'auto'} spaceBetween={20}>
						<>
							<ProdUnit
								size={'xl'}
								ProdView={17898}
								thumbImg={mainHero}
								thumbAlt={'메디힐'}
								prodBrand={'메디힐'}
								prodTitle={'[15년 연속 1위] 메디힐 에센셜 마스크팩10/10 +1매 기획 7종 골라담기'}
								originVal={20000}
								percent={50}
								currentVal={10000}
								tags={tagItems}
							/>
						</>
						<></>
					</CustomSwiper>
				</S.ContBox>
				<S.ContBox>
					<div className="title-wrap">
						<Typography variant={'subTitle'} weight={'medium'} color={'gray700'}>
							지금 주문하면 바로 오는 <span className={'pink'}>오늘드림™</span>으로 만나보세요
						</Typography>
						<Typography variant={'subTitle'} weight={'medium'} color={'gray700'}>
							지금 주문하면 바로 오는 <span className={'pink'}>오늘드림™</span>으로 만나보세요
						</Typography>
					</div>
					<CustomSwiper type={'def'} navigation slidesPerView={'auto'} width={88} spaceBetween={20}>
						{tabCategories.map((item) => (
							<T.TabSlide className="tab-slide" key={item.alt}>
								<div className="img-area">
									<img src={item.src} alt={item.alt} />
								</div>
								<div className="text-area">
									<Typography variant={'subTitle'} weight={'semiBold'}>{item.name}</Typography>
								</div>
							</T.TabSlide>
						))}
					</CustomSwiper>
				</S.ContBox>
			</S.ContWrap>
		</Layout>
	)
}