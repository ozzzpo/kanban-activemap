import React from "react";
import { useAuth } from "../../router/AuthWrapper";

export default function Dashboard() {
  const auth = useAuth();
  const user = auth.user;
  const token = user.token;
  return <div>Dashboard</div>;
}
