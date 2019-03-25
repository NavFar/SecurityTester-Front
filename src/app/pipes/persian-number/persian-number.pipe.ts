import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianNumber'
})
export class PersianNumberPipe implements PipeTransform {

  transform(inputValue: any, args?: any): any {
    let temp = "";
    let value = String(inputValue);
    for (let char of value) {
      switch (char) {
        case '1': temp += "۱"; break;
        case '2': temp += "۲"; break;
        case '3': temp += "۳"; break;
        case '4': temp += "۴"; break;
        case '5': temp += "۵"; break;
        case '6': temp += "۶"; break;
        case '7': temp += "۷"; break;
        case '8': temp += "۸"; break;
        case '9': temp += "۹"; break;
        case '0': temp += "۰"; break;
        case '.': temp += "/"; break;
        default: temp += char; break;
      }
    }
    return temp;
  }

}
