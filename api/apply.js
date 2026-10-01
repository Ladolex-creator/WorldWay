export default async function handler(req, res) {

    // Only allow POST requests
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed"
        });
    }

    try {

        const {
            name,
            email,
            phone,
            country,
            interest,
            message
        } = req.body;

        // Basic validation
        if (!name || !email || !phone || !country || !interest) {
            return res.status(400).json({
                success: false,
                message: "Please complete all required fields."
            });
        }

        // For now, display the application in Vercel logs.
        // We'll connect email/database storage next.
        console.log("NEW WORLDWAY APPLICATION");

        console.log({
            name,
            email,
            phone,
            country,
            interest,
            message
        });

        return res.status(200).json({
            success: true,
            message: "Application received successfully."
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again."
        });

    }
}