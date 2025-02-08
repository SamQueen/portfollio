import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    
    // check for post method
    if (req.method !== "POST") {
        return res.status(400).json({ success: false, error: "Method not allowed"});
    }

    const webHookUrl: string | undefined | Request = process.env.DISCORD_WEBHOOK;
    const userAgent = req.headers['user-agent'];
    const forwardedFor = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '';
    const userIp = typeof forwardedFor === 'string' ? forwardedFor.split(',')[0].trim() : 'Unknown';

    // Send location request
    const location = await fetch(`https://ipapi.co/${userIp}/json/`);
    const locationData = await location.json();

    if (!webHookUrl) {
        return res.status(500).json({ success: false, error: "discord webhook not defined"});
    }

    try {
        const response = await fetch(webHookUrl, {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: `👀 Profile clicked!
                - **TIME:** ${new Date().toLocaleString()} 
                - **IP:** ${userIp} 
                - **Location:** ${locationData.city}, ${locationData.region}, ${locationData.country_name}
                - **User-Agent:** ${userAgent}`
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