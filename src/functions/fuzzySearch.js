import Fuse from "fuse.js";
// fuzzy search, returns jsx of filtered results based on search query
const fuzzySearch = (query, queryItems, keys) => {
  const fuse = new Fuse(queryItems, { keys: keys })
  const results = fuse.search(query)
  const searchResults = query ? results.map((item) => item.item) : queryItems
  return searchResults
}

export default fuzzySearch;
