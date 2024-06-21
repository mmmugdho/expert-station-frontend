"use client";
import { BaseComponentProps } from "@/types/common.types";
import React, { useEffect } from "react";

export interface LayoutContainerProps extends BaseComponentProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const LayoutContainer = ({ title, children }: LayoutContainerProps) => {
  useEffect(() => {
    setTimeout(() => {
      var header = document.getElementById("dynamicHeader");
      var underline = document.getElementById("dynamicUnderline");

      // Get the width of the header and set it as the width of the underline
      var headerWidth = header?.offsetWidth;
      //   underline.style.width = headerWidth + "px";
    }, 3000);
  }, []);
  return (
    <div>
      <div className="o-title" id="dynamicTitle">
        <p>{title}</p>
        <span className="o-title__underline" id="dynamicUnderline"></span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LayoutContainer;
