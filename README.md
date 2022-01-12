## Quick start

1. Clone this repository
2. From the studio directory run `npm install` and `npm run sanity` to start sanity locally
3. From the web directory run `npm install` and `npm run dev` to start the frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:3000](http://localhost:3000)

## Deploy

1. Delete .next directory
2. From the web directory run `npm run build`
3. If you made changes to the sanity studio then from the studio directory run `npm run build`
3. Commit changes and push to branch to origin
4. From github create a new pull request to merge your branch into develop
5. Commit pull request and your changes will be automatically deployed to netlify
