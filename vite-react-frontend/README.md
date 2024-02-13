# Running front-end application

- npm install
- npm run dev


# Left out parts
- client side caching for fetch calls - already using memory cache for current backend api
- theming - was not required part of the requirement, so had set low priority but was planning to use css var to switch dark and light theme
- localization - using static text only in English for this project
- more testing (added some testing - but possible to add more test possibly some storybook as well when time permits)
- advanced accesibilty feature, custom keyboard nav - require focus trap with custom keyboard event
- icon button for clearing and submitting search - requires using svg button and plugging into existing event for clear and submit search, also need to lazy load images and consider accessibility.
- custom ui for small screen using media query - currently the ui is responsive so it's still possible to use it in smaller screen, but not optimize for it


# Design decisions
- css grid over semantic table for flexibility with design and responsiveness
- column width based on possible data length increase/change

# Assumptions

- Data size will scale and secure data handling with more consistency, so filtering on backend seems better than getting all data
