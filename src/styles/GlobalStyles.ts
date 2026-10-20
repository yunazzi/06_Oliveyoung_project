import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
	//폰트스타일
	@font-face {
		font-family: 'pretendard';
		src: url('/assets/fonts/pretendard/Pretendard-Regular.woff2') format('woff2');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'pretendard';
		src: url('/assets/fonts/pretendard/Pretendard-Medium.woff2') format('woff2');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'pretendard';
		src: url('/assets/fonts/pretendard/Pretendard-SemiBold.woff2') format('woff2');
		font-weight: 600;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'pretendard';
		src: url('/assets/fonts/pretendard/Pretendard-Bold.woff2') format('woff2');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'pretendard';
		src: url('/assets/fonts/pretendard/Pretendard-ExtraBold.woff2') format('woff2');
		font-weight: 800;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: 'pretendard';
		src: url('/assets/fonts/pretendard/Pretendard-Black.woff2') format('woff2');
		font-weight: 900;
		font-style: normal;
		font-display: swap;
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	ul,ol,li {
		list-style:none;
	}

	body {
		font-family: 'pretendard', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	html {
		font-size: 14px;
	}
	
	a {
		color: inherit;
		text-decoration: none;
	}
	
	/* 행에 마우스 올렸을 때 효과 */
	tr:hover {
		background-color: #f1f1f1;
	}
	
	caption {
		overflow: hidden;
		height: 0;
		line-height: 0;
		font-size: 0;
		color: transparent;
	}
	
	/* 텍스트 숨김처리 */
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
`