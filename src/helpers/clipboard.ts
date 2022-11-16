export async function copyToClipboard(input: string): Promise<void> {
  await require("child_process").spawn("clip").stdin.end(input);
}
