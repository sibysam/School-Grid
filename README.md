```markdown
# School Grid: Smart School Ranking and Management System

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Firestore_%26_Auth-FFCA28?logo=firebase&logoColor=black)

## 📌 Project Overview
**School Grid** is a three-tier, data-driven institutional evaluation, ranking, and management platform designed to bring transparency to school comparisons. It replaces subjective reviews with a standardized **6-indicator weighted analytical model**.

Peer-reviewed architectural research for this platform was published in the **International Journal on Emerging Research Areas (IJERA), Vol. 05, Issue 01 (ISSN: 2230-9993)** and presented at **NACORE 2025**.

---

## ⭐ Key Engineering Features

* **6-Indicator Weighted Ranking Engine:** Evaluates institutions across Academic Performance (40%), Infrastructure, Faculty Quality, Extracurricular Activities, Student-Teacher Ratio, and Sustainability.
* **Role-Based Access Control (RBAC):** Secured via **Firebase Authentication** and **Cloud Firestore** security rules across **4 distinct user roles** (Public Users, Students/Parents, School Administrators, and System Admins).
* **Sub-200ms Real-Time Search & Filtering:** Optimized Firestore NoSQL composite indexing and client-side state caching to execute multi-parameter search and comparison queries in **under 200ms**.
* **Interactive Analytics Dashboards:** Designed responsive UI/UX workflows and real-time multi-school comparison charts using **Tailwind CSS** and **Chart.js**.

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), Chart.js
* **Backend & Database:** Google Firebase (Cloud Firestore NoSQL Database, Firebase Authentication, RBAC)
* **Design & Prototyping:** Figma

---

## 🚀 Setup & Installation

```bash
# 1. Clone the repository
git clone [https://github.com/sibysam/School-Grid.git](https://github.com/sibysam/School-Grid.git)
cd School-Grid

# 2. Configure your Firebase credentials in the config file
# 3. Open index.html via Live Server or deploy via Firebase Hosting
