import { Injectable } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  UserCredential, signOut, sendPasswordResetEmail, sendEmailVerification,} from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, retry, catchError, switchMap, finalize, tap  } from 'rxjs/operators';
import { TokenService } from './token.service';
import { of } from 'rxjs';
//import { _throw } from 'rxjs/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  servicioResponse: string;

  boolError: boolean;

  response: {};

  constructor(
    //private af: AngularFireAuth,
    private auth: Auth,
    private http: HttpClient,
    private token: TokenService
  ) { }

  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  // Recuperar contraseña
  resetPassword(email): Promise<void> {
     return sendPasswordResetEmail(this.auth, email);
  }

  // Verificar correo
  verifyEmail(): Promise<void> {
     return sendEmailVerification(this.auth.currentUser);
   }
   // Verificar usuario
   isEmailVerified() {
    return this.auth.currentUser.emailVerified;
   }
  hasUser() {
    return authState(this.auth);
  }

  loginCoreEVAMED( username: string, password: string ) {

    return this.http.post<any>(
      'http://127.0.0.1:8000/api-profiles/login/',
      { username, password }
    ).pipe(
      tap((data: { token: string }) => {
        const token = data.token;
        this.token.saveToken(token);
      })
    );
  }
}
