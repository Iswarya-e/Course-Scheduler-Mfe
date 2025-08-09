import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(loginTime: string | Date, logoutTime: string | Date | null | undefined): string {
    if (!logoutTime) return '-';

    const start = new Date(loginTime);
    const end = new Date(logoutTime);
    const diffMs = end.getTime() - start.getTime();

    if (diffMs <= 0) return '-';

    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
}
