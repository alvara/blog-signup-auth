import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
  // TODO: set user name display to actual user
  const [user, setUser] = useState("Jesse");
  return (
    <div>
      <h1>Welcome, {user}</h1>
    </div>
  );
}
