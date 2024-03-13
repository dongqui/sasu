import { atom, useAtom } from 'jotai'

const linkAtom = atom({
  title: "",
  description: "",
  image: "",
  url: "",
})

export const useLink = () => useAtom(linkAtom);