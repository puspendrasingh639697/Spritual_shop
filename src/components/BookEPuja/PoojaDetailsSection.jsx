import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PoojaDetailsSection = ({
  poojaDetails,
  poojaDetailsRef,
  handleSubmit,
}) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [memberNames, setMemberNames] = useState([]);
  const [nameInput, setNameInput] = useState("");

  const onConfirmClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsNameModalOpen(true);
  };

  const addName = () => {
    if (nameInput.trim() === "") return;
    setMemberNames([...memberNames, nameInput.trim()]);
    setNameInput("");
  };

  const removeName = (nameToRemove) => {
    setMemberNames(memberNames.filter((n) => n !== nameToRemove));
  };

  const onSubmitNames = () => {
    setIsNameModalOpen(false);
    handleSubmit(selectedPackage?._id, memberNames);
    setMemberNames([]);
  };

  return (
    <div
      ref={poojaDetailsRef}
      className="mt-8 p-6 bg-white rounded-2xl shadow-xl max-w-4xl mx-auto"
      id="pooja-details"
    >
      {poojaDetails ? (
        <div>
          {/* Puja Title */}
          <h2 className="text-3xl font-bold text-red-800 mb-4 text-center">
            {poojaDetails.PujaName}
          </h2>

          {/* Image & Basic Details */}
          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
            {poojaDetails.image && (
              <img
                src={poojaDetails.image}
                alt={poojaDetails.PujaName}
                className="w-full md:w-72 h-52 object-cover rounded-xl shadow-md"
              />
            )}
            <div className="flex-1 space-y-2 text-gray-700">
              <p className="text-lg">
                <strong>Temple:</strong> {poojaDetails.templeName}
              </p>
              <p className="text-lg">
                <strong>Location:</strong> {poojaDetails.location}
              </p>
              <p className="text-xl font-semibold text-red-800">
                Price: ₹ {poojaDetails.price}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed pt-2">
                {poojaDetails.description}
              </p>
            </div>
          </div>

          {/* Simple Booking / Action Button */}
          <div className="border-t pt-6 text-center">
            <button
              className="rounded-xl bg-red-800 hover:bg-red-900 text-white font-medium px-8 py-3 transition cursor-pointer shadow-md"
              type="button"
              onClick={() => onConfirmClick(poojaDetails)}
            >
              Book This Puja
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Select a pooja to see the details.</p>
      )}

      {/* Modal for Member Names */}
      {isNameModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
              Enter Member Names
            </h2>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Enter member name"
                className="flex-1 border-2 border-gray-200 px-3 py-2 rounded-xl focus:outline-none focus:border-red-800"
              />
              <button
                onClick={addName}
                className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-xl font-medium transition cursor-pointer"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 max-h-36 overflow-y-auto">
              {memberNames.map((name, i) => (
                <div
                  key={i}
                  className="bg-red-100 text-red-800 text-sm px-3 py-1.5 rounded-full flex items-center gap-2"
                >
                  <span>{name}</span>
                  <button
                    className="text-red-600 font-bold hover:text-red-800 cursor-pointer"
                    onClick={() => removeName(name)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <button
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl font-medium transition cursor-pointer"
                onClick={() => {
                  setIsNameModalOpen(false);
                  setMemberNames([]);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-red-800 hover:bg-red-900 text-white px-5 py-2 rounded-xl font-medium transition cursor-pointer"
                onClick={onSubmitNames}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PoojaDetailsSection;