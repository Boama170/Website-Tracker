"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { StaticImageData } from "next/image"

export interface CompanyLogo {
  id: string
  name: string
  logoUrl: string | StaticImageData
  status: "success" | "error"
}

export interface CompanySection {
  id: string
  title: string
  companies: CompanyLogo[]
}

interface CompanyAccordionProps {
  sections: CompanySection[]
  className?: string
  openSectionIds?: string[]
  search?: string
}

export function CompanyAccordion({ sections, className, openSectionIds = [], search = "" }: CompanyAccordionProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  // Auto-open sections when search changes
  useEffect(() => {
    if (search) {
      setOpenSections(new Set(openSectionIds))
    } else {
      setOpenSections(new Set())
    }
  }, [search, openSectionIds])

  const toggleSection = (sectionId: string) => {
    const newOpenSections = new Set(openSections)
    if (newOpenSections.has(sectionId)) {
      newOpenSections.delete(sectionId)
    } else {
      newOpenSections.add(sectionId)
    }
    setOpenSections(newOpenSections)
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto space-y-8", className)}>
      {sections.map((section) => {
        const isOpen = openSections.has(section.id)

        return (
          <div key={section.id} className="place-self-center">
            {/* Accordion Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className={
                "min-w-[95vw] px-6 py-7 mb-6 rounded-3xl flex items-center bg-[#f5f5f5] shadow-md shadow-[0px_4px_4px 0px_#00000040] z-50 justify-between transition-all duration-200 opacity-90"
               }
            >
              <span className="text-3xl m-2 ps-6 font-normal text-left">{section.title}</span>
              <ChevronDown className={cn("w-9 h-9 me-6 stroke-[4] transition-transform duration-200", isOpen && "rotate-180")} />
            </button>

           {/* Accordion Content */}
          {isOpen && (
            <div className="bg-white shadow-md w-[95vw] place-self-center rounded-xl p-8 mt-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
                {section.companies.map((company) => (
                  <div key={company.id} className="relative">
                    {/* Main white card */}
                    <div className="bg-white relative z-50 rounded-2xl shadow-md p-2 pt-2 transition-all duration-200 hover:scale-105">
                      {/* Logo */}
                      <div className="relative w-full h-20 sm:h-24">
                        <Image
                          src={company.logoUrl || "/placeholder.svg"}
                          alt={company.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div
                      className={cn(
                        "pointer-events-none absolute -top-4 -inset-x-0 h-15 rounded-2xl w-[19.9rem] shadow-sm",
                        company.status === "success" ? "bg-[#5CBA51]" : "bg-[#E63F40]"
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          </div>
        )
      })}
    </div>
  )
}