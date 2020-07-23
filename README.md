# Full Stack React with Redux

For this activity you'll be adding Redux to the famous artists project. Redux has been partially set up in `index.js`.

## Setup

- Fork and clone this repository
- `npm install`
- `npm run server`
- `npm run client`

## Tasks

- [ ] Move the client side artists array from `App.js` to the artistReducer.
- [ ] Add a `Router` and navigation to `App.js`.
   - [ ] Add a client side route for the form, `/#/addArtist`
   - [ ] Add a client side route for the list of artist, `/#/allArtists`
- [ ] Create a new component with an add artist form. Make it available at `#/add-artist`.
- [ ] When submitting the form, POST the new artist to your **server**.
   - Data sent to the server should be in the format `{name: 'name of artist'}`. The id is added by the server.


## Stretch

- [ ] Remove the `for` loop in `ArtistList` and replace it with a `.map`
- [ ] Implement the delete route on the **server** using `.filter()`.
- [ ] As the user types, store the input data in Redux so that it's not lost when the user navigates to the list and back to the form.
- [ ] Move the data to a database.
- [ ] Add additional properties to the form.
- [ ] Style with Material UI

