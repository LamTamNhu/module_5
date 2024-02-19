package com.test_5_webapi.repository;

import com.test_5_webapi.model.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IRepo extends JpaRepository<Item, Long> {
        Page<Item>findAllByNameContaining(String name, Pageable pageable);
}

