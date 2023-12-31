import { useState } from 'react';
import avatarIcon from './assets/img/avatarIcon.svg';
let someId = 3;

export const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: 'Jane Cooper',
      title: 'Amazing Product',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      date: '01/01/2021',
      rating: 4,
    },
    {
      id: 2,
      author: 'Max Doodle',
      title: 'Best choice',
      text: 'Various versions have evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like).',
      date: '05/23/2021',
      rating: 5,
    },
  ]);

  const [currentReview, setCurrentReview] = useState('');

  const currentReviewHandler = (e) => {
    let newValue = e.currentTarget.value;
    setCurrentReview(newValue);
  };

  const addReviewHandler = () => {
    const newReview = {
      id: someId ,
      author: 'Jane Cooper',
      title: 'Amazing Product',
      text: currentReview,
      date: '05/23/2021',
      rating: 5,
    };
    someId++;
    setReviews([newReview, ...reviews]);
    setCurrentReview('');
  };

  return (
    <>
      <div className="review">
        <h3>Reviews ({reviews.length})</h3>
        <textarea onChange={(event) => currentReviewHandler(event)} placeholder="Provide your text..."></textarea>
        <button onClick={() => addReviewHandler()}>Send review</button>
      </div>
      <div>
        {reviews.map((r) => {
          return (
            <div className="reviewField" key={r.id}>
              <div className="info">
                <div className="user">
                  <img src={avatarIcon} alt="avatar" />
                  <div className="infoBox">
                    <p className="author">{r.author}</p>
                    <p className="rating">{r.rating} Rating</p>
                  </div>
                </div>
                <div>
                  <p className="date">{r.date}</p>
                </div>
              </div>

              <div className="content">
                <p className="title">{r.title}</p>
                <p>{r.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
