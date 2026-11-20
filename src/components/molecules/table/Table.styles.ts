import styled, {css} from "styled-components";

type StyledProps = {
	$type?: 'col' | 'row';
}

export const Table = styled.table<StyledProps>`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	table-layout: fixed;
	
	caption {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
	
	${({$type}) =>
		$type === 'col'		
		? css`
			/* thead가 있을 경우 */
			thead th {
				background: #f5f5f5;
				border-bottom: 1px solid #ccc;
			}
			tbody td {
				text-align: center;
			}
		` : css `
			/* thead가 없을 경우 */
			tbody th {
				text-align: left;
			}
		`
	}
`;