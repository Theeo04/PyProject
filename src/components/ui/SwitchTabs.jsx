import React, { useState } from "react";

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
import { supabase } from "../../../supabase";
import { useRouter } from "next/router";

function SwitchTabs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const router = useRouter();

  // Google Auth =>
  const googleSignIn = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });

      if (error) {
        console.error("Google sign-in error:", error);
      } else {
        console.log("User signed in with Google:", user);
        router.push("/resumeapp");
      }
    } catch (error) {
      console.error("Supabase error:", error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Error signing in:", error.message);
      } else if (data) {
        console.log("User has logged in:", data);
        router.push("/");
        setUser(data);
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  //User data is in "data" variable
  return (
    <Tabs
      defaultValue="login"
      className="w-[90%] max-w-[400px] mx-auto pt-[10%]"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Log In</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>

      {/* Login */}

      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription className="text-xs md:text-[14px] pt-1">
              Log in for easy access and personalized experiences. Welcome back!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">E-mail</Label>
              <Input id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSignIn}>Log In</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      {/* Second Content */}

      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription className="text-xs md:text-[14px] pt-1">
              Register for personalized experiences. Join us with a simple
              sign-up. Your journey starts here!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">E-mail</Label>
              <Input id="current" type="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Create Account</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <div>
        <button onClick={googleSignIn}>Sign in with Google</button>
      </div>
    </Tabs>
  );
}

export default SwitchTabs;
