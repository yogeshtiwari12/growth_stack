"use client";

import { useState, useCallback } from "react";

type ToastVariant = "default" | "destructive";

interface ToastData {
  id: string;
  title: string;
  variant?: ToastVariant;
}

let listeners: Array<(toasts: ToastData[]) => void> = [];
let toasts: ToastData[] = [];

function dispatch(toast: ToastData) {
  toasts = [toast];
  listeners.forEach((l) => l(toasts));
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== toast.id);
    listeners.forEach((l) => l(toasts));
  }, 3000);
}

export function toast({ title, variant }: { title: string; variant?: ToastVariant }) {
  dispatch({ id: Math.random().toString(36).slice(2), title, variant });
}

export function useToast() {
  const [currentToasts, setCurrentToasts] = useState<ToastData[]>(toasts);

  const subscribe = useCallback(() => {
    const handler = (updated: ToastData[]) => setCurrentToasts([...updated]);
    listeners.push(handler);
    return () => {
      listeners = listeners.filter((l) => l !== handler);
    };
  }, []);

  useState(() => {
    return subscribe();
  });

  return { toast, toasts: currentToasts };
}
