import { ArrowBackIcon } from "components/icons";
import { classes } from "helpers";
import React, { useEffect, useState } from "react";

import { BackToTopContainer } from "./backtotop.styles";

export interface BackToTopProps {
  className?: string;
  offsetShow?: number;
  color?: string;
}

export const BackToTop = ({
  className,
  offsetShow = 400,
  color,
}: BackToTopProps) => {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > offsetShow ?? 400 ? setShowBtn(true) : setShowBtn(false);
    });
  }, []);

  return (
    <BackToTopContainer
      className={classes(className, color ?? "red", { show: showBtn })}
      onClick={() => goToTop()}
    >
      <ArrowBackIcon className="icon--arrow" />
    </BackToTopContainer>
  );
};
