import React, { useEffect, useState } from 'react';
import Board, { moveCard } from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../../redux/user';
import axios from 'axios';

const TeamBoard = ({ data, teamCode }) => {
  const [boardData, setBoardData] = useState(data);

  const { user } = useSelector(selectUser);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  const handleNewCard = (e) => {
    console.log('Add new card');
    addFeature(e);
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * (1000000 - 1 + 1) + 1);
  };

  const addFeature = async (featureList) => {
    console.log(featureList);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/addfeature/${teamCode}`,
        featureList
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setBoardData(data);
    console.log(boardData);
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
          onCardRemove={(e) => handleNewCard(e)}
          onLaneRename={console.log}
          initialBoard={boardData}
          allowAddCard={{ on: 'top' }}
          onNewCardConfirm={(draftCard) => ({
            id: new Date().getTime(),
            ratings: [],
            user: user.email,
            featureId: generateRandomId(),
            ...draftCard,
          })}
          onCardNew={(e) => handleNewCard(e)}
        />
      )}
    </div>
  );
};

export default TeamBoard;
