"use client";

import { ChangeEventHandler, FormEvent, useState } from "react";

import { addLinkAction } from "../api/addLinkAction";
import { getLinkMetaDataApi } from "../api";
import { LinkCard } from "@/entities/link/ui/LinkCard";

export function AddLinkForm() {
  const [url, setUrl] = useState("");
  const [link, setLink] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
  });

  const handleChangeURL: ChangeEventHandler<HTMLInputElement> = (e) =>
    setUrl(e.target.value);
  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) =>
    setLink((prev) => ({ ...prev, title: e.target?.value }));
  const handleChangeDescription: ChangeEventHandler<HTMLInputElement> = (e) =>
    setLink((prev) => ({
      ...prev,
      description: e.target?.value,
    }));

  async function getLinkMetaData(e: FormEvent) {
    e.preventDefault();
    const linkMetaData = await getLinkMetaDataApi(url);
    setLink(linkMetaData);
  }

  return (
    <>
      <form onSubmit={getLinkMetaData}>
        <input name="link" onChange={handleChangeURL} />
        <button type="submit">불러오기</button>
      </form>

      <form action={addLinkAction}>
        <input
          name="title"
          value={link.title}
          placeholder="title"
          onChange={handleChangeTitle}
        />
        <input
          name="description"
          value={link.description}
          placeholder="description"
          onChange={handleChangeDescription}
        />
        <input name="url" value={link.url} hidden />
        <input name="image" value={link.image} hidden />
        <button type="submit">링크 추가하기</button>
      </form>

      <LinkCard
        id="temporal"
        {...link}
        created_at={String(new Date().getTime())}
      />
    </>
  );
}
