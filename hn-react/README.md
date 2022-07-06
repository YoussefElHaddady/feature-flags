# Feature Flags demo

## Setup
1. run `yarn` to install dependencies
1. Sing in using GitHub at [flagsmith](https://app.flagsmith.com/)
1. Create a project (=> a **Developement** and **Production** environments are automatically created)
1. Create a feature with ID `show_story_points`
1. Copy environment id from example and paste it to your .env files (`.env.production.local`, `.env.development.local`)
    example: `REACT_APP_FLAGS_KEY=test`

## Run
### On production mode
1. run `yarn build` 
1. run `serve -s build`
### On development mode
1. run `yarn start`
