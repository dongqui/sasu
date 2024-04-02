export async function getLinkMetaDataApi(url: string) {
  const res = await fetch("/api/link", {
    method: "POST",
    body: JSON.stringify({ url }),
  });

  const data = await res.json();
  return data;
}

export async function updateLink(
  id: number,
  body: { title: string; description: string }
) {
  const res = await fetch(`/api/link/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data;
}

export async function deleteLink(id: number) {
  const res = await fetch(`/api/link/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();
  return data;
}
