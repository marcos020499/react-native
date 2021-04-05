import React, { useState } from 'react'
import Dropzone from 'react-native-drop-zone';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Axios from 'axios';
import { TextInput } from 'react-native-paper';
function FileUpload(props) {

    const [Images, setImages] = useState([])

    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])
        //save the Image we chose inside the Node Server 
        Axios.post('http://localhost:8080/api/productos/upload', formData, config)
            .then(response => {
                if (response.data.success) {
                    setImages([...Images, response.data.image])
                    props.refreshFunction([...Images, response.data.image])
                    alert('todo con exito')
                } else {
                    alert('Failed to save the Image in Server')
                }
            })
    }


    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }
    return (
        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <View style={{
                        width: '300px', height: '240px', border: '1 solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        {...getRootProps()}
                    >
                        {console.log('getRootProps', { ...getRootProps() })}
                        {console.log('getInputProps', { ...getInputProps() })}
                        <TextInput {...getInputProps()} />
                    </View>
                )}
                </Dropzone>
                {Images.map((image, index) => (
                    <View onPress={() => onDelete(image)}>
                        <Image style={{ width: '300px', height: '240px' }} source={`http://localhost:8080/`+image} alt={`productImg${index}`} />
                    </View>
                ))}
        </View>
    )}
export default FileUpload