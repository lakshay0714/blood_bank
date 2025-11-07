// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Donor form submission
const donorForm = document.getElementById("donorForm");
const donorTable = document.getElementById("donorTable");
let donorCount = 0;

donorForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("donorName").value;
  const age = document.getElementById("donorAge").value;
  const group = document.getElementById("donorGroup").value;
  const contact = document.getElementById("donorContact").value;

  donorCount++;
  const row = `
    <tr>
      <td class="text-center">${donorCount}</td>
      <td>${name}</td>
      <td>${age}</td>
      <td class="text-center">${group}</td>
      <td>${contact}</td>
    </tr>
  `;
  donorTable.insertAdjacentHTML("beforeend", row);

  donorForm.reset();
});
