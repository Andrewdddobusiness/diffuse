import { useState } from "react";

import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Footer from '../components/footer'

import Image from 'next/image'
import { Input, Button } from "@nextui-org/react";

export default function Home() {
  const [promptInput, setPromptInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: promptInput }),
    });

    const data = await response.json()
    setResult(data.result);
    setPromptInput("");
  }

  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <h3>Write a prompt!</h3>
        <h5 style={{color: 'grey', marginLeft: '2rem', marginRight: '2rem', textAlign: "center"}}>i.e. a cute magical flying dog soaring across a city landscape in disney style</h5>
        <form onSubmit={onSubmit}>
          <div className={styles.section}>
            <Input 
              size="xl"
              fullWidth="true"
              required="true"
              type="text"
              name="prompt"
              placeholder="Enter your prompt here"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              />
            </div>
            <div className={styles.section}>
              <Button color="gradient" type="submit">Generate Image</Button>
            </div>

        </form>
        <div className={styles.section}>
          <Image 
            src={result} 
            alt="test image"
            width={252}
            height={252}
            />
        </div>
      </main>
      <Footer/>
    </div>
  )
}
