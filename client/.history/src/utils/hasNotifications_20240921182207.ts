export function hasNotifications(data: any) {
  let hasNotfication = false;
    if (!data) {
      hasNotfication = false
    } else {
      Object.keys(data).forEach(el => {
        console.log(data[el].aproved);
        if (data[el].aproved == true) {
          hasNotfication = true;
        }
      });
    }
    return hasNotfication;
  }