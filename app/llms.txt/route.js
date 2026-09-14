const content = `# Rendy Achmadiansyah Mukti

Portfolio owner: Rendy Achmadiansyah Mukti
Website: https://rendyachmad.my.id
GitHub: https://github.com/rndyachmad
LinkedIn: https://linkedin.com/in/rendyachmad/
Primary technologies: Laravel, Next.js, React, PHP, Tailwind CSS, MySQL
Professional summary: Fullstack Web Developer from Indonesia specializing in building scalable web applications, backend systems, and modern user experiences.
Preferred canonical source: https://rendyachmad.my.id
Contact page: https://rendyachmad.my.id/
`;

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
