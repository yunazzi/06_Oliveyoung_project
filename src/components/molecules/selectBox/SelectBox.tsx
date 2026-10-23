import * as S from './SelectBox.styles.ts';

export type SelectOption = {
	label: string;
	value: string;
}

type Props = {
	title?: string;
	type?: 'def' | 'footer';
	options?: SelectOption[];
	onChange?: (value: string) => void;
}

export const SelectBox = ({
	title,
	type = 'def',
	options = [],
	onChange,
}:Props) => {
	return(
		<S.SelectBox
			title={title}
			$type={type}
			onChange={(e) => onChange?.(e.target.value)}
		>
			{options.map((item) => (
				<option key={item.value} value={item.value}>{item.label}</option>
			))}
		</S.SelectBox>
	)
}