"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

import { Textarea } from "@/components/ui/textarea";
import { contentTemplates } from "@/lib/content-templates";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import Editor from "./_components/editor";
import { useParams } from "next/navigation";
import { chatSession } from "@/lib/gemini-ai";
// import { useAuth } from "@clerk/nextjs";

// interface templateSlugProps {
//   templateSlug: string;
// }

////////////////////////////////
// fixed it using useParams.

const TemplatePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string | undefined>("");

  const params = useParams();
  // const { getToken } = useAuth();

  const selectedTemplate = contentTemplates.find(
    (items) => items.slug === params.templateSlug
  );
  if (!selectedTemplate) {
    return <div className="text-red-500">Template not found.</div>;
  }

  const GenerateAIContent = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + "," + SelectedPrompt;

      const result = await chatSession.sendMessage(finalAIPrompt);
      if (
        result?.response?.candidates &&
        result.response.candidates.length > 0 &&
        result.response.candidates[0]?.content?.parts
      ) {
        const aiText = result.response.candidates[0].content.parts[0].text;
        // console.log("Extracted AI Response:", aiText);

        setAIOutput(aiText);

        // const token = await getToken();

        await axios.post(
          "/api/output",
          {
            title: dataSet.title,
            description: aiText,
            templateUsed: selectedTemplate?.name,
          }
          // {
          //   headers: {
          //     "Content-Type": "application/json",
          //     Authorization: `Bearer ${token}`,
          //   },
          // }
        );
      } else {
        console.error("AI response is empty or incorrect format", result);
      }

      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (formData: FormData) => {
    GenerateAIContent(formData);
  };

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2 className="font-medium">{selectedTemplate?.name}</h2>
      </div>
      <form action={onSubmit}>
        <div className="flex flex-col gap-4 p-5 mt-5 bg-white">
          {selectedTemplate?.form?.map((form) => (
            <div key={form.name}>
              <label>{form.label}</label>
              {form.field === "input" ? (
                <div className="mt-5 ">
                  <Input name="title"></Input>
                </div>
              ) : (
                <div className="mt-5">
                  <Textarea />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className="mt-5 " type="submit">
          {isLoading ? (
            <Loader className="animate-spin"></Loader>
          ) : (
            "Generate Content"
          )}
        </Button>
      </form>

      <div className="my-10 ">
        <Editor content={isLoading ? "Generating..." : aiOutput} />
      </div>
    </div>
  );
};

export default TemplatePage;
