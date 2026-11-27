import * as S from './Radio.styles.ts';
import {Input} from "@/components";

type Props = {
	id?: string;
	name?: string;
	disabled?: boolean;
	checked?: boolean;
	text?: string;
};

/* 라디오는 name 으로 같은 네이밍을 엮으면 그중하나 선택가능 */
export const Radio = ({
	id,
	name,
	disabled,
	checked,
	text,
}:Props) => {
	return(
		<S.Radio className={'ui-rdo'}>
			<Input
				type={'radio'}
				id={id}
				name={name}
				disabled={disabled}
				checked={checked}
			/>
			<label htmlFor={id}>
				<span className="text">{text}</span>
			</label>
		</S.Radio>
	)
}