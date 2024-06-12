

async function tattooFetch() {
    const response = await fetch("http://example.com/movies.json");
    const tattoos = await response.json();
    console.log(tattoos);
  }


