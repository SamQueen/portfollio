import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    
    // check for post method
    if (req.method !== "POST") {
        return res.status(400).json({ success: false, error: "Method not allowed"});
    }

    const webHookUrl: string | undefined | Request = process.env.DISCORD_WEBHOOK;

    if (!webHookUrl) {
        return res.status(500).json({ success: false, error: "discord webhook not defined"});
    }

    try {
        const response = await fetch(webHookUrl, {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: `🚀 New portfolio visitor at ${new Date().toLocaleString()}!`,
            })
        })

        if (!response) {
            throw new Error("Failed to send notification to discord channel");
        }

        return res.status(200).json({ success: true, message: "discord channel notified"});
    } catch (error) {
        console.error("Error notifying discord channel: ", error);
        return res.status(500).json({ success: false, error: error});
    }

}