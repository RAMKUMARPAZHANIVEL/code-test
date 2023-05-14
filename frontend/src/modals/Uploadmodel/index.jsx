import React, { useRef } from "react";
import ModalProvider from "react-modal";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Img, Text, Button } from "components";
import UploadModelColumnenterapplicatioOne from "components/UploadModelColumnenterapplicatioOne";
import UploadModelColumninputOne from "components/UploadModelColumninputOne";
import { useDropzone } from "react-dropzone";

const UploadmodelModal = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeInputValue, setActiveInputValue] = useState("");
  const [userFilledDetail, setUserFilledDetail] = useState({});
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const onClickUploadHandler = () => {
    setUserFilledDetail((curDetail) => {
      console.log(selectedFile);
      return { ...curDetail, ["uploadedFile"]: selectedFile };
    });
    console.log(userFilledDetail);
    props?.SetUploadComponentToShow(false)
  };
  const handleClick = (event) => {
    fileInputRef.current.click();
  };
  const onChangleFileHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[acceptedFiles.length-1]);
    console.log(acceptedFiles[acceptedFiles.length-1]);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever we want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const updateInputValue = (name) => {
    setActiveInputValue(name);
  };

  const onChangeInputsHandler = (e) => {
    console.log(e.target.value);
    setUserFilledDetail((curDetail) => {
      return { ...curDetail, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      {/* <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[75%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      > */}
      <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%] w-[75%]">
        <div className="bg-gray_901 flex items-center justify-start max-w-[960px] mx-[auto] my-[8px] p-[48px] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
            <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
              <div className="border-[3px] border-gray_801 border-dashed flex md:flex-1 flex-col gap-[24px] items-center justify-start p-[36px] sm:px-[20px] rounded-[4px] md:w-[100%] w-[49%]">
                {!selectedFile ? (
                  <>
                    <div
                      {...getRootProps()}
                      className="text-center p-[12px] border-[3px] border-dotted border-teal_A400 h-[5rem] sm:px-[20px] font-semibold text-gray_300"
                    >
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <p className="border-[1px] border-solid border-white w-[20rem] h-[100%] text-center text-gray_300 p-[5]">
                          Drop the files here ...
                        </p>
                      ) : (
                        <p className="font-semibold text-gray_300 h-[100%] sm:w-[100%]">
                          Drag and drop files to upload your model library
                        </p>
                      )}
                    </div>
                    <input
                      type="file"
                      className={`("block w-full text-sm text-slate-500 invisible h-[0] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-[1] file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700hover:file:bg-violet-100")}}
                             `}
                      ref={fileInputRef}
                      onChange={onChangleFileHandler}
                    />
                    <button
                      onClick={handleClick}
                      className="border-[2px] border-solid border-teal_A400 cursor-pointer font-medium text-teal_A400 mt-[32px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center sm:w-[100%] w-[100%]"
                    >
                      Browse From Your Device
                    </button>
                  </>
                ) : (
                  <div className="h-[195px] relative w-[52%]">
                    <div className="absolute bottom-[0] flex h-[183px] md:h-[195px] inset-x-[0] justify-end mx-[auto] w-[100%]">
                      <div className="bg-gray_902 h-[195px] mt-[auto] mx-[auto] rounded-[4px] w-[100%]"></div>
                      <div className="absolute bottom-[5%] flex flex-col gap-[19px] inset-x-[0] items-center justify-start mx-[auto] w-[78%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[96px] items-center justify-end p-[12px] md:w-[100%] w-[56%]"
                          style={{
                            backgroundImage: "url('images/img_group25.svg')",
                          }}
                        >
                          {/* <Img
                            src="images/img_close_red_400.svg"
                            className="h-[34px] mt-[38px] rounded-[50%] w-[34px]"
                            alt="close"
                          /> */}
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_50 text-left w-[auto]"
                            variant="body2"
                          >
                            {selectedFile.name}
                          </Text>
                          <Text
                            className="font-light text-gray_501 text-left w-[auto]"
                            variant="body3"
                          >
                            {selectedFile.size}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_close_gray_801.svg"
                      className="common-pointer absolute h-[24px] right-[0] rounded-[6px] top-[0] w-[auto]"
                      onClick={() => setSelectedFile(null)}
                      alt="close_One"
                    />
                  </div>
                )}

                {/* <Text
                    className="font-normal mb-[11px] not-italic text-center text-gray_300 w-[auto]"
                    variant="body2"
                  >
                    This type of file is not allowed to upload
                  </Text> */}
              </div>
              <div className="flex md:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] w-[49%]">
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      <label for="message">Description</label>
                    </Text>
                    <textarea
                      id="message"
                      rows="4"
                      class="block p-2.5 w-full text-sm text-gray_300 bg-gray_902 rounded-lg border-[1px] solid border-gray_801 focus:border-gray_501 !font-inter !font-light p-[0] placeholder:text-gray_801 !text-[12px] focus:border-gray_501"
                      placeholder="Enter description of this model..."
                      onChange={onChangeInputsHandler}
                      name="description"
                    />
                    {/* <UploadModelColumnenterapplicatioOne className="bg-gray_902 border-[1px] border-gray_801 border-solid flex flex-col h-[96px] md:h-[auto] items-start justify-start px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[420px]" /> */}
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Version
                    </Text>
                    <UploadModelColumninputOne
                      className="bg-gray_902 border-[1px] border-solid flex flex-col items-start justify-start px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[420px] focus:border-gray_501"
                      updateInputValue={updateInputValue}
                      activeInputValue={activeInputValue}
                      onChangeInputsHandler={onChangeInputsHandler}
                      name="version"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Industry
                  </Text>
                  {/* <UploadModelColumninputOne className="bg-gray_902 border-[1px] border-gray_801 border-solid flex flex-col items-start justify-start px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[420px] " /> */}
                  <UploadModelColumninputOne
                    className="bg-gray_902 border-[1px] border-solid flex flex-col items-start justify-start px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[420px] focus:border-gray_501"
                    updateInputValue={updateInputValue}
                    activeInputValue={activeInputValue}
                    onChangeInputsHandler={onChangeInputsHandler}
                    name="industry"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[26px] items-center justify-center md:w-[100%] w-[41%]">
              <Button onClick={() => props?.SetUploadComponentToShow(false)} className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]">
                Cancel
              </Button>
              <Button
                onClick={userFilledDetail ? onClickUploadHandler : null}
                className="bg-teal_900 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[161px]"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* </ModalProvider> */}
    </>
  );
};

export default UploadmodelModal;
