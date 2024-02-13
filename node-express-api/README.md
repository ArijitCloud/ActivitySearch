# Running the backend
- npm install in backend folder
- `npm run start:dev` or just `npm run start`

# Left out parts
- handle throttling (not important right now since test app) to prevent DDOS attack by using query rate limit, can be done using the right middleware code
- add more tests (going to add if time permits)
- authentication (time limit constraints for PoC) - Cloud directory for keeping user accounts and use cloud service providers native api for this (MSAL and MS Entra ID)
- add linter and more strict type checking(doing it in frontend)
- no localization support for now - server responses are in English as well

# Assumption
- location not sure what to include, added town and country for now