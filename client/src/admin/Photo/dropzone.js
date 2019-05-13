import React from "react";
import Dropzone from "react-dropzone";
import * as css from './photo.module.css';

const Loader = props => {
  return (
    <div className={css.dropbox}>
      <Dropzone
        onDrop={props.onDrop}
        accept="image/png, image/gif, image/jpeg"
        minSize={0}
        maxSize={3097152}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragReject,
          isFileTooLarge
        }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {!isDragActive && "Click here or drop a file to upload!"}
            {isDragActive && !isDragReject && "Drop it here!"}
            {isDragReject && "File type not accepted, sorry!"}
            {isFileTooLarge && (
              <div className="text-danger mt-2">File is too large.</div>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default Loader;
