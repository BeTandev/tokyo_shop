import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Notice from "../Notice";

function CommentBox(props) {

  const { slug, setCommentData } = props

  const [getEmail, setGetEmail] = useState("")
  const [getName, setGetName] = useState("")
  const [getCmt, setGetCmt] = useState("")
  const [errEmail, setErrEmail] = useState("")
  const [errName, setErrname] = useState("")
  const [errCmt, setErrCmt] = useState("")
  const [showNotice, setShowNotice] = useState(false)

  const handleSubmit = () => {
    if (getEmail && getName && getCmt) {
      try {
        const getCmtData = localStorage.getItem("cmtSave")
        let data = []
        const cmtDataJson = JSON.parse(getCmtData)
        const addCmtDataJson = data.concat(cmtDataJson)
        const getInfo = { name: getName, email: getEmail, comment: getCmt, slug, id: uuidv4() }
        if (cmtDataJson === null) {
          localStorage.setItem("cmtSave", JSON.stringify(getInfo))
        } else {
          const mergeData = addCmtDataJson.concat(getInfo)
          localStorage.setItem("cmtSave", JSON.stringify(mergeData))
          setCommentData(mergeData)
        }
        setShowNotice(true)
        setGetCmt("")
        setGetEmail("")
        setGetName("")
      } catch (err) {
        console.log(err)
      }


    } else if (errName.length === 0) {
      setErrname("Vui lòng điền tên của bạn")
    } else if (errEmail.length === 0) {
      setErrEmail("Vui lòng điền email của bạn")
    } else if (errCmt.length === 0) {
      setErrCmt("Vui lòng điền bình luận của bạn")
    }
  }

  return (
    <div>
      <div className="text-xl mt-10 text-main-brown">Để lại bình luận</div>
      <div className="flex mt-5 gap-5">
        <div className="basis-1/2">
          <label htmlFor="" className="text-main-brown text-base">
            Họ và tên *
          </label>
          {errName && <p className="translate-y-1 text-red-500">{errName}</p>}
          <div className="">
            <input
              type="text"
              className="border w-full py-2 px-4 text-sm outline-none rounded mt-2"
              onChange={(e) => setGetName(e.target.value)}
            />
          </div>
        </div>
        <div className="basis-1/2">
          <label htmlFor="" className="text-main-brown text-base">Email *</label>
          {errEmail && <p className="translate-y-1 text-red-500">{errEmail}</p>}
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
        <label htmlFor="" className="text-main-brown text-base">Bình luận *</label>
        {errCmt && <p className="translate-y-1 text-red-500">{errCmt}</p>}
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
      >Đăng bình luận
      </button>
      <Notice showNotice={showNotice} setShowNotice={setShowNotice} content="Đã gửi bình luận thành công"/>
    </div>
  );
}

export default CommentBox;
