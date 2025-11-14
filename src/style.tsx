/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

const checkeredPattern = {
	color0: "#fdfdfd",
	color1: "#aaa",
	size: 50,
};
export const Wrapper = css({
	position: "relative",
	width: "100vw",
	height: "100vh",
	background: `linear-gradient(45deg, ${checkeredPattern.color0} 25%, transparent 25%, transparent 75%, ${checkeredPattern.color0} 75%), linear-gradient(45deg, ${checkeredPattern.color0} 25%, transparent 25%, transparent 75%, ${checkeredPattern.color0} 75%)`,
	backgroundColor: checkeredPattern.color1,
	backgroundSize: `${checkeredPattern.size}px ${checkeredPattern.size}px`,
	backgroundPosition: `0 0, ${checkeredPattern.size / 2}px ${checkeredPattern.size / 2}px`,
	alignContent: "center",
});
export const BtnUndo = css({
	width: "80%",
	height: "80%",
	margin: "auto",
	borderRadius: "10%",
});

/**
 * 枠
 * 木目参考URL: qiita.com/nakyos/items/c71dbd723b1df3492b9a
 */
export const Board = css({
	width: "80vmin",
	height: "80vmin",
	minWidth: "350px",
	minHeight: "350px",
	margin: "auto",
	display: "grid",
	gridTemplateColumns: "repeat(7, 1fr)",
	gridTemplateRows: "repeat(7, 1fr)",
	backgroundImage:
		"linear-gradient(90deg, rgba(219, 145, 85, 0.6), rgba(192, 128, 64, 0.6) 60%, rgba(210, 147, 84, 0.6)), repeating-radial-gradient(ellipse at 60% 500%, #c18545, #c18545 0.2%, #d19451 0.6%, #d19451 1%)",
});
/**
 * ベグを置けないマス
 */
export const PegSquareBlank = css({
	pointerEvents: "none",
});
/**
 * 穴の大きさ
 */
const HOLE_SIZE = 50;
/**
 * ベグを置けるマス
 */
export const PegSquare = css({
	position: "relative",
	backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.65) ${HOLE_SIZE - 1}%, transparent ${HOLE_SIZE}%)`,
});
/**
 * ビー玉の大きさ。
 * 枠に対する百分率
 */
const MARBLE_SCALE = 80;
const MARBLE_OFFSET = (100 - MARBLE_SCALE) / 2;
/**
 * ビー玉の親要素。
 * 位置と大きさ調整のため
 */
export const MarbleWrapper = css({
	width: `${MARBLE_SCALE}%`,
	height: `${MARBLE_SCALE}%`,
	transform: `translate(${MARBLE_OFFSET}%, ${MARBLE_OFFSET}%)`,
});
/**
 * ビー玉
 * 参考URL: qiita.com/7note/items/942a47defa538aad5e97
 */
export const Marble = css({
	width: "100%",
	height: "100%",
	borderRadius: "50%",
	backgroundColor: "#182879",
	backgroundImage:
		"radial-gradient(90% 90% at 65% 80%, #48bffe 20%, transparent)",
	boxShadow: `
		-7px -20px 7px -10px rgba(26,68,111,0.9) inset,
		inset 0 0 10px 0px #fff,
		inset 0 0 25px 0px #fff`,
	position: "relative",
});
/**
 * デフォルトのボタンのスタイルの打ち消し
 */
export const DefaultButtonStyleRevert = css({
	padding: 0,
	border: "none",
	outline: "none",
	font: "inherit",
	color: "inherit",
	background: "none",
});
/**
 * ペグの枠の当たり判定用ボタン
 */
export const BtnPegSquare = css({
	position: "absolute",
	top: "0px",
	left: "0px",
	width: "100%",
	height: "100%",
});
const BlinkKeyframe = keyframes({
	"0%": {
		opacity: 0,
	},
	"20%, 50%": {
		opacity: 1,
	},
	"50%, 100%": {
		opacity: 0,
	},
});
/**
 * 選択マークの余白と厚さ
 */
const SELEC_TMARK_SIZE = {
	MARGIN: 5,
	THICKNESS: 10,
} as const;
/**
 * グラデーションの切り替わり位置
 */
const GRADIENT_POINT = {
	_1: SELEC_TMARK_SIZE.MARGIN + SELEC_TMARK_SIZE.THICKNESS,
	_2: 100 - (SELEC_TMARK_SIZE.MARGIN + SELEC_TMARK_SIZE.THICKNESS),
} as const;
/**
 * 選択中のマーク
 */
export const SelectMark = css({
	position: "absolute",
	top: "0px",
	left: "0px",
	width: "100%",
	height: "100%",
	backgroundColor: "#ffaa00",
	clipPath: `rect(${SELEC_TMARK_SIZE.MARGIN}% ${100 - SELEC_TMARK_SIZE.MARGIN}% ${100 - SELEC_TMARK_SIZE.MARGIN}% ${SELEC_TMARK_SIZE.MARGIN}%)`,
	maskImage: `linear-gradient(to left, black ${GRADIENT_POINT._1}%, transparent ${GRADIENT_POINT._1}%, transparent ${GRADIENT_POINT._2}%, black ${GRADIENT_POINT._2}%), linear-gradient(to top, black ${GRADIENT_POINT._1}%, transparent ${GRADIENT_POINT._1}%, transparent ${GRADIENT_POINT._2}%, black ${GRADIENT_POINT._2}%)`,
	animation: `${BlinkKeyframe} 1s linear infinite`,
});
export const BtnSwitch = css({
	position: "absolute",
	top: "10px",
	left: "10px",
});
