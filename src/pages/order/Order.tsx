import {
	Layout, Typography, BreadCrumbs,
	PageTitle, Table, InputBox, SelectBox,
	Button, Tag, FoldingBox, FormList, Box
} from "@/components";

import * as S from './Order.styles.ts';
import type {SelectOption} from "@/components/molecules/selectBox/SelectBox.tsx";

const telephone: SelectOption[] = [
	{label: '010'},
	{label: '016'},
	{label: '012'},
]

const email: SelectOption[] = [
	{label: 'naver.com'},
	{label: 'gmail.com'},
	{label: 'daum.net'},
	{label: 'hanmail.com'},
]

const deliveryMessage: SelectOption[] = [
	{label: '배송시 요청사항을 선택해주세요.'},
	{label: '부재시 문 앞에 놔주세요'},
	{label: '경비실에 맡겨 주세요.'},
	{label: '배송 전 연락 부탁드립니다.'},
	{label: '파손에 위험이 있는 상품입니다. 배송시 주의해 주세요.'},
	{label: '직접입력'},
]

const totalOrderTable = {
	tableWidth: [
		{ width: '116px' },
		{ width: 'auto' }
	],
	tbody: [
		{
			text: <Typography variant={'subTitle'} weight={'medium'} color={'gray800'}>총 상품 금액</Typography>,
			td: [{text: <Typography variant={'subTitle'} weight={'semiBold'}>34,600원</Typography>,}]
		},
		{
			paddingTop: 8,
			text: <Typography variant={'subTitle'} weight={'medium'} color={'gray800'}>쿠폰 할인 금액</Typography>,
			td: [{text: <Typography variant={'subTitle'} weight={'semiBold'}>-4,000원</Typography>,}]
		},
		{
			paddingTop: 16,
			text: <Typography variant={'subTitle'} weight={'medium'} color={'gray800'}>CJ ONE 포인트</Typography>,
			td: [{text: <Typography variant={'subTitle'} weight={'semiBold'}>0P</Typography>,}]
		},
		{
			paddingTop: 8,
			text: <Typography variant={'subTitle'} weight={'medium'} color={'gray800'}>올리브 포인트</Typography>,
			td: [{text: <Typography variant={'subTitle'} weight={'semiBold'}>0P</Typography>,}]
		},
		{
			paddingTop: 16,
			text: <Typography variant={'subTitle'} weight={'medium'} color={'gray800'}>총 배송비</Typography>,
			td: [{text: <Typography variant={'subTitle'} weight={'semiBold'}>5,500원</Typography>,}]
		},
		{
			paddingTop: 12,
			text: <Typography color={'gray700'}>- 올리브영 배송</Typography>,
			td: [{text: <Typography color={'gray700'}>0원</Typography>,}]
		},
		{
			paddingTop: 4,
			text: <Typography color={'gray700'}>- 제휴 브랜드 배송</Typography>,
			td: [{text: <Typography color={'gray700'}>5,500원</Typography>,}]
		}
	]
}

const orderTable = {
	tableWidth: [
		{ width: '116px' },
		{ width: 'auto' }
	],
	tbody: [
		{
			text: '이름',
			td: [
				{text:
					<div className={'input-group'}>
						<InputBox type={'text'} value={'박혜원'} />
					</div>
				}
			]
		},
		{
			paddingTop: 20,
			text: '전화번호',
			td: [
				{text:
					<div className={'input-group gap-12'}>
						<SelectBox title={'핸드폰번호'} options={telephone} />
						<InputBox type={'text'} value={'30566867'} />
					</div>
				}
			]
		},
		{
			paddingTop: 20,
			text: '이메일',
			td: [
				{text:
					<div className={'input-group gap-8'}>
						<InputBox type={'text'} value={'dbskgurwls'} />
						@
						<SelectBox title={'이메일'} options={email} />
					</div>
				}
			]
		}
	]
}

const formList = [
	{
		title: 'CJ ONE 포인트',
		count: 5690,
		isTooltip: false,
		value: 'CJ ONE 포인트는 최소 1,000원 이상 보유 시 10원 단위로 사용 가능해요',
		btnText: '전액 사용',
		isAccent: true
	},
	{
		title: '올리브 포인트',
		count: 5690,
		isTooltip: true,
		value: '올리브 포인트는 10P 단위로 사용 가능해요',
		btnText: '전액 사용'
	},
	{
		title: '올리브 기프트카드',
		count: 5690,
		isTooltip: true,
		value: '올리브영 기프트카드는 최소 10원 이상 보유 시 1원 단위로 사용 가능해요',
		btnText: '조회'
	},
	{
		title: 'CJ 기프트카드',
		count: 5690,
		isTooltip: true,
		value: 'CJ 기프트카드는 최소 10원 이상 보유 시 1원 단위로 사용 가능해요',
		btnText: '조회'
	},
	{
		title: '예치금',
		count: 0,
		isTooltip: false,
		value: '예치금은 최소 1,000원 이상 보유 시 10원 단위로 사용 가능해요',
		btnText: '전액 사용'
	}
];

