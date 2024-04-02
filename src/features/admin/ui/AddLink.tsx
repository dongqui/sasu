"use client";

import { ChangeEventHandler, FormEvent, useState } from "react";

import { getLinkMetaDataApi } from "../api";
import { EditLinkCardList } from "@/entities/link/ui/LinkCardList/EditLinkCardList";
import { Input, Button, Row } from "@/shared/ui";
import { useUpdateLinks } from "../models/useupdateLinks";

export function AddLink() {
  const {
    setAddedLinks,
    deleteAddedLink,
    deleteDeploiedLink,
    editAddedLink,
    editDeploiedLink,
    addedLinks,
  } = useUpdateLinks();

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChangeURL: ChangeEventHandler<HTMLInputElement> = (e) =>
    setUrl(e.target.value);

  async function getLinkMetaData(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const linkMetaData = await getLinkMetaDataApi(url);
    setAddedLinks({
      ...linkMetaData,
      created_at: new Date(),
      id: new Date().getTime(),
    });
    setLoading(false);
  }

  return (
    <>
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

      <EditLinkCardList
        deleteAddedLink={deleteAddedLink}
        deleteDeploiedLink={deleteDeploiedLink}
        editAddedLink={editAddedLink}
        editDeploiedLink={editDeploiedLink}
        addedLinks={addedLinks}
      />
    </>
  );
}
