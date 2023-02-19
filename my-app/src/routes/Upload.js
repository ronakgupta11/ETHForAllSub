import React from 'react'
import { useState } from 'react'
import { create } from 'ipfs-http-client'
import {Buffer} from 'buffer'
import { SideButtons } from '../components/SideButtons'

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
        <div className='side-buttons'>

            <SideButtons/>
        </div>

       
        <div className='upload-main'>
            <h1 className='upload-head'>Upload Here</h1>
            <input type={"text"} placeholder={"name"}></input>
            <input type={"text"} placeholder={"enter "}></input>
            <input type={"file"}></input>
            <button>
                <div>
                
<svg width="37" height="51" viewBox="0 0 37 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6764 23.4711C36.6149 23.2041 36.4882 22.9566 36.3075 22.7506C36.1268 22.5447 35.8979 22.3868 35.6412 22.291L23.7162 17.8191L26.7389 2.64376C26.8084 2.29224 26.7635 1.92769 26.6107 1.60355C26.458 1.27941 26.2054 1.01273 25.8901 0.842584C25.5716 0.673177 25.2061 0.613808 24.8503 0.673718C24.4946 0.733628 24.1687 0.909456 23.9233 1.17383L0.735775 26.0176C0.545778 26.2147 0.408305 26.4564 0.335962 26.7204C0.263619 26.9845 0.258719 27.2625 0.321712 27.5289C0.386529 27.7944 0.514483 28.0403 0.694703 28.2458C0.874923 28.4512 1.10208 28.6101 1.35687 28.709L13.2819 33.1809L10.2592 48.3563C10.1897 48.7078 10.2346 49.0723 10.3874 49.3965C10.5401 49.7206 10.7927 49.9873 11.108 50.1574C11.3457 50.2774 11.6078 50.3411 11.8741 50.3438C12.099 50.3447 12.3218 50.2992 12.5284 50.2102C12.735 50.1211 12.9211 49.9904 13.0748 49.8262L36.2623 24.9824C36.4523 24.7853 36.5898 24.5436 36.6622 24.2796C36.7345 24.0155 36.7394 23.7375 36.6764 23.4711Z" fill="#A259FF"/>
</svg>

                Publish Now
                </div>
            </button>
        </div>
    </div>
  )
}
