import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

interface IDProp {
  id: number;
}
interface ItemProp {
  id: number;
  name: string;
}

export default function App({ Component, pageProps }: AppProps) {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState<Array<ItemProp>>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [alert, setAlert] = useState<Object>({
    show: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return <Component {...pageProps} />;
}
