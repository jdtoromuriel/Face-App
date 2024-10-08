import './PostReacts.scss';
import Comment2 from './../../assets/Comments2.svg'
import Like2 from './../../assets/Like2.svg'
const PostReacts = () => {
  return (
   <>
    <div className="Post-Reacts">
      <section className="Likes-Comments">
        <div className="Like-Comment">
          <img src={Like2} alt="" />
          <span>Me gusta</span>
        </div>
        <div className="Like-Comment">
          <img src={Comment2} alt="" />
          <span>Comentar</span>
        </div>
      </section>
    </div>
   </>
  )
}

export default PostReacts