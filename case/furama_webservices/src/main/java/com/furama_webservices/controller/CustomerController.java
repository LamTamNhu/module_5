package com.furama_webservices.controller;

import com.furama_webservices.model.Customer;
import com.furama_webservices.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @GetMapping("/customers")
    public ResponseEntity<Page<Customer>> findAll(@PageableDefault(size = 3) Pageable pageable) {
        System.out.println("------hitted-----");
        Page<Customer> customers = customerService.findAll(pageable);
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }
}
