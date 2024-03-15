export async function getLinkMetaDataApi(url: string) {
  const res = await fetch("/api/link", {
    method: "POST",
    body: JSON.stringify({ url }),
  });

  const data = await res.json();
  return data;
}
