// Update these arrays as the team learns new skills or completes projects.
const skills = [
  { category: "Programming Languages", items: ["Placeholder language", "Placeholder language"] },
  { category: "Frontend", items: ["Placeholder frontend tool", "Placeholder UI skill"] },
  { category: "Backend", items: ["Placeholder backend tool", "Placeholder API skill"] },
  { category: "Databases", items: ["Placeholder database"] },
  { category: "Tools & Technologies", items: ["Placeholder tool", "Placeholder technology"] },
  { category: "Version Control", items: ["Git", "GitHub"] },
];

const projects = [
  { name: "Project One", description: "Placeholder description for a future team project.", purpose: "Placeholder: describe the problem this project helps solve.", technologies: ["Placeholder technology", "Placeholder technology"], repositoryUrl: "#", demoUrl: "#" },
  { name: "Project Two", description: "Placeholder description for a future team project.", purpose: "Placeholder: describe the problem this project helps solve.", technologies: ["Placeholder technology", "Placeholder technology"], repositoryUrl: "#", demoUrl: "#" },
  { name: "Project Three", description: "Placeholder description for a future team project.", purpose: "Placeholder: describe the problem this project helps solve.", technologies: ["Placeholder technology", "Placeholder technology"], repositoryUrl: "#", demoUrl: "#" },
];

const skillsList = document.querySelector("#skills-list");
const projectsList = document.querySelector("#projects-list");

if (skillsList) {
  skillsList.innerHTML = skills.map(({ category, items }) => `<article class="skill-card"><h3>${category}</h3><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`).join("");
}

if (projectsList) {
  projectsList.innerHTML = projects.map(({ name, description, purpose, technologies, repositoryUrl, demoUrl }) => `<article class="project-card"><p class="project-number">Placeholder project</p><h3>${name}</h3><p>${description}</p><p><strong>Purpose:</strong> ${purpose}</p><ul class="tech-list" aria-label="Technologies used">${technologies.map((technology) => `<li>${technology}</li>`).join("")}</ul><div class="project-actions"><a class="project-link" href="${repositoryUrl}" aria-label="${name} GitHub repository placeholder">GitHub Repository <span aria-hidden="true">↗</span></a><a class="project-link" href="${demoUrl}" aria-label="${name} live demo placeholder">Live Demo <span aria-hidden="true">↗</span></a></div></article>`).join("");
}
