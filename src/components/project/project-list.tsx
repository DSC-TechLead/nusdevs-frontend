import React, { useState } from "react";
import ProjectBox from "./project-box";

const ProjectList: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(-3);
  const [selectedLanguage, setSelectedLanguage] = useState(-3);
  const [selectedSort, setSelectedSort] = useState(-3);

  return (
    <div>
      <div className="justify-center flex gap-x-4 mx-4">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Search.."
          className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 flex-auto"
        />
        <button
          type="button"
          className="rounded-full bg-sky-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Search
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          maxWidth: "100%",
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        <select
          style={{
            borderRadius: "30px",
          }}
          value={selectedOption}
          onChange={(e) => {
            const inputValue = Number(e.target.value);
            setSelectedOption(inputValue);
          }}
        >
          <option value={-3}>Projects</option>
          <option value={-2}>Item 2</option>
          <option value={-1}>Item 3</option>
        </select>

        <div
          style={{
            height: "20px",
            width: "1px",
            backgroundColor: "black",
            margin: "0 10px",
          }}
        />

        <select
          style={{
            borderRadius: "30px",
            marginRight: "10px",
          }}
          value={selectedLanguage}
          onChange={(e) => {
            const inputValue = Number(e.target.value);
            setSelectedLanguage(inputValue);
          }}
        >
          <option value={-3}>Java</option>
          <option value={-2}>Python</option>
          <option value={-1}>C</option>
        </select>

        <select
          style={{
            borderRadius: "30px",
          }}
          value={selectedSort}
          onChange={(e) => {
            const inputValue = Number(e.target.value);
            setSelectedLanguage(inputValue);
          }}
        >
          <option value={-3}>Date posted</option>
        </select>

        <div
          style={{
            height: "20px",
            width: "1px",
            backgroundColor: "black",
            margin: "0 10px",
          }}
        />

        <button
          style={{
            borderRadius: "30px",
            backgroundColor: "white",
            border: "1px solid",
          }}
        >
          All Filters
        </button>
      </div>

      <ProjectBox />
    </div>
  );
};
export default ProjectList;
