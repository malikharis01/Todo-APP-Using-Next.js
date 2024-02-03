import React from "react";
import Header from "@/components/Header";
import Todo from "@/components/Todo";
export default function MainTodo() {
  return (
    <div>
      <Header />
      <div className=" pt-28">
        <Todo />
      </div>
    </div>
  );
}
