export async function checkNotificationPermission() {
  if ("Notification" in window) {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }
  return false;
}

export async function sendNotification(message: string) {
  const canSent = await checkNotificationPermission();
  if (!canSent) return;

  new Notification(message, {
    icon: "/icon.png",
  });
}
