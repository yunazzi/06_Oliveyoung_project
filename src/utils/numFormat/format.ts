/* 숫자에 세자리마다 콤마 표기 */
export const comma = (num:number | string): string => String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/* 최대값 이상이면 "최대값+"로 표기 */
export const formatMax = (num:number, max = 9999): string => num >= max ? `${comma(max)}+` : comma(num);