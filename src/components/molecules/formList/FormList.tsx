import * as S from './FormList.styles.ts';
import {Button, Icon, InputBox, Typography} from "@/components";

export type FormOptions = {
	isTooltip?: boolean;
	title?: string;
	count?: number;
	value?: string;
	btnText?: string;
	isAccent?: boolean;
};

type Props = {
	formList?: FormOptions[];
};

const UNIT_RULES: [string, string][] = [
	['포인트', 'P'],
	['기프트카드', '원'],
	['예치금', '원']
]

const getUnit = (title?: string) => {
	if(!title) return '';
	const rule = UNIT_RULES.find(([keyword]) => title.includes(keyword));
	return rule ? rule[1] : '';
}

export const FormList = ({
	formList = [],
}:Props) => {
	return (
		<S.FormList>
			{formList.map((item, idx) => (
				<li className="form-item" key={idx}>
					<div className="form-title">
						<Typography variant={'subTitle'} weight={'medium'}>{item.title}</Typography>
						{item.isTooltip && (
							<Icon name={'question'} size={'md'} iconColor={'gray500'}/>
						)}
						<Typography variant={'subTitle'} weight={'medium'} color={item.isAccent? 'coral600': 'gray700'}>
							{`${item.count?.toLocaleString() ?? ''}${getUnit(item.title)}`}
						</Typography>
					</div>
					<div className="form-cont">
						<InputBox type={'text'} value={item.value}/>
						<Button type={'outline'} size={'sm'} text={item.btnText}
								color={'gray900'} className={'w100'}/>
					</div>
				</li>
			))}
		</S.FormList>
	)
}