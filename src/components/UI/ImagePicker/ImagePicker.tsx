import { useState } from 'react'
import { styled } from 'styled-components'
import { useDropzone } from 'react-dropzone'
import isEmptyImagePicker from '../../../assets/image/isEmptyImagePicker.jpg'
import Image from 'next/image'

interface ImagePickerProps {
  width?: string
  height?: string
  border?: string
  borderradius?: string
  backgroundcolor?: string
  colorreplace?: string
  colordrop?: string
}

export const ImagePicker = (props: ImagePickerProps) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const IsTrueImage = () => {
    if (selectedImage === undefined) {
      return isEmptyImagePicker
    } else {
      return selectedImage
    }
  }

  return (
    <ContainerDrop>
      <div {...getRootProps()}>
        <StyleImage src={IsTrueImage()} alt="image" width={0} height={0} objectFit="cover" />
        <StyleInpFile {...getInputProps()} />
      </div>
    </ContainerDrop>
  )
}

const ContainerDrop = styled.div<ImagePickerProps>`
  width: ${({ width }) => width || '181px'};
  height: ${({ height }) => height || '178px'};
  border-radius: ${({ borderradius }) => borderradius || '8px'};
  background-color: ${({ backgroundcolor }) => backgroundcolor || 'whitesmoke'};
  border: ${({ border }) => border || '1.53px solid #d4d0d0'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  button {
    display: none;
    color: ${({ colorreplace }) => colorreplace || '#3a10e5'};
  }
  h1 {
    color: ${({ colordrop }) => colordrop || '#3a10e5'};
  }
`

const StyleInpFile = styled.input`
  display: none;
`

const StyleImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: silver;
`
