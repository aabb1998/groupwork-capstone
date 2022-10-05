import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const RatingBoard = ({ color, rating }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: '20px',
        marginTop: '30px',
        marginBottom: '30px',
        borderRadius: '7px',
        height: '150px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        className="rating"
      >
        <div className="left">
          <h5 className="font-bold">{rating}</h5>
        </div>
        <div className="right">
          <PieChart
            animate={true}
            style={{
              height: '70px',
              marginTop: '10px',
            }}
            paddingAngle={10}
            labelStyle={{
              fontSize: '5px',
              fill: '#000',
            }}
            labelPosition={63}
            lineWidth={20}
            data={[
              { title: 'One', value: 7, color: 'green' },
              { title: 'Two', value: 10, color: 'white' },
            ]}
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default RatingBoard;
