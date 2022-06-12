import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='px-2 mt-2  col-span-2 hidden lg:inline'>
      {/* SearchBox */}
      <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2 '>
        <SearchIcon className='h-5 w-5 text-gray-400'/>
        <input type='text' 
        placeholder='Search Twitter' 
        className=' flex-1 bg-transparent outline-none'
        />
      </div>
      <TwitterTimelineEmbed
  sourceType="profile"
  screenName="ExpectoX1"
  options={{height: 1000}}
/>

    </div>
  )
}

export default Widgets
