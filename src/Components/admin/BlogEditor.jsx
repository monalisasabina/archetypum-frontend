import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react";
import "./BlogEditor.css"

// react icons
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";

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
        <div className="editor-cont">

            {/* Toolbar */}
            <div className="editor-toolbar">

                {/* Bold */}
                <button 
                    className={editor.isActive("bold") ? "active" : ""}
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    > <FaBold />
                </button>

                {/* Italic */}
                <button 
                    className={editor.isActive("italic") ? "active" : ""}
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                    > <FaItalic />
                </button>

                {/* Heading 1 */}
                <button 
                    className={editor.isActive("heading", { level: 1 }) ? "active" : ""}
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                    >H1
                </button>

                {/* Heading 2 */}
                <button 
                    className={editor.isActive("heading", { level: 2 }) ? "active" : ""}
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                    >H2
                </button>

                {/* Bullet List */}
                <button 
                    className={editor.isActive("bulletList") ? "active" : ""}
                    onClick={() => editor?.chain().focus().toggleBulletList().run()}
                    > <MdFormatListBulleted />
                </button>

                {/* Ordered List */}
                <button 
                    className={editor.isActive("orderedList") ? "active" : ""}
                    onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                    > <AiOutlineOrderedList />
                </button>



            </div>

            {/* Editor */}
            <EditorContent editor={editor} />

        </div>
    )
};

 export default BlogEditor