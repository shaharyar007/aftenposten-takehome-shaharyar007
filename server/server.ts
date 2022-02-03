import { ITeaser } from "../types";

const express = require('express');
const cors = require("cors");

const fs = require("fs");
const app = express();

app.use(
    cors({
        origin: function (origin: any, callback: any) {
            // allow requests with no origin f.ex curl requests
            if (!origin) return callback(null, true);
            if (origin !== "http://localhost:3000") {
                var msg =
                    "The CORS policy for this site does not " +
                    "allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    })
);

const readFromFile = (location: string) => {
    try {
        return JSON.parse(fs.readFileSync(`${location}.json`, "utf8"));
    } catch (e) {
        return null;
    }
}

const readSection = (sectionId: string) => {
    return readFromFile(`./sections/${sectionId}`);
}

app.get('/api/sections', (req: any, res: any) => {
    try {
        fs.readdir('./sections', (e: Error, files: string[]) => {
            const sections = files.map(file => file.substr(0, file.indexOf('.')));
            res.status(200).send(sections);
        });
    } catch (e) {
        res.status(500).send();
    }
});

app.get('/api/section/:sectionId', (req: any, res: any) => {
    try {
        const sectionId = (req.params.sectionId);
        const data = readSection(sectionId);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send();
    }
});

app.get('/api/section/:sectionId/articles', (req: any, res: any) => {
    try {
        const sectionId = (req.params.sectionId);
        const data = readSection(sectionId);
        const extractedArticleIds = data.teasers.map((t: ITeaser) => t.id);
        res.status(200).send(extractedArticleIds);
    } catch (e) {
        res.status(500).send();
    }
});


app.listen(5000, () => console.log('listening on port 5000'));