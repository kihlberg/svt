# svt

To run the app first start `svt-api` and then `svt-web`, see their respective READMEs.

The backend is a Graphql server, not 'cause it makes perfect sense for this use case but more 'cause I heard you're in the process of migrating to it and thought it'd be fun.

The frontend is a pretty straight forward create-react-app application, with Flow added.

![Wordcloud](https://i.ibb.co/x67wbsQ/Screen-Shot-2019-03-27-at-2-03-29-PM.png)

## TODO

Some things I'd do if I had more time:

### Backend
- Dockerize
- Add some E2E tests
- Add more unit tests
- Add Flow (or use TypeScript)
- Set up Memcache/Redis to cache third party requests and other expensive computations
- Use a proper logging framework
- Use a reverse proxy (nginx) to handle rate limiting, SSL termination, etc
- Monitoring and alerting
- Build/test/deploy pipelines
- Use a proper secrets management solution
- Generate API docs

### Frontend

- Dockerize
- Add some E2E tests
- Add more unit tests
- React Router for deep linking and browser back/forward actions support
- Test things on IE, a screen reader, etc
- Server side rendering, for SEO and faster initial load time
- Improve error handling and loading states
