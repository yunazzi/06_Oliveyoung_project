import * as S from './Gnb.styles.ts';
import { Link } from 'react-router-dom';

import {
	Button // atoms
} from "@/components/index.ts";

const gnbItem = [
	{text: '오특', to: '/'},
	{text: '랭킹'},
	{text: '올리브베러'},
	{text: '테마관'},
	{text: '기획전'},
	{text: '세일'},
	{text: '기프트카드'},
	{text: '멤버쉽 ・쿠폰'},
	{text: '이벤트'},
]

export const Gnb = () => {
	return (
		<S.GnbArea>
			<div className="gnb-inner">
				<Button type={'text'} size={'md'} text={'카테고리'} className={'gnb-category'} iconStart={'menu'} />
				<ul className="gnb-list">
					{gnbItem.map((item,idx) => (
						<li key={idx}>
							<Button type={'text'} as={Link} to={item.to} size={'md'} text={item.text}></Button>
						</li>
					))}
				</ul>
			</div>
		</S.GnbArea>
	)
}