# CCU 3150: Integrated Thinking in Computing 


**Project Team: Group 5 (The Masterminds)**
1. Agnes Wairimu - [Insert Reg No.]
2. Lewis Gitau - [Insert Reg No.]
3. Randy Gakuu - [Insert Reg No.]
4. Juliet Wanjiku - [Insert Reg No.]
5. Bildad Shikutwa - [Insert Reg No.]
6. Sharom Atieno - [Insert Reg No.]
7. Rachel Murugi - [Insert Reg No.]
8. Joel Okwaro - [Insert Reg No.]
9. Victor Kimutai - [Insert Reg No.]

---

### a) What was the hospital’s original implicit problem focus before applying systems thinking (2marks)
Before applying systems thinking, the hospital’s original implicit problem focus was purely geographical and operational. They viewed the problem simply as moving their current operating procedures to the new physical location with a basic plan for relocation. They did not initially see the move as a systemic opportunity to redesign the entire hospital system and fundamentally improve the patient experience.

### b) With that in mind then, what problem are you currently trying to solve? State it clearly. (5marks)
Taking a systems thinking approach, we realize the problem goes beyond just creating an app; it is about redesigning the student experience. The problem we are currently trying to solve with **Campus Connect** is the fragmentation of the university digital and social ecosystem. Kenyan university students lack a centralized, high-trust, and verified platform that integrates campus commerce (finding vetted services and trading essentials) with academic synergy (study groups, past papers) and student welfare (emergency SOS, mental health platforms). We are solving the lack of a cohesive, secure community where peer-to-peer interactions, safety, and campus resources are seamlessly interconnected.

### c) Citing examples from the case study, identify components of your system that significantly influence overall system performance. (8marks)
In the Johns Hopkins case study, the team discovered that Environmental Services (cleaning) and Patient Transportation were not just "support" units, but essential system components interacting to affect the total patient experience (e.g., bed turnaround time, infection rates). 

In **Campus Connect**, several components historically viewed as "background" or "support" significantly influence our overall system performance:
1. **The University Email Verification System:** Just as Environmental Services maintains a sanitary hospital environment, our domain-restricted authentication (.ac.ke) maintains the "health" and trust of the platform. If this component fails or is weak, malicious actors infiltrate, trust collapses, and the entire peer-to-peer commerce system degrades. 
2. **The Moderation Framework (Student Moderators):** Similar to Patient Transportation ensuring fluid logistics, our moderation framework ensures secure, fluid interactions. They resolve disputes, manage the "Sema" anonymous portal, and curate the peer-review system, directly impacting the user's perception of safety and reliability.
3. **The Real-Time WebSocket Infrastructure:** This backend component drives the Emergency SOS and live networking. Its latency directly dictates the success of our safety features. If it lags, the Emergency SOS fails in its primary objective, jeopardizing physical safety and undermining the entire platform's reliability.

### d) In your project, with reference to the Johns Hopkins case study, comprehensively identify all stakeholders within your system (not limited to users). Thereafter, differentiate the users from other stakeholders and explain their respective roles and responsibilities within the system. (5marks)
Drawing from the case study, which defined stakeholders as "anyone who could either impact or be impacted by the decisions made in the design teams" (including doctors, janitors, and patients), the stakeholders in Campus Connect are:

**Users (Directly interact with the core platform daily):**
*   **Students (Consumers):** Their role is to utilize the platform for networking, buying textbooks, seeking study groups, and consuming services.
*   **Student Entrepreneurs / Service Providers:** Their role is to offer skills (e.g., laptop repair, photography), trade items, and build their reputation through the peer-review system.

**Other Stakeholders (Impact the system or are impacted by it, but have specialized/indirect roles):**
*   **University Administration & IT:** Provide the `.ac.ke` email infrastructure ensuring students can be verified. They also receive structural feedback from the issue reporting portal.
*   **Campus Security / Student Volunteers:** Responsible for responding to the one-tap Emergency SOS triggers. They ensure the physical safety loop is closed.
*   **Local Businesses / Advertisers:** Offer student deals and discounts. Their role is to provide economic value to verified students while benefiting from a targeted local demographic.
*   **Student Leaders & Moderators:** Moderate content, manage the Election Portal, and maintain community guidelines.
*   **Safaricom (M-Pesa):** Third-party stakeholder facilitating the Lipa na M-Pesa payment gateway for seamless campus trade.
*   **The Development Team (Group 5):** Responsible for the continuous design, implementation, deployment, and scalability of the platform.

