package com.joeun.aster.constants;

//Security 및 JWT 관련 상수를 관리하는 클래스입니다.

// HTTP
//     header : {
//         Authorizetion : Bearer ${jwt}
//     }
public class SecurityConstants {

    //JWT 토큰을 담을 HTTP 요청 헤더 이름입니다.
    public static final String TOKEN_HEADER = "Authorization";


    //헤더의 접두사입니다.
    public static final String TOKEN_PREFIX = "Bearer ";

    //토큰 타입입니다.
    public static final String TOKEN_TYPE = "JWT";

}
