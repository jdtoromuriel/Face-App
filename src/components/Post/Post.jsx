import PostBody from '../PostBody/PostBody';
import PostHeader from '../PostHeader/PostHeader';
import PostReacts from '../PostReacts/PostReacts';
import './Post.scss';

const post = () => {
  return (
    <div className='Post'>
      <PostHeader/>
      <PostBody/>
      <PostReacts/>
    </div>
  )
}

export default post