console.log("Programs script loaded");

let allPrograms = [];

const programsContainer = document.getElementById("programsContainer");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

async function loadPrograms() {
    try {
        const response = await fetch("programs.json");

        if (!response.ok) {
            throw new Error("Could not load programs.json");
        }

        allPrograms = await response.json();

        renderPrograms(allPrograms);

    } catch (error) {
        console.error("Error loading programs:", error);

        programsContainer.innerHTML =
            '<div class="col-12 text-center">' +
                '<p class="text-danger">' +
                    'Unable to load programs. Please try again.' +
                '</p>' +
            '</div>';
    }
}

function renderPrograms(programs) {

    programsContainer.innerHTML = "";

    if (programs.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    programs.forEach(function (program) {

        let skillBadges = "";

        program.skills.forEach(function (skill) {
            skillBadges +=
                '<span class="badge skill-badge">' +
                    skill +
                '</span>';
        });

        const card =
            '<div class="col-md-6 col-lg-4">' +
                '<div class="card program-card">' +

                    '<div class="card-body d-flex flex-column">' +

                        '<h3 class="card-title">' +
                            program.domain +
                        '</h3>' +

                        '<p class="program-description mt-3">' +
                            program.description +
                        '</p>' +

                        '<p class="duration">' +
                            '<i class="fa-regular fa-clock"></i> ' +
                            program.duration +
                        '</p>' +

                        '<div class="mb-4">' +
                            skillBadges +
                        '</div>' +

                        '<div class="mt-auto">' +
                            '<a href="' +
                                program.applyLink +
                            '" class="apply-program-btn">' +
                                'Apply Now' +
                            '</a>' +
                        '</div>' +

                    '</div>' +

                '</div>' +
            '</div>';

        programsContainer.insertAdjacentHTML("beforeend", card);
    });
}

searchInput.addEventListener("input", function () {

    const searchTerm =
        searchInput.value.toLowerCase().trim();

    const filteredPrograms = allPrograms.filter(function (program) {

        const domainMatch =
            program.domain.toLowerCase().includes(searchTerm);

        const skillMatch =
            program.skills.some(function (skill) {
                return skill.toLowerCase().includes(searchTerm);
            });

        return domainMatch || skillMatch;
    });

    renderPrograms(filteredPrograms);
});

loadPrograms();