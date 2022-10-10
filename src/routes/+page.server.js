const url = "https://prayer-times-api.onrender.com/api/times";

export async function load({ fetch, clientAddress }) {
  const response = await fetch(url + "?ip=" + clientAddress);
  const data = await response.json();
  return {
    prayersData: data,
  };
}
