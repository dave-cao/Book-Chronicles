
const getTagColor = (tag) => {
  // tagColor
  let tagColor = "back-pastel-green pastel-green"
  if (tag === "review") {
    tagColor = "back-pastel-purple pastel-purple";
  } else if (tag === "recommendation" || tag === "recommend") {
    tagColor = "back-pastel-red pastel-red"
  }
  return tagColor
}

export default getTagColor;
