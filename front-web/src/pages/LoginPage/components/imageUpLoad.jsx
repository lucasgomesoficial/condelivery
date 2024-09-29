import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]; // Seleciona o primeiro arquivo
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Cria uma URL temporária para exibir a imagem
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '10px', cursor: 'pointer' }}>
      <input {...getInputProps()} />
      <p>Selecione ou arraste sua imagem aqui</p>
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Imagem selecionada" width="200px" />
        </div>
      )}
    </div>
  );
}

