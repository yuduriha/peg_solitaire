/**
 * ペグを置ける場所
 */
export const SQUARE_DEFAULT_BRITISH = [
	[0, 0, 2, 2, 2, 0, 0],
	[0, 0, 2, 2, 2, 0, 0],
	[2, 2, 2, 2, 2, 2, 2],
	[2, 2, 2, 1, 2, 2, 2],
	[2, 2, 2, 2, 2, 2, 2],
	[0, 0, 2, 2, 2, 0, 0],
	[0, 0, 2, 2, 2, 0, 0],
];
export const SQUARE_DEFAULT_FRENCH = [
	[0, 0, 2, 2, 2, 0, 0],
	[0, 2, 2, 2, 2, 2, 0],
	[2, 2, 2, 2, 2, 2, 2],
	[2, 2, 2, 1, 2, 2, 2],
	[2, 2, 2, 2, 2, 2, 2],
	[0, 2, 2, 2, 2, 2, 0],
	[0, 0, 2, 2, 2, 0, 0],
];
/**
 * マスの行数(正方形なので列数とも同義)
 */
export const LINE = 7;

export const SquareType = {
	BRANK: 0,
	HOLE: 1,
	MARBLE: 2,
} as const;

export const BoardType = {
	BRITISH: 1,
	FRENCH: 2,
};
