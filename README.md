<div align="center">
  <img src="https://img.shields.io/badge/CAMPUS_CONNECT-KENYA_PDR-006633?style=for-the-badge&logo=university&logoColor=white" alt="Campus Connect Header" />
  <h1>🚀 Campus Connect: Preliminary Design Review (PDR)</h1>
  <p><i>A Centralized Digital Ecosystem for Kenyan University Students</i></p>
</div>

---

## 📖 1. Project Mission & Value Proposition
[cite_start]Campus Connect is engineered to facilitate communication, commerce, and campus life integration across Kenyan institutions[cite: 3]. [cite_start]By centralizing essential services—from academic resources to safety tools—the platform minimizes time-to-action for the modern student ("Comrade")[cite: 3, 35].

---

## 🏛 2. System Architecture & Tech Stack
The platform utilizes a **Modular Monolith** architecture designed for low-latency performance in mobile-first environments.

* **Frontend:** React.js / Next.js (Progressive Web App)
* **Backend:** Node.js & Express
* **Database:** MongoDB Atlas (NoSQL for flexible listing schemas)
* [cite_start]**Payments:** M-Pesa Daraja API Integration [cite: 52]
* [cite_start]**Safety:** WebSocket-based Emergency SOS system [cite: 50]

---

## 📋 3. High-Impact Feature Matrix
The system is divided into five critical service verticals designed to address specific student needs.

### **A. The "Comrade Market" & Commerce**
<table>
  <tr>
    <th>Feature</th>
    <th>Description</th>
    <th>Implementation</th>
  </tr>
  <tr>
    <td><b>Book Swap/Resale</b></td>
    <td>A dedicated marketplace for used textbooks and revision materials[cite: 7, 37].</td>
    <td>CRUD operations with image hosting.</td>
  </tr>
  <tr>
    <td><b>Hostel Finder</b></td>
    <td>Peer-reviewed directory of private hostels with pricing and security ratings[cite: 19, 38].</td>
    <td>Rating system & Map integration.</td>
  </tr>
  <tr>
    <td><b>Side-Hustle Hub</b></td>
    <td>Directory for student service businesses like coding, laundry, and photography[cite: 39].</td>
    <td>Service provider profiles.</td>
  </tr>
    <tr>
    <td><b>Dining Guide</b></td>
    <td>Real-time accessibility info for Mess, STC, and dining areas[cite: 40].</td>
    <td>Location-based services.</td>
  </tr>
</table>

### **B. Academic & Career Synergy**
* [cite_start]**Resource Library:** A cloud-based folder system organized by course code for sharing past papers and notes[cite: 7, 42].
* [cite_start]**Virtual Tutoring Marketplace:** A platform where senior students offer paid tutoring sessions[cite: 8, 45, 47].
* [cite_start]**Internship/Job Board:** Scraped and university-specific opportunities for Kenyan undergrads[cite: 12, 44].
* [cite_start]**Study Group Finder:** Matching students by course, year, and academic needs[cite: 6].
* [cite_start]**Inter-University Skill Matching:** Professional project showcasing and collaboration tools[cite: 9, 13, 43].

### **C. Safety, Wellness & Governance**
* [cite_start]**Emergency SOS:** A high-priority button alerting campus security or student volunteers in emergencies[cite: 32, 50].
* [cite_start]**Anonymous "Sema" Portal:** A secure space for mental health discussions and reporting grievances anonymously[cite: 49].
* [cite_start]**Election & Polling:** Digital platforms for student leadership voting and Union communication[cite: 23, 26].
* [cite_start]**Issue Reporting:** A system to track facility problems and provide administrative feedback[cite: 24, 25].

### **D. Campus Life & Engagement**
* [cite_start]**Event Ticketing:** Integrated M-Pesa ticketing for sports, plays, and "inter-uni" bashes[cite: 17, 51, 52].
* [cite_start]**Lost & Found:** A portal featuring a photo verification system for recovered items[cite: 18].
* [cite_start]**Student Deals:** Exclusive local business discounts for verified students[cite: 21].

---

## 🛡 4. Security, Trust & Verification
To ensure a safe environment, the following protocols are mandatory:
* [cite_start]**Institutional Verification:** Mandatory university email verification for all account creations[cite: 29].
* [cite_start]**Granular Privacy:** Student-controlled data privacy settings for personal information[cite: 33].
* [cite_start]**Community Moderation:** Student moderators assigned from each respective institution[cite: 31].
* [cite_start]**Rating Integrity:** Comprehensive rating systems for all business advertisers and service providers[cite: 30].

---

## 🚀 5. Getting Started

### **Installation**
1. **Clone the Source:**
   ```bash
   git clone [https://github.com/vertigo0628/CampusConnect.git](https://github.com/vertigo0628/CampusConnect.git)
   cd CampusConnect



   
