import React, { useState } from "react";
import { FaLightbulb } from "react-icons/fa"; // Icône pour "Suggestion"
import { FaQuestionCircle } from "react-icons/fa"; // Icône pour "Question"
import { FaPuzzlePiece } from "react-icons/fa"; // Icône pour "Problem"
import { FaFire } from "react-icons/fa"; // Icône pour "Incident"

import akandji from '../assets/akandji.png'; // importer les images 
import doku from '../assets/doku.png';
import haland from '../assets/Haland.png';
import kevin from '../assets/Kevin.png';
import musiala from '../assets/musiala.png';
import barcola from '../assets/barcola.png';  // Nouvelle image
import benze from '../assets/benze.png'; // Nouvelle image
import jesse from '../assets/jesse.png'; // Nouvelle image
import jude from '../assets/jude.png'; // Nouvelle image
import mbappe from '../assets/mbappe.png'; // Nouvelle image
import rodry from '../assets/rodry.png'; // Nouvelle image
import ronaldo from '../assets/ronaldo.png'; // Nouvelle image

// Fonction pour formater les dates ISO en une chaîne lisible
const formatDate = (isoString) => {
  const date = new Date(isoString); // Crée un objet Date à partir de la chaîne ISO
  return date.toLocaleString("en-US", {
    month: "2-digit", // Mois sur deux chiffres
    day: "2-digit",   // Jour sur deux chiffres
    year: "numeric",  // Année complète
    hour: "2-digit",  // Heure sur deux chiffres
    minute: "2-digit", // Minutes sur deux chiffres
    hour12: true,     // Format 12 heures (AM/PM)
  });
};

// En-têtes des colonnes du tableau
const TABLE_HEAD = ["", "Ticket ID", "Subject", "Priority", "Type", "Client", "Request Date", ""];

// Données des lignes du tableau
const TABLE_ROWS = [
  { ticketId: "#TC-001", subject: "Issue with login", priority: "High", type: "Incident", client: "John Michael", date: "2025-01-15T23:34:00", profileImage: akandji },
  { ticketId: "#TC-002", subject: "Server downtime", priority: "Low", type: "Problem", client: "Alexa Liras", date: "2025-01-14T18:20:00", profileImage: barcola },
  { ticketId: "#TC-003", subject: "Payment gateway error", priority: "Medium", type: "Suggestion", client: "Laurent Perrier", date: "2025-01-12T12:15:00", profileImage: benze },
  { ticketId: "#TC-004", subject: "UI not responsive", priority: "High", type: "Question", client: "Michael Levi", date: "2025-01-10T08:45:00", profileImage: jesse },
  { ticketId: "#TC-005", subject: "Page load issue", priority: "Medium", type: "Incident", client: "Sophia Johnson", date: "2025-01-14T15:00:00", profileImage: mbappe },
  { ticketId: "#TC-006", subject: "Unable to checkout", priority: "High", type: "Problem", client: "James O'Connor", date: "2025-01-13T09:30:00", profileImage: rodry },
  { ticketId: "#TC-007", subject: "Password reset", priority: "Medium", type: "Suggestion", client: "Daniel Lee", date: "2025-01-13T14:40:00", profileImage: ronaldo },
  { ticketId: "#TC-008", subject: "Account locked", priority: "Low", type: "Incident", client: "Alice Smith", date: "2025-01-12T17:25:00", profileImage: jude },
  { ticketId: "#TC-009", subject: "Bug in new feature", priority: "Medium", type: "Problem", client: "Marco Aurelio", date: "2025-01-10T12:50:00", profileImage: musiala },
  { ticketId: "#TC-010", subject: "App crashes on launch", priority: "High", type: "Incident", client: "Cindy Wallace", date: "2025-01-09T16:20:00", profileImage: haland },
  { ticketId: "#TC-011", subject: "Incorrect pricing on product", priority: "Low", type: "Question", client: "Erik Jung", date: "2025-01-08T11:00:00", profileImage: akandji }
];

