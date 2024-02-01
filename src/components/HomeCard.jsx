import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import {useDispatch} from 'react-redux'
import { deletePostAction } from '../redux/actions/post'
import {toast} from 'react-toastify'


const HomeCard = ({ post }) => {

    const dispatch = useDispatch()

    const deletePost = (id) => {

        dispatch(deletePostAction(id))
        toast("Silme başarılı", {
            position: "top-right",
            autoClose: 5000
            });
        window.location.reload()
    
    }

    const updatePost = (id) => {
        dispatch({ type: 'MODAL', payload: {open:true, updateId: id} })

    }
    return (
        <div className='relative w-1/4 border p-3 m-3 rounded-md bg-gray-50'>
            <div className='font-bold text-xl'>{post?.title}</div>
            <div className='text-gray-700 text-sm'>{post?.description}</div>
            <div className='flex items-center justify-between mt-4'>
                <span className='text-xs text-gray-500'>
                    {post?.user}
                </span>
                <span className='text-xs text-gray-500'>
                    {(post?.date)?.substring(0, 10)}
                </span>
            </div>
            <div className='absolute top-0 right-0 flex items-center'>
                <GrUpdate onClick={() =>updatePost(post._id)} className='mr-3 text-yellow-600 cursor-pointer' size={18} />
                <AiOutlineDelete onClick={() => deletePost(post._id)} className='mr-1 text-red-600 cursor-pointer' size={22} />
            </div>

        </div>
    )
}

export default HomeCard