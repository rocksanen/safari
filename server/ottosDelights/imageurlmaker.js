const {createApi} = require('unsplash-js')
const fetch2 = require('node-fetch')

const key = process.env.REACT_APP_SPLASH_KEY

const unsplash = createApi({
    accessKey: key,
    fetch: fetch2,
    headers: { 'X-Custom-Header': 'foo' },
  })
  unsplash.photos.get({ photoId: 'add-id-from-unsplash-picture-here' }).then(result => {
    if (result.errors) {
      console.log('error occurred: ', result.errors[0]);
    } else {
      const photo = result.response;
      console.log(photo);
    }
  })