import type { CompanySection } from "@/components/company-accordion"
import quarry from "@/assets/logos/furtuno-quarry.png"
import fortuno from "@/assets/logos/futuro-industrial-city.png"
import lab from "@/assets/logos/lab-manufacturing-group.png"
import elite from "@/assets/logos/elite-furniture-works.png"

import bw from "@/assets/logos/best-western.png"
import soho from "@/assets/logos/soho.png"
import luna from "@/assets/logos/luna.png"
import nshoona from "@/assets/logos/nshoona.png"
import sunken from "@/assets/logos/sunken-garden.png"
import white from "@/assets/logos/white-rst.png"
import belmont from "@/assets/logos/belmont.png"
import sohoBand from "@/assets/logos/soho-brand.png"
import hilton from "@/assets/logos/hilton.png"

import fb from "@/assets/logos/f&b-depot.png"
import prompt from "@/assets/logos/prompt-supplies-soln.png"
import haulage from "@/assets/logos/haulage-contractors.png"
import superstore from "@/assets/logos/construction-superstore.png"
import hh from "@/assets/logos/h&h.png"
import hospital from "@/assets/logos/hospital&health-supplies.png"
import procurement from "@/assets/logos/procurement-intl.png"
import tga from "@/assets/logos/tga.png"

import it from "@/assets/logos/it-energy.png"

import pegasusr from "@/assets/logos/pegasus-realty.png"
import ritz from "@/assets/logos/ritz-carlton.png"
import grc from "@/assets/logos/gr-construction.png"
import concrete from "@/assets/logos/concrete-products.png"

import secprint from "@/assets/logos/sec-print.png"
import universal from "@/assets/logos/universal-crystal-print.png"
import pegasusp from "@/assets/logos/pegasus-publishing.png"
import tgprint from "@/assets/logos/tg-print.png"

export const CompanyData: CompanySection[] = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    companies: [
       {
        id: "company-1",
        name: "Fortuno Industrial City",
        logoUrl: fortuno,
        status: "success",
      },
      {
        id: "company-2",
        name: "Fortuno Quarry",
        logoUrl: quarry,
        status: "success",
      },
      {
        id: "company-3",
        name: "Laboratory Manufacturing Group",
        logoUrl: lab,
        status: "success",
      },
      {
        id: "company-4",
        name: "Elite Furniture Works",
        logoUrl: elite,
        status: "error",
      },
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality",

    companies: [
      {
        id: "hotel-1",
        name: "Best Western Plus",
        logoUrl: bw,
        status: "success",
      },
      {
        id: "hotel-2",
        name: "SOHO",
        logoUrl: soho,
        status: "success",
      },
      {
        id: "hotel-3",
        name: "Luna",
        logoUrl: luna,
        status: "success",
      },
      {
        id: "hotel-4",
        name: "Nshoona",
        logoUrl: nshoona,
        status: "success",
      },
      {
        id: "hotel-5",
        name: "Sunken",
        logoUrl: sunken,
        status: "error",
      },
      {
        id: "hotel-6",
        name: "White Restaurant",
        logoUrl: white,
        status: "success",
      },
      {
        id: "hotel-7",
        name: "Belmont",
        logoUrl: belmont,
        status: "error",
      },
      {
        id: "hotel-8",
        name: "Soho Band",
        logoUrl: sohoBand,
        status: "success",
      },
      {
        id: "hotel-9",
        name: "Hilton",
        logoUrl: hilton,
        status: "error",
      },
    ],
  },
  {
    id: "procurement",
    title: "Procurement & Logistics",
    companies: [
      {
        id: "logistics-1",
        name: "F&B Depot",
        logoUrl: fb,
        status: "success",
      },
      {
        id: "logistics-2",
        name: "Prompt Supplies",
        logoUrl: prompt,
        status: "success",
      },
      {
        id: "Logistics-3",
        name: "Haulage Contractors Ghana",
        logoUrl: haulage,
        status: "success",
      },
      {
        id: "Logistics-4",
        name: "Construction Superstore",
        logoUrl: superstore,
        status: "error",
      },
      {
        id: "Logistics-5",
        name: "Home and Hardware Depot",
        logoUrl: hh,
        status: "error",
      },
      {
        id: "Logistics-6",
        name: "Hospital & Health Supplies",
        logoUrl: hospital,
        status: "error",
      },
      {
        id: "Logistics-7",
        name: "Procurement International Limited",
        logoUrl: procurement,
        status: "error",
      },
      {
        id: "Logistics-8",
        name: "TG Automobile (GH)",
        logoUrl: tga,
        status: "success",
      },
    ],
  },
  {
    id: "information-technology",
    title: "Information Technology",
    companies: [
      {
        id: "tech-1",
        name: "IT Energy Limited",
        logoUrl: it,
        status: "success",
      },
    ],
  },
  {
    id: "construction",
    title: "Construction & Real estate",
    companies: [
      {
        id: "construction-1",
        name: "Pegasus Realty",
        logoUrl: pegasusr,
        status: "success",
      },
      {
        id: "realestate-1",
        name: "Ritz-Carlton",
        logoUrl: ritz,
        status: "error",
      },
      {
        id: "construction-2",
        name: "GR Construction & Services",
        logoUrl: grc,
        status: "error",
      },
      {
        id: "construction-3",
        name: "Concrete Products and Logistics LTD.",
        logoUrl: concrete,
        status: "success",
      },
    ],
  },
  {
    id: "publishing",
    title: "Publishing & Printing",
    companies: [
      {
        id: "publishing-1",
        name: "Sec Print",
        logoUrl: secprint,
        status: "success",
      },
      {
        id: "publishing-2",
        name: "Universal Crystal Print Ghana LTD",
        logoUrl: universal,
        status: "success",
      },
      {
        id: "publishing-3",
        name: "Pegasus Publishing (GH) LTD",
        logoUrl: pegasusp,
        status: "success",
      },
      {
        id: "publishing-4",
        name: "TG Print",
        logoUrl: tgprint,
        status: "error",
      },
    ],
  },
]
