# AI Campus Assistant — Enhanced API + UI Build

This build follows the supplied project report and provides a polished responsive frontend plus Express APIs for the campus modules.

## Run
```bash
cd backend
npm install
npm start
```
Open http://localhost:5000

## API connections
Copy `.env.example` to `.env`.

### AI provider
The chatbot and AI features support an OpenAI-compatible chat-completions endpoint:
```env
AI_API_URL=https://api.openai.com/v1/chat/completions
AI_API_KEY=your_key
AI_MODEL=gpt-4o-mini
```
If these are blank, the app automatically uses the built-in demo knowledge/logic and remains runnable.

### YouTube Data API
For live educational video search:
```env
YOUTUBE_API_KEY=your_youtube_data_api_v3_key
```
Without it, the app searches saved video records instead.

### College Map
Pre-centred on Ajay Kumar Garg Engineering College, Ghaziabad. On first open it imports the real campus buildings and the campus boundary from OpenStreetMap (only places inside the boundary are kept). Use **Directions** for in-app walking/cycling/driving routes. Use **Set up campus** to change college or re-import. Data is stored in `backend/data/db.json`.

### Skill Gap & Career
Full roadmaps for 9 B.Tech branches (CSE, IT, AI/ML/DS, ECE, EE, ME, Civil, Chemical, Biotech): 4-year plan, career tracks with skill-gap check, exams and higher studies, projects and certificates. Progress is saved per student. Each branch also has a **YouTube Playlists** tab with topic-wise preparation resources (popular channels, one-click playlist search, and live top playlists through the YouTube API). Recommended playlists are in `CAREER_VERIFIED` (`frontend/js/resources.js`); students can add and upvote playlists per topic (stored in `backend/data/db.json`). Content lives in `frontend/js/careers.js` and `frontend/js/resources.js`.

### AI features
Custom Role Roadmap (enter or upload your skills, get a skill gap and a week-by-week plan with playlists, videos, daily practice and saved progress) and AI Doubt Solver live inside **Skill Gap & Career** as tabs. Set `AI_API_URL`, `AI_API_KEY` and `AI_MODEL` in `backend/.env` (any OpenAI-compatible provider, or Anthropic Claude: see `.env.example`). Check `http://localhost:5000/api/health` shows `ai: true`.

### Database
The current zero-setup store is `backend/data/db.json`. The architecture retains the MongoDB setting for a future database adapter.

## Included UI/API areas
Authentication, dashboard, AI chatbot, schedule, college map, exam resources, YouTube search, quiz analytics, placements, resume PDF/DOCX analysis, skill/career roadmap, doubt solver, mock interview, complaints, lost & found, events, canteen, transport, study groups, progress/attendance and emergency.

## AKTU PYQ Hub
The Previous Year Papers module now includes an AKTU B.Tech catalogue explorer for 2021–2025, semesters 1–8, CSE and CS-allied branches, Mechanical, Electrical, ECE and common/all-branch subjects. It links to public AKTU paper archives and clearly distinguishes archive/third-party solutions from verified official answer keys. It also includes AI 5-year preparation analysis and AI question explanations.

The catalogue is an index/locator, not a claim that every subject-year combination has a paper. Availability varies by subject and exam session, so users should verify the exact year, subject and session at the linked source.


## Smart Schedule (enhanced)
- Imports the 15 sections in the supplied AKGEC 2026–27 ODD-semester master timetable into `frontend/js/timetable-data.js`.
- Switch between section timetables and weekday views; class, lab, lunch and mentorship/break entries are visually distinguished.
- Create personal study goals with a deadline, effort estimate and priority. The planner creates evening study sessions before the deadline and avoids already-planned sessions.
- Tasks are saved through the existing authenticated `/api/schedules` endpoint and can be marked complete or deleted.
- The selected class section is remembered in the browser. If the initial section guess is not correct, select the exact section (for example `V IT2` or `III CSIT1`) in the timetable dropdown.
- Verify timetable changes with the department; the uploaded master timetable is the source of the imported schedule.


## Database-connected AI Campus Assistant

The AI Chatbot now retrieves relevant records from the local app database for notices, events, placements, canteen, transport, study groups, PYQs, learning resources and the signed-in user's study tasks/progress. It also reads the imported 2026–27 ODD-semester timetable for the selected section (or a section named in the question). Recent conversation turns are included for follow-up questions.

