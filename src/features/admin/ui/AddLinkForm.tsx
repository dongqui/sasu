"use client";

import { ChangeEventHandler, FormEvent, useState } from "react";

import { addLinkAction } from "../api/addLinkAction";
import { getLinkMetaDataApi } from "../api";
import { LinkCard } from "@/entities/link/ui/LinkCard/LinkCard";
import { Input, Button } from "@/shared/ui";
import { useLink } from "../models";

export function AddLinkForm() {
  const [url, setUrl] = useState("");
  const [link, setLink] = useLink();
  const [loading, setLoading] = useState(false);

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
        <Input name="link" onChange={handleChangeURL} placeholder="URL" />
        <Button type="submit">불러오기</Button>
      </form>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const formData = new FormData(e.target as HTMLFormElement);
          await addLinkAction(formData);
          setLink({
            title: "",
            description: "",
            image: "",
            url: "",
          });
          setLoading(false);
        }}
      >
        <Input
          name="title"
          value={link.title}
          placeholder="title"
          onChange={handleChangeTitle}
        />
        <Input
          name="description"
          value={link.description}
          placeholder="description"
          onChange={handleChangeDescription}
        />
        <Input name="url" value={link.url} hidden readOnly />
        <Input name="image" value={link.image} hidden readOnly />
        <Button type="submit" disabled={loading}>
          링크 추가하기
        </Button>
      </form>

      <LinkCard id={1} {...link} created_at={String(new Date().getTime())} />
    </>
  );
}
