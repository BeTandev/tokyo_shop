import { useEffect, useState } from "react";
import imgs from "../../assets/imgs";

function ShowComment(props) {

  const {commentData, slug} = props
  const [commentDataFilted, setCommentDataFilted] = useState([])

  useEffect(() => {
    const filData = Array.isArray(commentData) ? commentData.filter(item => item.slug === slug) : []
    setCommentDataFilted(filData)
  }, [commentData, slug])

  return (
    <div>
      {commentDataFilted.length > 0 && <div className="text-xl mt-10 text-main-brown">Bình luận {commentDataFilted?.length}</div>}
      <hr className="mt-2" />
      {commentDataFilted?.map((item, index) => <div key={index} className="flex mt-4 items-center gap-4">
        <img
          src={imgs.avatarComment}
          alt=""
          className="rounded-full block w-16 h-16"
        />
        <div className="text-sm">
          <div className="text-base font-semibold">{item.name}</div>
          <div className="">{item.comment}</div>
        </div>
      </div>)}
    </div>
  );
}

export default ShowComment;
