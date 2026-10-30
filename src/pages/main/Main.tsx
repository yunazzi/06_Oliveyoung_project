// 컴포넌트 import
import {
	Layout, CustomSwiper, Typography
} from "@/components/index.ts";

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
			<CustomSwiper type={'hero'} delay={4000}>
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
		</Layout>
	)
}