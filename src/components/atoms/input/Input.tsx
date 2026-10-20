import React from "react";
import * as S from './Input.styles.ts'

type Props = {
	placeholder?: string;
	type?: 'text' | 'search';
	title?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
	type = 'text',
	placeholder,
	title = '',
	value,
	onChange
}:Props) => {
	return(
		<S.Input
			type={type}
			placeholder={placeholder}
			className={'ui-input'}
			title={title}
			value={value}
			onChange={onChange}
		>
		</S.Input>
	)
}