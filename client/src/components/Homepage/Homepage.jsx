import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { selectUser } from '../../redux/user';
import { useSelector } from 'react-redux';
import Navbar from './../Navbar/Navbar';
import MainSection from './MainSection';

const Homepage = ({ store }) => {
  const { user } = useSelector(selectUser);

  return (
    <div>
      <Navbar />
      <MainSection />
    </div>
  );
};

export default Homepage;
