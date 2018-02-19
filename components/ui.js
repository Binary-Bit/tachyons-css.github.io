import React from 'react'
import Link from 'next/link'

export const NavLink = ({ href = '#!', ...props }) => (
  <Link href={href}>
    <a
      className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib"
      {...props}
    />
  </Link>
)

export const TitleLink = ({ href = '#!', subtext, text, ...props }) => (
  <Link href={href}>
    <a className="dib f5 f4-ns fw6 mt0 mb1 link black-70" {...props}>
      {text}

      {subtext && (
        <div className="dib pl1">
          <small className="nowrap f6 mt2 mt3-ns pr2 black-70 fw2">
            {subtext}
          </small>
        </div>
      )}
    </a>
  </Link>
)
