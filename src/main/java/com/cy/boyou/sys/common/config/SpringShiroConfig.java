package com.cy.boyou.sys.common.config;

import java.util.LinkedHashMap;

import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class SpringShiroConfig {
      /**
       * 配置SecurityManager对象，此对象为shiro框架的核心。
       * @Bean注解描述的方法的返回值要交给spring容器管理。
       * 注意：SecurityManager包不要引错了
       */
	  @Bean //<bean id="" class="">
	  public SecurityManager securityManager() {
		  DefaultWebSecurityManager  sManager=
		  new DefaultWebSecurityManager();
		  return sManager;
	  }
	  /**
	   * 配置ShiroFilterFactoryBean对象，基于此对象创建过滤器工厂，
	   * 通过过滤器工厂创建过滤器(filter)，通过过滤器对用户请求进行过滤。
	   * @param securityManager
	   * @return
	   */
	  @Bean
	  public ShiroFilterFactoryBean shiroFilterFactory (
	  			 SecurityManager securityManager) {
	  		 ShiroFilterFactoryBean sfBean=
	  		 new ShiroFilterFactoryBean();
	  		 sfBean.setSecurityManager(securityManager);
	  		 sfBean.setLoginUrl("/doLoginUI/index");
	  		 //定义map指定请求过滤规则(哪些资源允许匿名访问,哪些必须认证访问)
	  		 LinkedHashMap<String,String> map=
	  				 new LinkedHashMap<>();
	  		 //静态资源允许匿名访问:"anon"
	  		 map.put("/bower_components/**","anon");
	  		 map.put("/dist/**","anon");
	  		 
	  		 //除了匿名访问的资源,其它都要认证("authc")后访问
	  		  map.put("/doPageUI/homePages","authc"); 
	  		  map.put("/doPageUI/add","authc"); 
	  		 sfBean.setFilterChainDefinitionMap(map);
	  		 return sfBean;
	  	 }

	  
}







