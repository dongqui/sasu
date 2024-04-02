export async function getLinks() {
  const res = await fetch("/api/link", {
    method: "GET"
  });
  
  const data = await res.json();
  return data;
}
