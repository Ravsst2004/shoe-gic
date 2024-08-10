import React, { useState } from "react";
import Button from "./Button";

export default function Card({
  title,
  description,
  image,
  buttonTitle,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  ...props
}) {
  const [isImageError, setIsImageError] = useState(false);

  const handleImageError = () => {
    setIsImageError(true);
  };

  return (
    <div
      {...props}
      className={`${className} border-2 border-slate-700 cursor-pointer rounded-md p-2`}
    >
      {image && !isImageError && (
        <img
          src={image}
          alt={title}
          onError={handleImageError}
          className="w-full h-48 object-cover"
        />
      )}
      <h1 className={` ${titleClassName}`}>{title}</h1>
      <p className={`pt-1 ${descriptionClassName}`}>{description}</p>
      {buttonTitle && (
        <Button className={buttonClassName}>{buttonTitle}</Button>
      )}
    </div>
  );
}
