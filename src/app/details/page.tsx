"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SearchIcon, Trash2, Filter } from "lucide-react"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"
import { CompanyData } from "@/lib/company-data"
import Link from 'next/link'

const FILTER_OPTIONS = [
  { label: "Subsidiary", value: "name" },
  { label: "Website", value: "website" },
  { label: "Status", value: "status" },
  { label: "Category", value: "category" },
]

function Details() {
  const allCompanies = CompanyData.flatMap((section) =>
    section.companies.map((company) => ({
      ...company,
      category: section.title,
    })),
  )

  const [search, setSearch] = useState("")
  const [filterBy, setFilterBy] = useState("name")
  const [showFilter, setShowFilter] = useState(false)

  // Helper to get website string
  const getWebsite = (company: any) => {
    if (company.name === "Sec-Print") return "www.secprintgh.com"
    if (company.name === "Best Western Plus") return "www.bestwestern.com"
    if (company.name === "SOHO Bar-Restaurant") return "www.sohobar.com"
    if (company.name === "IT Energy Ghana") return "www.itenergygh.com"
    if (company.name === "F&B Depot") return "www.fbdepot.com"
    if (company.name === "TIG News") return "www.theindependentghana.com"
    if (company.name === "Angel Publishing") return "www.angelpublishing.com"
    return `www.${company.name.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "")}.com`
  }

  // Filtering logic
  const filteredCompanies = allCompanies.filter((company) => {
    const searchLower = search.toLowerCase()
    if (!search) return true
    if (filterBy === "name") return company.name.toLowerCase().includes(searchLower)
    if (filterBy === "website") return getWebsite(company).toLowerCase().includes(searchLower)
    if (filterBy === "status") return (company.status === "success" ? "active" : "inactive").includes(searchLower)
    if (filterBy === "category") return company.category.toLowerCase().includes(searchLower)
    return true
  })

  // For summary cards
  const totalCompanies = filteredCompanies.length
  const activeCompanies = filteredCompanies.filter((company) => company.status === "success").length
  const inactiveCompanies = totalCompanies - activeCompanies

  return (
    <div className="mt-12">
      <h1 className="text-3xl font-normal m-8">Details</h1>

      <div className="my-16 bg-[#EFEFEF] py-8 w-full h-50 items-center">
        <Link href="/">
          <div className="top flex flex-row gap-2 mb-6 ml-12">
            <ArrowUturnLeftIcon className="h-4 w-4 stroke-2 m-0.5" />
            <span className="text-md">Back</span>
          </div>
        </Link>
        <hr className="border-t border-black my-6 pb-4 w-[95vw] mx-auto" />
        <div className="flex flex-row gap-[42rem] items-center px-12">
          <div className="flex items-center border w-2/6 ms-1 bg-white border-gray-400 focus-within:border-black text-sm px-2.5 py-2 group">
            <SearchIcon className="h-4 w-4 mr-2.5 text-gray-400 group-focus-within:text-black" />
            <input
              type="search"
              placeholder={`Search ${FILTER_OPTIONS.find(opt => opt.value === filterBy)?.label || ""}`}
              className="border-0 focus:outline-none w-full"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="relative">
            <Button
              className="bg-[#6990FF] border-1 border-black text-md font-light rounded-sm -ms-24 py-2"
              onClick={() => setShowFilter((v) => !v)}
              type="button"
            >
              <Filter className="w-4 h-4 mr-2 stroke-black fill-white" />
              <span>Filter</span>
            </Button>
            {showFilter && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow z-10">
                {FILTER_OPTIONS.map(option => (
                  <button
                    key={option.value}
                    className={`block px-4 py-2 w-full text-left hover:bg-gray-100 ${filterBy === option.value ? "bg-gray-200" : ""}`}
                    onClick={() => {
                      setFilterBy(option.value)
                      setShowFilter(false)
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-12 mb-8">
        <div className="flex gap-4">
          <div className="bg-[#44C0DF] text-white px-8 py-6 rounded-lg flex-3">
            <div className="flex justify-between items-center">
              <span className="text-6xl font-light">All</span>
              <span className="text-6xl font-light">{totalCompanies}</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 px-8 py-2 rounded-lg flex-1">
            <div className="text-center flex flex-col gap-2">
              <div className="text-3xl font-light text-gray-700">Active</div>
              <div className="text-5xl font-light text-gray-900">{activeCompanies}</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 px-8 py-2 rounded-lg flex-1">
            <div className="text-center flex flex-col gap-2">
              <div className="text-3xl font-light text-gray-700">Inactive</div>
              <div className="text-5xl font-light text-gray-900">{inactiveCompanies}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 pb-12">
        <div className="bg-white rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="border-none bg-white">
                <TableHead className="font-medium text-gray-700 border-r border-[#000000]">Subsidiary</TableHead>
                <TableHead className="font-medium text-gray-700 border-r border-[#000000]">Website</TableHead>
                <TableHead className="font-medium text-gray-700 border-r border-[#000000] text-center">Status</TableHead>
                <TableHead className="font-medium text-gray-700 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCompanies.map((company, index) => (
                <TableRow
                  key={company.id}
                  className={`hover:bg-gray-50 border-b ${index % 2 === 0 ? "bg-[#E8E8E8AD]" : "bg-white"}`}
                >
                  <TableCell className="font-medium border-r border-black">{company.name}</TableCell>
                  <TableCell className="text-blue-600 border-r border-black">
                    {getWebsite(company)}
                  </TableCell>
                  <TableCell className="border-r border-[#000000] text-center">
                    <Badge variant={company.status === "success" ? "success" : "error"} className="w-20 justify-center">
                      {company.status === "success" ? "ACTIVE" : "INACTIVE"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex gap-2 justify-center">
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <svg className="h-8 w-8" viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.0436 31.6091L18.6509 24.7392L12.9127 20.1592H32.9963V36.1891L27.2581 31.6091L18.6509 38.4791L10.0436 31.6091Z" fill="black"/>
                          <path d="M25.8235 1.83887L41.6035 14.4338V40.7686C41.6035 42.0281 40.3125 43.0586 38.7345 43.0586H4.30537C2.72737 43.0586 1.43628 42.0281 1.43628 40.7686V4.12885C1.43628 2.86936 2.72737 1.83887 4.30537 1.83887H25.8235Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M28.6927 2.98438V13.2893H41.6037L28.6927 2.98438Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-black hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Details