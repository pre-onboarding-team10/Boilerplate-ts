export const makeHighlightText = (
  data: { result: string[] },
  trimmed: string
) => {
  return data.result.map((keyword: string) =>
    keyword.replace(
      new RegExp(trimmed, 'gi'),
      match => `<span class="highlight-text">${match}</span>`
    )
  );
};
