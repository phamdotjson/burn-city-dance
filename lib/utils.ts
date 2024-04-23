import { Badge } from "@/components/ui/badge"
import { EventTypeEnum } from "@/constants/EventEnums"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}