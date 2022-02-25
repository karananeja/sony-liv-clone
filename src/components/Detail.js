import { ShareOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import '../css/Detail.css';
import db from '../firebase';

const Detail = () => {
  const [details, setDetails] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetails(doc.data());
        }
      });
  }, [id]);

  return (
    <div className='detail'>
      <div className='detail__img'>
        <img src={details.cardImg} alt={details.title} />
      </div>
      <div className='detail__buttons'>
        <button onClick={() => setShowTrailer(!showTrailer)}>
          Play Trailer
        </button>
        <div className='detail__button'>
          <ShareOutlined />
          Share
        </div>
      </div>
      {showTrailer && (
        <div className='detail__trailer'>
          <ReactPlayer url={details.trailerLink} controls={true} />
        </div>
      )}
    </div>
  );
};

export default Detail;
