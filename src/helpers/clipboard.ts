export async function copyToClipboard(input: string): Promise<void> {
  // If windows (nodejs)
  if (process.platform === "win32") {
    await require("child_process").spawn("clip").stdin.end(input);
  } else {
    // If mac/linux (bash)
    await require("child_process").spawn("pbcopy").stdin.end(input);
  }
}
