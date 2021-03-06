package fr.univbrest.dosi.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.univbrest.dosi.bean.Formation;
import fr.univbrest.dosi.buisness.FormationInterface;

@RestController
@RequestMapping(value = "/formations")
public class FormationController {

	private FormationInterface service;

	@Autowired
	public FormationController(FormationInterface formationService) {
		this.service = formationService;
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<Formation> getAllFormation() {
		return this.service.getAllFormations();
	}

	@RequestMapping(value = "/{codeFormation}", method = RequestMethod.GET)
	public Formation getByCodeFormation(
			@PathVariable("codeFormation") final String codeFormation) {
		return this.service.getFormationByCodeFormation(codeFormation);
	}

	@RequestMapping(value = "/delete/{codeFormation}", method = RequestMethod.DELETE)
	public void deleteFormation(
			@PathVariable String codeFormation) {
		 this.service.DeleteFormation(codeFormation);
				}
		

	@RequestMapping(value = "/ajouter", method = RequestMethod.POST)
	public void ajouterFormation(@RequestBody Formation F) {

		this.service.ajouterFormation(F);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public Formation updateFormation(@RequestBody Formation F) {

		return this.service.updateFormation(F);
	}
}