For advanced natural-language responses and subject tutoring, configure `AI_API_KEY`, `AI_API_URL`, and optionally `AI_MODEL` in `backend/.env` using the same OpenAI-compatible or Anthropic configuration documented in `.env.example`. Without an AI provider, timetable/database lookups and helpful local fallback answers still work; generative subject explanations require an AI provider. The assistant does not invent campus facts when a record is missing.


## Quiz & Performance (AKTU-aligned)

The Quiz & Performance module now reads available class sections and subjects from `backend/data/timetable.json`, offers subject-wise MCQ quizzes, lets students choose difficulty and question count, explains answers after submission, and saves per-user attempt history and subject-wise averages/best scores.

- Start with a subject shown for your selected timetable section; other supported B.Tech subjects are also available.
- Original practice questions are labelled as AKTU-aligned practice, not official AKTU questions or verified PYQs.
- Offline curated questions are included for core subjects such as Data Structures, DBMS, Operating Systems, Programming for Problem Solving, OOP with Java, Computer Networks, Discrete Mathematics and Engineering Mathematics.
- To generate questions for additional subjects, configure `AI_API_URL`, `AI_API_KEY`, and optionally `AI_MODEL` in `backend/.env`. Review generated questions before using them for formal assessment.
- Quiz history is stored in the local JSON database (`backend/data/db.json`) per authenticated user. Back up this file before moving or resetting the project.

The module was syntax-checked with Node.js. Run the app locally and test it with a student login to validate the full UI/API flow in your environment.


## AKTU First-Year Previous Year Papers (PYQ)
The Previous Year Papers section is connected to the backend and local JSON database.

- The supplied first-year Semester I PDFs are stored in `backend/data/pyq-papers/` and their metadata, extracted question lines, searchable text, page counts and file hashes are recorded in `backend/data/db.json` under `pyq`.
- Included papers: 14 PDFs across 2022–23, 2023–24, 2024–25 and 2025–26. Subjects include Fundamentals of Electrical Engineering, Programming for Problem Solving, Fundamentals of Electronics Engineering, Engineering Physics, Engineering Chemistry, Engineering Mathematics-I, Environment and Ecology, and Soft Skills.
- Authenticated API: `GET /api/pyq` supports `year`, `semester`, `subject`, `branch` and `q` filters. `GET /api/pyq/analysis/topics` provides descriptive topic-frequency and matching-question-line analysis.
- Paper details are available at `GET /api/pyq/:id`; PDF files can be opened/downloaded at `GET /api/pyq/:id/download`.
- No answer-key PDFs were supplied, so all records correctly indicate that an answer key is unavailable. The 2023–24 Environment and Ecology PDF is included, but its text could not be extracted automatically; it remains available as a PDF.
- The repeated-topic report is based on extracted PDF text, not a prediction of future exam questions. Scanned pages and extraction artefacts can affect search and topic counts.

Run the backend from the project folder:
```bash
cd backend
npm install
npm start
```
Sign in to CAMP-X, open **Previous Year Papers**, then filter by subject/year or search question text. Keep `backend/data/db.json` and `backend/data/pyq-papers/` together when backing up or deploying; the database stores metadata and points to the bundled PDFs.


### Latest PYQ update (24 Oct 2026)
The PYQ library now contains **26 unique first-year papers** across Semester I and Semester II. The new upload batch added 12 unique papers; one repeated Electronics Engineering PDF was detected by SHA-256 and was not imported twice. Uploaded papers are stored under `backend/data/pyq-papers/`, with searchable extracted text and metadata in `backend/data/db.json`. No answer keys were included in this batch.


## Subject-wise PYQ archives
The bundled library contains 323 unique PYQ PDFs across first-year and subject-wise Semester III–IV courses. The import includes searchable extracted text when available, SHA-256 integrity hashes, branch/semester metadata, and working `/api/pyq/:id/download` links. Use **All branches** to see the entire library; select a branch, semester, dynamically populated subject code, exam year, or text query to narrow results. Answer keys are not represented as available unless separately supplied.


