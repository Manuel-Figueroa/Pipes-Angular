import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(canFly: bigint): 'vuela'|'no vuela' {
    return (canFly)?'vuela':'no vuela';
  }
}
