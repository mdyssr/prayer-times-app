const url = "https://prayer-times-api.onrender.com/api/times";

export async function load({ fetch }) {
  const response = await fetch(url);
  const data = await response.json();
  return {
    prayersData: data,
  };
}
