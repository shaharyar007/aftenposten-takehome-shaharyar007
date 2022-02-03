# afront

Welcome to the Aftenposten code challenge.

This repo is your own, and only us and you have access to it. Commit your changes and push them here so we can review.
We expect you to spend no more than two to three hours on this assignment.

You can find the types in the [types.d.ts](types.d.ts) file. We've provided some example data in the server folder, and we'd like you improvise and make a news site from the data within. We expect you to use React and TypeScript, so we've set up webpack to run with tsx for you. For modern news sites, the frontpage is the most important part of a site: it brings in our users, it keeps them updated and hopefully respects their time. We want you to be creative, and do whatever you want with this data. Our two suggestions would be: 1) make a news frontpage, or 2) make an article page.

## Ideas

Use the ideas below for inspiration, or add whatever you think is cool.
The purpose is not to complete everything on the list but rather to create something that works and show us some code we can talk about during an interview.

- Scale the teasers appropriately. Look at the `"frontPageCardSize"` property. Arrange the teasers accordingly
- Find the correct image dimensions based on the size of the teaser. Look into the `imageAsset.urls` object
- Make it possible to choose section by clicking the menu buttons: Nyheter, Oslo, Foreldreliv...
- Utilize more of the teaser's `customProperties`. It can be interesting to look at `feature`, `darkSkin` or `breaking`
- Add author images
- Use the timestamps
- Fetch only a few articles and add a button to fetch more, paginate the server accordingly
- Improve look and feel, make it responsive
- Implement live updates
- Different ways of sorting articles, for time see the property `timestamp` or `changes` and the properties `published` and`updated`
- Create blends using articles from the five different sections
- Work on making developer experience better. Improve folder structure and organize the code, add useful tooling (need to explain reasoning afterwards) etc.

## Where to start?

- `/src/scripts/index.tsx`: starting point for the frontend code
- `/server/server.ts`: server endpoints

## Setup

### Install dependencies

```
npm install
cd server
npm install
```

### Run application

```
npm run start-all
```

Go to http://localhost:3000/

Server is hosted at http://localhost:5000/

# Your notes

Add some notes on what you did here, so we can see more easily!
