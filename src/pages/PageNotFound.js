import { useEffect } from "react";
import PageNotFoundImage  from "../assets/images/pagenotfound.jpg"
import {Link} from "react-router-dom";

export const PageNotFound = () => {
    useEffect(() => {
        document.title = `Page Not Found / MovBoxd`;
    });
  return (
    <main>
        <section className="flex flex-col justify-center px-2">
            <div className='flex flex-col items-center my-4'>
                    <p className="text-7xl text-gray-700 my-10 dark:text-white">404, Oops!</p>
                    <div className="max-w-sm">
                        <img className="rounded" src={PageNotFoundImage} alt='404 Page Not Found'/>
                    </div>
            </div>

            <div className="flex justify-center my-4">
                <Link to="/">
                    <button className="w-64 text-l bg-gradient-to-r from-slate-300  to-indigo-500 rounded-sm font-medium">Refresh</button>
                </Link>
            </div>
        </section>
    </main>
  )
}
