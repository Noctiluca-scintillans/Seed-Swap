async function postData(url, data) {
  console.log(`This data being sent to API:\n\n${data}`)
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response;
}

async function updateData(url, data) {
  console.log(`This data being sent to API:\n\n${data}`)
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response;
}