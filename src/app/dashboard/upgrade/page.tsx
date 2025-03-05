"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type CheckoutResponse = { url: string };

const Upgrade = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const response = await axios.post<CheckoutResponse>(
      "/api/upgrade/checkout"
    );
    //push user to the stripe checkout page.
    router.push(response.data.url);
  };

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded ">
        <h2 className="font-medium ">Upgrade Credit</h2>
      </div>
      <div className="mt-5 py-6  px-4 rounded">
        <Card className="w-[350px] flex flex-col mx-auto">
          <CardHeader>
            <CardTitle>$10 One Time Purchase</CardTitle>
            <CardDescription>10,000 AI Credits</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <p className="flex my-2 gap-2">
                <Check />
                100,000 words/purchase
              </p>
              <p className="flex my-2 gap-2">
                <Check />
                All Template Access
              </p>
              <p className="flex my-2 gap-2">
                <Check />
                Retain All History
              </p>
            </div>
            <Button className="mt-5" onClick={handleOnClick}>
              Purchase
            </Button>
          </CardContent>
          <CardFooter>
            <p>All rights reserved.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Upgrade;
