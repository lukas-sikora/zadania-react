import { useState } from "react";

const UserProfile = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="p-4 max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          src="https://img.freepik.com/darmowe-psd/3d-ilustracja-osoby-z-okularami-przeciwslonecznymi_23-2149436188.jpg"
          alt="Zdjęcie profilowe"
          className="rounded-full w-32 mx-auto"
        />
        <h1 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
          Jan Kowalski
        </h1>
        <p className="text-gray-700 dark:text-gray-400">
          Miłośnik JavaScript i górskich wędrówek.
        </p>
        <button
          onClick={toggleDarkMode}
          className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Zmień tryb
        </button>
      </div>
    </div>
  );
};
export default UserProfile;
