"use client"
import { CompanyDisplay } from "@/components/company-display"
import { CompanyData } from "@/lib/company-data"
import SearchSection from '@/components/search-section'
import React, { useState } from 'react'

function Home() {
  const [search, setSearch] = useState("")

  // Lowercase search for comparison
  const searchLower = search.toLowerCase()

  // Filter logic: match section title or company name
  const filteredSections = CompanyData.map(section => {
    const sectionMatch = section.title.toLowerCase().includes(searchLower)
    const filteredCompanies = section.companies.filter(company =>
      company.name.toLowerCase().includes(searchLower)
    )
    // If section matches, show all companies; else, only matching companies
    return sectionMatch
      ? { ...section }
      : { ...section, companies: filteredCompanies }
  })
  .filter(section =>
    section.title.toLowerCase().includes(searchLower) ||
    section.companies.length > 0
  )

  // Find IDs of sections that should be open
  const openSectionIds = filteredSections
    .filter(section =>
      search
        ? section.title.toLowerCase().includes(searchLower) || section.companies.length > 0
        : false
    )
    .map(section => section.id)

  return (
    <div className="mt-12">
      <h1 className='text-3xl font-normal m-8'>Website Tracker</h1>
      <SearchSection search={search} setSearch={setSearch} />
      <div className="container my-12">
        <CompanyDisplay sections={filteredSections} search={search} />
      </div>
    </div>
  )
}

export default Home