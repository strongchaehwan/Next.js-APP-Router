//상호 작용이 일어나는 클라이언트 컴퍼넌트임(클라이언트 컴퍼넌트 명시)
"use client";
import { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input value={search} onChange={onChangeSearch} />
      <button>검색</button>
    </div>
  );
}
