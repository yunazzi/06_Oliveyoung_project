import * as S from './Table.styles.ts';
import type {ReactNode} from "react";

type Props = {
	type?: 'col' | 'row';
	caption?: string;
	tableWidth?: TableW[];
	thead?: Thead[];
	tbody?: Tbody[];
	textAlign?: 'left' | 'center' | 'right';
	paddingTop?: number;
};

export type TableW = {
	width: string ;
}

export type Thead = {
	text?: string;
}

export type Tbody = {
	text?: ReactNode;
	td?: Td[];
	paddingTop?: number;
}

export type Td = {
	text?: ReactNode;
}

export const Table = ({
	type = 'row', // 정보성 테이블
	caption = '테이블 이름',
	tableWidth = [],
	thead = [],
	tbody = [],
	textAlign = 'left',
	paddingTop
}:Props) => {
	return (
		<S.Table $type={type} $textAlign={textAlign} $paddingTop={paddingTop}>
			<caption>{caption}</caption>
			<colgroup>
				{tableWidth.map((item, idx) => (
					<col key={idx} style={{width: item.width}} />
				))}
			</colgroup>
			{type === 'col' && thead.length > 0 && (
				<thead>
					<tr>
						{thead.map((item, idx) => (
							<th key={idx} scope="col">{item.text}</th>
						))}
					</tr>
				</thead>
			)}
			<tbody>
				{tbody.map((item, idx) => (
					<S.Tr key={idx} $paddingTop={item.paddingTop}>
						{item.text && <th>{item.text}</th>}
						{item.td?.map((cont,tdIdx) => (
							<td key={tdIdx}>{cont.text}</td>
						))}
					</S.Tr>
				))}
			</tbody>
		</S.Table>
	)
}