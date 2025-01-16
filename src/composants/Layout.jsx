import React from "react";
import { DocSearch } from "@docsearch/react";
import { Input } from "@material-tailwind/react";
import { TiMap } from "react-icons/ti";
import { BiDownload } from "react-icons/bi";
import { LuOctagonAlert } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { LuFilter } from "react-icons/lu";
import { FaSearch } from "react-icons/fa"; // icône de recherche

const Layout = () => {
    return (
<div className="py-3">
    <hr className="w-full border-t-2 border-gray-200 mb-4" />
    <ul className="flex flex-wrap gap-8"> {/* flex-wrap pour que les éléments soient sur la même ligne et se déplacent à la ligne si nécessaire */}
        <li className="mt-1 relative"> {/* position relative pour l'input */}
            <div className="group relative ml-4">
                <Input
                    type="text"
                    placeholder="Search"
                    className="rounded-md border-gray-200 pl-10 py-2"
                    labelProps={{
                        className: "hidden",
                    }}
                    readOnly
                />
                <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-600">
                    <FaSearch /> {/* icône de recherche */}
                </div>
                <div className="absolute top-[calc(50%-1px)] right-2.5 -translate-y-2/4">
                    <kbd className="rounded border border-blue-gray-100 bg-white px-1 pt-px pb-0 text-xs font-medium text-gray-600 shadow shadow-black/5">
                        <span className="mr-0.5 inline-block translate-y-[1.5px] text-base">
                            ⌘
                        </span>
                        K
                    </kbd>
                </div>
            </div>
        </li>
        <li className="text-gray-600 mb-2 rounded py-2">
            <TiMap className="text-gray-600 inline-block w-6 h-6 mr-2 -mt-2" />
            Type
        </li>
        <li className="text-gray-600 mb-2 rounded py-2">
            <BiDownload className="inline-block w-6 h-6 mr-2 -mt-2" />
            Source
        </li>
        <li className="text-gray-600 mb-2 rounded py-2">
            <LuOctagonAlert className="inline-block w-6 h-6 mr-2 -mt-2" />
            Priority
        </li>
        <li className="text-gray-600 mb-2 rounded py-2">
            <MdDateRange className="inline-block w-6 h-6 mr-2 -mt-2" />
            Date Added
        </li>
        <li className="text-gray-600 mb-2 rounded py-2">
            <LuFilter className="inline-block w-6 h-6 mr-2 -mt-2" />
            Ticket Filters
        </li>
    </ul>
    <hr className="w-full border-t-2 border-gray-200" />
</div>

    );
}

export default Layout;
