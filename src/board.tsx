/** @jsxImportSource @emotion/react */

import { useState } from "react";
import {
	BoardType,
	LINE,
	SQUARE_DEFAULT_BRITISH,
	SQUARE_DEFAULT_FRENCH,
	SquareType,
} from "./constants";
import { PegSquare } from "./peg_square";
import * as Style from "./style";

const INIT_SELECT = -1;

let history: number[][] = [];
/**
 * 枠コンポーネント
 */
export function Board() {
	const [board, setBoard] = useState(BoardType.BRITISH);
	const [select, setSelect] = useState(INIT_SELECT);
	const [squares, setSquares] = useState(SQUARE_DEFAULT_BRITISH.flat());
	/**
	 * 飛び越えられるか
	 * @param target 新しく選んだ先のマス
	 * @returns {{success: false} || {success: true, jumpedOver: number}}
	 */
	const isJumpTarget = (target: number) => {
		// 左右上下隣
		const OFFSET_LIST = [1, -1, LINE, -LINE];

		const index = OFFSET_LIST.findIndex((offset) => {
			return (
				// 2つ奥を選んだか。
				select + 2 * offset === target &&
				// 1つ奥がビー玉か
				squares[select + offset] === SquareType.MARBLE
			);
		});

		if (index !== -1) {
			const offset = OFFSET_LIST[index];
			return {
				success: true,
				jumpedOver: select + offset,
			};
		}
		return {
			success: false,
		};
	};
	const handleClick = (index: number) => {
		// ビー玉を選んだら選択中にする。
		if (squares[index] === SquareType.MARBLE) {
			if (select === index) {
				// 同じものだったら解除
				setSelect(INIT_SELECT);
			} else {
				setSelect(index);
			}
			return;
		}

		if (squares[index] === SquareType.HOLE) {
			// 選択した穴が飛び越えた先か
			const result = isJumpTarget(index);

			if (!(result.success && result.jumpedOver !== undefined)) {
				return;
			}
			// 1つ前を保存しておく
			history.push(squares);

			const newSquares = [...squares];

			// 飛び越えた先をビー球にして、飛び越えられた方を穴にする。
			newSquares[index] = SquareType.MARBLE;
			newSquares[select] = SquareType.HOLE;
			newSquares[result.jumpedOver] = SquareType.HOLE;
			setSquares(newSquares);

			// 入れ替えたら選択中を解除。
			setSelect(INIT_SELECT);
		}
	};

	const handleUndo = () => {
		if (!history.length) return;

		const old = history.pop();

		if (!old) return;
		setSelect(INIT_SELECT);
		setSquares(old);
	};

	const handleSwitch = () => {
		const newBoard =
			board === BoardType.BRITISH ? BoardType.FRENCH : BoardType.BRITISH;

		const newSquares = (
			newBoard === BoardType.BRITISH
				? SQUARE_DEFAULT_BRITISH
				: SQUARE_DEFAULT_FRENCH
		).flat();
		setBoard(newBoard);
		setSelect(INIT_SELECT);
		setSquares(newSquares);
		history = [];
	};

	return (
		<>
			<div css={Style.Board}>
				{squares.map((data, index) => {
					const key = index;

					return index === 0 ? (
						<button
							key={key}
							css={Style.BtnUndo}
							type="button"
							onClick={handleUndo}
						>
							戻す
						</button>
					) : (
						<PegSquare
							key={key}
							isSelect={select === index}
							squareType={data}
							onClick={() => {
								handleClick(index);
							}}
						/>
					);
				})}
			</div>
			<button css={Style.BtnSwitch} type="button" onClick={handleSwitch}>
				英←→仏
			</button>
		</>
	);
}
