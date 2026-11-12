"use client";

import { useEffect } from "react";

export default function WelcomeAlert({ name }: { name: string }) {
  useEffect(() => {
    window.alert(`Welcome, ${name}`);
  }, [name]);

  return null;
}
