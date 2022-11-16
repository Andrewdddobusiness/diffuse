import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from 'fs';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function generateImage(req, res) {
  const response = await openai.createImage({
    prompt: req.body.prompt,
    n: 1,
    size: "256x256",
  });
   const image_url = response.data.data[0].url
   console.log(image_url)

   const imgResult = await fetch(image_url)
   const blob = await imgResult.blob();
   const buffer = Buffer.from( await blob.arrayBuffer() )
   writeFileSync('./img/${Date.now()}.png', buffer)
   console.log("1")
   return ( 
    res.status(200).json({ result: image_url })
   )
}