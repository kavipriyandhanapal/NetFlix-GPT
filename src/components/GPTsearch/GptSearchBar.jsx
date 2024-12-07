import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../../utils/Constants/LanguageConstants";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.Config.lanKey);
  console.log(selectedLanguage);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[selectedLanguage].searchPlaceHolder}
          className="p-4 m-4 col-span-9"
        />
        <button className="bg-red-600 text-white m-4 px-4 col-span-3">
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