const foldList = [
	{
		title: "전체동의",
		children:
			<>
			</>
		,
	}
];

export default function Order () {
	return (
		<Layout>
			<S.OrderWrap className={'pt-32 pb-56'}>
				<div className="inner-wrap">
					<PageTitle>
						<Typography variant={'headingMd'} weight={'bold'}>주문・결제</Typography>
						<BreadCrumbs
							steps={['장바구니', '주문・결제', '주문 완료']}
							activeIndex={1}
						/>
					</PageTitle>

					<S.ContentWrap>
						<S.ContWrap>
							<S.ContBox>
								<div className="cont-title pb-8 mb-16">
									<Typography variant={'title'} weight={'bold'}>주문자 정보</Typography>
								</div>
								<Table
									tableWidth={orderTable.tableWidth}
									tbody={orderTable.tbody}
								/>
							</S.ContBox>
							<S.ContBox>
								<div className="cont-title pb-8 mb-16">
									<Typography variant={'title'} weight={'bold'}>배송지 정보</Typography>
									<div className="right-area">
										<Button type='text' size='xs' text='변경' iconEnd={'right-arrow'}
										        color={'gray700'} iconColor={'gray700'}/>
									</div>
								</div>
								<div className="info-box">
									<div className="member-info">
										<Tag type={'outline'} color={'green'}>기본 배송지</Tag>
										<Typography variant={'subTitle'} weight={'bold'}>박혜원</Typography>
									</div>
									<div className="address-info">
										<Typography weight={'medium'} color={'gray900'}>경기도 구리시 건원대로 76번길 39 (인창동, 인창 2단지 주공아파트), 204-1103</Typography>
										<Typography weight={'medium'} color={'gray600'}>공동현관 출입 방법 | 자유 출입 가능</Typography>
									</div>
								</div>
								<SelectBox title={'배송 메세지'} options={deliveryMessage}/>
							</S.ContBox>
							<S.ContBox>
								<div className="cont-title pb-8 mb-16">
									<Typography variant={'title'} weight={'bold'}>
										주문상품 &nbsp;
										<Typography as={'span'} variant={'title'} weight={'bold'} color={'coral500'}>count</Typography>
										건
									</Typography>
								</div>
								폴딩박스
								<FoldingBox />
							</S.ContBox>
							<S.ContBox>
								<div className="cont-title pb-8 mb-16">
									<Typography className={'apply-coupon'} variant={'title'} weight={'bold'}>
										쿠폰 할인 정보
										<Typography as={'span'} variant={'subTitle'} weight={'semiBold'} color={'gray700'}>적용 가능 N개</Typography>
									</Typography>
									<div className="right-area">
										<Typography variant={'title'} weight={'bold'} color={'coral600'}>-4,000원</Typography>
									</div>
								</div>
								<div className="coupon-notice-info">
									<div className="notice-box">
										<Typography weight={'medium'} color={'coral600'}>최대 할인으로 자동 적용되었어요.</Typography>
										<Typography className={'right-area'} weight={'semiBold'}>맞춤형 광고 동의 2천원 쿠폰 외 1장 적용</Typography>
									</div>
									<Button
										type={'outline'}
										size={'sm'} text={'변경'}
										color={'gray900'} className={'w100'}
									/>
								</div>
							</S.ContBox>
							<S.ContBox>
								<div className="cont-title pb-8 mb-16">
									<Typography variant={'title'} weight={'bold'}>포인트・기프트 카드</Typography>
								</div>
								<FormList
									formList={formList}
								/>
							</S.ContBox>
							<S.ContBox>
								<div className="cont-title pb-8 mb-16">
									<Typography variant={'title'} weight={'bold'}>결제 수단</Typography>
								</div>
							</S.ContBox>
						</S.ContWrap>
						<S.AsideWrap>
							<div className="cont-title pb-8 mb-12">
								<Typography variant={'title'} weight={'bold'}>최종 결제 정보</Typography>
							</div>
							<div className="tbl-info-wrap">
								<Table
									tableWidth={totalOrderTable.tableWidth}
									tbody={totalOrderTable.tbody}
									textAlign={'right'}
								/>
								<div className="price-info-footer">
									<Typography variant={'subTitle'} weight={'bold'} color={'gray800'}>최종 결제 금액</Typography>
									<div className="goods-group">
										<Typography variant={'headingSm'} weight={'bold'} color={'coral600'}>36,100</Typography>
										<Typography variant={'subTitle'} weight={'semiBold'}>원</Typography>
									</div>
								</div>
								<Box>
									<Typography weight={'medium'} color={'gray800'}>
										주문 상품정보 및 결제 대행 서비스 이용약관에 모두 동의하십니까?
									</Typography>
									<FoldingBox
										foldList={foldList}
									/>
								</Box>
							</div>
						</S.AsideWrap>
					</S.ContentWrap>
				</div>
			</S.OrderWrap>
		</Layout>
	);
}