import React, { useState } from 'react';
import Board, { moveCard } from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';

const board = {
  columns: [
    {
      id: 1,
      title: 'Backlog',
      cards: [
        {
          id: 1,
          title: 'Add card',
          description: 'Add capability to add a card in a column',
        },
      ],
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [
        {
          id: 2,
          title: 'Drag-n-drop support',
          description: 'Move a card between the columns',
        },
      ],
    },
    {
      id: 3,
      title: 'Completed',
      cards: [
        {
          id: 42,
          title: 'Drag-n-drop support',
          description: 'Move a card between the columns',
        },
      ],
    },
  ],
};

const ProjectBoard = () => {
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }
  return (
    <div>
      <Board
        onCardDragEnd={handleCardMove}
        allowRemoveLane
        allowRenameColumn
        allowRemoveCard
        onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
        initialBoard={board}
        allowAddCard={{ on: 'top' }}
        onNewCardConfirm={(draftCard) => ({
          id: new Date().getTime(),
          ...draftCard,
        })}
        onCardNew={console.log}
      />
    </div>
  );
};

export default ProjectBoard;
