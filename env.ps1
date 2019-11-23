#Run this snippet in powershell to import from the local .env file all the keys and values
Select-String '^([^=]*)=(.*)' .\.env | ForEach-Object {Set-Item -path ('env:' + $_.Matches.Groups[1].Value) -value $_.Matches.Groups[2].Value}
