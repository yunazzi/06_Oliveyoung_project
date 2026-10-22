import { Link } from 'react-router-dom';
import * as S from './Header.styles.ts';

// 컴포넌트 import
import {
	// Icon, Typography, // atoms
	SearchBox, // molecules
	Gnb, // organisms
} from "@/components/index.ts";

// 이미지
import mainLogo from '/public/assets/icons/ic-mainLogo.svg';
import {Button} from "@/components/atoms/button/Button.tsx";

export const Header = () => {
	return(
		<>
			<S.HeaderWrap>
				<S.HeaderUtil>
					<S.MenuList>
						<li>
							<Button as={Link} to={'javascript:'} type='text' size='xs' text={'회원가입'} color={'green500'} />
						</li>
						<li>
							<Button as={Link} to={'javascript:'} type='text' size='xs' text={'로그인'} color={'gray900'} />
						</li>
						<li>
							<Button as={Link} to={'javascript:'} type='text' size='xs' text={'고객센터'} color={'gray900'} />
						</li>
						<li>
							<Button as={Link} to={'javascript:'} type='text' size='xs' text={'Global'} color={'gray900'} />
						</li>
					</S.MenuList>
				</S.HeaderUtil>

				<S.HeaderInner>
					<h1 className="logo-area">
						<a href="javascript:" className="main-logo">
							<img src={mainLogo} alt="Oliveyoung Logo" />
						</a>
					</h1>

					<div className="search-area">
						<SearchBox placeholder='상품, 브랜드, 성분 등을 검색해 보세요.' />
					</div>

					<div className="menu-area">
						<Button type='text' size='sm' text='오늘드림™' iconStart={'today-delivery'} />
						<Button type='text' size='sm' text='올영매장' />
						<Button type='text' size='sm' text='장바구니' />
					</div>
				</S.HeaderInner>
			</S.HeaderWrap>
			<Gnb />
		</>
	)
}
