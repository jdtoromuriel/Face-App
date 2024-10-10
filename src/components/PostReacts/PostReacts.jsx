import { useState, useEffect } from 'react';
import './PostReacts.scss';
import Comment2 from './../../assets/Comments2.svg';
import Like2 from './../../assets/Like2.svg';
import Like3 from './../../assets/Like3.svg';
import Laugh from './../../assets/divierte.svg';
import Heart from './../../assets/Heart.svg';
import DefaultAvatar from './../../assets/profile.jpg';

const PostReacts = () => {
  const [reactionCounts, setReactionCounts] = useState({
    likes: 0,
    loves: 0,
    laughs: 0
  });
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInputVisible, setCommentInputVisible] = useState(false);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const storedReactions = localStorage.getItem('reactions');
    const storedComments = localStorage.getItem('comments');

    if (storedReactions) {
      setReactionCounts(JSON.parse(storedReactions));
    }
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const handleCommentSubmit = () => {
    const now = new Date();
    const updatedComments = [...comments, { text: newComment, user: 'Anónimo', time: formatTime(now) }];
    setComments(updatedComments);
    setNewComment('');
    setCommentInputVisible(false);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleReaction = (reactionType) => {
    const updatedReactions = { ...reactionCounts };
    updatedReactions[reactionType] += 1;
    setReactionCounts(updatedReactions);
    setShowEmojiSelector(false);
    localStorage.setItem('reactions', JSON.stringify(updatedReactions));
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('reactions');
    localStorage.removeItem('comments');
    setReactionCounts({ likes: 0, loves: 0, laughs: 0 });
    setComments([]);
  };
  
  let totalReaction = reactionCounts.likes + reactionCounts.loves + reactionCounts.laughs;
  return (
    <>
        <div className="reaction-counts"> 
          <img src={Like3} alt="Me gusta" />
          <img src={Heart} alt="Me encanta" />
          <img src={Laugh} alt="Me divierte" />
          <span>{totalReaction}</span>
        </div>

      <div className="Post-Reacts">
      <hr />
        <section className="Likes-Comments">
          <div className="Like-Comment" onClick={() => setShowEmojiSelector(!showEmojiSelector)}>
            <img src={Like2} alt="Me gusta" />
            <span>Me gusta</span>
          </div>
          <div className="Like-Comment" onClick={() => setCommentInputVisible(!commentInputVisible)}>
            <img src={Comment2} alt="Comentar" />
            <span>Comentar</span>
          </div>
        </section>
        <hr />
        {showEmojiSelector && (
          <div className="emoji-selector">
            <span onClick={() => handleReaction('likes')}>
              <img src={Like3} alt="Me gusta" /> Me gusta
            </span>
            <span onClick={() => handleReaction('loves')}>
              <img src={Heart} alt="Me encanta" /> Me encanta
            </span>
            <span onClick={() => handleReaction('laughs')}>
              <img src={Laugh} alt="Me divierte" /> Me divierte
            </span>
          </div>
        )}



        {commentInputVisible && (
          <div className="comment-input">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe un comentario..."
            />
            <button onClick={handleCommentSubmit}>Comentar</button>
          </div>
        )}
        <div className="comment-count">
          <span>{comments.length} comentarios</span>
        </div>

        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <img src={DefaultAvatar} alt="Avatar" className="comment-avatar" />
              <div className="comment-content">
                <span className="comment-user">{comment.user}</span>
                <p>{comment.text}</p>
                <span className="comment-time">{comment.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="clear-storage-btn" onClick={() => clearLocalStorage()}>
        Borrar todo
      </button>

    </>
  );
  
};

export default PostReacts;
