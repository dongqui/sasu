"use client";

import { ChangeEventHandler, FormEvent, useState } from "react";

import { getLinkMetaDataApi } from "../api";
import { EditLinkCardList } from "@/entities/link/ui/LinkCardList/EditLinkCardList";
import { Input, Button, Row } from "@/shared/ui";
import type { Link } from "@/shared/config/types";

export function AddLinkForm() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChangeURL: ChangeEventHandler<HTMLInputElement> = (e) =>
    setUrl(e.target.value);

  async function getLinkMetaData(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const linkMetaData = await getLinkMetaDataApi(url);
    setLinks(prev => [{...linkMetaData, created_at: new Date(), id: new Date().getTime()}, ...prev]);
    setLoading(false);
  }

  return (
    <>
      <form onSubmit={getLinkMetaData}>
        <Row>
          <Input name="link" onChange={handleChangeURL} placeholder="URL" fulled/>
          <Button type="submit" disabled={loading} style={{flexShrink: 0}}>불러오기</Button>
        </Row>        
      </form>
      
      <EditLinkCardList addedLinks={links}/>
    </>
  );
}
