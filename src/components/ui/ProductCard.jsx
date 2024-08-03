// import React from "react";
// import Button from "./Button";

// export default function ProductCard({
//   title,
//   description,
//   image,
//   buttonTitle,
//   customClassName = "",
//   titleClassName = "",
//   descriptionClassName = "",
//   buttonClassName = "",
// }) {
//   const divClassName = `${customClassName}`;

//   return (
//     <div
//       className={`${divClassName} border-2 border-slate-700 cursor-pointer transition-all ease-in-out duration-300 rounded-md mx-4 p-2`}
//     >
//       {image && (
//         <img src={image} alt={title} className="w-full h-48 object-cover" />
//       )}
//       <h1 className={` ${titleClassName}`}>{title}</h1>
//       <p className={`pt-1 ${descriptionClassName}`}>{description}</p>
//       {buttonTitle && (
//         <Button customClassName={buttonClassName}>{buttonTitle}</Button>
//       )}
//     </div>
//   );
// }
