import {
	Layout, Typography, BreadCrumbs, PageTitle, Table, InputBox
} from "@/components";

import * as S from './Order.styles.ts';

const orderTable = {
	tableWidth: [
		{ width: '116px' },
		{ width: '420px' }
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
			text: '이름',
			td: [
				{text:
					<InputBox type={'text'} value={'박혜원'} />
				}
			]
		}
	]
}

export default function Order () {
	return (
		<Layout>
			<S.OrderWrap className={'pt-32'}>
				<div className="inner-wrap">
					<PageTitle>
						<Typography variant={'headingMd'} weight={'bold'}>주문・결제</Typography>
						<BreadCrumbs
							steps={['장바구니','주문・결제','주문 완료']}
							activeIndex={1}
						/>
					</PageTitle>

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

						</S.ContBox>
						<S.ContBox>

						</S.ContBox>
						<S.ContBox>

						</S.ContBox>
						<S.ContBox>

						</S.ContBox>
						<S.ContBox>

						</S.ContBox>
					</S.ContWrap>
					<S.AsideWrap>

					</S.AsideWrap>
				</div>
			</S.OrderWrap>
		</Layout>
	)
}