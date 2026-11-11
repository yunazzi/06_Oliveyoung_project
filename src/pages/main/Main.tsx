// 컴포넌트 import
import {
	Layout,
	CustomSwiper, ProdUnit,
	Typography, Button, Icon,
} from "@/components/index.ts";

import * as S from './Main.styles.ts';
import * as T from './TabCategory.styles.ts';
import * as B from './Banner.styles.ts';
import {
	tabCategories,
	todayDeliveryList,
	soaringViewList,
	brandToWatchList,
	onlyOliveList,
	bigEventList,
	weeklySpecialList
} from '@/data';
import {comma} from "@/utils/numFormat/format.ts";

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
					<CustomSwiper type={'def'} navigation slidesPerView={'auto'} width={282} spaceBetween={24}>
						{todayDeliveryList.map((item) => (
							<ProdUnit
								size={'xl'}
								thumbImg={item.thumbImg}
								thumbAlt={item.prodTitle}
								prodBrand={item.prodBrand}
								prodTitle={item.prodTitle}
								originVal={item.originVal}
								percent={item.percent}
								currentVal={item.currentVal}
								tags={item.tags}
								reviewStar={item.reviewStar}
								reviewNum={item.reviewNum}
								bookmark
							/>
						))}
					</CustomSwiper>
				</S.ContBox>
				<S.ContBox>
					<B.OliveBetterBanner>
						<a href="" className={'btn-link'}></a>
						<div className="img-area">
							<span className="sr-only">올리브베러 브랜드 소개 보러가기</span>
						</div>
						<div className="text-area">
							<span className="sub-title">올리브영이 만든 NEW 웰니스</span>
							<h3 className="title">
								<span className="sr-only">올리브베러</span>
							</h3>
							<span className="description">건강을 ‘관리’가 아닌 <span className="fw-bold">‘즐거운 발견’</span>으로</span>
						</div>
						<div className="view-btn-area">
							<span className="text">
								브랜드 소개 보러가기
							</span>
							<Icon name={'ctaArrow'} size={'auto'} className={'cta-arrow'} />
						</div>
					</B.OliveBetterBanner>
				</S.ContBox>
				<S.ContBox>
					<div className="title-wrap">
						<Typography variant={'headingMd'} weight={'bold'} color={'gray900'}>
							💚 지금 주목해야할 브랜드
						</Typography>
						<Typography variant={'subTitle'} weight={'medium'} color={'gray700'}>
							지금 이 순간, 가장 핫한 브랜드만 모아서
						</Typography>
					</div>
					<CustomSwiper type={'def'} navigation slidesPerView={'auto'} spaceBetween={20}>
						{brandToWatchList.map((item) => (
							<S.BrandWrap>
								<div className="left-area">
									<B.BrandBanner>
										<div className="img-area">
											<img src={item.brandBannerBg} alt={item.brandTitle} />
										</div>
										<div className="text-area">
											<Typography variant={'display'} weight={'medium'} className={'brand-title'} color={'white'}>{item.brandTitle}</Typography>
											<div className="brand-like">
												<Typography weight={'medium'} color={'white'}>{comma(item.brandLikeNum)}명이 좋아해요</Typography>
											</div>
										</div>
									</B.BrandBanner>
								</div>
								<div className="right-area">
									{item.products.map((prod) => (
										<ProdUnit
											key={prod.prodTitle}
											size={'md'}
											thumbImg={prod.thumbImg}
											thumbAlt={prod.prodTitle}
											prodBrand={prod.prodBrand}
											prodTitle={prod.prodTitle}
											originVal={prod.originVal}
											percent={prod.percent}
											currentVal={prod.currentVal}
											tags={prod.tags}
											reviewStar={prod.reviewStar}
											reviewNum={prod.reviewNum}
											bookmark
										/>
									))}
								</div>
							</S.BrandWrap>
						))}
					</CustomSwiper>
				</S.ContBox>
				<S.ContBox>
					<div className="title-wrap">
						<Typography variant={'headingMd'} weight={'bold'} color={'black'}>
							🫒 오직 올리브영에서만
						</Typography>
						<Typography variant={'subTitle'} weight={'medium'} color={'gray700'}>
							이곳에서만 가능한 특별 구성
						</Typography>
					</div>
					<CustomSwiper type={'def'} navigation slidesPerView={'auto'} width={384} spaceBetween={24}>
						{onlyOliveList.map((item) => (
							<B.onlyOliveBanner>
								<div className="img-area">
									<img src={item.onlyOliveBg} />
								</div>
								<div className="text-area">
									<Typography as={'span'} variant={'headingSm'} weight={'bold'}>{item.title}</Typography>
									<Typography as={'span'} variant={'subTitle'} weight={'semiBold'}>{item.desc}</Typography>
								</div>
							</B.onlyOliveBanner>
						))}
					</CustomSwiper>
				</S.ContBox>
				<S.ContBox>
					<div className="title-wrap">
						<Typography variant={'headingMd'} weight={'bold'} color={'black'}>
							📈 조회 급상승, 모두가 찾고 있어요
						</Typography>
						<Typography variant={'subTitle'} weight={'medium'} color={'gray700'}>
							지금 이 순간, 가장 많이 찾는 아이템
						</Typography>
					</div>
					<CustomSwiper type={'def'} navigation slidesPerView={'auto'} width={220} spaceBetween={25}>
						{soaringViewList.map((item,index) => (
							<ProdUnit
								key={index}
								size={'lg'}
								thumbImg={item.thumbImg}
								thumbAlt={item.prodTitle}
								prodView={item.ProdView}
								prodBrand={item.prodBrand}
								prodTitle={item.prodTitle}
								originVal={item.originVal}
								percent={item.percent}
								currentVal={item.currentVal}
								tags={item.tags}
								reviewStar={item.reviewStar}
								reviewNum={item.reviewNum}
								bookmark
								rank={index + 1}
							/>
						))}
					</CustomSwiper>
				</S.ContBox>
				<S.ContBox>
					<div className="title-wrap">
						<Typography variant={'headingMd'} weight={'bold'} color={'black'}>
							⭐️ 인기있는 행사만 모았어요
						</Typography>
						<Typography variant={'subTitle'} weight={'medium'} color={'gray700'}>
							반응 좋은 행사만 골라서 보여드려요
						</Typography>
					</div>
					<CustomSwiper type={'def'} navigation slidesPerView={'auto'} width={384} spaceBetween={24}>
						{bigEventList.map((item) => (
							<S.EventWrap>
								<div className="top-area">
									<B.MediumBanner>
										<div className="img-area">
											<img src={item.eventBannerBg} />
										</div>
										<div className="text-area">
											<Typography variant={'headingMd'} weight={'bold'} className={'event-title'} color={'white'}>{item.title}</Typography>
											<Typography variant={'title'} weight={'bold'} className={'event-desc'} color={'white'}>{item.desc}</Typography>
										</div>
									</B.MediumBanner>
								</div>
								<div className="bottom-area">
									{item.products.map((prod) => (
										<ProdUnit
											key={prod.prodTitle}
											size={'sm'}
											thumbImg={prod.thumbImg}
											thumbAlt={prod.prodTitle}
											prodBrand={prod.prodBrand}
											prodTitle={prod.prodTitle}
											originVal={prod.originVal}
											percent={prod.percent}
											currentVal={prod.currentVal}
											tags={prod.tags}
											reviewStar={prod.reviewStar}
											reviewNum={prod.reviewNum}
											bookmark
										/>
									))}
								</div>
							</S.EventWrap>
						))}
					</CustomSwiper>
				</S.ContBox>
				<S.ContBox>
					<div className="title-wrap">
						<Typography variant={'headingMd'} weight={'bold'} color={'black'}>
							👍 이런 상품은 어때요?
						</Typography>
						<Typography variant={'subTitle'} weight={'medium'} color={'gray700'}>
							당신을 위해 골라본 추천템
						</Typography>
					</div>
					<CustomSwiper type={'def'} navigation slidesPerView={'auto'} width={282} spaceBetween={24}>
						{todayDeliveryList.map((item) => (
							<ProdUnit
								size={'xl'}
								thumbImg={item.thumbImg}
								thumbAlt={item.prodTitle}
								prodBrand={item.prodBrand}
								prodTitle={item.prodTitle}
								originVal={item.originVal}
								percent={item.percent}
								currentVal={item.currentVal}
								tags={item.tags}
								reviewStar={item.reviewStar}
								reviewNum={item.reviewNum}
								bookmark
							/>
						))}
					</CustomSwiper>
				</S.ContBox>
				<S.ContBox>
					<div className="title-wrap">
						<Typography variant={'headingMd'} weight={'bold'} color={'black'}>
							🎁 Weekly Special
						</Typography>
						<Typography variant={'subTitle'} weight={'medium'} color={'gray700'}>
							이번 주에만 만나는 특별한 구성
						</Typography>
					</div>
					<CustomSwiper type={'def'} navigation slidesPerView={'auto'} width={384} spaceBetween={24}>
						{weeklySpecialList.map((item) => (
							<B.MediumBanner>
								<div className="img-area">
									<img src={item.weeklySBannerBg} />
								</div>
								<div className="text-area">
									<Typography variant={'headingMd'} weight={'bold'} className={'event-title'} color={'white'}>{item.title}</Typography>
									<Typography variant={'title'} weight={'bold'} className={'event-desc'} color={'white'}>{item.desc}</Typography>
								</div>
							</B.MediumBanner>
						))}
					</CustomSwiper>
				</S.ContBox>
			</S.ContWrap>
		</Layout>
	)
}