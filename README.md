![App Flow](https://cdn.scotch.io/3430/k22QF9Qe6v2bMfrsZoNQ_Project%20Workflow%20-%20Media%20Library.png)


## View layer
a react component that makes a request for action based on interactions on/with the application.
## Action
action creator returns a formatted object of the action type and optional payload which is then dispatched to the store.
## APIs
are resource locations to fetch photos and videos in our own case
## Reducers
pure functions whose purpose in life is to accept the state tree and an actions from the store; make a copy of the previous state, transform it and then return a new state to the store.
## Store
a single object that holds the complete state of your applications. It delegates the reducer with the responsibility of changing state when an action is dispatched.

When the store receives an updated state, it transmits to the view layer to be rendered.

### components

presentational components are components whose purpose in life is to render values to the DOM. Container components also known as smart components provide props and behavior to presentational components
