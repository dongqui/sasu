"use client";

import { ChangeEventHandler, FormEvent, useState } from "react";

import { getLinkMetaDataApi } from "../api";
import { Input, Button, Row } from "@/shared/ui";
import { useUpdateLinks } from "../models/useUpdateLinks";

export function AddLinkForm() {
  const { addLink } = useUpdateLinks();

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChangeURL: ChangeEventHandler<HTMLInputElement> = (e) =>
    setUrl(e.target.value);

  async function getLinkMetaData(e: FormEvent) {
    e.preventDefault();
    try {
      setLoading(true);
      const linkMetaData = await getLinkMetaDataApi(url);
      addLink({
        ...linkMetaData,
        created_at: new Date(),
        id: new Date().getTime(),
      });
    } catch (e) {
      alert("error~~");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={getLinkMetaData}>
      <Row>
        <Input
          name="link"
          onChange={handleChangeURL}
          placeholder="URL"
          fulled
        />
        <Button
          color="second"
          type="submit"
          disabled={loading}
          style={{ flexShrink: 0 }}
        >
          불러오기
        </Button>
      </Row>
    </form>
  );
}
