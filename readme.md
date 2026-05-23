
# 🌲 Soma Wellness Sanctuary

### *The Digital Mentor: Where Ancient Lineage Meets Modern Biological Science*

**Soma** is a high-fidelity, adaptive wellness platform designed for **C.J. Barletta**. It transcends traditional "on-demand" yoga sites by acting as a biological mentor, utilizing user-state logic to prescribe rituals, nutritional guidance, and educational content tailored to the user's current nervous system state and life stage.

---

## 💎 Core Philosophy

* **Biophilic Design:** Integrating pine and lotus motifs to trigger the "Biophilia Effect," lowering heart rate and stress through visual cues.
* **Chromotherapy:** Dynamic UI color shifting based on Ayurvedic Dosha states and Chakra frequencies.
* **Non-Linear Growth:** Replacing high-stress gamification with a logarithmic "Eternal Bloom" progression system.

---

## 🚀 Technical Stack

* **Frontend:** React.js / Next.js (Tailwind CSS, Framer Motion)
* **Backend:** FastAPI (Python)
* **Video Infrastructure:** AWS S3 + CloudFront + HLS (Adaptive Bitrate Streaming)
* **Payments & Security:** Stripe API (Subscription Lifecycle) + HMAC Webhooks
* **Content Gating:** AWS CloudFront Signed URLs (Time-limited access)

---

## 🛠️ Key Features

### 1. The "State-of-Being" Dashboard

A dynamic interface that assesses the user's energy (Vayu) upon login.

* **Logic:** Users select from *Scattered*, *Lethargic*, or *Balanced*.
* **Effect:** The site's global CSS variables (, ) shift instantly, and the "Soma Mentor" prescribes specific Yoga flows and Ayurvedic meals to restore homeostasis.

### 2. The Wisdom Repository (Learning Page)

A deep-dive educational portal designed to establish authority and lineage.

* **Interactive Timeline:** A scroll-triggered history of Yoga from 3000 BCE to modern science.
* **Scientific Glossary:** Peer-reviewed definitions linking Sanskrit terms to physiology (e.g., *Pranayama* → *Vagus Nerve Stimulation*).
* **Chakra Sanctum:** A color-coded module mapping energy centers to endocrine glands and nerve plexuses.

### 3. The "Sacred Window" Motherhood Portal

A specialized environment for Prenatal and Postpartum care.

* **Hormonal Compass:** Visualizations and tools to navigate the 90% drop in Estrogen/Progesterone postpartum.
* **Nursing Mode:** A low-blue-light "Dark Mode" UI designed for 3:00 AM nursing sessions.
* **The First 40 Days Quiz:** A clinical tracker for mood, digestion, and physical recovery.

### 4. The Eternal Bloom Engine

A custom progression algorithm that mimics natural growth patterns.

* **Formula:** 

* **Visual:** An animated SVG Lotus that blooms as the user accumulates "Prana" (practice minutes).

---

## 🔐 Security & Asset Protection

To protect C.J. Barletta's intellectual property, the platform utilizes:

* **Signed URLs:** Video links expire after 2 hours, preventing link sharing.
* **HLS Encryption:** Segmented video files to prevent direct downloads.
* **Stripe Webhooks:** Immediate access revocation upon subscription cancellation.

---

## 🌲 Branding & Identity

* **Logo:** A minimalist hybrid of a Pine Tree and a Lotus Blossom.
* **Typography:** *Cormorant Garamond* (Headings) / *Montserrat* (Body).
* **Ownership:** © 2025 Soma Wellness • C.J. Barletta.

---

## 📁 Repository Structure

```text
/src
  /components
    /Rituals       # State-of-Being Dashboard & Logic
    /Motherhood    # Postpartum Quiz & Nursing UI
    /Wisdom        # Timeline, Glossary & Chakra components
    /Sanctuary     # HLS Video Player & Signed URL logic
  /hooks           # useSomaAura (Global Theme Switcher)
  /styles          # Global CSS Variables & Chakra Themes
/server
  /api             # FastAPI Endpoints
  /stripe          # Webhook handlers & Subscription logic

```

---

## 📄 Case Study Quote

> *"The goal was to build a sanctuary that breathes with the user. By merging AWS-grade security with Ayurvedic color theory, we created a platform that doesn't just host content—it guides the soul through the science of life."* — **Lead Architect: D.C. Barletta**
