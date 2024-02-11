# ActivitySearch

Displays list of activities with ability to search with name of the activity

# How to run

- Either run the api and frontend separately from each folder.
  - use `npm install` in each folder
  - then `npm run start` in node-express-api folder and `npm run dev` in vite-react-frontend folder
- Or run docker locally using
  - `docker compose up --build`
- open `http://localhost:3000/`

# Design decisions

- using node js for http api for consistency in code and context switching between frontend and backend language. Also learning purpose
- using vite react js frontend as wanted to keep vanilla react js and node js for this project since I did not want extra overhead from nextjs dependencies
- data kept as is in json files inside api project because of time constraints on using a db (also not
  mentioned in assigment guide)
