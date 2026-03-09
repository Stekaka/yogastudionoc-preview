import { atom } from "nanostores";
import type { ClassItem } from "../data/classes";

export const selectedClass$ = atom<ClassItem | null>(null);
export const drawerOpen$ = atom(false);
export const bookingStep$ = atom<"name" | "email" | "message" | "done">("name");
export const bookingName$ = atom("");
export const bookingEmail$ = atom("");
export const bookingMessage$ = atom("");
export const bookingStatus$ = atom<"idle" | "loading" | "success" | "error">("idle");

export function openDrawer(cls: ClassItem) {
  selectedClass$.set(cls);
  drawerOpen$.set(true);
  bookingStep$.set("name");
  bookingName$.set("");
  bookingEmail$.set("");
  bookingMessage$.set("");
  bookingStatus$.set("idle");
}

export function closeDrawer() {
  drawerOpen$.set(false);
  selectedClass$.set(null);
  bookingStep$.set("name");
}

export function resetBookingForm() {
  bookingStep$.set("name");
  bookingName$.set("");
  bookingEmail$.set("");
  bookingMessage$.set("");
  bookingStatus$.set("idle");
}
