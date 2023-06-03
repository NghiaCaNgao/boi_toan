import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import axios from "axios";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.post('/api/canxuongtinhso', async function (req, res) {
    console.log(req.body);
    const data = await axios.post("https://lichngaytot.com/Ajax/CanXuongTinhSoAjax", {
        "dateOfBirth": req.body.date,
        "yearView": req.body.hour
    })

    const [text, ...rest] = [...(data.data as string).matchAll(/<div.*?>(.*?)<\/div>/g)]
        .map(matchingText => matchingText[1]);
    const poem = rest.slice(1).join("\n")
    const comment = text.split(".").slice(0,-1)
    
    res.json({ comment, poem })
})

app.get("/", (req, res)=>{
    res.send("Hello World")
})

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
