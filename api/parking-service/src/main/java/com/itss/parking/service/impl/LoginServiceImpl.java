package com.itss.parking.service.impl;

import java.security.Key;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.itss.parking.domain.Login;
import com.itss.parking.domain.request.LoginRequest;
import com.itss.parking.domain.request.CreateUserRequest;
import com.itss.parking.domain.result.LoginResult;
import com.itss.parking.repository.LoginRepository;
import com.itss.parking.service.ILoginService;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@Transactional(isolation = Isolation.READ_UNCOMMITTED)
public class LoginServiceImpl implements ILoginService{
	
	@Autowired
	private LoginRepository loginRepository;
	
	private static final String AES_INSTANCE = "AES";
	private static final byte[] keyValue = new byte[] { 'J', 'P', 'A', 'S', 'h', 'a', 'd', 'o', 'w', 'M', 'o', 's', 'e', 's',
			'P', 's', };

	@Override
	public LoginResult login(LoginRequest loginRequest) {
			
		Login loginFind = loginRepository.findByUserId(loginRequest.getUser());
		
		if(loginFind == null) {
			return setErrorRegisterUser("Usuário não existe"); 
		}
		
		String passEncrypt = encrypt(loginRequest.getPassword());
		
		if(!passEncrypt.equals(loginFind.getPassword())) {
			return setErrorRegisterUser("Usuário e senha não conferem"); 
		}
		
		return setResultSuccess(loginFind);
	}

	@Override
	public LoginResult createNewUser(CreateUserRequest registerUserRequest) {
		
		if(verifyPasswords(registerUserRequest)) {
			return setErrorRegisterUser("Senhas não conferem"); 
		}
		
		if(verifyUserExists(registerUserRequest)) {
			return setErrorRegisterUser("Usuário já existe");
		}
		
		Login resultRegister = saveNewUser(registerUserRequest);
		
		if(resultRegister == null) {
			return setErrorRegisterUser("Erro ao salvar novo usuário");
		}
		
		return setResultSuccess(resultRegister);
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public Login saveNewUser(CreateUserRequest registerUserRequest) {
		return loginRepository.save(Login.builder()
				.userName(registerUserRequest.getNewName())
				.userId(registerUserRequest.getNewUser())
				.password(encrypt(registerUserRequest.getNewPassword()))
				.build());
	}

	private boolean verifyPasswords(CreateUserRequest registerUserRequest) {
		return !registerUserRequest.getNewPassword().equals(registerUserRequest.getConfirmPassword());
	}

	private LoginResult setErrorRegisterUser(String error) {
		return LoginResult.builder().error(error).loginOk(Boolean.FALSE).build();
	}

	private Boolean verifyUserExists(CreateUserRequest registerUserRequest) {
		return loginRepository.findByUserId(registerUserRequest.getNewUser()) != null;
	}

	private LoginResult setResultSuccess(Login resultLogin) {
		return LoginResult.builder()
				.error(null)
				.loginOk(Boolean.TRUE)
				.user(resultLogin.getUserId())
				.name(resultLogin.getUserName())
				.build();
	}
	
	private String encrypt(String newPassword) {
		
		try {
			Key key = generateKey();
			Cipher c = Cipher.getInstance(AES_INSTANCE);
			c.init(Cipher.ENCRYPT_MODE, key);
			byte[] encVal = c.doFinal(newPassword.getBytes());
			return Base64.getEncoder().encodeToString(encVal);
		} catch (Exception e) {
			log.error(e.getMessage());
			throw new ServiceException("Erro ao encripitar senha");
		}
	}

	private Key generateKey() {
		return new SecretKeySpec(keyValue, AES_INSTANCE);
	}


}
