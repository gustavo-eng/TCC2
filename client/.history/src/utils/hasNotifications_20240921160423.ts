export function hasNotifications(data: any) {
    if (!data) {
      return false;
    } else {
      Object.keys(data).forEach(el => {
        console.log(data[el].aproved);
        if (data[el].aproved) {
          return true;
        }
      });
    }
    return false;
  }