package fr.univbrest.dosi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.univbrest.dosi.buisness.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService  service;
	
	
	
}
