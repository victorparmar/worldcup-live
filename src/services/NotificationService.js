const NotificationService = {
  notify: text => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // eslint-disable-next-line no-unused-vars
      const notification = new Notification(text);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission(function(permission) {
        if (permission === "granted") {
          // eslint-disable-next-line no-unused-vars
          const notification = new Notification(text);
        }
      });
    }

    // permission denied ...
  }
};

export default NotificationService;
