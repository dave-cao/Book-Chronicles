// fires when user presses the enter button
const pressEnter = (event, callback) => {
  const key = event.keyCode || event.which

  // if enter was pressed, search for book
  if (key === 13) {
    callback();
  }
}

export default pressEnter
