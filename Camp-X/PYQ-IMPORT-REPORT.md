# CAMP-X First-Year PYQ Import Report

## Import result
- Imported 14 first-year B.Tech Semester I question-paper PDFs.
- Academic sessions: 2022–23, 2023–24, 2024–25, 2025–26.
- PDF storage: `backend/data/pyq-papers/`.
- Metadata and extracted searchable text: `backend/data/db.json` → `pyq`.
- Manifest: `backend/data/pyq-manifest.json`.
- All existing non-PYQ database keys and data were preserved.
- No answer-key files were provided, so the app does not claim any answer key is available.
- The 2023–24 Environment and Ecology PDF is stored, but its text could not be extracted automatically.

## Backend endpoints
- `GET /api/pyq?year=2024-25&subject=BCS101&semester=1&q=syntax` — authenticated filtered list/search.
- `GET /api/pyq/:id` — authenticated paper metadata and indexed question lines.
- `GET /api/pyq/:id/download` — open/download the bundled PDF.
- `GET /api/pyq/analysis/topics` — descriptive topic frequency and repeated question-line analysis.
- `GET /api/health` — reports the count of imported PYQ records.

## Run
```bash
cd backend
npm install
npm start
```
Then sign in to CAMP-X and open **Previous Year Papers**. Keep `backend/data/db.json` and the `backend/data/pyq-papers/` folder together; database records reference the bundled files by filename.


## Additional upload batch — 24 October 2026

Imported 12 new unique user-provided PDFs into `backend/data/pyq-papers/` and `backend/data/db.json`. The PYQ database now contains 26 unique records covering first-year Semester I and Semester II. One duplicate copy of BEC201 Fundamentals of Electronics Engineering (2024–25) was skipped based on matching SHA-256. All imported files have metadata, integrity hashes, extracted text where available, and searchable question lines. No answer-key PDFs were supplied in this batch.

- **pyq-015** — BAS204 Environment and Ecology, 2022-23, Semester 2 (3 pages; 33 indexed question lines).
- **pyq-016** — BAS205 Soft Skills, 2022-23, Semester 2 (2 pages; 28 indexed question lines).
- **pyq-017** — BAS201 Engineering Physics, 2023-24, Semester 2 (3 pages; 19 indexed question lines).
- **pyq-018** — BAS202 Engineering Chemistry, 2023-24, Semester 2 (4 pages; 30 indexed question lines).
- **pyq-019** — BEE201 Fundamentals of Electrical Engineering, 2023-24, Semester 2 (3 pages; 34 indexed question lines).
- **pyq-020** — BAS202 Engineering Chemistry, 2024-25, Semester 2 (4 pages; 33 indexed question lines).
- **pyq-021** — BAS201 Engineering Physics, 2024-25, Semester 2 (3 pages; 32 indexed question lines).
- **pyq-022** — BEC201 Fundamentals of Electronics Engineering, 2024-25, Semester 2 (5 pages; 31 indexed question lines).
- **pyq-023** — BCS201 Programming for Problem Solving, 2024-25, Semester 2 (2 pages; 31 indexed question lines).
- **pyq-024** — BAS205 Soft Skills, 2024-25, Semester 2 (4 pages; 41 indexed question lines).
- **pyq-025** — BEC101 Fundamentals of Electronics Engineering, 2022-23, Semester 1 (3 pages; 32 indexed question lines).
- **pyq-026** — BCS101 Programming for Problem Solving, 2022-23, Semester 1 (3 pages; 32 indexed question lines).


## Additional subject archive import — 25 October 2026

Imported 297 unique PDFs from 11 user-provided subject ZIP archives. The combined PYQ database now contains 323 unique papers. SHA-256 duplicates were skipped; 0 duplicate PDF copies were excluded. The import preserves each source archive/member name, subject code, subject, exam year/session, semester, branch filter metadata, PDF download route, page count, extracted searchable text/question lines where available, and file-integrity hash. No answer-key PDFs were supplied in these archives, so answer keys remain marked unavailable.

