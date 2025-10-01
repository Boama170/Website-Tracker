"use client"
import React from 'react'
import { SearchIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

interface SearchSectionProps {
  search: string
  setSearch: (value: string) => void
}

function SearchSection({ search, setSearch }: SearchSectionProps) {
  const router = useRouter()

  const handleViewDetails = () => {
    router.push('/details')
  }

  return (
    <div className="my-8 md:my-16 bg-gray-200 py-6 md:py-8 w-full h-auto flex flex-col md:flex-row items-center gap-6 md:gap-0">
      <ul className="indicators list-disc container max-w-min flex flex-row md:flex-col gap-4 md:gap-8 ms-12">
        <li className="online flex list gap-4 md:gap-6">
          <div className="size-3 md:size-4 mt-1 rounded-full bg-[#5CBA51]" />
          <p className='text-sm md:text-base font-light'>Online</p>
        </li>
        <li className="offline flex gap-4 md:gap-6">
          <div className="size-3 md:size-4 mt-1 rounded-full bg-[#E63F40]" />
          <p className='text-sm md:text-base font-light'>Offline</p>
        </li>
      </ul>

      <div className="flex items-center border mx-4 md:ms-20 w-[90%] md:w-4/6 bg-white border-gray-400 focus-within:border-black text-sm px-2.5 py-2 md:py-3 group">
        <SearchIcon className="h-4 w-4 mr-2.5 text-gray-400 group-focus-within:text-black" />
        <input
          type="search"
          placeholder="Search category"
          className="border-0 focus:outline-none w-full"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <Button 
        className="mx-4 md:mx-0 md:ms-15 bg-[#002AA1] text-base md:text-xl font-light rounded-md py-4 md:py-5 w-[90%] md:w-auto" 
        onClick={handleViewDetails}
      >
        View Details
      </Button>
    </div>
  )
}

export default SearchSection