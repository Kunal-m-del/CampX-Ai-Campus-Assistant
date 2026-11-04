$ErrorActionPreference = "Stop"
Write-Host "AI Campus Assistant - YouTube API setup"
$key = Read-Host "Paste your NEW YouTube Data API v3 key"
if ([string]::IsNullOrWhiteSpace($key)) { throw "API key cannot be empty." }
$envPath = Join-Path $PSScriptRoot ".env"
@"
PORT=5000
JWT_SECRET=replace-with-a-long-random-secret
AI_API_URL=
AI_API_KEY=
AI_MODEL=gpt-4o-mini
YOUTUBE_API_KEY=$key
"@ | Set-Content -Path $envPath -Encoding UTF8
Write-Host "Created backend/.env. Start with: npm install; npm start"
