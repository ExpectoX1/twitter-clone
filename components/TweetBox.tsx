import React,{useState} from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
} from '@heroicons/react/outline'
import { getSession, useSession } from 'next-auth/react'

function TweetBox() {
    const [input, setInput] = useState<string>('')
    const {data :session } = useSession()
    const [ImageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)
    
   
  return (
    <div className='flex space-x-2 p-5'>
        <img 
        className=' mt-4 h-14 w-14 object-cover rounded-full' 
        src={session?.user?.image ||'http://links.papareact.com/gll'}
        alt="pfp"/>

        <div className='flex flex-1  pl-2'>
            <form className='flex flex-1 flex-col '>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type='text' 
                placeholder="What's Happening?"
                className='h-24 w-full text-xl outline-none placeholder:text-xl '
                
                />
                <div className='flex items-center '>
                    <div className='flex flex-1 space-x-2 text-twitter'>
                        <PhotographIcon onClick={ () => setImageUrlBoxIsOpen(!ImageUrlBoxIsOpen)} className='h-5 w-5 cursor-pointer
                         transition-transform duration-150 ease-out hover:scale-150 '/>
                        <SearchCircleIcon className='h-5 w-5 cursor-pointer
                         transition-transform duration-150 ease-out hover:scale-150'/>
                        <EmojiHappyIcon className='h-5 w-5 cursor-pointer
                         transition-transform duration-150 ease-out hover:scale-150'/>
                        <CalendarIcon className='h-5 w-5 cursor-pointer
                         transition-transform duration-150 ease-out hover:scale-150'/>
                        <LocationMarkerIcon className='h-5 w-5 cursor-pointer
                         transition-transform duration-150 ease-out hover:scale-150'/>
                    </div>

                    <button 
                        disabled={!input || !session}
                        className='bg-twitter rounded-full px-5 py-2 font-bold text-white disabled:opacity-40'>
                        Tweet
                        </button>
                </div>
                {ImageUrlBoxIsOpen && (
                    <form className='mt-5 flex rounded-lg bg-twitter/80 py-2 px-4 '>
                        <input className='flex-1 bg-transparent outline-none placeholder:text-white ' type='text' placeholder='Enter Image URL...'/>
                        <button className='font-bold text-white'>Add Image</button>
                    </form>
                ) }
            </form>
        </div>
    </div>
  )
}

export default TweetBox