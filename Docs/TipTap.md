# TIPTAP
- Similar to React Quill
- works on modern React versions


## Installion

```bash
npm install @tiptap/react @tiptap/starter-kit
```

---

## Basic setup

```Javascript
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function BlogEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Write your blog here...</p>",
  });

  return <EditorContent editor={editor} />;
}
```

## Add Toolbar(Bold, Italic etc)

```JavaScript
export default function BlogEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Write your blog here...</p>",
  });

  if (!editor) return null;

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>

        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}

```
