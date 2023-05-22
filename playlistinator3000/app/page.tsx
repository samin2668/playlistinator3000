import Image from 'next/image'
'use client';
export default function Home() {
  async function callOpenAI(){
    console.log('Calling api')

    const apiKey = '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'
    const reqBody = {
      "model": "text-davinci-003",
      "prompt": "Can you explain Quantumn Mechanics like I'm five?",
      "temperature": 0,
      "max_tokens": 60,
      "top_p": 1.0,
      "frequency_penalty": 0.0,
      "presence_penalty": 0.0
    }
    await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify(reqBody)
    }).then(data=>{return data.json()})
      .then(data=>{console.log(data)})
  }
  
  return (
    <>
      <button onClick={callOpenAI}>Click to call API</button>
    </>
  )
}
