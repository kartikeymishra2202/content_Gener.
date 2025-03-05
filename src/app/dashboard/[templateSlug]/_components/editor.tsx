//here used froala editor/////
"use client";
import React, { useEffect, useState } from "react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditor from "react-froala-wysiwyg";
type EditorProps = {
  content: string;
};

const formatText = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Convert **bold** to <strong>
    .replace(/\n/g, "<br>"); // Convert new lines to <br>
};

const Editor = ({ content }: EditorProps) => {
  const formattedContent = formatText(content);
  const [text, setText] = useState(formattedContent || "");

  useEffect(() => {
    if (formattedContent) {
      setText(formattedContent);
    }
  }, [formattedContent]);

  return (
    <div className="w-full">
      <FroalaEditor
        tag="textarea"
        model={text}
        onModelChange={setText}
        config={{
          placeholderText: "Start Writing",
          charCounterCount: true,
          toolbarButtons: [
            "bold",
            "italic",
            "underline",
            "strikeThrough",
            "|",
            "align",
            "formatOL",
            "formatUL",
            "insertLink",
            "insertImage",
            "insertVideo",
            "undo",
            "redo",
          ],
        }}
      />
      {/* <div
        className="prose max-w-full mt-4 p-4 border rounded-md bg-gray-100"
        dangerouslySetInnerHTML={{ __html: text }}
      /> */}
    </div>
  );
};

export default Editor;

//////////////////////////////////////////////////////////////////////////
// "use client";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import { useEffect } from "react";

// const Editor = ({ content }) => {
//   return (
//     <div
//       className="prose max-w-full"
//       dangerouslySetInnerHTML={{ __html: content }}
//     />
//     // here i am simply loading the output of ai generated content and not using the editor tiptap
//   );

// const editor = useEditor({
//   extensions: [StarterKit],
//   content: content || "<p>Start writing...</p>",
// });

// // Update the editor's content when `content` prop changes
// useEffect(() => {
//   if (editor && content) {
//     editor.commands.setContent(content);
//   }
// }, [content, editor]);

// useEffect(() => {
//   return () => {
//     editor?.destroy();
//   };
// }, [editor]);

// return (
//   <div className="flex flex-col space-y-2">
//     {/* Toolbar */}
//     <div className="p-2 border bg-gray-100 rounded-md">
//       <button
//         onClick={() => editor?.chain().focus().toggleBold().run()}
//         className={`p-1 px-3 text-sm border rounded-md ${
//           editor?.isActive("bold") ? "bg-blue-500 text-white" : "bg-white"
//         }`}
//       >
//         Bold
//       </button>
//       <button
//         onClick={() => editor?.chain().focus().toggleItalic().run()}
//         className={`p-1 px-3 text-sm border rounded-md ml-2 ${
//           editor?.isActive("italic") ? "bg-blue-500 text-white" : "bg-white"
//         }`}
//       >
//         Italic
//       </button>
//     </div>

//     {/* Editor Area */}
//     <EditorContent
//       editor={editor}
//       className="border rounded-md bg-white p-4 min-h-[250px] focus:outline-none"
//     />
//   </div>
// );
// };

// export default Editor;
