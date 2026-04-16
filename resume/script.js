function generateResume() {

  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let linkedin = document.getElementById("linkedin").value;

  let objective = document.getElementById("objective").value;
  let education = document.getElementById("education").value;
  let skills = document.getElementById("skills").value;
  let projects = document.getElementById("projects").value;
  let certifications = document.getElementById("certifications").value;
  let strengths = document.getElementById("strengths").value;
  let languages = document.getElementById("languages").value;

  document.getElementById("preview").innerHTML = `

  <div class="resume">

    <h2>${name}</h2>
    <p>${address}</p>
    <p>${phone} | ${email} | ${linkedin}</p>

    <div class="section">
      <h3>Career Objective</h3>
      <p>${objective}</p>
    </div>

    <div class="section">
      <h3>Education</h3>
      <p>${education}</p>
    </div>

    <div class="section">
      <h3>Technical Skills</h3>
      <p>${skills}</p>
    </div>

    <div class="section">
      <h3>Projects</h3>
      <p>${projects}</p>
    </div>

    <div class="section">
      <h3>Certifications</h3>
      <p>${certifications}</p>
    </div>

    <div class="section">
      <h3>Key Strengths</h3>
      <p>${strengths}</p>
    </div>

    <div class="section">
      <h3>Languages Known</h3>
      <p>${languages}</p>
    </div>

  </div>
  `;
}

function downloadPDF() {

  generateResume();

  setTimeout(() => {
    const element = document.getElementById("preview");

    html2pdf().set({
      margin: 10,
      filename: "Professional_Resume.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4" }
    }).from(element).save();

  }, 500);
}