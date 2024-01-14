import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";

import axios from "axios";

function SwitchTabsScanning() {
  // Code for Scanning and resume =>
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState("");
  // const [summary, setSummary] = useState("");
  const [summary, setSummary] = useState("");
  const [num_sentences, setNumSentences] = useState(4);

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleOcrRequest = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/perform_ocr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_url: imageUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.text);

      // Summarize the text using the provided Axios code
      await fetchSummary(); // Call fetchSummary directly
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  console.log(result);
  console.log(typeof result);

  //   Sum Text
  useEffect(() => {
    const summarizeWithGPT3 = async () => {
      const options = {
        method: "POST",
        url: "https://gpt-summarization.p.rapidapi.com/summarize",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "c2c48aefdcmshed838b91ca90f63p117b77jsnafb38f7168b1",
          "X-RapidAPI-Host": "gpt-summarization.p.rapidapi.com",
        },
        data: {
          text: result,
          num_sentences: 4,
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.summary);
        setSummary(response.data.summary);
      } catch (error) {
        console.error(error);
        setSummary("Error summarizing text");
      }
    };

    summarizeWithGPT3();
  }, [result]);

  console.log(summary);

  //   End of automatizations
  return (
    <Tabs
      defaultValue="url"
      className="w-[90%] rounded-3xl mx-auto mt-8 sm:m-12 sm:w-[60%] lg:w-[50%] xl:w-[34%] sm:mx-auto max-w-[500px]"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="url">Url</TabsTrigger>
        <TabsTrigger value="scan">Scan</TabsTrigger>
      </TabsList>

      {/* URL */}
      <TabsContent value="url" className="w-[100%]">
        <Card>
          <CardHeader>
            <CardTitle>URL</CardTitle>
            <CardDescription>
              Summarize your text by providing a URL to an image.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">URL Photo:</Label>
              <Input
                type="text"
                value={imageUrl}
                onChange={handleImageUrlChange}
              />
            </div>
            <div className="flex flex-row">
              <Label htmlFor="name" className="my-auto pr-5">
                Number of Sentences:
              </Label>
              <Input id="name" className="w-[10%] min-w-[50px] min-h-[50px]" />
            </div>
            <Button className="mt-10" onClick={handleOcrRequest}>
              Resume Now!
            </Button>
            <p className="pt-6 text-lg font-semibold">Your Resume:</p>
            <ScrollArea className="h-[200px] w-[100%] rounded-md border p-4">
              {summary !== "" ? <p>{summary}</p> : <p>No summary available</p>}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <Button className="relative right-0">Save</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      {/* Scan */}

      <TabsContent value="scan">
        <Card>
          <CardHeader>
            <CardTitle>Scan</CardTitle>
            <CardDescription>
              Scan Scan ScanScanScan Scan Scan Scan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">SCAn</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Scan</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default SwitchTabsScanning;
