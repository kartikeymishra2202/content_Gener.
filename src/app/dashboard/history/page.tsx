import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

const History = async () => {
  const { userId } = await auth();
  const userHistory = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });
  // const formatText = (text) => {
  //   return text
  //     .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Convert **bold** to <strong>
  //     .replace(/\n/g, "<br>"); // Convert new lines to <br>
  // };
  const formatText = (text: string) => {
    // Replace code blocks first
    let formattedText = text.replace(
      /```(?:html)?\n([\s\S]*?)\n```/g,
      (match, codeContent) => {
        return `<div class="bg-gray-100 p-2 rounded my-2 font-mono overflow-x-auto">${codeContent}</div>`;
      }
    );

    // Replace bold text
    formattedText = formattedText.replace(
      /\*\*(.*?)\*\*/g,
      "<strong>$1</strong>"
    );

    // Replace bullet points with proper HTML
    formattedText = formattedText.replace(
      /\* \\n\* (.*?)(?=\\n|\n|$)/g,
      "<li>$1</li>"
    );

    // Wrap lists in ul tags
    formattedText = formattedText.replace(/<li>.*?<\/li>/g, (match) => {
      return `<ul class="list-disc pl-5 my-2">${match}</ul>`;
    });

    // Handle escaped newlines (\n) by converting them to <br>
    formattedText = formattedText.replace(/\\n\\n/g, "<br><br>");
    formattedText = formattedText.replace(/\\n/g, "<br>");

    // Handle actual newlines
    formattedText = formattedText.replace(/\n/g, "<br>");

    return formattedText;
  };

  return (
    <div className="mx-5 py-2 ">
      <div className="mt-5 py-6 px-4">
        <h2 className="font-medium">OutputHistory</h2>
      </div>
      <div>
        <Table>
          <TableCaption>
            A list of your recent AI Generated-Content.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Template</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userHistory && userHistory.length > 0 ? (
              userHistory.map((content) => (
                <TableRow key={content.id}>
                  <TableCell className="font-medium">
                    {content.templateUsed}
                  </TableCell>
                  <TableCell>{content.title}</TableCell>
                  <TableCell>
                    <div
                      className="prose max-w-full mt-4 p-4 border rounded-md bg-gray-100"
                      dangerouslySetInnerHTML={{
                        __html: formatText(content.description),
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No History To display.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default History;
