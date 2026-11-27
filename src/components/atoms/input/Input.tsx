import React from "react";
import * as S from './Input.styles.ts'

type Props = {
	placeholder?: string;
	type?: 'text' | 'search' | 'number' | 'radio' | 'checkbox';
	title?: string;
	value?: string;
	maxLength?: number;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	id?: string;
	name?: string;
	disabled?: boolean;
	checked?: boolean;
}

export const Input = ({
	type = 'text',
	placeholder,
	title,
	value,
	onChange,
	maxLength,
	id,
	name,
	disabled,
	checked
}:Props) => {
	const isNumber = type === 'number';
	 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNumber && maxLength && e.target.value.length > maxLength) {
            e.target.value = e.target.value.slice(0, maxLength);
        }
        onChange?.(e);
    };

	return(
		<S.Input
			id={id}
			name={name}
			disabled={disabled}
			checked={checked}
			type={type}
			inputMode={isNumber ? 'tel' : undefined}
			placeholder={placeholder}
			className={isNumber && maxLength ? 'ui-input num-maxlength' : 'ui-input'}
			title={title}
			value={value}
			onChange={handleChange}
			maxLength={!isNumber ? maxLength : undefined}
			data-maxlength={isNumber ? maxLength : undefined}
		>
		</S.Input>
	)
}