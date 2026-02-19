export default function manifest() {
    return {
        name: "Campus Connect Kenya",
        short_name: "CampusConnect",
        description:
            "One platform for everything in campus — trade textbooks, find hostels, join study groups, access M-Pesa payments, and stay safe with emergency SOS.",
        start_url: "/",
        display: "standalone",
        background_color: "#0a0e17",
        theme_color: "#006633",
        orientation: "portrait-primary",
        categories: ["education", "social", "lifestyle"],
        icons: [
            {
                src: "/brand/logo.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/brand/logo.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/brand/maskable.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
    };
}
