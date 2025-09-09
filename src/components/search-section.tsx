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
    <div className="my-16 bg-gray-200 py-8 w-full h-42 flex items-center ">
      <ul className="indicators list-disc container max-w-min flex flex-col gap-8 ms-6">
        <li className="online flex list gap-12">
          <div className="size-4 mt-1 rounded-full bg-[#5CBA51]" />
          <p className='text-base font-light'>Online</p>
        </li>
        <li className="offline flex gap-12">
          <div className="size-4 mt-1 rounded-full bg-[#E63F40]" />
          <p className='text-base font-light'>Offline</p>
        </li>
      </ul>
      <div className="flex items-center border ms-20 w-4/6 bg-white border-gray-400 focus-within:border-black text-sm px-2.5 py-3 group">
        <SearchIcon className="h-4 w-4 mr-2.5 text-gray-400 group-focus-within:text-black" />
        <input
          type="search"
          placeholder="Search category"
          className="border-0 focus:outline-none w-full"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <Button className="ms-15 bg-[#002AA1] text-xl font-light rounded-md py-5" onClick={handleViewDetails}>View Details</Button>
    </div>
  )
}

export default SearchSection