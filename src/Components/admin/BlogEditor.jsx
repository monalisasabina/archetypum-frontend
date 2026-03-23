import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react";
import "./BlogEditor.css"

function BlogEditor({value, onChange}) {
    
    // Initialize the editor with StarterKit and set up the onUpdate callback to send changes to the parent component
    const editor = useEditor({
        extensions: [StarterKit],
        content: value || "<p> Start writing your blog here...</p>",
        onUpdate: ({editor}) => {
            onChange(editor.getHTML()); //send the updated content to the parent component
        }
    });
    
    // Sync editor content with the value prop when it changes (e.g., when loading an existing blog for editing)
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value); // Update editor content if the value prop changes
        }
    }, [value, editor]);
  
    // If the editor is not initialized yet, return null to avoid rendering issues
    if (!editor) return null;


    return (
        <div className="blog-editor-cont">

            {/* Toolbar */}
            <div className="blog-editor-toolbar">
                <button onClick={() => editor?.chain().focus().toggleBold().run()}>Bold</button>
                <button onClick={() => editor?.chain().focus().toggleItalic().run()}>Italic</button>
                <button onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}>Heading 1</button>
                <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}>Heading 2</button>
            </div>

            {/* Editor */}
            <EditorContent editor={editor} />

        </div>
    )
};

 export default BlogEditor