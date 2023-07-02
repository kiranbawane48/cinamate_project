import React from 'react'
import {Link , NavLink} from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      
<footer className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cineflix™.</Link>All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <NavLink to="https://www.instagram.com/" target="_blank"  className="mr-4 hover:underline md:mr-6">Instagram</NavLink>
        </li>
        <li>
            <NavLink to="https://www.linkedin.com/feed/" target="_blank"  className="mr-4 hover:underline md:mr-6">LinkedIn</NavLink>
        </li>
        <li>
            <NavLink to="https://twitter.com/i/flow/" target="_blank"  className="mr-4 hover:underline md:mr-6">Twitter</NavLink>
        </li>
        <li>
            <NavLink to="https://www.youtube.com/" target="_blank"  className="hover:underline">YouTube</NavLink>
        </li>
    </ul>
    </div>
</footer>

    </footer>
  )
}
