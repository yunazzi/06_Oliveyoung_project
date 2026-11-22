import {
	Layout, Typography, BreadCrumbs,
	PageTitle, Table, InputBox, SelectBox,
	Icon, Button, Tag
} from "@/components";

import * as S from './Order.styles.ts';
import type {SelectOption} from "@/components/molecules/selectBox/SelectBox.tsx";

const telephone: SelectOption[] = [
	{label: '010', value: ''},
]

const email: SelectOption[] = [
	{label: 'naver.com', value: ''},
	{label: 'gmail.com', value: ''},
	{label: 'daum.net', value: ''},
	{label: 'hanmail.com', value: ''},
	{label: 'hanmailasdadasd.com', value: ''},
]

const deliveryMessage: SelectOption[] = [
	{label: '배송시 요청사항을 선택해주세요.', value: ''},
	{label: '부재시 문 앞에 놔주세요', value: ''},
	{label: '경비실에 맡겨 주세요.', value: ''},
	{label: '배송 전 연락 부탁드립니다.', value: ''},
	{label: '파손에 위험이 있는 상품입니다. 배송시 주의해 주세요.', value: ''},
	{label: '직접입력', value: ''},
]

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
					<InputBox type={'text'} value={'박혜원'} />
				}
			]
		},
		{
			text: '전화번호',
			td: [
				{text:
					<S.flexWrap>
						<SelectBox title={'핸드폰번호'} options={telephone} />
						<InputBox type={'text'} value={'30566867'} />
					</S.flexWrap>
				}
			]
		},
		{
			text: '이메일',
			td: [
				{text:
					<S.flexWrap>
						<InputBox type={'text'} value={'dbskgurwls'} />
						@
						<SelectBox title={'이메일'} options={email} />
					</S.flexWrap>
				}
			]
		}
	]
}

const formList = [
	{
		title: 'CJ ONE 포인트',
		count: '5690',
		isTooltip: false,
		value: 'CJ ONE 포인트는 최소 1,000원 이상 보유 시 10원 단위로 사용 가능해요',
		btnText: '전액 사용'
	},
	{
		title: '올리브 포인트',
		count: '5690',
		isTooltip: true,
		value: '올리브 포인트는 10P 단위로 사용 가능해요',
		btnText: '전액 사용'
	},
	{
		title: '올리브 기프트카드',
		count: '5690',
		isTooltip: true,
		value: '올리브영 기프트카드는 최소 10원 이상 보유 시 1원 단위로 사용 가능해요',
		btnText: '조회'
	},
	{
		title: 'CJ 기프트카드',
		count: '5690',
		isTooltip: true,
		value: 'CJ 기프트카드는 최소 10원 이상 보유 시 1원 단위로 사용 가능해요',
		btnText: '조회'
	},
	{
		title: '예치금',
		count: '0',
		isTooltip: false,
		value: '예치금은 최소 1,000원 이상 보유 시 10원 단위로 사용 가능해요',
		btnText: '전액 사용'
	}
]

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
								<Table
									tableWidth={orderTable.tableWidth}
									tbody={orderTable.tbody}
								/>
							</S.ContBox>
							<S.ContBox>
								<div className="cont-title pb-8 mb-16">
									<Typography variant={'title'} weight={'bold'}>
										쿠폰 할인 정보
									</Typography>
								</div>
							</S.ContBox>
							<S.ContBox>
								<div className="cont-title pb-8 mb-16">
									<Typography variant={'title'} weight={'bold'}>포인트・기프트 카드</Typography>
								</div>
							</S.ContBox>
							<S.ContBox>
								<div className="cont-title pb-8 mb-16">
									<Typography variant={'title'} weight={'bold'}>결제 수단</Typography>
								</div>
								<ul className="form-list">
									{formList.map((item, idx) => (
										<li className="form-item" key={idx}>
											<div className="form-title">
												<Typography variant={'subTitle'}
												            weight={'medium'}>{item.title}</Typography>
												{item.isTooltip && (
													<Icon name={'question'} size={'md'} iconColor={'gray500'}/>
												)}
												{/*<Typography variant={'subTitle'} weight={'medium'} color={'coral600'}>{`${item.count}P`}</Typography>*/}
											</div>
											<div className="form-cont">
												<InputBox type={'text'} value={item.value}/>
												<Button type={'outline'} size={'sm'} text={item.btnText}
												        color={'gray900'} className={'w100'}/>
											</div>
										</li>
									))}
								</ul>
							</S.ContBox>
						</S.ContWrap>
						<S.AsideWrap>

						</S.AsideWrap>
					</S.ContentWrap>
				</div>
			</S.OrderWrap>
		</Layout>
	);
}