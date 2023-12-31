package com.joeun.aster.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    //SpringSecurity 5.5 이상
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{

        //폼 기반 로그인 비활성화합니다.
        http.formLogin((login)->login.disable());

        //HTTP 기본 인증 비활성화합니다.
        http.httpBasic((basic)-> basic.disable());

        //CSRF 공격 방어 기능 비활성화합니다.
        http.csrf((csrf)->csrf.disable());
        //세션 관리 정책 설정합니다.
        //세션 인증을 사용하지 않고, JWT를 사용하여 인증하기 때문에 세션이 불필요합니다.
        http.sessionManagement((management->management.sessionCreationPolicy(SessionCreationPolicy.STATELESS)));


        return http.build();


    }

}