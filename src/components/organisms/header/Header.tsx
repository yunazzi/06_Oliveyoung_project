import {type ReactNode} from "react";
import * as S from './Header.styles.ts';

// 컴포넌트 import
import {
	// Icon, Typography, // atoms
	SearchBox, // molecules
} from "@/components/index.ts";

// 이미지
import mainLogo from '/public/assets/icons/ic-mainLogo.svg';
import {Button} from "@/components/atoms/button/Button.tsx";

type Props = {
	children?: ReactNode;
}

export const Header = ({
	children
}:Props) => {
	return(
		<S.HeaderWrap>
			<S.HeaderUtil>
				<S.MenuList>
					<li><a href="javascript:" className={'text-brand-green-500'}>회원가입</a></li>
					<li><a href="javascript:">로그인</a></li>
					<li><a href="javascript:">고객센터</a></li>
					<li><a href="javascript:">Global</a></li>
				</S.MenuList>
			</S.HeaderUtil>

			<S.HeaderInner>
				{children}
				<h1 className="logo-area">
					<a href="javascript:" className="main-logo">
						<img src={mainLogo} alt="Oliveyoung Logo" />
					</a>
				</h1>

				<div className="search-area">
					<SearchBox placeholder='상품, 브랜드, 성분 등을 검색해 보세요.' />
				</div>

				<div className="menu-area">
					<Button type='text' size='auto' text='오늘드림™' iconStart={'today-delivery'} iconColor={'#000'}  color={'black'} className={'btn-today-delivery'} />
					<Button type='text' size='auto' text='올영매장' color={'black'} />
					<Button type='text' size='auto' text='장바구니' color={'black'} />
				</div>
			</S.HeaderInner>
		</S.HeaderWrap>
)
}
