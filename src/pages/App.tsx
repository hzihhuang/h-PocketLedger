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
    <div className="flex gap-4 items-center">
      {list.map((tag) => (
        <div className="w-17" key={tag.id}>
          {tag.name}
        </div>
      ))}
    </div>
  );
}

export default App;