// Fonction pour retourner une icône basée sur le type de ticket
const getTypeIcon = (type) => {
  switch (type) {
    case "Incident":
      return <FaFire className="text-xl text-gray-600 mr-1" />;
    case "Suggestion":
      return <FaLightbulb className="text-xl text-gray-600 mr-1" />;
    case "Question":
      return <FaQuestionCircle className="text-xl text-gray-600 mr-1" />;
    case "Problem":
      return <FaPuzzlePiece className="text-xl text-gray-600 mr-1" />;
    default:
      return null; // Aucun icône pour les types non définis
  }
};

const Array = () => {
  // État pour suivre les lignes sélectionnées
  const [selectedRows, setSelectedRows] = useState([]);

  // Fonction pour cocher ou décocher toutes les cases
  const toggleAllRows = (e) => {
    if (e.target.checked) {
      // Coche toutes les lignes
      setSelectedRows(TABLE_ROWS.map((_, index) => index));
    } else {
      // Désélectionne toutes les lignes
      setSelectedRows([]);
    }
  };

  // Fonction pour cocher/décocher une ligne spécifique
  const toggleRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) // Si la ligne est déjà cochée
        ? prev.filter((i) => i !== index) // On la retire
        : [...prev, index] // Sinon, on l'ajoute
    );
  };

  return (
    <div className="py-10 px-6 w-full">
      {/* Tableau avec bordures et ombre */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          {/* En-tête du tableau */}
          <thead>
            <tr className="bg-gray-200 text-center">
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="py-3 px-4 text-sm font-semibold text-gray-600 border border-gray-300"
                >
                  {/* Si c'est la première colonne, afficher une case à cocher */}
                  {index === 0 ? (
                    <input
                      type="checkbox"
                      className="h-5 w-5 cursor-pointer duration-500"
                      onChange={toggleAllRows} // Gestion du tout sélectionné
                      checked={selectedRows.length === TABLE_ROWS.length} // Vérifie si tout est sélectionné
                    />
                  ) : (
                    head // Sinon, afficher le texte de l'en-tête
                  )}
                </th>
              ))}
            </tr>
          </thead>

          {/* Corps du tableau */}
          <tbody>
            {TABLE_ROWS.map((row, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 ${selectedRows.includes(index) ? "bg-gray-100" : ""}`}
              >
                {/* Colonne des cases à cocher */}
                <td className="py-2 px-4 border-b border-r border-gray-300 text-center">
                  <input
                    type="checkbox"
                    className="cursor-pointer duration-500 h-5 w-5"
                    onChange={() => toggleRow(index)} // Gestion de la sélection de cette ligne
                    checked={selectedRows.includes(index)} // Vérifie si cette ligne est cochée
                  />
                </td>
                {/* Colonnes des données */}
                <td className="py-2 px-4 border-b border-r border-gray-300 text-center">
                  {row.ticketId}
                </td>
                <td className="py-2 px-4 border-b border-r border-gray-300 text-center">
                  {row.subject}
                </td>
                <td className="py-2 px-4 border-b border-r border-gray-300 text-center">
                  <span
                    className={`flex items-center justify-center gap-1 inline-block px-3 py-1 text-sm font-medium rounded-full ${
                      row.priority === "High"
                        ? "bg-red-100 text-red-800"
                        : row.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    <span className="text-3xl relative top-[-9px]">.</span> {/* Augmenter la taille du point */}
                    {row.priority}
                  </span>
                </td>

                <td className="py-2 px-4 border-b border-r border-gray-300 text-left">
                  <div className="flex items-center justify-start gap-1">
                    {getTypeIcon(row.type)}
                    <span>{row.type}</span>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-r border-gray-300 text-left">
                  <div className="flex items-center justify-start gap-1">
                    <img
                      src={row.profileImage}
                      alt={row.client}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{row.client}</span>
                  </div>
                </td>

                <td className="py-2 px-4 border-b border-r border-gray-300 text-center">
                  {formatDate(row.date)}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <li className="cursor-pointer duration-500 py-3 flex-row items-center justify-center list-none">
                    <span className="text-2xl">...</span> {/* Bouton "plus" */}
                  </li>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Array;
