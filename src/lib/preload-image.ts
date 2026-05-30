const preloaded = new Set<string>();

/** Tarayıcı disk önbelleğine görseli önceden yükler (localStorage'dan daha hızlı ve doğru yöntem). */
export function preloadImage(src: string) {
  if (typeof window === "undefined" || preloaded.has(src)) return;
  preloaded.add(src);

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  document.head.appendChild(link);
}

export function preloadImages(sources: string[]) {
  for (const src of sources) {
    preloadImage(src);
  }
}
