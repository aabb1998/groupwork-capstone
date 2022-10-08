import React, { useState } from 'react';
import Modal from 'react-modal';
import UploadFiles from './../../DashboardLeftMenu/UploadFiles/UploadFiles';
import axios from 'axios';
import user from '../../../../redux/user';
import { selectUser } from './../../../../redux/user';
import { useSelector } from 'react-redux';
import FeatureRating from './FeatureRating';
import { AiFillCloseCircle } from 'react-icons/ai';

Modal.setAppElement('#root');

const TeamRating = ({ team }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [hasRatings, setHasRatings] = useState(false);
  const [ratings, setRatings] = useState();
  const { user } = useSelector(selectUser);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: '80%',
      height: '80%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';

    // fetch all the ratings that match
    fetchRatingsData();
  }

  const fetchRatingsData = async () => {
    let response = await axios.get(
      `http://localhost:3000/api/getratings/${team.teamCode}`
    );
    response = response.data.data.filter((obj) => {
      return obj.userCreator == user.email;
    });
    if (response) {
      setRatings(response);
      setHasRatings(true);
    } else {
      setHasRatings(false);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      id="main"
      style={{
        background: '#EEEEEE',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '10px',
        width: '200px',
        borderRadius: '7px',
        height: '105px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '20px',
        marginBottom: '10px',
      }}
    >
      <button
        className="text-base font-bold hover:cursor-pointer"
        onClick={openModal}
      >
        {team.teamName}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h1
            style={{
              fontWeight: 'bold',
              fontSize: '23px',
            }}
          >
            Your feature ratings for {team.teamName}
          </h1>
          <button onClick={closeModal}>
            <AiFillCloseCircle size={32} />
          </button>
        </div>

        <div>
          {hasRatings && ratings ? (
            ratings.map((rating, index) => (
              <FeatureRating ratingData={rating} index={index} />
            ))
          ) : (
            <span>No ratings found</span>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default TeamRating;
