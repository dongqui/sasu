export async function getLinkMetaDataApi(url: string) {
  const res = await fetch("/admin/api/link", {
    method: "POST",
    body: JSON.stringify({ url }),
  });

  const data = await res.json();
  return data;
}