## Latest archive verification
On 25 October 2026, the re-uploaded BAS401, BAS403, BCC401 and BCC402 archives were hash-compared with the integrated PDFs. They contain no new B.Tech PDF content compared with the already integrated source archives, so duplicate records were not added. See `PYQ-IMPORT-REPORT.md`.

### Subject-wise PYQ historical analysis

In **Previous Year Papers**, select a subject code and choose **Subject repeated questions** or **Analyse selected subject · all years**. The analysis deliberately includes all stored years for that subject, even if the paper list is currently filtered to one exam year. It shows recurring topic phrases, exact repeated question lines, similar-wording candidates, year coverage, and text-extraction limitations. It works with deterministic frequency analysis without an AI key; configure `AI_API_KEY` and `AI_API_URL` in `backend/.env` to enable the optional AI interpretation and revision plan. Results are descriptive historical analysis, not official predictions.

### PYQ-driven Quiz & Performance update

The Quiz & Performance module now has branch and subject selectors populated from the bundled `pyq` database, in addition to the timetable section selector. For the selected subject and branch, the backend gathers indexed question lines across all stored years, computes repeated-question candidates and topic-frequency signals, and passes that evidence to the configured AI provider to generate original answer-keyed MCQs. The quiz labels these as PYQ-grounded practice, not verbatim official questions or verified official answer keys.

After submission, performance history stores branch, subject code, score, missed question topics, and source-year metadata when available. The performance view summarizes average/latest/best scores by branch and subject and aggregates topics most often missed, so students can focus revision. Scanned PDFs or papers without extracted question text may not influence the quiz generation. If no AI provider is configured, the system does not invent answer keys for extracted short-answer questions; it uses an available curated bank or explains that an AI provider is needed for a PYQ-derived MCQ set.

For AI-generated quizzes, configure `AI_API_URL`, `AI_API_KEY`, and `AI_MODEL` in `backend/.env`. The downloadable `.env` is intentionally sanitized and contains no live credentials; copy your own provider credentials from your private configuration. Never share a `.env` file containing API keys.

## Placement Portal refresh

The Placement Portal now includes a responsive company directory with TCS, Wipro, HCLTech, Accenture, Infosys, Cognizant, Capgemini, Tech Mahindra, IBM, Deloitte, Amazon, Microsoft, Larsen & Toubro, Siemens, Tata Motors and Bosch. Company cards include role examples, preparation skills, a branch relevance filter, search, and links to the official career portals. These are company directory links, not claims that the companies currently have active openings.

The portal also displays placement-drive records stored in the backend `placements` collection and includes a form to add a verified campus drive. Confirm dates and eligibility with the campus placement cell before applying. The preparation panel links to CAMP-X's existing Resume Analysis, Skill Gap & Career, and Mock Interview modules.

Run locally from the project folder with `cd backend`, `npm install`, and `npm start`. Configure private API credentials in a local `backend/.env` based on `.env.example`; do not commit or share the `.env` file.


## Smart Schedule — complete official timetable

The Smart Schedule timetable data has been regenerated directly from the uploaded **Master time table 2026-27 final ODD sem (7).xlsx** workbook. It includes all 15 source sections (III, V and VII semesters across IT/CSIT groups), Monday–Friday entries, practical/lab blocks, mentorship/break and lunch periods, and merged multi-period classes with their full time ranges. The timetable page now has a **Week** view to review the full Monday–Friday schedule, as well as the individual day tabs. Section selection remains saved in the browser.

The schedule dataset is shipped in `frontend/js/timetable-data.js` and loaded by `frontend/index.html`; no separate database migration is needed for the timetable. The personal study planner continues to use the existing authenticated `/api/schedules` backend endpoints.

## Exam Preparation: AKTU Notes & Syllabus Hub

The Exam Preparation page now provides branch/semester-guided links to the official AKTU syllabus portal, year-wise Notes Gallery notes and syllabus guides, the existing CAMP-X PYQ library, and backend-saved materials. External study-resource pages are clearly labelled as independent third-party resources; verify syllabus version and subject code against the official AKTU page for your admission batch. Saved resources are loaded through the existing `/api/materials` endpoint, while video recommendations continue to use `/api/videos` and `/api/youtube/search`.

## Latest PYQ import: 13 additional CS/allied subjects (27 Oct 2026)

