import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const ReviewRating = ({ value }) => {
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="readOnly"
        value={value}
        readOnly
        precision={0.5}
        getLabelText={getLabelText}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        
        emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize:15}} />} 
        icon={<StarIcon style={{ fontSize:15}}/>} 
      />
      {/* {value !== null && (
        <Box sx={{ ml: 2, fontWeight: 'bold', color: 'rgba(0, 0, 0)' }}>{labels[hover !== -1 ? hover : value]}</Box>
      )} */}
    </Box>
  );
};

export default ReviewRating;