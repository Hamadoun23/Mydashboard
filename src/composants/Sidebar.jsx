import React from "react";
import {FaHome} from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaTicketAlt } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';




const Sidebar = () => {
    return (
        // Conteneur principal du sidebar avec largeur fixe et fond
        <div className="w-56 bg-gray-100 h-full px-4 py-6">

{/* Logo et Titre de l'application */}
<div className="relative flex items-center space-x-4 mb-4">
    {/* Logo avec badge de connexion */}
    <div className="relative">
        <img 
            src="./src/assets/dymolabs.png" 
            alt="Fikri Studio Logo" 
            className="w-12 h-12 object-cover rounded-full shadow-md cursor-pointer" 
        />
        {/* Badge de statut */}
        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
    </div>
    {/* Nom de l'application */}
    <div>
        <h1 className="text-xl font-bold text-gray-700">Fikri Studio</h1>
        {/* Texte léger sous le titre */}
        <p className="text-sm text-gray-500 mt-1">Agent Admin</p>
    </div>
</div>


<hr className="mb-4 border-gray-300 border-t-2 mx-[-16px]" />


            {/* Section des liens de navigation */}
            <ul className="mt-3 text-gray-600 font-bolt text-left">
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2 ">
                    <a href="" className="px-3">
                        <FaChartBar className="inline-block w-4 h-4 mr-2 -mt-1 "/>
                        Dashboard
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaEnvelope className="inline-block w-4 h-4 mr-2 -mt-1" />  
                        Inbox
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaChartBar className="inline-block w-4 h-4 mr-2 -mt-1" />
                        Notification
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaTicketAlt className="inline-block w-4 h-4 mr-2 -mt-1" />
                        Ticket
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaLightbulb className="inline-block w-4 h-4 mr-2 -mt-1" />
                        Knowledge Base
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaUsers className="inline-block w-4 h-4 mr-2 -mt-1" />
                        Customer
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaComments className="inline-block w-4 h-4 mr-2 -mt-1" />
                        Forum
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaChartBar className="inline-block w-4 h-4 mr-2 -mt-1" />
                        Report
                    </a>
                </li>
                <h3 className="mt-4 mb-3">Conversation</h3>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
            <a href="" className="px-3">
                <FaPhoneAlt className="inline-block w-4 h-4 mr-2 -mt-1" />
                Call
                <p className="text-sm text-gray-500 mt-1 ml-9">(123) 45678...</p> {/* Le numéro sous le texte */}
            </a>
            </li>

                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaComments className="inline-block w-4 h-4 mr-2 -mt-1" />
                        Side Conversation
                    </a>
                </li> 
                {/* Section Favorites */}
                <div className="mt-6">
                    {/* Titre Favorites */}
                    <h3 className="text-gray-700 text-lg font-semibold mb-2">FAVORITES</h3>
                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4">
                        Hover over any table and click the star to add it here.
                    </p>
                    
                    {/* Actions for Pinned Tickets */}
                    <div className="flex justify-between items-center mb-4 border-b border-gray-200">
                        <h5 className="text-gray-800 text-md ">Pinned Tickets</h5>
                        <button className="text-sm text-gray-500 font-medium">
                            Unpin All
                        </button>
                    </div>
                </div>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaWhatsapp className="inline-block w-4 h-4 mr-2 -mt-1 text-green-500" />
                        #TC-192 production
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaWhatsapp className="inline-block w-4 h-4 mr-2 -mt-1 text-green-500" />
                        #TC-191 payment
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaPhoneAlt className="inline-block w-4 h-4 mr-2 -mt-1" />
                        +1 678-908-787
                    </a>
                </li> 
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaPlus className="inline-block w-4 h-4 mr-2 -mt-1" />
                        Add new
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-2">
                    <a href="" className="px-3">
                        <FaQuestionCircle className="inline-block w-4 h-4 mr-2 -mt-1" />
                        Help & Support
                    </a>
                </li>


            </ul>
        </div>
    );
    
}
export default Sidebar