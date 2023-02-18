import React from 'react'
import { useState } from 'react'
import { create } from 'ipfs-http-client'
import {Buffer} from 'buffer'

export const Upload = () => {

    
const projectId = '2LaK8H9xm6CHlavgRcJ7C7rRUHI';
const projectSecret = 'd673ccb7f250ac6c95470b0725d8158f';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
  headers: {
    authorization: auth,
  }
})

    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState("");


    function handleName(e){
        setName(e.target.value)

    }
    function handleDesc(e){
        setDesc(e.target.value)

    }
    function handleFile(e){
        setFile(e.target.value)

    }

  return (
    <div className='upload'>
        <div className='side-btns'>

        </div>
        <div className='upload-main'>
            <h1 className='upload-head'>Upload Here</h1>
            <input type={"text"} placeholder={"name"}></input>
            <input type={"text"}></input>
            <input type={"file"}></input>
        </div>
    </div>
  )
}
