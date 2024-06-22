"use client";
import CategoryList from "@/components/organisms/categoryList";
import { useState } from "react";

const ServicePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onClick = () => {
    setIsChecked(true);
  };
  return (
    <main>
      <CategoryList />
    </main>
  );
};

export default ServicePage;
