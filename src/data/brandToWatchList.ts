/* 지금 주목해야할 브랜드 */

import {tag} from "@/data/tags.ts";
import thumbImg01 from "@/assets/thumb-img.png";
import thumbImg05 from "@/assets/thumb-img04.png";
import brandBannerBg01 from '@/assets/brand-banner-bg.png';
const brandBannerBg02 = 'https://image.oliveyoung.co.kr/cfimages/contents/planshop/image/202610191625244343.jpg';

export const brandToWatchList = [
	{
		brandTitle: "아로마티카",
		brandLikeNum: 1290,
		brandBannerBg: brandBannerBg01,
		products: [
			{
				thumbImg: thumbImg01,
				prodTitle: '[15년 연속 1위] 메디힐 에센셜 마스크팩10/10 +1매 기획 7종 골라담기',
				prodBrand: '메디힐',
				originVal: 20000,
				percent: 50,
				currentVal: 10000,
				reviewStar: 4.5,
				reviewNum: 9999,
				tags: [tag.today, tag.coupon]
			},
			{
				thumbImg: thumbImg05,
				prodTitle: '[미니쿠션 증정] 정샘물 에센셜 스킨 누더 쿠션 한정 기획',
				prodBrand: '정샘물',
				originVal: 20000,
				percent: 50,
				currentVal: 10000,
				reviewStar: 4.5,
				reviewNum: 9999,
				tags: [tag.today, tag.coupon]
			}
		]
	},
	{
		brandTitle: "해서린",
		brandLikeNum: 912,
		brandBannerBg: brandBannerBg02,

		products: [
			{
				thumbImg: thumbImg01,
				prodTitle: '[15년 연속 1위] 메디힐 에센셜 마스크팩10/10 +1매 기획 7종 골라담기',
				prodBrand: '메디힐',
				originVal: 20000,
				percent: 50,
				currentVal: 10000,
				reviewStar: 4.5,
				reviewNum: 9999,
				tags: [tag.today, tag.coupon]
			},
			{
				thumbImg: thumbImg05,
				prodTitle: '[미니쿠션 증정] 정샘물 에센셜 스킨 누더 쿠션 한정 기획',
				prodBrand: '정샘물',
				originVal: 20000,
				percent: 50,
				currentVal: 10000,
				reviewStar: 4.5,
				reviewNum: 9999,
				tags: [tag.today, tag.coupon]
			}
		]
	}
]