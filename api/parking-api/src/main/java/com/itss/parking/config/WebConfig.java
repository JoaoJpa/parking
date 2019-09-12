package com.itss.parking.config;

import java.util.Arrays;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	public WebConfig() {
		super();
	}

	@Bean
	public FilterRegistrationBean<CorsFilter> corsFilter() {
		
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        org.springframework.web.cors.CorsConfiguration config = new org.springframework.web.cors.CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        Arrays.asList("POST", "GET", "PUT", "PATCH", "OPTIONS", "DELETE").forEach(method -> config.addAllowedMethod(method));
        Arrays.asList(
                "Origin", "X-Requested-With", "Content-Type", "Accept-Language", "If-Modified-Since"
        ).forEach(
            header -> config.addAllowedHeader(header));
        source.registerCorsConfiguration("/**", config);
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<CorsFilter>(new CorsFilter(source));
        bean.setOrder(0);
        return bean;
    }

}