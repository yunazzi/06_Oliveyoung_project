import * as S from './FloatingButton.styles.ts';
import oliveYoungApp from '@/assets/oliveyoung-app-def.png';
import {CustomSwiper} from "@/components";

// 이미지
import recentlyProdImg01 from '@/assets/recently-prod-img01.png';

const recentlyProdList = [
	{
		HeroBanner: recentlyProdImg01,
		HeroBannerAlt: '메디힐 마스크팩',
	},
	{
		HeroBanner: recentlyProdImg01,
		HeroBannerAlt: '메디힐 마스크팩',
	},
	{
		HeroBanner: recentlyProdImg01,
		HeroBannerAlt: '메디힐 마스크팩',
	},
	{
		HeroBanner: recentlyProdImg01,
		HeroBannerAlt: '메디힐 마스크팩',
	},
	{
		HeroBanner: recentlyProdImg01,
		HeroBannerAlt: '메디힐 마스크팩',
	}
];

export const FloatingButton = () => {
	return (
		<S.FloatingButton>
			<S.RecentlyViewedProd>
				<div className="title">최근 본 상품</div>
				<CustomSwiper type={'float'} navigation slidesPerView={'auto'} spaceBetween={4} className={'mt-40'}>
					{recentlyProdList.map((item,idx) => (
						<div className="img-area" key={idx}>
							<img src={item.HeroBanner} alt={item.HeroBannerAlt} />
						</div>
					))}
				</CustomSwiper>
			</S.RecentlyViewedProd>
			<S.OliveYoungApp>
				<img src={oliveYoungApp} alt="" />
			</S.OliveYoungApp>
		</S.FloatingButton>
	)
}