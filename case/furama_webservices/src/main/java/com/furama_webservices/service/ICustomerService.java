package com.furama_webservices.service;

import com.furama_webservices.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface ICustomerService {
    Page<Customer> findAll(Pageable pageable);
}
