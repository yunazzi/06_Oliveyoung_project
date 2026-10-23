import * as S from './Footer.styles.ts';
import {Link} from "react-router-dom";
import {Button, Typography, SelectBox} from "@/components";
import footerLogo from "/public/assets/icons/ic-footerLogo.svg";
import type {SelectOption} from "@/components/molecules/selectBox/SelectBox.tsx";

const FooterMenuItem = [
	{text: '회사소개', to: '/'},
	{text: '뉴스룸'},
	{text: '채용안내'},
	{text: '제휴제안'},
	{text: '가맹점 개설문의'},
	{text: '상품입점 문의'},
	{text: '대량구매'},
	{text: '사이버 감사실'},
];

const footerInfo = [
	{children: '씨제이올리브영 주식회사  |  대표이사 : 이선정  |  사업자등록번호 : 809-81-01574 사업자정보확인'},
	{children: '주소 : (04323) 서울특별시 용산구 한강대로 372 24층 (동자동, KDB타워)  |  호스팅사업자 : CJ올리브네트웍스'},
	{children: <>통신판매업신고번호 : 2019-서울용산-1428  |  이메일 : <span>oliveyoung@cj.net</span></>},
	{children: <>올리브영은 현금 결제한 금액에 대해 하나은행과 채무지급보증 계약을 체결하여 안전한 거래를 보장하고 있습니다. <span>서비스 가입사실 확인</span></>},
];

const familySiteOptions: SelectOption[] = [
	{label: 'CJ 패밀리 사이트 가기', value: ''},
    {label: 'CJ 주식회사', value: 'https://www.cj.net'},
    {label: 'CJ 대한통운', value: 'https://www.cjlogistics.com'},
    {label: 'CJ 제일제당', value: 'https://www.cj.co.kr'},
    {label: 'CJ CGV', value: 'https://www.cgv.co.kr'},
];

export const Footer = () => {
	return(
		<>
			<S.FooterWrap>
				<S.FooterTopArea>
					<div className="left-area">
						<S.MenuList>
							{FooterMenuItem.map((item, idx) => (
								<li key={idx}>
									<Button as={Link} to={item.to} type='text' size='xs' text={item.text} color={'gray700'} />
								</li>
							))}
						</S.MenuList>
						<div className="logo-area">
							<a href="javascript:" className="footer-logo">
								<img src={footerLogo} alt="Oliveyoung Logo" />
							</a>
						</div>
						<div className="footer-info">
							{footerInfo.map((item) => (
								<Typography variant='caption' weight='medium' as={'p'} color={'gray700'}>{item.children}</Typography>
							))}
						</div>
					</div>

					<div className="right-area">
						<SelectBox
							type={'footer'}
							title={'CJ 패밀리 사이트'}
							options={familySiteOptions}
							onChange={(url) => url && window.open(url, '_blank', 'noopener,noreferrer')}
						/>

						<div className="customer-box">
							<Typography variant='headingMd' weight={'bold'} as={'p'} color={'gray600'}>1577-4887</Typography>
							<div className="customer-info">
								<Typography variant='caption' as={'span'} color={'gray700'}>
									일반 문의 : 9:00 - 18:00 (평일)
								</Typography>
								<Typography variant='caption' as={'span'} color={'gray700'}>
									오늘드림 : 09:00 - 23:00 (평일, 주말)
								</Typography>
							</div>
						</div>

						<div className="btn-wrap">
							<Button type={'outline'} size={'xs'} text={'1:1 문의하기'} color={'gray700'} status={'defFooter'} />
							<Button type={'outline'} size={'xs'} text={'자주묻는 질문'} color={'gray700'} status={'defFooter'} />
							<Button type={'outline'} size={'xs'} text={'공지사항'} color={'gray700'} status={'defFooter'} />
						</div>
					</div>
				</S.FooterTopArea>
				<S.FooterBottomArea>

				</S.FooterBottomArea>
			</S.FooterWrap>
		</>
	)
}