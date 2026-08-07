# NextGenLearners – Current Openings

A responsive and dynamic internship programs page developed as part of the **NextGenLearners Internship Program – Week 3, Task 3**.

The page allows users to explore available internship opportunities and search through programs by domain or skill.

---

## 📌 About the Project

The **Current Openings** page was created to display available internship programs in a clean, organized, and user-friendly interface.

Instead of manually creating each program card in HTML, the internship information is stored in a separate `programs.json` file and loaded dynamically using JavaScript.

This makes the page easier to maintain and allows new programs to be added without changing the HTML structure.

---

## ✨ Features

- Dynamic internship program cards
- Program data loaded from JSON
- Real-time search functionality
- Search by internship domain
- Search by skill
- Program descriptions
- Program duration
- Skill badges
- Apply Now buttons
- Responsive Bootstrap layout
- Clean and modern interface
- No-results message for unsuccessful searches

---

## 💼 Available Programs

### Web Development
**Duration:** 4 Weeks

**Skills:** HTML, CSS, JavaScript

### Graphic Design
**Duration:** 4 Weeks

**Skills:** Photoshop, Canva, Branding

### AI Tools & Prompt Engineering
**Duration:** 4 Weeks

**Skills:** AI Tools, Prompt Engineering, ChatGPT

### Data Science
**Duration:** 4 Weeks

**Skills:** Python, Data Analysis, Machine Learning

### Video Editing
**Duration:** 4 Weeks

**Skills:** Premiere Pro, CapCut, Video Editing

---

## 🔎 Search & Filtering

The page includes a real-time search feature that allows users to search for programs using:

- Internship domain
- Individual skills

The displayed program cards automatically update as the user types.

For example:

- Searching **Python** displays Data Science
- Searching **Canva** displays Graphic Design
- Searching **Web** displays Web Development

---

## 🛠️ Technologies Used

- **HTML5** – Page structure
- **CSS3** – Custom styling
- **JavaScript** – Dynamic rendering and search functionality
- **JSON** – Internship program data
- **Bootstrap 5** – Responsive layout
- **Font Awesome** – Icons
- **Google Fonts** – Typography

---

## ⚙️ How It Works

### Program Data

All internship information is stored in `programs.json`.

Each program contains:

- Domain
- Description
- Duration
- Skills
- Application link

### Dynamic Loading

JavaScript uses the Fetch API to retrieve the program data from `programs.json`.

### Dynamic Rendering

The retrieved data is used to automatically generate the internship program cards.

### Search

The search field filters the loaded programs by matching the user's input against program domains and skills.

---

## 📂 Project Structure

```text
nextgen-landing-page/
│
├── index.html
├── programs.html
├── style.css
├── script.js
├── script-program.js
├── programs.json
└── assets/

---

## 👩‍💻 Author

### **Muhadisa Batul**

🎓 **BS Cyber Security**  
🏫 **Dawood University of Engineering & Technology (DUET)**

💼 **NextGenLearners Internship Program**  
📌 **Week 3 · Task 3**
---
