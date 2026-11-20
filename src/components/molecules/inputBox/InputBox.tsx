import * as S from './InputBox.styles.ts';
import {Icon, Input} from "@/components";

type Props = {
	type?: 'text' | 'search' | 'number';
	title?: string;
	placeholder?: string;
	maxLength?: number;
	gap?: 'sm' | 'md'; // sm - 8px | md - 12px
	value?: string;
};

export const InputBox = ({
	placeholder,
	title,
	type,
	maxLength,
	value
}:Props) => {
	return (
		<S.InputBox>
			<Input
				type={type}
				placeholder={placeholder}
				title={title}
				maxLength={maxLength}
				value={value}
			/>
			<Icon
				isButton
				name={'clear'}
				size={'md'}
				iconColor={'gray500'}
				offscreen={'닫기'}
				className={'btn-input-del'}
			/>
		</S.InputBox>
	)
}