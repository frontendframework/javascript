import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//서버연동.. RxJs(비동기 프로그램 - 콜백의 지옥에서 벗어나자...)
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../user';

//service를 component에서 DI 개념으로 이용할수 있게 injector에게 등록..
@Injectable()
export class UserService {
    private userUrl='server/data.json'
    constructor(private http: Http){}

    getUser(): Observable<User[]>{
        return this.http.get(this.userUrl)
            .pipe(map((res:Response) => res.json()));
    }
}

//서버연동코드이다.. 서버 파일을 angular의 내장 경량 서버에서 테스트가 안되어서
//build 시킨후 vscode로 돌릴 생각이다..
//rxjs를 이용한 코드이다.. build 시키면 es5로 코드가 변형되는데 그곳에서 rxjs 
//호환성 문제가 발생한다..
//rxjs 호환성 문제를 해결해 주는 라이브러리 추가 설치하고 작업..
//>npm install rxjs-compat -save

//>ng build

//server 폴더를 dist/AngularTest에 복사해놓고 테스트..
//dist/AngularTest/index.html 의 <base href="./AngularTest"> 로 수정
