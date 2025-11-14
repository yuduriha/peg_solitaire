/** @jsxImportSource @emotion/react */

import { SquareType } from "./constants";
import * as Style from "./style";

export function PegSquare({
	squareType,
	isSelect,
	onClick,
}: {
	squareType: number;
	isSelect: boolean;
	onClick: () => void;
}) {
	if (squareType === SquareType.BRANK) {
		// ペグを置けないマス
		return <div css={Style.PegSquareBlank}></div>;
	}

	// ペグを置けるマス
	return (
		<div css={Style.PegSquare}>
			{squareType === SquareType.HOLE ? (
				""
			) : (
				<div css={Style.MarbleWrapper}>
					<div css={Style.Marble}></div>
				</div>
			)}
			{isSelect ? <div css={Style.SelectMark}></div> : ""}
			<button
				css={[Style.DefaultButtonStyleRevert, Style.BtnPegSquare]}
				type="button"
				onClick={onClick}
			></button>
		</div>
	);
}
