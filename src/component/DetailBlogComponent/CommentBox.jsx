import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function CommentBox(props) {
    
    const {slug, setCommentData} = props

    const [getEmail, setGetEmail] = useState("")
    const [getName, setGetName] = useState("")
    const [getCmt, setGetCmt] = useState("")

    const handleSubmit = () => {
        const getCmtData = localStorage.getItem("cmtSave")
        let data = []
        const cmtDataJson = JSON.parse(getCmtData)
        const addCmtDataJson = data.concat(cmtDataJson)
        const getInfo = {name: getName, email: getEmail, comment: getCmt, slug, id: uuidv4()}
        if(cmtDataJson === null){
            localStorage.setItem("cmtSave", JSON.stringify(getInfo))
        } else {
            const mergeData = addCmtDataJson.concat(getInfo)
            localStorage.setItem("cmtSave", JSON.stringify(mergeData))
            setCommentData(mergeData)
        }
        
    }

  return (
    <div>
      <div className="text-xl mt-10 text-main-brown">Để lại bình luận</div>
      <div className="flex mt-5 gap-5">
        <div className="basis-1/2">
          <label htmlFor="" className="text-main-brown">
            Họ và tên *
          </label>
          <div className="">
            <input
              type="text"
              className="border w-full py-2 px-4 text-sm outline-none rounded mt-2"
              onChange={(e) => setGetName(e.target.value)}
            />
          </div>
        </div>
        <div className="basis-1/2">
          <label htmlFor="">Email *</label>
          <div className="">
            <input
              type="email"
              className="border w-full py-2 px-4 text-sm outline-none rounded mt-2"
              onChange={(e) => setGetEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <label htmlFor="">Bình luận *</label>
        <textarea
          name=""
          id=""
          className="border w-full py-2 px-4 text-sm outline-none rounded mt-2 h-40"
          onChange={(e) => setGetCmt(e.target.value)}
        ></textarea>
      </div>
      <button
        className="uppercase mt-5 text-main-brown px-7 py-3 border text-sm hover:bg-main-brown hover:text-white transition-all duration-300"
        type="submit"
        onClick={handleSubmit}
      >Đăng bình luận</button>
    </div>
  );
}

export default CommentBox;
