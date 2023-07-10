import { useState } from "react";
import { useDropzone } from "react-dropzone";
import isEmptyImagePicker from "../../../assets/image/isEmptyImagePicker.jpg";
import styles from "./ImagePicker.module.css";

interface ImagePickerProps {
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
}

export const ImagePicker = (props: ImagePickerProps) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const IsTrueImage = () => {
    if (selectedImage === undefined) {
      return isEmptyImagePicker;
    } else {
      return selectedImage;
    }
  };

  return (
    <div>
      <div className={styles.containerdrop} {...getRootProps()} {...props}>
        <img
          className={styles.img}
          src={IsTrueImage()}
          alt="image"
          width={0}
          height={0}
          style={props}
        />
        <input {...getInputProps()} />
      </div>
    </div>
  );
};
