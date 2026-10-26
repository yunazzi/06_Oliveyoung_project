import * as S from './Footer.styles.ts';
import {Link} from "react-router-dom";
import {SelectBox, Button, Typography } from "@/components";
import type { TypographyWeight } from "@/components/atoms/typography/Typography.tsx"; // 실제 경로로 수정
import footerLogo from "/public/assets/icons/ic-footerLogo.svg";
import type {SelectOption} from "@/components/molecules/selectBox/SelectBox.tsx";

// 이미지
import markLogo1 from "/public/assets/icons/ic-ismsp.svg";
import markLogo2 from "/public/assets/icons/ic-ccm.svg";
import facebook from "/public/assets/icons/ic-facebook.svg";
import instagram from "/public/assets/icons/ic-instagram.svg";
import youtube from "/public/assets/icons/ic-youtube.svg";
import blog from "/public/assets/icons/ic-blog.svg";
import kakao from "/public/assets/icons/ic-kakao.svg";

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

const footerButtonWrapCont = [
	{text: '1:1 문의하기'},
	{text: '자주묻는 질문'},
	{text: '공지사항'},
];

const termInfo: { info: string; weight?: TypographyWeight }[] = [
	{info: '이용약관과 정책 법적고지'},
	{info: '개인정보처리방침', weight: 'medium'},
	{info: '청소년보호방침'},
	{info: '고정형 영상정보처리기기운영/관리 방침'},
	{info: '이메일무단수집거부'},
] as const;

const snsItem = [
	{snsLogo: facebook, snsName: '페이스북'},
	{snsLogo: instagram, snsName: '인스타그램'},
	{snsLogo: youtube, snsName: '유튜브'},
	{snsLogo: blog, snsName: '블로그'},
	{snsLogo: kakao, snsName: '카카오톡 채널'},
];

export const Footer = () => {
	return(
		<>
			<S.FooterWrap>
				<div className="footer-inner">
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
								{footerButtonWrapCont.map((item) => (
									<Button type={'outline'} size={'xs'} text={item.text} color={'gray700'} status={'defFooter'} className={'w100'} />
								))}
							</div>
						</div>
					</S.FooterTopArea>
					<S.FooterBottomArea>
						<div className="ba-top-box">
							<ul className="term-info-list">
								{termInfo.map((item, idx) => (
									<li key={idx}>
										<Typography as={'a'} variant={'caption'} weight={item.weight} color={'gray700'}>{item.info}</Typography>
									</li>
								))}
							</ul>
							<Typography variant={'caption'} color={'gray700'}>Copyright ⓒ CJ OliveYoung. All Rights Reserved.</Typography>
						</div>
						<div className="ba-bottom-box">
							<ul className="certification-mark">
								<li>
									<img src={markLogo1} />
									<span className="text-box">
										<p>올리브영 국내, 올리브영 글로벌, 디플롯 운영</p>
										<p>2024. 12. 04 ~ 2027. 12. 03</p>
									</span>
								</li>
								<li>
									<img src={markLogo2} />
									<span className="text-box">
										<Typography variant={'caption'} color={'gray700'}>소비자중심경영 인증</Typography>
									</span>
								</li>
							</ul>
							<ul className="sns-area">
								{snsItem.map((item) => (
									<li className="sns-item">
										<a href="javascript:">
											<img src={item.snsLogo} alt={item.snsName + ` 바로가기`} />
										</a>
									</li>
								))}
							</ul>
						</div>
					</S.FooterBottomArea>
				</div>
			</S.FooterWrap>
		</>
	)
}