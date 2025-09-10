"use client"

import Image, { type StaticImageData } from "next/image"
import { cn } from "@/lib/utils"

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

interface CompanyDisplayProps {
  sections: CompanySection[]
  className?: string
  search?: string
}

export function CompanyDisplay({ sections, className, search = "" }: CompanyDisplayProps) {

  const allCompanies = sections.flatMap(section => section.companies);

  return (
    <div className={cn("w-full max-w-7xl ms-7 xl:ms-9 justify-center", className)}>
      <div className="bg-white w-[95vw] shadow-md  rounded-xl p-8 mt-1">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 xl:grid-cols-7 gap-6 w-full">
          {allCompanies.map((company) => (
            <div key={company.id} className="relative">
              {/* Main white card */}
              <div className="bg-white relative z-50 rounded-2xl transition-all duration-200 hover:scale-102 p-2 pt-2">
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
              {/* Status indicator */}
              <div
                className={cn(
                  "pointer-events-none absolute -top-1 -inset-x-0 h-12 rounded-xl",
                  company.status === "success" ? "bg-[#5CBA51]" : "bg-[#E63F40]"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}