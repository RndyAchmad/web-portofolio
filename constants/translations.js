export const translations = {
    en: {
        nav: { home: "home", education: "education", tech: "tech", experience: "experience", connect: "connect", project: "projects" },
        hero: {
            badge: "Ready to build something great? Let's connect!",
            greet: "Hello, I'm",
            description: "A Fullstack Web Developer specialized in the Laravel ecosystem. I build end-to-end applications, from robust backend architectures to modern, responsive user interfaces.",
            subDescription: "Proven experience in developing ERP systems and content automation solutions with a focus on clean code and performance.",
            cta_cv: "View CV",
            cta_github: "GitHub Portfolio",
            cv_file: "/dokumen/cv-rendy-en.pdf"
        },
        about: {
            title: "About Me",
            heading: "Hi, I'm",
            paragraph1: "I am a dedicated Fullstack Web Developer with a strong foundation in building scalable and reliable digital products. With deep expertise in the Laravel ecosystem and modern JavaScript frameworks like Next.js and React, I bridge the gap between robust backend architectures and intuitive user interfaces.",
            paragraph2: "My professional journey involves developing comprehensive ERP systems and content automation solutions. I always prioritize clean code, performance optimization, and seamless user experiences. Whether it's architecting a database or crafting a responsive frontend, I am passionate about solving complex problems and turning ideas into functional, high-quality digital realities."
        },
        services: {
            label: "SERVICES",
            title: "What I Can Help You Build",
            description: "I build scalable web applications, robust backend systems, and modern user experiences using Laravel, Next.js, and related technologies.",
            items: {
                backend: {
                    title: "Backend Development",
                    description: "Develop secure and scalable backend systems using Laravel, REST APIs, authentication, RBAC, queues, caching, and clean architecture.",
                },
                fullstack: {
                    title: "Fullstack Web Development",
                    description: "Build complete web applications using Laravel, Next.js, React, Tailwind CSS, and modern frontend technologies.",
                },
                database: {
                    title: "Database Design",
                    description: "Design optimized relational databases with MySQL, ensuring performance, scalability, and data integrity.",
                },
                api: {
                    title: "API Integration",
                    description: "Integrate third-party APIs including payment gateways, authentication providers, and external business services.",
                },
                dashboard: {
                    title: "Admin Dashboard",
                    description: "Develop modern internal dashboards, CMS platforms, reporting systems, and business management tools.",
                },
                deployment: {
                    title: "Deployment & Maintenance",
                    description: "Deploy applications using Vercel, VPS, Cloudflare, Nginx, and maintain production-ready environments.",
                },
            },
        },
        education: {
            title: "Education",
            description: "Bachelor of Information Systems with a strong foundation in backend development, software engineering, database systems, and modern web application development.",
            degree: "Bachelor of Information Systems",
            university: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur',
            year: "2022 – 2026",
            gpa: "GPA: 3.83 / 4.00"
        },
        skills: {
            title: "Tech Stack",
            description: "The tools and technologies I use to bring digital ideas to life.",
            lang: "Programming Languages",
            frameworks: "Frameworks & Libraries",
            db: "Database",
            tools: "Tools"
        },
        experience: {
            title: "Professional Experience",
            description: "A timeline of my professional growth and the impact I've made in various roles.",
            items: {
                angsar: {
                    period: "January 2026 - June 2026",
                    key: [
                        "Developed an end-to-end Content Automation Platform that transformed the competition content publishing process from manual to a semi-automated workflow.",
                        "Participated in the entire Software Development Life Cycle (SDLC), including Product Requirements Document (PRD), ERD and Sequence Diagram design, application development, and Black Box Testing.",
                        "Built the backend using Laravel and MySQL to manage web scraping, content processing, scheduling, and automated publishing.",
                        "Implemented automated web scraping with Guzzle and integrated the Meta Instagram Graph API for multi-platform content publishing.",
                        "Implemented Laravel Queue and Task Scheduling to execute scraping, data processing, and publishing tasks asynchronously, improving operational efficiency and application performance.",
                        "Developed the administrative dashboard using Laravel Blade, Tailwind CSS, AJAX, and DataTables while optimizing database queries for better performance."
                    ],
                },
                ordo: {
                    period: "February 2025 - June 2025",
                    key: [
                        "Contributed to the development and maintenance of multiple client web applications in a software house environment while adapting to evolving business requirements.",
                        "Developed RESTful APIs using Laravel and PHP to support ERP modules and seamless integration between backend and frontend services.",
                        "Designed, managed, and optimized MySQL databases through relationship design, indexing, and query optimization to improve application performance and data integrity.",
                        "Implemented Redis Cache, Laravel Queue Jobs, RBAC, DOMPDF, and SMTP email integration to enhance application performance, security, and functionality.",
                        "Collaborated with frontend developers and QA engineers to integrate features, perform API testing with Laravel Test and Postman, and resolve bugs based on client feedback."
                    ],
                },
            },
        },
        footer: {
            description: "Fullstack Developer specialized in the",
            navTitle: "Navigation",
            socialTitle: "Socials",
            mantra: "Clean code always looks like it was written by someone who cares.",
            rights: "All rights reserved.",
            techStack: ["Next.js", "Tailwind", "Vercel"]
        },
        projects: {
            title: "Projects",
            description: "A showcase of my work and contributions in the tech world.",
            viewProject: "View Details",
            items: {
                gestureblur: {
                    type: "Computer Vision Web App",
                    description: "A real-time Computer Vision application that detects specific hand gestures (Peace sign) to trigger a privacy blur effect on the live camera feed, utilizing MediaPipe for client-side AI processing.",
                },
                alfirdaus: {
                    type: "Mosque Management Information System",
                    description: "Masjid Al Firdaus is a web-based digital platform developed to support mosque information management and community engagement. The system provides prayer schedules, mosque profiles, community activities, Islamic articles, financial reports, and contact information within a single accessible platform. Built with Laravel, the project focuses on information accessibility, transparency, and a responsive user experience across desktop and mobile devices.",
                },
                olimportal: {
                    type: "Content Automation Platform",
                    description: "A content automation system designed to manage the entire workflow of digital content production and distribution. The platform supports data collection through scraping, automated content creation, as well as scheduling and publishing to various platforms like Instagram. With an integrated workflow, content can be processed, prepared, and published efficiently, consistently, and at scale.",
                },
                fuomo: {
                    type: "Creator Monetization Platform",
                    description: "A digital platform that empowers creators to share and monetize exclusive content, including photos, audio, illustrations, and direct supporter interactions.",
                },
                ets: {
                    type: "Enterprise Internal Dashboard",
                    description: "An internal company platform for PT. Ordo Teknologi Karya featuring dashboards and data visualization to support operational workflows.",
                },
                xymart: {
                    type: "Enterprise Internal Dashboard",
                    description: "Xymart is an internal application developed for a client, available in both web and mobile versions. It serves as a centralized control hub, providing operational data through interactive dashboards that enable real-time activity monitoring and support data-driven decision-making.",
                },
                proton: {
                    type: "Enterprise Internal Dashboard",
                    description: "Proton is an internal application developed for a client, available in both web and mobile versions. It is designed to display and monitor the company's operational data through an integrated dashboard, enabling real-time data tracking and supporting data-driven decision-making.",
                },
                dwo: {
                    type: "Data Analytics Dashboard",
                    description: "An interactive DWO dashboard application developed using Laravel, Livewire, and the Volt Laravel Admin Template to visualize insights from the AdventureWorks Data Warehouse model. This project was created as a final semester assignment for the Data Warehouse and OLAP course, with a focus on presenting data interactively to support multidimensional analysis and data-driven decision-making.",
                },
                solemate: {
                    type: "Flutter Mobile E-Commerce App",
                    description: "Solemate is a simple mobile e-commerce application developed using Flutter for learning and skill development purposes in mobile app development. The application includes essential features such as user login, product catalog, product details, shopping cart, and a modern responsive user interface. This project was created to explore Flutter fundamentals, state management, page navigation, and structured mobile application development.",
                },
            }
        },
        connect: {
            title: "Let's Connect",
            description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, my inbox is always open!"
        },
    },
    id: {
        nav: { home: "beranda", education: "pendidikan", tech: "teknologi", experience: "pengalaman", connect: "hubungi", project: "proyek" },
        hero: {
            badge: "Siap membangun hal hebat? Mari terhubung!",
            greet: "Halo, Saya",
            description: "Seorang Fullstack Web Developer yang berspesialisasi dalam ekosistem Laravel. Saya membangun aplikasi end-to-end, dari arsitektur backend yang kokoh hingga antarmuka pengguna yang modern dan responsif.",
            subDescription: "Pengalaman terbukti dalam mengembangkan sistem ERP dan solusi otomatisasi konten dengan fokus pada kode yang bersih dan performa.",
            cta_cv: "Lihat CV",
            cta_github: "Portofolio GitHub",
            cv_file: "/dokumen/cv-rendy-id.pdf"
        },
        about: {
            title: "Tentang Saya",
            heading: "Halo, saya",
            paragraph1: "Saya adalah seorang Fullstack Web Developer yang memiliki dedikasi tinggi dalam membangun produk digital yang andal dan dapat diskalakan. Dengan keahlian di ekosistem Laravel dan framework JavaScript modern seperti Next.js dan React, saya menjembatani arsitektur backend yang tangguh dengan antarmuka pengguna yang intuitif.",
            paragraph2: "Perjalanan profesional saya melibatkan pengembangan sistem ERP komprehensif dan solusi otomatisasi konten. Saya selalu memprioritaskan penulisan kode yang bersih, optimalisasi performa, dan pengalaman pengguna yang mulus. Saya sangat antusias dalam memecahkan masalah kompleks dan mengubah ide menjadi realitas digital berkualitas tinggi."
        },
        services: {
            label: "LAYANAN",
            title: "Yang Bisa Saya Bantu Bangun",
            description: "Saya membangun aplikasi web yang scalable, sistem backend yang kuat, dan pengalaman pengguna modern menggunakan Laravel, Next.js, serta teknologi terkait.",
            items: {
                backend: {
                    title: "Pengembangan Backend",
                    description: "Membangun sistem backend yang aman dan scalable menggunakan Laravel, REST API, autentikasi, RBAC, queue, caching, dan arsitektur bersih.",
                },
                fullstack: {
                    title: "Pengembangan Web Fullstack",
                    description: "Membangun aplikasi web lengkap menggunakan Laravel, Next.js, React, Tailwind CSS, dan teknologi frontend modern.",
                },
                database: {
                    title: "Desain Database",
                    description: "Merancang database relasional yang optimal dengan MySQL agar performa, skalabilitas, dan integritas data terjaga.",
                },
                api: {
                    title: "Integrasi API",
                    description: "Mengintegrasikan API pihak ketiga termasuk gateway pembayaran, provider autentikasi, dan layanan bisnis eksternal.",
                },
                dashboard: {
                    title: "Dashboard Admin",
                    description: "Mengembangkan dashboard internal modern, CMS, sistem pelaporan, dan alat manajemen bisnis.",
                },
                deployment: {
                    title: "Deployment & Maintenance",
                    description: "Mendeploy aplikasi menggunakan Vercel, VPS, Cloudflare, Nginx, dan menjaga environment produksi tetap siap pakai.",
                },
            },
        },
        education: {
            title: "Pendidikan",
            description: "Lulusan S1 Sistem Informasi dengan dasar yang kuat dalam rekayasa perangkat lunak, pengembangan backend, perancangan basis data, dan pengembangan aplikasi web modern.",
            degree: "S1 Sistem Informasi",
            university: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur',
            year: "2022 – 2026",
            gpa: "IPK: 3.83 / 4.00"
        },
        skills: {
            title: "Infrastruktur Teknologi",
            description: "Berbagai alat dan teknologi yang saya gunakan untuk mewujudkan ide digital.",
            lang: "Bahasa Pemrograman",
            frameworks: "Framework & Library",
            db: "Database",
            tools: "Peralatan"
        },
        experience: {
            title: "Pengalaman Profesional",
            description: "Rekam jejak pertumbuhan profesional dan dampak yang saya berikan dalam berbagai peran.",
            items: {
                angsar: {
                    period: "Januari 2026 - Juni 2026",
                    key: [
                        "Mengembangkan Platform Otomasi Konten secara end-to-end yang mentransformasi proses publikasi informasi lomba dari manual menjadi semi-otomatis melalui alur kerja yang terintegrasi.",
                        "Terlibat pada seluruh Software Development Life Cycle (SDLC), mulai dari penyusunan Product Requirement Document (PRD), perancangan ERD dan Sequence Diagram, pengembangan aplikasi, hingga Black Box Testing.",
                        "Membangun backend menggunakan Laravel dan MySQL untuk mengelola proses web scraping, pengolahan konten, penjadwalan, dan publikasi otomatis.",
                        "Mengimplementasikan web scraping menggunakan Guzzle serta mengintegrasikan Instagram Graph API untuk mendukung publikasi konten ke berbagai platform.",
                        "Menggunakan Laravel Queue dan Task Scheduling untuk menjalankan proses scraping, pengolahan data, dan publikasi secara asynchronous sehingga meningkatkan efisiensi operasional.",
                        "Membangun antarmuka admin menggunakan Laravel Blade, Tailwind CSS, AJAX, dan DataTables serta mengoptimalkan performa query database."
                    ],
                },
                ordo: {
                    period: "Februari 2025 - Juni 2025",
                    key: [
                        "Terlibat dalam pengembangan dan pemeliharaan beberapa aplikasi web milik klien pada lingkungan software house dengan menyesuaikan kebutuhan bisnis dan perubahan requirement.",
                        "Mengembangkan RESTful API menggunakan Laravel dan PHP untuk mendukung berbagai modul sistem ERP serta integrasi antara backend dan frontend.",
                        "Merancang, mengelola, dan mengoptimalkan basis data MySQL melalui perbaikan struktur relasi, indexing, serta optimasi query untuk meningkatkan performa aplikasi.",
                        "Mengimplementasikan Redis Cache, Laravel Queue Jobs, RBAC, DOMPDF, dan SMTP Mail Server untuk meningkatkan efisiensi, keamanan, dan fungsionalitas aplikasi.",
                        "Berkolaborasi dengan tim Frontend dan QA dalam proses integrasi fitur, pengujian API menggunakan Laravel Test dan Postman, serta penyelesaian bug berdasarkan masukan klien."
                    ],
                },
            },
        },
        footer: {
            description: "Fullstack Developer yang berspesialisasi dalam ekosistem",
            navTitle: "Navigasi",
            socialTitle: "Media Sosial",
            mantra: "Kode yang bersih selalu terlihat seperti ditulis oleh seseorang yang peduli.",
            rights: "Hak cipta dilindungi.",
            techStack: ["Next.js", "Tailwind", "Vercel"]
        },
        projects: {
            title: "Proyek",
            description: "Kumpulan proyek dan kontribusi yang telah saya kerjakan di dunia teknologi.",
            viewProject: "Lihat Detail",
            items: {
                gestureblur: {
                    type: "Aplikasi Web Computer Vision",
                    description: "Aplikasi Computer Vision real-time yang mendeteksi gestur tangan spesifik (pose 'Peace') untuk memicu efek blur privasi pada feed kamera secara langsung, memanfaatkan MediaPipe untuk pemrosesan AI di sisi klien.",
                },
                alfirdaus: {
                    type: "Sistem Informasi Manajemen Masjid",
                    description: "Masjid Al Firdaus adalah platform digital berbasis web yang dikembangkan untuk mendukung pengelolaan dan penyebaran informasi kegiatan masjid. Sistem ini menyediakan fitur jadwal sholat, profil masjid, kegiatan jamaah, artikel keislaman, laporan keuangan, serta informasi kontak dalam satu platform yang mudah diakses. Proyek ini dibangun menggunakan Laravel dengan fokus pada kemudahan akses informasi, transparansi, dan pengalaman pengguna yang responsif di berbagai perangkat.",
                },
                olimportal: {
                    type: "Platform Automasi Konten",
                    description: "Sistem automasi konten yang dirancang untuk mengelola seluruh alur produksi dan distribusi konten digital. Platform ini mendukung pengumpulan data melalui scraping, pembuatan konten secara otomatis, serta penjadwalan dan publikasi ke berbagai platform seperti Instagram. Dengan alur kerja terintegrasi, konten dapat diproses, disiapkan, dan dipublikasikan secara efisien, konsisten, dan terukur.",
                },
                fuomo: {
                    type: "Platform Monetisasi Kreator",
                    description: "Platform digital yang membantu kreator membagikan dan memonetisasi konten eksklusif mereka, seperti foto, audio, ilustrasi, serta interaksi langsung dengan pendukung.",
                },
                ets: {
                    type: "Dashboard Internal Perusahaan",
                    description: "Platform internal perusahaan PT. Ordo Teknologi Karya yang menyediakan dashboard dan visualisasi data untuk mendukung operasional bisnis.",
                },
                xymart: {
                    type: "Dashboard Internal Perusahaan",
                    description: "Xymart adalah aplikasi internal yang dikembangkan untuk klien, tersedia dalam versi web dan mobile. Aplikasi ini berfungsi sebagai pusat kendali terpusat, menyediakan data operasional melalui dashboard interaktif yang memungkinkan pemantauan aktivitas secara real-time dan mendukung pengambilan keputusan berbasis data.",
                },
                proton: {
                    type: "Dashboard Internal Perusahaan",
                    description: "Proton adalah aplikasi internal yang dikembangkan untuk klien, tersedia dalam versi web dan mobile. Aplikasi ini dirancang untuk menampilkan dan memantau data operasional perusahaan melalui dashboard terintegrasi, memungkinkan pelacakan data secara real-time dan mendukung pengambilan keputusan berbasis data.",
                },
                dwo: {
                    type: "Dashboard Analitik Data",
                    description: "Aplikasi dashboard DWO interaktif yang dikembangkan menggunakan Laravel, Livewire, dan Volt Laravel Admin Template untuk memvisualisasikan wawasan dari model Data Warehouse AdventureWorks. Proyek ini dibuat sebagai tugas akhir semester untuk mata kuliah Data Warehouse dan OLAP, dengan fokus pada penyajian data secara interaktif untuk mendukung analisis multidimensi dan pengambilan keputusan berbasis data.",
                },
                solemate: {
                    type: "Flutter Mobile E-Commerce App",
                    description: "Solemate adalah aplikasi mobile e-commerce sederhana yang dikembangkan menggunakan Flutter sebagai media pembelajaran dan pengembangan keterampilan mobile development. Aplikasi ini mencakup fitur dasar seperti login, katalog produk, detail produk, keranjang belanja, dan antarmuka modern yang responsif. Proyek ini dibuat untuk memahami konsep fundamental Flutter, pengelolaan state, navigasi antar halaman, serta pengembangan aplikasi mobile yang terstruktur.",
                },
            }
        },
        connect: {
            title: "Mari Terhubung",
            description: "Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda. Jika Anda memiliki pertanyaan atau hanya ingin menyapa, saya siap membantu!"
        },
    }
};