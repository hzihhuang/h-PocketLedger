import { getTags, Tag } from "@db";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState<Tag[]>([]);
  useEffect(() => {
    const a = async () => {
      const tags = await getTags();
      setList(tags);
    };
    a();
  }, []);
  return (
    <div>
      {list.map((tag) => (
        <div key={tag.id}>{tag.name}</div>
      ))}
    </div>
  );
}

export default App;
