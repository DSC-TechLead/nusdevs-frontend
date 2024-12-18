import React, { useRef } from "react";
import IconButton from "../components/iconbutton";
import LinkButton from "../components/linkbutton";
import TextInput from "../components/textinput";
import TextButton from "../components/textbutton";
import FileUpload from "../components/fileupload";
import RequiredTextInput, { RequiredTextInputRef } from "../components/requiredTextInput";
import NextButton from "../components/nextButton";
import { FaPlus, FaShoppingCart } from "react-icons/fa";

const Components: React.FC = () => {
  const handleClick = () => alert("Button clicked!");
  const inputRef = useRef<RequiredTextInputRef>(null);

  return (
    <div className="p-4 space-y-4">
      <RequiredTextInput ref = {inputRef} placeholder = "Enter text here" label = "Required Input Example" description = "Add Description Here"/>
      <LinkButton text="Go to Google" href="https://www.google.com" />
      <TextButton text="Add Members" icon={<FaPlus />} onClick={handleClick} />
      <IconButton icon={<FaShoppingCart />} onClick={handleClick} />
      <TextInput placeholder="Enter text here" label="Short Input Example" description="Add Description Here" maxLength={50} />
      <TextInput placeholder="Enter text here" label="Long Input Example" description="Add Description Here" maxLength={200} height ={5}/>
      <FileUpload maxFileSizeMB={5} />
      <FileUpload maxFileSizeMB={5} disabled />
      <NextButton text = "Next" inputRef = {inputRef}/>
    </div>
  );
};

export default Components;
