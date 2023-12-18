import React from "react";
import AdminTerdaftar from "./AdminTerdaftar";
import AdminBelumTerdaftar from "./AdminBelumTerdaftar";
import { useAuth } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { currentUser } = useAuth();
  if (!currentUser) {
    console.log(currentUser);
    return <Navigate to={"/login"} replace />;
  }
  return (
    <>
      <AdminBelumTerdaftar />
    </>
  );
}
