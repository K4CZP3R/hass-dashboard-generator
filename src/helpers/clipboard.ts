export function copyToClipboard(input: string): void {
  require("child_process").spawn("clip").stdin.end(input);
}
