import { create as ipfsHttpClient } from 'ipfs-http-client'

const client = ipfsHttpClient('http://localhost:5001')

function testIpfs(){
    console.log('ipfs demo')
    // call Core API methods
    const { cid } = client.add('Hello world!')
    console.log(cid)
}

function testLog(){
    console.log('ipfs only log')
}

export default {
    testIpfs,
    testLog
}