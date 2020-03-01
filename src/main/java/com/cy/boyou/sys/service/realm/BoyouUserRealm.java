package com.cy.boyou.sys.service.realm;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authc.credential.CredentialsMatcher;
import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.cy.boyou.sys.dao.BoyouUserDao;
import com.cy.boyou.sys.entity.User;

@Service
public class BoyouUserRealm extends AuthorizingRealm {
	@Autowired
	private BoyouUserDao boyouUserDao;

	/**
	 * 设置凭证匹配器，通过此对象对登陆时输入的密码进行加密，
	 */
	@Override
	public void setCredentialsMatcher(CredentialsMatcher credentialsMatcher) {
		// 1.构建凭证匹配其对象
		HashedCredentialsMatcher cMatcher = new HashedCredentialsMatcher();
		// 2.设置加密算法
		cMatcher.setHashAlgorithmName("MD5");
		// 3.设置加密次数
		cMatcher.setHashIterations(1);
		super.setCredentialsMatcher(cMatcher);// 一定要将创建对象传入父类方法。
	}

	/** 此方法负责认证信息的获取和封装 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		// 1.获取用户名(用户页面输入)
		UsernamePasswordToken upToken = (UsernamePasswordToken) token;

		String username = upToken.getUsername();

		// 2.基于用户名查询用户信息

		User user = boyouUserDao.findUserByUserName(username);

		// 3.判定用户是否存在

		if (user == null)
			throw new UnknownAccountException();

		// 4.封装用户信息
		ByteSource credentialsSalt =
				ByteSource.Util.bytes(user.getUserSalt());

		SimpleAuthenticationInfo info =
				new SimpleAuthenticationInfo(
						user, // principal (身份)
						user.getUserPwd(), // hashedCredentials
						credentialsSalt, // credentialsSalt
						getName());// realName

		// 6.返回封装结果
		return info;// 返回值会传递给认证管理器(后续
		// 认证管理器会通过此信息完成认证操作)
	}

	/**
	 * 负责授权信息的获取和封装
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		return null;
	}

}
