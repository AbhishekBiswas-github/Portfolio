// app.js
import { projects } from "./projects.js";

const grid = document.getElementById("projectsGrid");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img class="project-image" src="${project.image}" alt="${project.title}">
    <div class="card-content">
      <div class="card-title">${project.title}</div>
    Created: ${project.date}</div>
      <div class="card-tools">
      </div>
      <div class="card-action">
        <a class="repo-btn" href="${project.repo}" target="_blank" rel="noopener">View on GitHub Repo</a>
      </div>
    </div>
  `;
  grid.appendChild(card);
});