### e) In the Johns Hopkins case, innovation emerged when the team realized that Patient Transportation and Environmental Services were not “support units” but essential system drivers. This was a creative leap that changed the redesign direction. What is the most innovative idea your team has proposed so far towards your solution. Explain it (10marks)
Our most innovative idea is the architectural integration of the **"Safety, Wellness & Governance" layer (Emergency SOS & "Sema" Portal)** directly into a social-commerce platform. 

Traditionally, platforms isolate commerce (like student market apps) from campus security (which is relegated to old hotline numbers) and mental health (left to university counseling centers). Our creative leap was realizing that **trust and safety are not just administrative support features—they are the core drivers of campus commerce and social engagement.** 

By incorporating a real-time Emergency SOS feature that leverages WebSockets to alert campus security and nearby verified student volunteers, and pairing it with an anonymous "Sema" portal for mental health and grievance reporting, we fundamentally change the platform's value proposition. A student is exponentially more likely to use our "Side-Hustle Hub" to hire a peer for laptop repair if they know they are operating within a highly managed, secure environment where their physical and mental well-being is structurally supported. We re-envisioned safety from a reactive "support" mechanism into a proactive engagement driver that gives the entire Campus Connect ecosystem its credibility and high-trust status.

---

## 📊 PowerPoint Presentation Outline (For Next Class)

**Slide 1: Title Slide**
*   **Title:** CCU 3150: Integrated Thinking in Computing – Project Presentation
*   **Project Name:** Campus Connect Kenya
*   **Team:** Group 5 (The Masterminds)
*   *(List all 9 team members with Registration Numbers)*

**Slide 2: The Core Problem**
*   **Original Focus vs. Systemic Focus:** Moving beyond just building an app to redesigning the student experience.
*   **The Problem:** Kenyan university students face a highly fragmented digital experience. There is no centralized, high-trust platform that merges academic tools, peer-to-peer commerce, and critical safety features. 
*   **Our Solution:** Campus Connect – A holistic, verified digital ecosystem built for comrades.

**Slide 3: Essential System Components (The Johns Hopkins Parallel)**
*   *Case Study insight:* "Support units" drive the system.
*   **Auth System (.ac.ke Verification):** Not just a login, but the gatekeeper of ecosystem health and trust.
*   **Student Moderators:** The "connective tissue" that ensures interactions, reviews, and commerce remain safe and viable.
*   **WebSocket Infrastructure:** The invisible driver making real-time Emergency SOS and live networking possible. 

**Slide 4: Mapping Our Stakeholders**
*   **Core Users:** 
    *   *Students:* Consuming services, academics, and socializing.
    *   *Student Entrepreneurs:* Providing services, exchanging goods.
*   **System Stakeholders:**
    *   *Campus Security:* Responding to SOS alerts.
    *   *University Admin/IT:* Email verification and grievance handling.
    *   *Safaricom (M-Pesa):* Powering the campus economy.
    *   *Local Businesses:* Providing student deals.

**Slide 5: Our Creative Leap & Innovation**
*   **The Idea:** Integrating the "Safety & Wellness" layer directly into a social commerce model.
*   **The "Sema" Portal & Emergency SOS:** Transforming safety from an afterthought/physical hotline into a core digital engagement driver.
*   **Why it Matters:** A high-trust baseline is required for peer-to-peer commerce to thrive. Safety is not a support unit; it is the foundation of the Campus Connect platform.

**Slide 6: Conclusion & Next Steps**
*   **Summary:** By treating the campus as an interconnected system rather than isolated modules, Campus Connect provides a superior, integrated student experience.
*   **Q&A**
