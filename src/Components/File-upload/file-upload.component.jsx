import React, { useState, useRef } from "react";
import {
    FileUploadContainer,
    FormField,
    DragDropText,
    UploadFileBtn,
    FilePreviewContainer,
    ImagePreview,
    PreviewContainer,
    PreviewList,
    FileMetaData,
    RemoveFileIcon,
    InputLabel
  } from "./file-upload.styles";

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;
const KILO_BYTES_PER_BYTE = 1000;

const convertBytesToKB = (bytes) =>
  Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({label,
    updateFilesCb,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    ...otherProps}) => {
    const fileInputField = useRef(null);
    const [files, setFiles] = useState({});

const handleUploadBtnClick = () => {
    fileInputField.current.click();
};
const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };
  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };
  const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const callUpdateFilesCb = (files) => {
  const filesAsArray = convertNestedObjectToArray(files);
  updateFilesCb(filesAsArray);
};
const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };
    return (
        <>
            <FileUploadContainer>
                <inputLabel>{label}</inputLabel>
                <DragDropText>Arrastra y suelta tus imágenes aquí o</DragDropText>
                <UploadFileBtn type="button"onClick={handleUploadBtnClick}>
                    <i className="fas fa-file-upload" />
                    <span> Cargar {otherProps.multiple ? "imagen" : "una imagen"}</span>
                </UploadFileBtn>
                <FormField
                    type="file"
                    ref={fileInputField}
                    onChange={handleNewFileUpload}
                    title=""
                    value=""
                    {...otherProps}
                />
            </FileUploadContainer>   
            <FilePreviewContainer>
                <span>Cargadas</span>
                <PreviewList>
                    {Object.keys(files).map((fileName, index) => {
                        let file = files[fileName];
                        let isImageFile = file.type.split("/")[0] === "image";
                        return (
                            <PreviewContainer key={fileName}>
                                <div>
                                    {isImageFile && (<img src={URL.createObjectURL(file)} alt={`file preview ${index}`} />)}
                                    <FileMetaData isImageFile={isImageFile}>
                                        <span>{file.name}</span>
                                        <aside>
                                            <span>{convertBytesToKB(file.size)} kb</span>
                                            <RemoveFileIcon className="fas fa-trash-alt" onClick={() => removeFile(fileName)}/>
                                        </aside>
                                    </FileMetaData>
                                </div>
                            </PreviewContainer>
                    );
                })}
                </PreviewList>
            </FilePreviewContainer>  
        </> 
    );
};

export default FileUpload;