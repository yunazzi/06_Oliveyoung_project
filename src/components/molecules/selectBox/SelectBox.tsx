import * as S from './SelectBox.styles.ts';

const optionItem = [
	{option: 'CJ 패밀리 사이트 가기'},
	{option: 'CJ 주식회사'},
	{option: 'CJ 대한통운'},
	{option: 'CJ 제일제당'},
	{option: 'CJ CGV'},
]

type Props = {
	title?: string;
	type?: 'def' | 'footer';
}

export const SelectBox = ({
	title,
	type = 'def',
}:Props) => {
	return(
		<S.SelectBox
			title={title}
			$type={type}
		>
			{optionItem.map((item) => (
				<option value="">{item.option}</option>
			))}
		</S.SelectBox>
	)
}