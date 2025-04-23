"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState(false)

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className='mx-auto max-w-lg my-16 p-8 rounded-lg bg-purple-200 flex flex-col gap-4'>

        <h1 className='mx-auto font-bold text-2xl pt-12'>Generate your Short URL's</h1>
        <div className=' flex flex-col items-center gap-3 py-7'>
          <input value={url} className='p-2 bg-purple-100 rounded-lg focus:outline-purple-700 w-full' type="text" placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
          <input value={shorturl} className='p-2 bg-purple-100 rounded-lg focus:outline-purple-700 w-full' type="text" placeholder='Enter your preferred short url text' onChange={e => { setshorturl(e.target.value) }} />
          <button onClick={generate} className='bg-purple-500 shadow-lg px-3 py-2 rounded-lg font-bold text-white w-full my-4'>Generate</button>
        </div>
        {generated && <>
          <span className='font-bold text-lg'>Your Link</span><code><Link target="_blank" href={generated}>{generated}</Link>
          </code>
        </>}
      </div>

    </>
  )
}

export default shorten
