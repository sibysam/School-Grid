# School Grid: Smart School Ranking and Management System

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-Data_Viz-FF6384?logo=chartdotjs&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Firestore_%26_RBAC-FFCA28?logo=firebase&logoColor=black)

**School Grid** is a three-tier, data-driven institutional evaluation, ranking, and management platform built to bring transparency and objective multi-indicator analytics to school selection. Published in the *International Journal on Emerging Research Areas (IJERA)* and presented at *NACORE 2025*.

---

## 📊 Key Engineering Highlights

- **6-Indicator Weighted Ranking Engine:** Computes standardized institutional scores across **Academic Performance (40%)**, **Infrastructure**, **Faculty Quality**, **Extracurricular Activities**, **Student-Teacher Ratio**, and **Sustainability Initiatives**.
- **Role-Based Access Control (RBAC):** Secured via **Firebase Authentication** and **Cloud Firestore** security rules across **4 distinct user roles** (Public Visitors/Parents, School Administrators, Evaluators, and Super Admins).
- **Sub-200ms Query Optimization:** Structured Firestore NoSQL composite indexing and client-side caching to execute real-time multi-filter searches and side-by-side school comparisons in **under 200ms**.
- **Interactive Analytics Dashboards:** Designed responsive, accessible UI workflows and radar/bar chart comparison views using **Tailwind CSS** and **Chart.js**, reducing administrative verification turnaround times to **5 minutes per submission**.

---

## 🛠️ Tech Stack

- **Frontend UI & Styling:** HTML5, CSS3, Tailwind CSS, Vanilla JavaScript (ES6+)
- **Data Visualization:** Chart.js (Interactive institutional metric comparisons)
- **Backend & Database:** Google Firebase (Cloud Firestore NoSQL Database, Firebase Authentication, Role-Based Access Control)

---

## 🚀 Running Locally

    # 1. Clone the repository
    git clone https://github.com/sibysam/School-Grid.git
    cd School-Grid

    # 2. Configure Firebase credentials
    # Add your Firebase project configuration object inside the config script

    # 3. Launch via Live Server or Python HTTP Server
    python -m http.server 8000
    # Open http://localhost:8000 in your browser

---

## 📄 Peer-Reviewed Publications

- **Journal Publication:** *"School Grid: Smart School Ranking and Management System"*, published in the **International Journal on Emerging Research Areas (IJERA)**, Vol. 05, Issue 01 (ISSN: 2230-9993).
- **Conference Presentation:** Presented at **NACORE 2025** (National Conference on Research in Emerging Areas, organized in association with the ACM Kottayam Professional Chapter), Amal Jyothi College of Engineering (24–25 March 2025).

---

## 👥 Authors & Contributors

- **Nebin Siby Sam** — Co-Developer & UI/UX Lead ([LinkedIn](https://www.linkedin.com/in/nebinsibysam) |
