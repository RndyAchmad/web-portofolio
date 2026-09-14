export const PROJECTS = [
    {
        slug: "gesture-blur-camera",
        title: "Gesture Blur Camera",
        image: "/images/projects/gesture-blur.png",
        translationKey: "gestureblur",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MediaPipe", "AI", "Vercel"],
        role: "Fullstack & AI Developer",
        highlights: [
            "Real-time hand gesture detection",
            "Privacy blur triggered by a Peace pose",
            "Client-side processing with MediaPipe",
        ],
        liveUrl: "https://gesture-blur-camera.rendyachmad.my.id/",
    },
    {
        slug: "masjid-al-firdaus",
        title: "Masjid Al Firdaus",
        image: "/images/projects/alfirdaus-dashboard.png",
        translationKey: "alfirdaus",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Jquery", "Ajax", "Tailwind CSS", "Rest API"],
        role: "Fullstack Developer",
        highlights: [
            "Prayer schedules and mosque activity information",
            "Articles, financial reports, and contact information",
            "Responsive web access for mosque management",
        ],
        liveUrl: "https://github.com/RndyAchmad/sim-masjid-al-firdaus",
    },
    {
        slug: "olimportal",
        title: "Olimportal",
        image: "/images/projects/olimportal.png",
        translationKey: "olimportal",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Jquery", "Ajax", "Tailwind CSS", "Datatables", "Guzzle", "Instagram Graph API"],
        role: "Fullstack Developer",
        highlights: [
            "Data collection through scraping",
            "Automated content preparation",
            "Scheduling and publication to platforms such as Instagram",
        ],
    },
    {
        slug: "fuomo",
        title: "FUOMO",
        image: "/images/projects/fuomo-desktop.jpeg",
        translationKey: "fuomo",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Jquery", "Ajax", "Sass", "Redis"],
        role: "Backend Developer",
        highlights: [
            "Exclusive content sharing for creators",
            "Creator content monetization",
            "Direct interaction with supporters",
        ],
        liveUrl: "https://fuomo.id",
    },
    {
        slug: "ets",
        title: "ETS",
        image: "/images/projects/ordo-dashboard.jpeg",
        translationKey: "ets",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Jquery", "Ajax", "Sass"],
        role: "Backend Developer",
        highlights: [
            "Internal company dashboard",
            "Operational workflow support",
            "Data visualization for business operations",
        ],
        liveUrl: "https://github.com/RndyAchmad/ets-mentoring",
    },
    {
        slug: "xymart",
        title: "Xymart",
        image: "/images/projects/xymart-dashboard.jpeg",
        translationKey: "xymart",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Jquery", "Ajax", "Sass"],
        role: "Backend Developer",
        highlights: [
            "Centralized operational control hub",
            "Interactive operational dashboards",
            "Real-time activity monitoring",
        ],
    },
    {
        slug: "proton",
        title: "Proton",
        image: "/images/projects/proton-dashboard.jpeg",
        translationKey: "proton",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Jquery", "Ajax", "Sass"],
        role: "Backend Developer",
        highlights: [
            "Integrated operational dashboard",
            "Real-time operational data monitoring",
            "Data-driven decision support",
        ],
    },
    {
        slug: "dwo-dashboard",
        title: "DWO",
        image: "/images/projects/dwo1.jpeg",
        translationKey: "dwo",
        technologies: ["Laravel", "Livewire", "Volt", "Alpine.js", "PHP", "MySQL", "JavaScript"],
        role: "Backend Developer",
        highlights: [
            "AdventureWorks Data Warehouse visualization",
            "Interactive data analysis dashboard",
            "Multidimensional analysis support",
        ],
        liveUrl: "https://github.com/RndyAchmad/dashboard-dwo",
    },
    {
        slug: "solemate",
        title: "Solemate",
        image: "/images/projects/solemate.png",
        translationKey: "solemate",
        technologies: ["Flutter", "Dart", "Firebase"],
        role: "Mobile Developer",
        highlights: [
            "User login and product catalog",
            "Product detail and shopping cart flows",
            "Responsive mobile user interface",
        ],
        liveUrl: "https://github.com/RndyAchmad/solemate"
    }
];

export function getProjectBySlug(slug) {
    return PROJECTS.find((project) => project.slug === slug);
}
