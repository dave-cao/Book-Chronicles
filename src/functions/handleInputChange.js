const handleChange = (event, setState) => {
  const { name, value } = event.target;
  setState((prev) => {
    return {
      ...prev,
      [name]: value
    }
  })
}

export default handleChange;
