
export class LoggingService {
   constructor() {
        console.log('LoggingService instance created');
    }


  log(message: string) {
    console.log('Log at '+new Date()+" - " +message);
  }
}