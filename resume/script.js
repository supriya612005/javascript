document.getElementById('add-skill').addEventListener('click', function() {
    const skillsContainer = document.getElementById('skills-container');
    const skillInputHTML = `
        <div class="skill-input">
            <input type="text" name="skill-name" placeholder="Skill Name" required>
            <input type="number" name="skill-percentage" placeholder="Percentage" min="0" max="100" required>
        </div>
    `;
    skillsContainer.insertAdjacentHTML('beforeend', skillInputHTML);
});

document.getElementById('add-education').addEventListener('click', function() {
    const educationContainer = document.getElementById('education-container');
    const educationInputHTML = `
        <div class="education-input">
            <input type="text" name="education-degree" placeholder="Degree/Certification" required>
            <input type="text" name="education-institution" placeholder="Institution" required>
            <input type="text" name="education-year" placeholder="Year" required>
        </div>
    `;
    educationContainer.insertAdjacentHTML('beforeend', educationInputHTML);
});

document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const experience = document.getElementById('experience').value;
    const projects = document.getElementById('projects').value;

    const skillInputs = document.querySelectorAll('.skill-input');
    const skills = Array.from(skillInputs).map(skillInput => {
        return {
            name: skillInput.querySelector('input[name="skill-name"]').value,
            percentage: skillInput.querySelector('input[name="skill-percentage"]').value
        };
    });

    const educationInputs = document.querySelectorAll('.education-input');
    const educationEntries = Array.from(educationInputs).map(educationInput => {
        return {
            degree: educationInput.querySelector('input[name="education-degree"]').value,
            institution: educationInput.querySelector('input[name="education-institution"]').value,
            year: educationInput.querySelector('input[name="education-year"]').value
        };
    });

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    localStorage.setItem('jobTitle', jobTitle);
    localStorage.setItem('experience', experience);
    localStorage.setItem('skills', JSON.stringify(skills));
    localStorage.setItem('education', JSON.stringify(educationEntries));
    localStorage.setItem('projects', projects);

    window.location.href = 'resume.html';
});