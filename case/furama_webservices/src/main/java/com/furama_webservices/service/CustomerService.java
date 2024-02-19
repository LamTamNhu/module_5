package com.furama_webservices.service;

import com.furama_webservices.model.Customer;
import com.furama_webservices.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private CustomerRepository repository;
    @Override
    public Page<Customer> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }
}
