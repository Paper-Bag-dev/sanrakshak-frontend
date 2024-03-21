"use client";
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const SingleLinks = ({ name, icon, href }) => {
  const router = useRouter()
  const pathname = usePathname()
  const isLinkActive = (href) => {
    if (pathname === href) {
      return true;
    }
    else {
      return false;
    }
  }

  useEffect(() => {
    isLinkActive(router);
  }, [router])


  return (
    <Link href={href} className={` flex items-center gap-[1rem] px-[.7rem]  w-[100%] h-[2.2rem] ${isLinkActive(href) ? "bg-[#212C4D]  border-[#6C72FF]  text-[#F1F1F3] " : " text-[#AEB9E1] border-[#080F25] "} border-l-4 rounded-[.25rem] `} >
      <div className={` text-[1.2rem] `} >
        {icon}
      </div>
      <h2 className=' text-[1rem] font-nunito ' >{name}</h2>
    </Link>
  )
}

export default SingleLinks