- Semester III: BEC301 Electronic Devices, BEC302 Digital System Design, BEC303 Network Analysis and Synthesis.
- Semester IV: BAS401 Technical Communication, BAS403 Mathematics-IV (Maths for Computer Branches), BCC401 Cyber Security, BCC402 Python Programming, BEC401 Communication Engineering, BEC402 Analog Circuits, BEC403 Signals and Systems, BVE401 Universal Human Values and Professional Ethics.
- PDFs inside `bonus-other-course/` were excluded to avoid assigning papers from a different course to the selected subject. Subject-matched historical papers in `bonus-old-papers/` were included and labeled as outside 2016–2026 where applicable.
- The frontend now defaults to **All branches**, dynamically fills exam-year and subject-code options from the database, and supports searching extracted text across the imported archives.

### Imported record count by course
- **BAS401** — 12 new PDFs.
- **BAS403** — 24 new PDFs.
- **BCC401** — 29 new PDFs.
- **BCC402** — 16 new PDFs.
- **BEC301** — 35 new PDFs.
- **BEC302** — 22 new PDFs.
- **BEC303** — 49 new PDFs.
- **BEC401** — 26 new PDFs.
- **BEC402** — 20 new PDFs.
- **BEC403** — 42 new PDFs.
- **BVE401** — 22 new PDFs.


## Re-upload verification — 25 October 2026

The following four re-uploaded subject archives were compared against the earlier source archives and the bundled project PDFs by SHA-256 content hash:
- BAS401 — Technical Communication
- BAS403 — Mathematics-IV (Maths for Computer Branches)
- BCC401 — Cyber Security (Common Course)
- BCC402 — Python Programming (Common Course)

All subject PDFs in these re-uploads were already present in the project by content hash. No additional duplicate database records were created. Counts remain 323 unique PYQ records and 323 bundled PDF files. The BCC401 archive contains one `bonus-other-course/2019-mba.pdf` item, which was excluded because it is an unrelated MBA paper rather than the requested B.Tech Cyber Security course.

This check confirms archive content coverage and file integrity; it does not constitute a live browser/backend integration test.

## Subject-wise historical PYQ analysis upgrade — 25 October 2026

Added `GET /api/pyq/analysis/subject?subjectCode=BAS401` (authenticated). The endpoint analyses every stored paper for the selected subject across all available years; it intentionally does not inherit the UI's exam-year or semester filter. It returns:

- Subject code/name, total papers, years represented, extracted question-line count, and count of scanned/unindexed papers.
- Repeated topics built from one-, two-, and three-word phrases in the subject's extracted question lines, with paper counts and year coverage.
- Exact repeated question lines grouped by normalized text and linked to the papers/years where they occur.
- Similar-question candidates estimated with token Jaccard similarity, explicitly labeled as similar wording rather than exact repeats.
- Optional AI-written evidence-based interpretation and revision plan when `AI_API_KEY` and `AI_API_URL` are configured. The generated commentary receives only the selected subject's measured frequencies and repeats; it is instructed not to invent years, counts, marks, or exam predictions.

The PYQ interface's **Subject repeated questions** and **Analyse selected subject · all years** actions now require a selected subject and render the subject-specific results. Deterministic counts work without an AI provider. Analysis quality depends on extracted PDF text; scanned/unindexed papers are called out in the UI. These are historical frequency indicators, not predictions of future papers.

Validation performed: `node --check backend/server.js`, `node --check frontend/js/app.js`, database/manifest record count check, and bundled PDF count check. Live authenticated API/browser testing still requires installing backend dependencies and running the app locally.

## Quiz & Performance integration — 27 October 2026

- Added branch-aware quiz options and dynamically sourced subject codes/names from the 323-record PYQ database.
- Quiz generation now gathers extracted question lines from the selected subject across stored years, computes repeat candidates and frequency signals, and passes this evidence to the configured AI provider to generate original MCQs with explanations and topic labels.
- Quiz results include the historical-paper coverage summary and high-frequency topic evidence used for question selection; generated questions are explicitly labeled as practice rather than official verbatim questions or verified answer keys.
- Quiz attempts now store branch, subject code, answers, topic labels, and missed-topic counts. The performance view aggregates scores by branch/subject and lists topics most frequently missed.
- If AI is not configured or unreachable, the backend uses a matching curated offline bank when available. It does not invent an answer key for short-answer text extracted from a PYQ; for subjects without a curated bank, it reports that an AI provider is needed.
- Validation: backend/frontend `node --check` passed; branch-aware quiz options returned the expected ECE subject catalogue including BEC401; an offline Data Structures quiz generated five questions. Live AI generation could not be tested in this sandbox because external provider requests were unreachable. The package `.env` contains placeholders only; configure a private AI provider key locally.
