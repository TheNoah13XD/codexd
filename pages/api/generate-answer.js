import { NextApiRequest, NextApiResponse } from "next";
import { Configuration,OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export default async (req, res) => {
    const { prompt } = req.body;

    if (!prompt || prompt === "") {
        res.status(400).json({ text: "No prompt provided" });
        return;
    }

    const aiResult = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${prompt}`,
        temperature: 0.9,
        max_tokens: 100,
        frequency_penalty: 0.5,
        presence_penalty: 0,
    });

    const response = aiResult.data.choices[0].text?.trim() || "Sorry, there was a problem!";
    res.status(200).json({ text: response });
}
