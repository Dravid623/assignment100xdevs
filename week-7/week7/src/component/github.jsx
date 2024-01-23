import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Github (){
    const [github, setGithub] = useState({})
useEffect(()=>{
    //backend call
    async function fetchData(){
    const res = await axios.get('https://api.github.com/users/Dravid623')
    setGithub(res.data)
    console.log(res.data)
    }
    fetchData()
},[])
    return <div>
        <div>Name: {github.name}</div>
        <div>public_repos: {github.public_repos}</div>
    </div>
}