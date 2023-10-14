"use client";

import cn from "@/helpers/cn";
import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
}

const RadioGroupItem = ({ className, ...props }: RadioProps) => {
  const { register, watch } = useFormContext();

  return (
    <label
      className={cn(
        "h-9 py-1 px-6 rounded grid text-text place-items-center text-base font-bold cursor-pointer transition-all",
        watch(props.name!) !== props.value && "hover:bg-slate-100",
        watch(props.name!) === props.value && "bg-slate-300",
        className
      )}
      htmlFor={`field-${props.name}-${props.value}`}
    >
      {props.children}
      <input
        id={`field-${props.name}-${props.value}`}
        className="h-0 w-0 absolute"
        type="radio"
        value={props.value}
        {...register(props.name!, { value: props.value })}
      />
    </label>
  );
};

export default RadioGroupItem;
