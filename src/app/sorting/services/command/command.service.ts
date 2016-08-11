import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommandService {

  private commandsSource = new Subject<string>();
  public commandsSource$ = this.commandsSource.asObservable();

  sendCommand(command: string) {
    this.commandsSource.next(command);
  }
}
