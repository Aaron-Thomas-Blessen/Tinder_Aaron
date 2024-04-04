// Sample data - replace with your actual data

const people = [
  {
    name: "John Doe",
    skills: ["JavaScript", "React.js", "Node.js"],
    details: "John Doe is an experienced JavaScript developer.",
  },
  {
    name: "Jane Smith",
    skills: ["HTML", "CSS", "JavaScript"],
    details:
      "Jane Smith is a front-end web developer with expertise in HTML, CSS, and JavaScript.",
  },
  {
    name: "Alex Johnson",
    skills: ["Python", "Data Science", "Machine Learning"],
    details:
      "Alex Johnson is a data scientist specializing in Python, data science, and machine learning.",
  },
  // Add more people as needed
];

// Create elements
const h1 = document.createElement("h1");
h1.textContent = "People Search Dashboard";

const input = document.createElement("input");
input.type = "text";
input.id = "search-input";
input.placeholder = "Search by skill...";

const ul = document.createElement("ul");
ul.id = "results";

const detailsDiv = document.createElement("div");
detailsDiv.id = "details";

// Append elements to body
document.body.appendChild(h1);
document.body.appendChild(input);
document.body.appendChild(ul);
document.body.appendChild(detailsDiv);

// Object to save connect state for each person
const connectState = {};

// Function to search people by skill
function searchPeopleBySkill(skill) {
  const results = people.filter((person) => person.skills.includes(skill));
  return results;
}

// Function to display search results
function displayResults(results) {
  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";

  if (results.length === 0) {
    resultsList.innerHTML = "<li>No results found</li>";
  } else {
    results.forEach((person) => {
      const listItem = document.createElement("li");
      listItem.classList.add("person");

      // Person name
      const nameElement = document.createElement("span");
      nameElement.textContent = person.name;
      nameElement.style.cursor = "pointer";
      nameElement.addEventListener("click", () => {
        displayPersonDetails(person);
      });
      listItem.appendChild(nameElement);

      // Connect button
      const connectButton = document.createElement("button");
      connectButton.textContent = connectState[person.name]
        ? "Connected"
        : "Connect";
      connectButton.addEventListener("click", () => {
        toggleConnect(person);
      });
      listItem.appendChild(connectButton);

      resultsList.appendChild(listItem);
    });
  }
}

// Function to toggle connect state
function toggleConnect(person) {
  connectState[person.name] = !connectState[person.name];
  displayResults(
    searchPeopleBySkill(document.getElementById("search-input").value.trim())
  );
}

// Function to display person details
function displayPersonDetails(person) {
  const detailsDiv = document.getElementById("details");
  detailsDiv.innerHTML = `<h2>${person.name}</h2><p>${person.details}</p>`;
}

// Event listener for input
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function () {
  const query = this.value.trim();
  if (query !== "") {
    const results = searchPeopleBySkill(query);
    displayResults(results);
  } else {
    document.getElementById("results").innerHTML = "";
    document.getElementById("details").innerHTML = "";
  }
});
