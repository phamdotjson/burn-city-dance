import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Event } from "@/types/Event";

const distributionName = process.env.CLOUDFRONT_DISTRIBUTION_DOMAIN_NAME as string;

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getImageUrlFromS3Bucket = (imageName: string) => {
  return `https://${distributionName}/${imageName}`;
}

export const sortEventsByDateTime = (events: Event[]) => {
  const compareDates = (a: Event, b: Event) => {
    const dateComparison = a.Date.localeCompare(b.Date);
    if (dateComparison !== 0) {
      return dateComparison;
    }
    return a.StartTime.localeCompare(b.StartTime);
  }

  return events.sort(compareDates);
}