import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch,useSelector } from 'react-redux'
import { createPostAction, updatePostAction } from '../redux/actions/post'
import {toast} from 'react-toastify'



const Modal = () => {
  const [postData, setPostData] = useState({ user: "", title: "", description: "" })
  const dispatch = useDispatch()
  const {modal} = useSelector(state => state.modal)




  const onChangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }

  const postCreate = () => {
    if(modal?.updateId){
      dispatch(updatePostAction(modal?.updateId,postData))
      dispatch({ type: 'MODAL', payload: false })
      toast("Güncelleme başarılı", {
        position: "top-right",
        autoClose: 5000
        });
    }
    else{
      dispatch(createPostAction(postData))
      dispatch({ type: 'MODAL', payload: false })
      toast("Ekleme başarılı", {
        position: "top-right",
        autoClose: 5000
        });
    }
    

  }
  return (
    <div className='w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'>

      <div className='bg-white w-1/3 p-2 rounded-md'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-2xl'>{ modal?.updateId ? "Update Post" : "Share Post"}</h1>
          <IoClose onClick={() => dispatch({ type: 'MODAL', payload: false })} size={25} className='cursor-pointer' />
        </div>


        <div className='my-4 flex flex-col space-y-3'>
          <input value={postData.user} name='user' onChange={onChangeFunc} className='input-style' type='text' placeholder='User' />
          <input value={postData.title} name='title' onChange={onChangeFunc} className='input-style' type='text' placeholder='Title' />
          <input value={postData.description} name='description' onChange={onChangeFunc} className='input-style' type='text' placeholder='Description' />
        </div>
        <div onClick={postCreate} className='w-full p-2 text-center bg-indigo-600 text-white cursor-pointer rounded-md hover:bg-indigo-800 text-xl'>{modal?.updateId ? "Update" : "Share"}</div>
      </div>
    </div>
  )
}

export default Modal