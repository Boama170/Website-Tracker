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

export function CompanyDisplay({ sections, className }: CompanyDisplayProps) {
  const allCompanies = sections.flatMap((section) => section.companies)

  return (
    <div className={cn("w-full md:min-w-[99vw] px-4 md:px-8 max-w-7xl mx-auto", className)}>
      <div className="bg-white w-full shadow-md rounded-xl p-4 md:p-8 mt-1">
        <div
          className="grid gap-4 md:gap-7 w-full"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            gridAutoRows: "min-content",
          }}
        >
          {allCompanies.map((company) => (
            <div key={company.id} className="relative flex-grow">
              {/* Main white card */}
              <div
                className={cn(
                  "bg-white shadow-md relative z-50 rounded-2xl border-t-5 transition-all duration-200 hover:scale-105 p-5 pt-2 flex-grow",
                  className,
                  company.status === "success" ? "border-t-[#5CBA51]" : "border-t-[#E63F40]",
                )}
              >
                {/* Logo */}
                <div className="relative w-full h-20">
                  <Image
                    src={company.logoUrl || "/placeholder.svg"}
                    alt={company.name}
                    fill
                    className="object-contain scale-145" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