The newest user-provided subject archives have been imported into the same `pyq` database and PDF download route. The library now contains **558 unique PYQ records**: 323 existing records plus 235 newly imported records. The 235 new PDFs cover 13 subject codes, with papers dated **2016–2026**. One duplicate PDF was skipped using SHA-256 comparison.

New subject archives integrated:

- BCAI061 — Cyber Forensic Analytics
- BCAI501 — Artificial Intelligence
- BCAI601 — Machine Learning Techniques
- BCAM051 — Cloud Computing
- BCS052 — Data Analytics
- BCS054 — Object Oriented System Design with C
- BCS055 — Machine Learning Techniques
- BCS061 — Big Data
- BCS063 — Blockchain Architecture Design
- BCS064 — Data Compression
- BCS501 — Database Management System
- BCS502 — Web Technology
- BCS503 — Design and Analysis of Algorithm

The import includes PDF metadata, subject codes, semester/year-of-study mapping, SHA-256 hashes, and extracted searchable text when available. Some PDFs appear to be scanned or have no usable text layer; those files remain available to open/download but may not contribute to topic-frequency analysis. Imported papers are not labelled as having verified answer keys because none were supplied in the uploaded archives.

Quiz & Performance has been updated to expose per-subject paper counts and years in the subject selector. With an AI provider configured, generated MCQs use the selected subject's historical question lines and topic/repetition evidence. Offline curated practice banks were added for the newly imported subjects so students can still practise without an AI key; those offline questions are clearly described as curated practice, not as questions or answer keys extracted from the uploaded PDFs. Quiz scores and missed-topic trends continue to save through the existing backend.


## PYQ answer contributions and exam-mode quizzes

- PYQ paper details now support community-submitted question answers, worked explanations, and source references. New entries are stored as `pending_review`; they are **not** presented as official or verified answers until an account with `role: "admin"` approves them.
- Admin reviewers can verify or reject a contribution from the paper-details panel. The API also exposes `GET /api/answer-keys?status=verified|pending_review|all` for authenticated users.
- Quiz & Performance includes a timed exam mode (90 seconds per question) as well as untimed practice mode. Timed attempts auto-submit when time expires; unanswered questions count as incorrect.
- Quiz results continue to save per-user scores, subject performance, and weak-topic trends. AI-generated quiz explanations are practice guidance, not official AKTU answer keys.
- Only mark a key verified after checking a reliable reference. Existing PYQ PDFs without answer-key files remain explicitly labelled as having no supplied official key.

### Cross-year repeated-question and topic recommendations (latest update)

The subject analysis now lists only exact repeated questions and similar question patterns that occur across at least two distinct exam years. Same-year duplicate sessions do not by themselves qualify a question as repeated. Topic suggestions use multi-word topic phrases from extracted question text, count distinct years, suppress generic exam-instruction wording, and prioritize topics recurring across more years. The PYQ page keeps the output concise: repeated questions, similar question patterns, and topics to prioritize.

Quiz & Performance now has **Suggest repeated topics** before generating a quiz. It retrieves the selected subject's cross-year analysis and shows topic recommendations and repeated question evidence. Quiz generation receives the same year-aware topic signals and, when AI is configured, uses them to emphasize recurring topics in original practice MCQs. This remains descriptive historical evidence, not a prediction or guarantee. Scanned/unindexed papers and OCR errors can affect results.


## Authentication and login improvements

The sign-in/register screen has been refreshed with a responsive two-panel layout, accessible form labels, show/hide password control, password-strength feedback, password confirmation, branch/year selection, inline errors, loading state, and client-side input validation. The backend normalizes email addresses, validates registration fields, hashes new passwords with bcrypt cost 12, returns generic sign-in errors, and throttles repeated failed sign-in attempts in memory (5 attempts per email/IP within a 15-minute window).

**Deployment security:** Set a long, random `JWT_SECRET` in `backend/.env` before deploying or sharing the app beyond local development. The built-in development fallback is not suitable for production. The sign-in throttle is process-local and resets when the server restarts; production deployments should use a shared rate limiter and HTTPS. Password reset/email verification are not enabled because this project has no configured email delivery flow; do not treat the help text as a password-reset feature.
