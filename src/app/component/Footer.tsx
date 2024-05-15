import React from 'react';
import Code from "@/app/assets/Code";
import LinkedIn from "@/app/assets/LinkedIn";
import Website from "@/app/assets/Website";
import Email from "@/app/assets/Email";

function Footer() {
  type FooterList = {
    name: string,
    href: string,
    element: React.ReactElement
  }

  let footList: FooterList[] = [
    { name: "Github", href: "https://github.com/angDecoder", element: <Code /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/angshu-das-149784210/", element: <LinkedIn /> },
    { name: "Portfolio", href: "", element: <Website /> },
    { name: "Contact Me!", href: "mailto:angshuhost@gmail.com", element: <Email /> }
  ];

  return (
    <div className='flex justify-center gap-8 bg-color4 mx-auto py-1 rounded-md w-3/4'>

      {
        footList.map((l: FooterList): React.ReactElement => {
          return <a
            className='flex items-center gap-0.5 *:transition-all *:duration-300 group'
            target='_blank'
            key={l.name+"footlist"}
            href={l.href}>
            {l.element}
            <span className='group-hover:text-color5 text-color2 text-lg'>
              {l.name}
            </span>
          </a>
        })
      }

      {/* <a href=''>
        <LinkedIn />
        LinkedIn
      </a>
      <a href=''>
        <Website />
        Portfolio
      </a>
      <a href=''>
        <Email />
        Hire me!
      </a> */}
    </div>
  )
}

export default Footer