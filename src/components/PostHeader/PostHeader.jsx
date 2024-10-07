import './PostHeader.scss';
import verified from '../../assets/verified.svg';
import earth from '../../assets/earth.svg';
const PostHeader = () => {
  return (
    <>
      <section className='Post-Header'>
        <div className="Post-Content">
            <img className='Post-Content-Img' src="https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-1/326473959_1125342068145924_7868040034763751715_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=zaD02xxWfXMQ7kNvgEMt7Jo&_nc_ht=scontent.feoh1-1.fna&_nc_gid=AC_Mucs3BD0fgifqcmYF4Sb&oh=00_AYD94qbHMlz5ZSyOf7ipSvSr1li5PHE2edsbKGimYdHXgA&oe=67090200" alt="" />
            <div className="Post-Content-Text">
              <div className='Post-Content-Text-Data'>
                <span>Memes</span>
                <img className='Post-Content-Text-Data-Img' src={verified} alt="" />
              </div>
              <div className='Post-Content-Text-Data'>
                <span className='Post-Content-Text-Data-Sub'>11 horas</span>
                <img className='Post-Content-Text-Data-Img'  src={earth} alt="" />
              </div>
            </div>
        </div>
        <p className='Post-Header-Paragraph'>Nice one.</p>
      </section>
    </>
  )
}

export default PostHeader