  document.addEventListener("DOMContentLoaded", () => {
          const jobListings = document.getElementById("job-listings");
          const filters = document.getElementById("filters");

          // Job data
          const jobs = [
            {
              id: 1,
              company: "Photosnap",
              logo: "./images/photosnap.svg",
              new: true,
              featured: true,
              position: "Senior Frontend Developer",
              role: "Frontend",
              level: "Senior",
              postedAt: "1d ago",
              contract: "Full Time",
              location: "USA Only",
              languages: ["HTML", "CSS", "JavaScript"],
              tools: [],
            },
            {
              id: 2,
              company: "Manage",
              logo: "./images/manage.svg",
              new: true,
              featured: true,
              position: "Fullstack Developer",
              role: "Fullstack",
              level: "Midweight",
              postedAt: "1d ago",
              contract: "Part Time",
              location: "Remote",
              languages: ["Python"],
              tools: ["React"],
            },
            {
              id: 3,
              company: "Account",
              logo: "./images/account.svg",
              new: true,
              featured: false,
              position: "Junior Frontend Developer",
              role: "Frontend",
              level: "Junior",
              postedAt: "2d ago",
              contract: "Part Time",
              location: "USA Only",
              languages: ["JavaScript"],
              tools: ["React", "Sass"],
            },

            {
              id: 4,
              company: "MyHome",
              logo: "./images/myhome.svg",
              new: false,
              featured: false,
              position: "Junior Frontend Developer",
              role: "Frontend",
              level: "Junior",
              postedAt: "5d ago",
              contract: "Contract",
              location: "USA Only",
              languages: ["CSS", "JavaScript"],
              tools: [],
            },
            {
              id: 5,
              company: "Loop Studios",
              logo: "./images/loop-studios.svg",
              new: false,
              featured: false,
              position: "Software Engineer",
              role: "Fullstack",
              level: "Midweight",
              postedAt: "1w ago",
              contract: "Full Time",
              location: "Worldwide",
              languages: ["JavaScript", "Ruby"],
              tools: ["Sass"],
            },
            {
              id: 6,
              company: "FaceIt",
              logo: "./images/faceit.svg",
              new: false,
              featured: false,
              position: "Junior Backend Developer",
              role: "Backend",
              level: "Junior",
              postedAt: "2w ago",
              contract: "Full Time",
              location: "UK Only",
              languages: ["Ruby"],
              tools: ["RoR"],
            },
            {
              id: 7,
              company: "Shortly",
              logo: "./images/shortly.svg",
              new: false,
              featured: false,
              position: "Junior Developer",
              role: "Frontend",
              level: "Junior",
              postedAt: "2w ago",
              contract: "Full Time",
              location: "Worldwide",
              languages: ["HTML", "JavaScript"],
              tools: ["Sass"],
            },
            {
              id: 8,
              company: "Insure",
              logo: "./images/insure.svg",
              new: false,
              featured: false,
              position: "Junior Frontend Developer",
              role: "Frontend",
              level: "Junior",
              postedAt: "2w ago",
              contract: "Full Time",
              location: "USA Only",
              languages: ["JavaScript"],
              tools: ["Vue", "Sass"],
            },
            {
              id: 9,
              company: "Eyecam Co.",
              logo: "./images/eyecam-co.svg",
              new: false,
              featured: false,
              position: "Full Stack Engineer",
              role: "Fullstack",
              level: "Midweight",
              postedAt: "3w ago",
              contract: "Full Time",
              location: "Worldwide",
              languages: ["JavaScript", "Python"],
              tools: ["Django"],
            },
            {
              id: 10,
              company: "The Air Filter Company",
              logo: "./images/the-air-filter-company.svg",
              new: false,
              featured: false,
              position: "Front-end Dev",
              role: "Frontend",
              level: "Junior",
              postedAt: "1mo ago",
              contract: "Part Time",
              location: "Worldwide",
              languages: ["JavaScript"],
              tools: ["React", "Sass"],
            },
          ];

          // Function to display jobs
          function displayJobs(jobsToShow) {
            jobListings.innerHTML = ""; // Clear existing jobs
            jobsToShow.forEach((job) => {
              const jobElement = document.createElement("div");
              jobElement.classList.add("job");
              jobElement.innerHTML = `
                <div class="job-logo">
                    <img src="${job.logo}" alt="${job.company} Logo">
                </div>
                
                <div class="info-cont">
                    <div class="job-info">
                        <p style="color: hsl(180, 29%, 50%);">
                            ${job.company}  
                            ${job.new ? '<span style="border:1px solid hsl(180, 29%, 50%); color:white; background-color: hsl(180, 29%, 50%); padding:4px; border-radius: 10px;">NEW!</span>' : ""}
                            ${job.featured ? '<span style="border:1px solid black; color: hsl(180, 31%, 95%); background-color:hsl(180, 14%, 20%); padding:4px; border-radius: 10px;">FEATURED</span>' : ""}
                        </p>
                        <h2>${job.position}</h2>
                        <p>• ${job.postedAt} • ${job.contract} • ${job.location}</p>
                    </div>
                    <div class="job-tags">
                        ${job.languages.map((lang) => `<span class="tag">${lang}</span>`).join(" ")}
                        ${job.tools.map((tool) => `<span class="tag">${tool}</span>`).join(" ")}
                    </div>
                </div>
            `;
              jobListings.appendChild(jobElement);
            });
          }

          // Function to apply filters
          function applyFilters() {
            const selectedFilters = [];
            filters
              .querySelectorAll('input[type="checkbox"]:checked')
              .forEach((checkbox) => {
                selectedFilters.push(checkbox.value);
              });

            const filteredJobs = jobs.filter((job) => {
              return selectedFilters.every((filter) => {
                return (
                  job.role === filter ||
                  job.contract === filter ||
                  job.location === filter
                );
              });
            });

            displayJobs(filteredJobs);
          }

          // Event listener for checkboxes
          filters.addEventListener("change", applyFilters);

          // Initial display of jobs
          displayJobs(jobs);
        });
