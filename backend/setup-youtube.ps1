$ErrorActionPreference = "Stop"
Write-Host "AI Campus Assistant - YouTube API setup"
$key = Read-Host "Paste your NEW YouTube Data API v3 key"
if ([string]::IsNullOrWhiteSpace($key)) { throw "API key cannot be empty." }
$envPath = Join-Path $PSScriptRoot ".env"
@"
PORT=5000
JWT_SECRET=replace-with-a-long-random-secret
AI_API_URL=https://generativelanguage.googleapis.com/v1beta/openai/chat/completions
   AI_API_KEY=AQ.Ab8RN6KER71tBpkxswoDm7tnOm8cRx2kZUtWZwwFj3GHlSRFww
   AI_MODEL=gemini-3.5-flash-lite
YOUTUBE_API_KEY=AIzaSyB4YTqEqaL9qGdQ4tn65i3e2ELAGNmwn-U
"@ | Set-Content -Path $envPath -Encoding UTF8
Write-Host "Created backend/.env. Start with: npm install; npm start"
