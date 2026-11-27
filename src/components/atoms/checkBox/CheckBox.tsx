import * as S from './CheckBox.styles.ts';
import {Input, Typography} from "@/components";
import type {TypographyColor} from "@/components/atoms/typography/Typography.tsx";

type Props = {
	id?: string;
	disabled?: boolean;
	checked?: boolean;
	text?: string;
	color?: TypographyColor;
};

export const CheckBox = ({
	id,
	disabled,
	checked,
	text,
	color = 'black'
}:Props) => {
	return (
		<S.CheckBox className={'ui-chk'}>
			<Input
				type={'checkbox'}
				id={id}
				disabled={disabled}
				checked={checked}
			/>
			<label htmlFor={id}>
				<Typography as={'span'} className={'text'} weight={'medium'} color={color}>{text}</Typography>
			</label>
		</S.CheckBox>
	)
}