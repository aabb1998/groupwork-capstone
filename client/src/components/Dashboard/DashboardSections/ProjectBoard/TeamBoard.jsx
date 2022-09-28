import React, { useEffect, useState } from "react";
import Board, { moveCard } from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";

const TeamBoard = ({ data }) => {
	const [boardData, setBoardData] = useState(data);

	function handleCardMove(_card, source, destination) {
		const updatedBoard = moveCard(controlledBoard, source, destination);
		setBoard(updatedBoard);
	}

	useEffect(() => {
		setBoardData(data);
	}, [data]);

	return (
		<div>
			{boardData && (
				<Board
					onCardDragEnd={handleCardMove}
					allowRemoveLane
					allowRenameColumn
					allowRemoveCard
					onLaneRemove={console.log}
					onCardRemove={console.log}
					onLaneRename={console.log}
					initialBoard={boardData}
					allowAddCard={{ on: "top" }}
					onNewCardConfirm={(draftCard) => ({
						id: new Date().getTime(),
						...draftCard,
					})}
					onCardNew={console.log}
				/>
			)}
		</div>
	);
};

export default TeamBoard;
