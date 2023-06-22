import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

interface ImagePickerProps {
  getImages: (file: File) => void
  defaultValue?: any
  width?: string
  height?: string
  border?: string
  borderradius?: string
  backgroundcolor?: string
  colorreplace?: string
  colordrop?: string
}

export const ImagePicker = (props: ImagePickerProps) => {
  const [images, setImages] = useState<string[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const formData = new FormData()
      formData.append('file', file)
      const reader = new FileReader()
      reader.onload = () => {
        setImages((prevState) => [...prevState, reader.result as string])
        props.getImages(file)
      }
      reader.readAsDataURL(file)
    })
    setImages([])
  }, [])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: ['image/jpeg', 'image/png', 'image/JPG'] as any
  })

  return (
    <ContainerDrop {...getRootProps()} {...props}>
      <input {...getInputProps()} />
      {images.length > 0 || props.defaultValue ? (
        <ProverkaDlyaHovera>
          <DropImage src={props.defaultValue || images[0]} />
          <button onClick={open}>REPLACE</button>
        </ProverkaDlyaHovera>
      ) : isDragActive ? (
        ''
      ) : (
        <DropText>Upload image</DropText>
      )}
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

const DropImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`

const DropText = styled.h1`
  width: 60%;
  height: 10%;
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  font-family: 'DINNextRoundedLTW04-Medium';
  line-height: 18px;
`

const ProverkaDlyaHovera = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  &:hover {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 6px;
      background: black;
      opacity: 0.9;
    }
    button {
      display: block;
      position: absolute;
      top: 9rem;
      left: 3.5rem;
    }
  }
`
