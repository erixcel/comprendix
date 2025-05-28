import { catchError, from, map, Observable, throwError } from 'rxjs';
import { Configuration } from './../model/configuration';
import { LOCAL_ID } from '../constants/configuration.config';

export class ConfigurationService {

  constructor() {

  }

  getConfiguration(id: string): Promise<Configuration> {
    if (id === LOCAL_ID) {
      return import('../constants/configuration.config').then(module => module.configuration);
    } else {
      return Promise.reject(new Error('Configuration not found'));
    }
  }

  suscribeConfiguration(id: string): Observable<Configuration> {

    if (id === LOCAL_ID) {
      return from(import('../constants/configuration.config')).pipe(
        map(module => module.configuration),
        catchError(error => {
          console.error('Error loading configuration:', error);
          return throwError(() => error);
        })
      );
    } else {

    }

    return new Observable<Configuration>(subscriber => {
      subscriber.error(new Error('Configuration not found'));
      subscriber.complete();
    });
  }
}
