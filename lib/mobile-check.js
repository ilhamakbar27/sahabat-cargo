"use client";
/** Detecting if browser is mobile:
 *  http://detectmobilebrowsers.com
 *  https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
 */

export const mobileCheck = () => {
    if (typeof navigator !== 'undefined') {
      return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    }
    return false
  }
  
